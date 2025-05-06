import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useStoreInfo } from "../context/SourceInfoContext";

const Admin = () => {
  const [formData, setFormData] = useState({
    token: "",
    phoneNumber: "",
    email: "",
    address: "",
    receiverEmail: "",
  });

  const { info, fetchInfo } = useStoreInfo();

  useEffect(() => {
    if (info)
      setFormData({
        ...formData,
        phoneNumber: info.phone,
        email: info.email,
        address: info.address,
        receiverEmail: info.receiverEmail,
      });
  }, [info]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.token) newErrors.token = "Token is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^[+()0-9\s-]{10,20}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid phone number.";

    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address.";

    if (!formData.address) newErrors.address = "Address is required.";

    if (!formData.receiverEmail) newErrors.receiverEmail = "Receiver email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.receiverEmail))
      newErrors.receiverEmail = "Enter a valid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://infinityedge.us/api/update-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: formData.token,
          phone: formData.phoneNumber,
          email: formData.email,
          address: formData.address,
          receiverEmail: formData.receiverEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error === "Invalid token") {
        toast.error(data.error || "Failed to update. Please try again.");
      } else {
        toast.success("Information updated successfully.");
        fetchInfo();
      }
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-inter container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">ADMIN</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
        {[
          { name: "token", label: "Token" },
          { name: "phoneNumber", label: "Phone Number" },
          { name: "email", label: "Email", type: "email" },
          { name: "address", label: "Address" },
          { name: "receiverEmail", label: "Receiver Email", type: "email" },
        ].map(({ name, label, type = "text" }) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700 mb-1" htmlFor={name}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-800 text-white rounded-[32px] p-2 w-full mt-4"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
