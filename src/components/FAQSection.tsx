import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/mockData";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101820] font-sans">
            Where Innovation Meets{" "}
            <span className="text-[#3291B6]"> Understanding</span>.
          </h2>

          <p className="mt-3 text-base text-gray-700 leading-relaxed font-normal">
            Everything you need to know about spatial intelligence, 3D digital
            twins, and enterprise deployment.
          </p>
        </div>

        {/* FAQ Neumorphic Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 transition-all cursor-pointer ${
                    isOpen
                      ? "neu-pressed-light bg-[#e5d0d0] text-[#3291B6]"
                      : "neu-raised-light neu-raised-light-hover bg-[#F1E2E2] text-[#101820]"
                  }`}
                >
                  <span className="text-base font-bold font-sans tracking-tight">
                    {faq.question}
                  </span>

                  <div className="w-8 h-8 rounded-xl neu-inset-light flex items-center justify-center shrink-0 text-[#3291B6]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Inset Answer */}
                {isOpen && (
                  <div className="p-6 neu-inset-light bg-[#e8d6d6] border-t border-gray-300/50 animate-in fade-in duration-200">
                    <p className="text-sm text-gray-800 leading-relaxed font-sans font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
