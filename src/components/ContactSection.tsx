import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    environment: "Manufacturing & Robotics",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    try {
      const response = await fetch("https://formspree.io/f/xgogdopb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed.");
        // Still show success to user in this demo context, or handle error
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(true); // Fallback for demo
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>START YOUR DIGITAL TWIN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            Bring your physical world into intelligent{" "}
            <span className="text-[#3291B6]"> focus.</span>?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Request a personalized live spatial intelligence demonstration
            tailored to your facility floorplan and IoT architecture.
          </p>
        </div>

        {/* Neumorphic Form Container */}
        <div className="p-8 sm:p-12 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl neu-raised-light flex items-center justify-center text-[#3291B6] bg-[#F1E2E2]">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#101820] font-sans">
                Request Received!
              </h3>
              <p className="text-sm text-gray-700 max-w-md mx-auto font-normal">
                Thank you, <strong>{formData.fullName}</strong>. A Parallax Nest
                Solutions Architect will contact{" "}
                <strong>{formData.email}</strong> within 2 business hours with
                customized digital twin assets for{" "}
                <strong>{formData.company || "your facility"}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl neu-raised-light text-xs font-bold font-mono text-[#3291B6] cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
                    FULL NAME *
                  </label>
                  <div className="p-1 rounded-2xl neu-inset-light bg-[#e8d6d6]">
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-transparent border-none text-sm text-[#101820] placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
                    WORK EMAIL *
                  </label>
                  <div className="p-1 rounded-2xl neu-inset-light bg-[#e8d6d6]">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-transparent border-none text-sm text-[#101820] placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
                    COMPANY / ORGANIZATION
                  </label>
                  <div className="p-1 rounded-2xl neu-inset-light bg-[#e8d6d6]">
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-transparent border-none text-sm text-[#101820] placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Environment Type Select */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
                    PRIMARY ENVIRONMENT TYPE
                  </label>
                  <div className="p-1 rounded-2xl neu-inset-light bg-[#e8d6d6]">
                    <select
                      value={formData.environment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          environment: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-transparent border-none text-sm text-[#101820] focus:outline-none cursor-pointer"
                    >
                      <option value="Manufacturing & Robotics">
                        Manufacturing & Assembly Lines
                      </option>
                      <option value="Facilities & Real Estate">
                        Commercial Real Estate & Campus
                      </option>
                      <option value="Smart Infrastructure">
                        Smart Grid & Infrastructure
                      </option>
                      <option value="Construction & Engineering">
                        Construction Site & BIM
                      </option>
                      <option value="Industrial Operations">
                        Refinery & Heavy Industrial
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Environment Description */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
                  TELL US ABOUT YOUR ENVIRONMENT
                </label>
                <div className="p-1 rounded-2xl neu-inset-light bg-[#e8d6d6]">
                  <textarea
                    rows={4}
                    placeholder="Describe your physical square footage, asset count, current IoT protocol stacks, or key operational challenges..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-transparent border-none text-sm text-[#101820] placeholder-gray-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Raised Neumorphic Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-[#3291B6]" />
                  <span>NDA Protected • Zero Spam</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Turnstile siteKey="0x4AAAAAAEE48MfSyuMwxC94" />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl neu-raised-light text-xs font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all cursor-pointer flex items-center justify-center gap-3 shadow-xl"
                  >
                    <span>Request a Demo</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
