import express from "express";
import fs from "fs/promises";
import cors from "cors";
import multer from "multer";
import { Resend } from "resend";

const app = express();
const port = 5000;
const apiRouter = express.Router();

app.use(cors());
app.use(express.json());

const token = "BACKEND_ACCESS_TOKEN";

const resend = new Resend("RESEND_API_KEY");
const upload = multer({ dest: "uploads/" });

const getReceiverEmail = async () => {
  try {
    const data = await fs.readFile("./data.json", "utf-8");
    return JSON.parse(data).receiverEmail;
  } catch (error) {
    console.error("Error reading data.json:", error);
    throw new Error("Failed to load receiver email.");
  }
};

apiRouter.post("/send-email", upload.array("attachments"), async (req, res) => {
  const { firstName, lastName, email, phoneNumber, query } = req.body;
  const attachments = req.files;

  if (!firstName || !lastName || !email || !phoneNumber || !query) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Get the receiver email from the JSON file
    const receiverEmail = await getReceiverEmail();

    // Prepare attachments for Resend
    const resendAttachments = await Promise.all(
      attachments.map(async (file) => {
        const fileContent = await fs.readFile(file.path);
        return {
          filename: file.originalname,
          content: fileContent.toString("base64"),
          encoding: "base64",
        };
      })
    );

    // Prepare email data
    const emailData = {
      from: `onboarding@resend.dev`,
      to: receiverEmail,
      subject: `New Query from ${firstName} ${lastName}`,
      text: `You have a new query:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nQuery: ${query}`,
      attachments: resendAttachments,
    };
    // Send the email using Resend
    console.log("Resend Email Response:", await resend.emails.send(emailData));

    if (emailData.error)
      return res.status(500).json({
        error:
          "Something is wrong from our side, we will try to fix it as soon as possible!",
      });

    // Clean up uploaded files after sending the email
    for (const file of attachments) {
      await fs.unlink(file.path);
    }

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

apiRouter.get("/get-info", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: "Failed to read data" + err });
  }
});

apiRouter.post("/update-info", async (req, res) => {
  const { email, phone, address, receiverEmail, token: reqToken } = req.body;
  if (reqToken !== token)
    return res.status(403).json({ error: "Invalid token" });
  if (!email || !phone || !address || !receiverEmail)
    return res.status(403).json({ error: "All the fields are required!" });
  const updatedData = { email, phone, address, receiverEmail };
  try {
    await fs.writeFile("data.json", JSON.stringify(updatedData, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to update data" + err });
  }
});

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
