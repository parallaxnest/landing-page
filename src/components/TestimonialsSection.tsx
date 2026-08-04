import React, { useState } from "react";
import { TESTIMONIALS } from "../data/mockData";
import { TestimonialItem } from "../types";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const industries = [
    "All",
    "Manufacturing",
    "Facilities",
    "Smart Infrastructure",
    "Industrial",
    "Logistics",
  ];

  const filteredTestimonials =
    selectedIndustry === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.industry === selectedIndustry);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length,
    );
  };

  const activeTestimonial =
    filteredTestimonials[currentIndex] || filteredTestimonials[0];

  const getAccentBorder = (color: TestimonialItem["accentColor"]) => {
    switch (color) {
      case "teal":
        return "border-l-4 border-[#3291B6] neu-glow-teal";
      case "lavender":
        return "border-l-4 border-[#BB8ED0] neu-glow-lavender";
      case "coral":
        return "border-l-4 border-[#E0A8A8] neu-glow-coral";
      default:
        return "border-l-4 border-[#3291B6] neu-glow-teal";
    }
  };

  const getBadgeStyle = (color: TestimonialItem["accentColor"]) => {
    switch (color) {
      case "teal":
        return "bg-[#3291B6]/15 text-[#3291B6] border-[#3291B6]/30";
      case "lavender":
        return "bg-[#BB8ED0]/15 text-[#BB8ED0] border-[#BB8ED0]/30";
      case "coral":
        return "bg-[#E0A8A8]/15 text-[#E0A8A8] border-[#E0A8A8]/30";
      default:
        return "bg-[#3291B6]/15 text-[#3291B6] border-[#3291B6]/30";
    }
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-white relative overflow-hidden"
    >
      {/* Background Spatial Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#3291B6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-dark text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <Quote className="w-3.5 h-3.5 text-[#3291B6]" />
            <span>ENTERPRISE TESTIMONIALS & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">
            Customer Experiences <span className="text-[#3291B6]"> With </span>{" "}
            Spatial Intelligence.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            See how global manufacturing leaders, facility operators, and grid
            managers transform live data into predictive physical intelligence
            with Parallax Nest.
          </p>
        </div>

        {/* Industry Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {industries.map((ind) => {
            const isActive = selectedIndustry === ind;
            return (
              <button
                key={ind}
                onClick={() => {
                  setSelectedIndustry(ind);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider font-mono uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "neu-pressed-dark bg-[#3291B6] text-white shadow-lg border border-[#3291B6]/50"
                    : "neu-raised-dark bg-[#141f2a] text-gray-400 hover:text-white hover:bg-[#1c2b3a]"
                }`}
              >
                {ind}
              </button>
            );
          })}
        </div>

        {/* Featured Testimonial Showcase Card */}
        {activeTestimonial && (
          <div className="max-w-4xl mx-auto mb-16">
            <div
              className={`neu-raised-dark bg-[#141f2a] p-8 sm:p-12 rounded-3xl relative transition-all duration-300 ${getAccentBorder(
                activeTestimonial.accentColor,
              )}`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-gray-800 pb-6">
                {/* 5-Star Rating & Industry Chip */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400 neu-inset-dark px-3 py-1 rounded-full">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getBadgeStyle(
                      activeTestimonial.accentColor,
                    )}`}
                  >
                    {activeTestimonial.industry}
                  </span>
                </div>

                {/* Verified ROI Metric Highlight */}
                <div className="flex items-center gap-3 neu-inset-dark px-4 py-2 rounded-2xl bg-[#0d131a]">
                  <TrendingUp className="w-5 h-5 text-[#3291B6]" />
                  <div>
                    <span className="text-lg font-black font-mono text-white tracking-tight">
                      {activeTestimonial.metric}
                    </span>
                    <span className="text-xs text-gray-400 block font-sans -mt-1">
                      {activeTestimonial.metricLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200 leading-relaxed font-sans mb-8 italic">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Author Info & Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-gray-800/80">
                {/* Author Avatar & Title */}
                <div className="flex items-center gap-4">
                  {activeTestimonial.avatarUrl ? (
                    <img src={activeTestimonial.avatarUrl} alt={activeTestimonial.author} className="w-12 h-12 rounded-2xl border border-[#3291B6]/30 object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-2xl neu-inset-dark bg-[#0d131a] flex items-center justify-center text-[#3291B6] font-mono font-bold text-base border border-[#3291B6]/30">
                      {activeTestimonial.avatarInitials}
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-bold text-white font-sans tracking-tight">
                      {activeTestimonial.author}
                    </h4>
                    <p className="text-xs text-[#3291B6] font-mono font-semibold">
                      {activeTestimonial.role}
                    </p>
                    <p className="text-xs text-gray-400 font-sans flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3 h-3 text-gray-500" />
                      <span>{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                {filteredTestimonials.length > 1 && (
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-xl neu-raised-dark bg-[#141f2a] hover:bg-[#3291B6] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-gray-700/50"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono text-gray-400 px-1">
                      {currentIndex + 1} / {filteredTestimonials.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-xl neu-raised-dark bg-[#141f2a] hover:bg-[#3291B6] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-gray-700/50"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Grid of All Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`neu-raised-dark neu-raised-dark-hover bg-[#141f2a] p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                currentIndex === idx
                  ? "border-[#3291B6] shadow-[0_0_15px_rgba(50,145,182,0.25)]"
                  : "border-gray-800/80 hover:border-gray-700"
              }`}
            >
              <div>
                {/* Header Rating & Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#3291B6] bg-[#3291B6]/10 px-2.5 py-0.5 rounded-full border border-[#3291B6]/20">
                    {item.metric}
                  </span>
                </div>

                <p className="text-sm text-gray-300 font-normal leading-relaxed line-clamp-4 italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60">
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={item.author} className="w-9 h-9 rounded-xl shrink-0 object-cover" />
                ) : (
                  <div className="w-9 h-9 rounded-xl neu-inset-dark bg-[#0d131a] flex items-center justify-center text-[#3291B6] font-mono font-bold text-xs shrink-0">
                    {item.avatarInitials}
                  </div>
                )}
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-white truncate">
                    {item.author}
                  </h5>
                  <p className="text-[11px] text-gray-400 truncate">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Trust Highlights Banner */}
        <div className="neu-inset-dark bg-[#0d131a] rounded-2xl p-6 sm:p-8 border border-gray-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#3291B6] mb-1">
                <Building2 className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  50+
                </span>
              </div>
              <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                Enterprise Sites
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#BB8ED0] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  $45M+
                </span>
              </div>
              <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                Cost Savings Saved
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#E0A8A8] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  99.8%
                </span>
              </div>
              <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                Client Retention
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#3291B6] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  &lt; 18ms
                </span>
              </div>
              <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                Real-Time Twin Sync
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
