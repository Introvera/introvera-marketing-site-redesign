"use client";

import { useRef, useState, FormEvent } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("Sending...");

    const formData = new FormData(formRef.current);
    const data = {
      service_id: "service_6jybba9",
      template_id: "template_yaup53k",
      user_id: "2IuW0Sj0bTx8RGlan",
      template_params: {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent!");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div ref={ref} className="mx-auto py-16 px-6 sm:px-8 md:px-10 lg:px-16" id="contact">
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-[32px] lg:text-4xl font-bold text-center mb-14">
            <span>WILLING TO </span>
            <span className="gradient-text-line">COLLABORATE WITH US?</span>
          </h2>

          {/* Outer Container */}
          <div
            className="
              flex flex-col lg:flex-row
              gap-10
              max-w-[1114px] mx-auto
              rounded-[24px]
              border-[2px] border-[rgba(76,1,174,0.34)]
              bg-[linear-gradient(111deg,rgba(73,73,73,0.30)_0%,rgba(19,19,19,0.30)_60.23%,rgba(73,73,73,0.30)_100%)]
              px-[52px] py-[28px]
              items-stretch
            "
          >
            {/* LEFT SIDE - CONTACT DETAILS */}
            <div className="flex flex-col flex-1 gap-5 h-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#975EE1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 flex-shrink-0"
                >
                  <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                </svg>

                <a
                  href="mailto:teamintrovera@gmail.com"
                  className="text-gray-200 text-lg break-words sm:truncate w-full sm:w-auto"
                >
                  <p>teamintrovera@gmail.com</p>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#975EE1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" />
                </svg>

                <a href="tel:+94783640894" className="text-gray-200 text-lg">
                  <p>+94 78 364 0894</p>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-400 mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-gray-200 text-lg max-w-[80%]">
                  275/3, New Kandy Road, Biyagama.
                </p>
              </div>

              {/* Map */}
              <div className="mt-5 w-full rounded-[16px] p-[3px] bg-[linear-gradient(145deg,#320073,#350178)] flex-1">
                <div className="rounded-[14px] overflow-hidden h-[300px] sm:h-[380px] md:h-[460px]">
                  <iframe
                    title="Introvera Location"
                    src="https://www.google.com/maps?q=6.949028,79.991667&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* VERTICAL GRADIENT LINE */}
            <div className="hidden lg:block w-[2px] bg-gradient-to-b from-transparent via-[#6412CECC] to-transparent" />

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="flex flex-col flex-1 gap-9 h-full">
              <h3 className="text-xl font-semibold">Send us a message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full h-full">
                {/* Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base font-medium text-gray-200">
                    <p>Your Name</p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="
                      flex h-[64px] px-6 py-[10px] items-center gap-[10px] self-stretch
                      rounded-[16px] border border-[#975EE1]
                      bg-transparent text-white
                      placeholder:text-[#975EE1] placeholder:font-[400] placeholder:text-[16px]
                      placeholder:leading-[32px] placeholder:font-poppins
                      focus:ring-2 focus:ring-purple-600 outline-none
                    "
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="ext-base font-medium text-gray-200">
                    <p>Your Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="johndoe1999@gmail.com"
                    className="
                      flex h-[64px] px-6 py-[10px] items-center gap-[10px] self-stretch
                      rounded-[16px] border border-[#975EE1]
                      bg-transparent text-white
                      placeholder:text-[#975EE1] placeholder:font-[400] placeholder:text-[16px]
                      placeholder:leading-[32px] placeholder:font-poppins
                      focus:ring-2 focus:ring-purple-600 outline-none
                    "
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 w-full flex-1">
                  <label className="ext-base font-medium text-gray-200">
                    <p>Your Message</p>
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us how you would like to collaborate"
                    className="
                      flex h-[250px] px-6 py-4 items-start gap-[10px] self-stretch
                      rounded-[16px] border border-[#975EE1]
                      bg-transparent text-white
                      placeholder:text-[#975EE1] placeholder:font-[400] placeholder:text-[16px]
                      placeholder:leading-[32px] placeholder:font-poppins
                      focus:ring-2 focus:ring-purple-600 outline-none resize-none
                    "
                  />
                </div>

                <button
  type="submit"
  className="
    flex justify-center items-center gap-2
    h-[56px] py-[10px] px-[20px]
    rounded-full
    bg-gradient-to-r from-[#4C01AE] to-[#B38CFF]
    w-full
    flex-shrink-0
    font-semibold text-white
    hover:opacity-90 transition
  "
>
  Send Message
</button>

                {status && <p className="text-center mt-2 text-gray-300">{status}</p>}
              </form>
            </div>
          </div>
        </motion.div>
      ) : (
        <div style={{ minHeight: "600px" }} />
      )}
    </div>
  );
};

export default ContactUs;
