import React, { useState } from "react";
import { PRICING_PLANS } from "../data/mockData";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onRequestDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onRequestDemo,
}) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>TRANSPARENT ENTERPRISE PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            Built to grow with every{" "}
            <span className="text-[#3291B6]">environment you manage.</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Flexible pricing based on facility size, connected infrastructure,
            and simulation requirements.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-2 rounded-2xl neu-inset-light gap-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                !isAnnual
                  ? "neu-pressed-light text-[#101820] bg-[#e5d0d0]"
                  : "neu-raised-light text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? "neu-raised-light text-[#3291B6] bg-[#F1E2E2] border border-[#3291B6]/30 shadow-md"
                  : "neu-raised-light text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#3291B6] text-white text-[10px] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            // Professional is featured light card with raised teal border & lavender highlight
            if (plan.featured) {
              return (
                <div
                  key={plan.id}
                  className="p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] border-2 border-[#3291B6] shadow-2xl relative flex flex-col justify-between scale-105 z-10"
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#3291B6] text-white text-[11px] font-mono font-bold tracking-wider shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-extrabold text-[#101820] font-sans">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-300">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold font-mono text-[#3291B6]">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-gray-600">
                          / month
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#BB8ED0] block mt-1 font-bold">
                        {isAnnual ? "Billed annually" : "Billed monthly"}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-mono font-bold text-gray-600 uppercase block mb-2">
                        INCLUDED FEATURES:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-gray-800"
                        >
                          <div className="w-4 h-4 rounded-full neu-inset-light flex items-center justify-center text-[#3291B6] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const url = isAnnual ? plan.linkAnnual : plan.linkMonthly;
                      if (url) {
                        window.open(url, "_blank");
                      } else {
                        onRequestDemo();
                      }
                    }}
                    className="w-full py-4 rounded-2xl neu-raised-light text-xs font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            }

            // Enterprise plan is Dark Neumorphic
            if (plan.id === "enterprise") {
              return (
                <div
                  key={plan.id}
                  className="p-8 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#BB8ED0]/40 text-white shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-2xl font-extrabold font-sans text-white">
                          {plan.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#BB8ED0]/20 text-[#BB8ED0] text-[10px] font-mono font-bold">
                          DEFENSE & INDUSTRIAL
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{plan.tagline}</p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-800">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold font-mono text-[#BB8ED0]">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          / month
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 block mt-1">
                        {isAnnual ? "Billed annually" : "Billed monthly"}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase block mb-2">
                        ENTERPRISE CAPABILITIES:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-gray-200"
                        >
                          <div className="w-4 h-4 rounded-full neu-inset-dark flex items-center justify-center text-[#BB8ED0] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 rounded-2xl neu-raised-dark text-xs font-bold uppercase tracking-wider text-[#BB8ED0] hover:text-white bg-[#0d131a] hover:bg-[#BB8ED0] border border-[#BB8ED0]/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            }

            // Starter plan standard light
            return (
              <div
                key={plan.id}
                className="p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold text-[#101820] font-sans">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">{plan.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-300">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-mono text-[#101820]">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-gray-600">
                        / month
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 block mt-1">
                      {isAnnual ? "Billed annually" : "Billed monthly"}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-bold text-gray-600 uppercase block mb-2">
                      CORE FEATURES:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-gray-700"
                      >
                        <div className="w-4 h-4 rounded-full neu-inset-light flex items-center justify-center text-[#3291B6] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const url = isAnnual ? plan.linkAnnual : plan.linkMonthly;
                    if (url) {
                      window.open(url, "_blank");
                    } else {
                      onRequestDemo();
                    }
                  }}
                  className="w-full py-4 rounded-2xl neu-raised-light text-xs font-bold uppercase tracking-wider text-[#3291B6] hover:text-[#101820] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
