import { useStoreInfo } from "../context/SourceInfoContext";

const TermsPrivacy = () => {
    const { info } = useStoreInfo();
  
  return (
    <div className="font-inter sm:min-h-screen bg-zinc-100 px-[16px] sm:px-[40px] lg:px-[80px] sm:py-[80px]">
      <main className="flex-grow w-full max-w-[840px] mx-auto rounded-[16px] gap-[20px] sm:gap-[40px]">
        <div className="max-w-3xl w-full rounded-lg p-4 sm:p-8 text-left">
          <header className="mb-6 sm:mb-8">
            <section>
              <h2 className="text-[24px] sm:text-[40px] font-bold text-black-600 mt-10 sm:mb-0">
                Terms and Conditions
              </h2>
              <p className="mt-4 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
                Welcome to <strong>InfinityEdge.us</strong>. By accessing or using our website and
                services, you agree to these Terms and Conditions (&quot;Terms&quot;). Please read them
                carefully, as they govern your use of our platform and services.
              </p>
            </section>
          </header>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Acceptance of Terms
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              By accessing our website or utilizing our services, you acknowledge that you have
              read, understood, and agreed to these Terms. If you do not agree with these Terms, you
              must discontinue use of our website and services immediately.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Use of Services
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              You agree to use our services only for lawful purposes and in compliance with all
              applicable laws and regulations. You are responsible for providing accurate and
              complete information during registration or any other interaction with our platform.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">Payment Terms</h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              Our services may include payment obligations. All payments must be made as outlined in
              the specific agreement governing the service you are using. Late payments may result
              in additional fees or suspension of services.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Consent to Communication
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              By providing your phone number, email address, or other contact details, you consent
              to receiving communications, including SMS text messages and emails, related to our
              services. Message and data rates may apply. You may opt-out of SMS messages at any
              time by replying “STOP.” For assistance, reply “HELP.”
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Intellectual Property
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              All content on this website, including text, images, and designs, is the property of
              InfinityEdge LLC. Unauthorized use, reproduction, or distribution of this content is
              strictly prohibited.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Limitation of Liability
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              We are not liable for any direct, indirect, incidental, or consequential damages
              resulting from the use or inability to use our services. This includes but is not
              limited to errors, omissions, interruptions, or delays in service.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Changes to Terms
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              We reserve the right to update these Terms at any time without prior notice. Any
              changes will be effective immediately upon posting. Continued use of our website or
              services constitutes your acceptance of the revised Terms.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">Governing Law</h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              These Terms are governed by and construed in accordance with the laws of [Your
              Jurisdiction], without regard to its conflict of law principles.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black-600 mt-6">
              Contact Information
            </h3>
            <p className="mt-2 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              For questions or concerns about these Terms, please contact us at
             <a href={`mailto:${info?.email}`} className="text-blue-600 underline ml-1">{info?.email || "loading..."}</a>{" "}
              .
            </p>

            <p className="mt-4 text-sm sm:text-[20px] text-gray-700 sm:leading-snug">
              <em>Last Updated: January 3, 2025</em>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsPrivacy;
