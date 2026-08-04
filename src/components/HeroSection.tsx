import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Search,
  LayoutGrid,
  MessageSquare,
  Bell,
  Settings,
  Moon,
  Sun,
  MapPin,
  Building2,
  CreditCard,
  ArrowUpRight,
  ArrowUpLeft,
  Heart,
  Bookmark,
  Share2,
  ChevronDown,
  Layers,
  Briefcase,
  Info,
  Cpu,
  Star,
  BookOpen,
  Aperture,
} from "lucide-react";

interface HeroSectionProps {
  onRequestDemo?: () => void;
  onExplorePlatform?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestDemo,
  onExplorePlatform,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "simulation">(
    "overview",
  );
  const [selectedFacility] = useState("GigaFactory 1");
  const [selectedMode] = useState("Predictive AI");
  const [dataStream] = useState("2.4B/sec");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(4400);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Load hero villa image for Canvas rendering
  useEffect(() => {
    const img = new Image();
    img.src = "/Parallex Graphics/hero.svg";
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  // Canvas drawing & animation loop: Renders Top Organic Curve, Hero Background, AND Bottom-Right Glass Card 100% matching reference image
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Ambient floating light motes
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 1400,
      y: Math.random() * 900,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.45 + 0.25,
      speedY: Math.random() * 0.25 + 0.08,
      speedX: (Math.random() - 0.5) * 0.15,
    }));

    const render = () => {
      time += 0.01;
      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Hero Outer Frame Corner Radius
      const r = width < 640 ? 24 : 44;

      // Responsive Top Curve parameters
      const isMobile = width < 768;
      const isDesktop = width >= 1024;

      const leftPillW = isMobile ? 120 : isDesktop ? 185 : 140;
      const rightPillW = isMobile ? 120 : isDesktop ? 185 : 140;
      const dipDepth = isMobile ? 0 : 64; // Concave top curve dip depth under filter bar
      const curveSpan = 52; // Smooth Bezier horizontal transition length

      // Define clipped path for the Hero Canvas Frame
      ctx.beginPath();
      ctx.moveTo(r, 0);

      if (dipDepth > 0) {
        // Top-left line under "Buy" button area
        ctx.lineTo(leftPillW, 0);

        // Smooth Bezier curve swoop DOWN into the center filter section
        ctx.bezierCurveTo(
          leftPillW + curveSpan * 0.45,
          0,
          leftPillW + curveSpan * 0.55,
          dipDepth,
          leftPillW + curveSpan,
          dipDepth,
        );

        // Center horizontal line underneath filter controls
        ctx.lineTo(width - rightPillW - curveSpan, dipDepth);

        // Smooth Bezier curve swoop UP to "Rent" button area
        ctx.bezierCurveTo(
          width - rightPillW - curveSpan * 0.55,
          dipDepth,
          width - rightPillW - curveSpan * 0.45,
          0,
          width - rightPillW,
          0,
        );

        // Top-right line under "Rent" button area
        ctx.lineTo(width - r, 0);
      } else {
        ctx.lineTo(width - r, 0);
      }

      // Top-Right Corner
      ctx.arcTo(width, 0, width, r, r);
      // Right Side
      ctx.lineTo(width, height - r);
      // Bottom-Right Corner
      ctx.arcTo(width, height, width - r, height, r);
      // Bottom Side
      ctx.lineTo(r, height);
      // Bottom-Left Corner
      ctx.arcTo(0, height, 0, height - r, r);
      // Left Side
      ctx.lineTo(0, r);
      // Top-Left Corner
      ctx.arcTo(0, 0, r, 0, r);
      ctx.closePath();

      ctx.save();
      ctx.clip();

      // 1. Draw Hero Villa Image onto canvas with cover scaling
      if (imageRef.current && imageLoaded) {
        const img = imageRef.current;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;
        let drawW, drawH, drawX, drawY;

        if (canvasRatio > imgRatio) {
          drawW = width;
          drawH = width / imgRatio;
          drawX = 0;
          drawY = (height - drawH) / 2;
        } else {
          drawH = height;
          drawW = height * imgRatio;
          drawX = (width - drawW) / 2;
          drawY = 0;
        }

        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, "#101524");
        bgGrad.addColorStop(1, "#1b2438");
        ctx.fillStyle = bgGrad;
        ctx.fill();
      }

      // 2. Subtle ambient top overlay
      const topGradient = ctx.createLinearGradient(0, 0, 0, height * 0.3);
      topGradient.addColorStop(0, "rgba(0, 0, 0, 0.12)");
      topGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = topGradient;
      ctx.fillRect(0, 0, width, height * 0.3);

      // 3. Floating particle illumination on Canvas
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0 || p.x > width) p.speedX *= -1;
      });

      // 4. DRAW BOTTOM-RIGHT GLASS CARD 100% MATCHING REFERENCE IMAGE GEOMETRY ON CANVAS
      if (!isMobile && width >= 768) {
        const isTablet = width < 1280;
        const cardW = isTablet ? 360 : 440;
        const cardH = isTablet ? 300 : 340;
        const cardMarginRight = isTablet ? 32 : 40;
        const cardMarginBottom = 24;

        const cX = width - cardW - cardMarginRight;
        const cY = height - cardH - cardMarginBottom;

        ctx.save();

        // Card Shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.16)";
        ctx.shadowBlur = 30;
        ctx.shadowOffsetY = 10;

        // Path matching reference image 1:1:
        // Top-left at cX, straight left edge down to y=190 (below description), smoothly curves inward to right of navy badge, and down to bottom edge at x=180
        ctx.beginPath();
        ctx.moveTo(cX + 40, cY);
        ctx.lineTo(cX + cardW - 40, cY);
        ctx.arcTo(cX + cardW, cY, cX + cardW, cY + 40, 40);
        ctx.lineTo(cX + cardW, cY + cardH - 40);
        ctx.arcTo(cX + cardW, cY + cardH, cX + cardW - 40, cY + cardH, 40);
        ctx.lineTo(cX + 180, cY + cardH);

        // Smooth Bezier Notch curve wrapping snugly around the navy badge circle
        // Badge center: (cX + 75, cY + cardH - 55), radius: 50
        // Notch hugs the badge with ~8px clearance
        ctx.bezierCurveTo(
          cX + 155,
          cY + cardH,
          cX + 140,
          cY + cardH - 25,
          cX + 135,
          cY + cardH - 55,
        );
        ctx.bezierCurveTo(
          cX + 135,
          cY + cardH - 90,
          cX + 115,
          cY + cardH - 115,
          cX + 75,
          cY + cardH - 115,
        );
        // Smooth horizontal exit to the left edge, removing the hanging piece
        ctx.bezierCurveTo(
          cX + 35,
          cY + cardH - 115,
          cX,
          cY + cardH - 115,
          cX,
          cY + cardH - 145,
        );

        // Straight vertical left edge up to top-left corner
        ctx.lineTo(cX, cY + 40);
        ctx.arcTo(cX, cY, cX + 40, cY, 40);
        ctx.closePath();

        // Neumorphic Dual Shadow Fill on Canvas
        ctx.fillStyle = "#F1E2E2";

        // 1. Dark bottom-right shadow
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 8;
        ctx.shadowOffsetY = 8;
        ctx.fill();
        ctx.restore();

        // 2. Light top-left shadow
        ctx.save();
        ctx.shadowColor = "rgba(255, 255, 255, 0.15)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = -8;
        ctx.shadowOffsetY = -8;
        ctx.fill();
        ctx.restore();

        // Neumorphic 1px Border
        ctx.shadowColor = "transparent";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }

      ctx.restore(); // Restore clip
      ctx.restore(); // Restore dpr scale

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageLoaded]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f1e2e2] to-[#101820] py-4 sm:py-6 px-3 sm:px-6 font-sans overflow-hidden flex flex-col items-center justify-center">
      {/* Main Outer Container Window */}
      <div className="w-full max-w-[1440px] h-[92vh] min-h-[750px] relative z-10 flex flex-col rounded-[36px] sm:rounded-[44px] overflow-hidden neu-raised-light bg-[#F1E2E2]">
        {/* Canvas Component for Dynamic Top Curve, Clipped Hero Background & Canvas Glass Card */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-0"
        />

        {/* 01. Top Organic Curved Navigation & Filter Header */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 pt-3.5 pointer-events-auto">
          {/* Left Pill: Logo */}
          <a href="#" className="flex items-center pl-2 pr-6 h-[48px]">
            <img
              src="/Parallex Graphics/logoo.svg"
              alt="Parallax Nest Logo"
              className="h-8 md:h-10 object-contain drop-shadow-sm -translate-x-8 md:-translate-x-16 lg:-translate-x-20"
            />
          </a>

          {/* Center Filter Controls (Resting neatly in the top concave curve cutout) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-12 pt-0.5 px-6 py-2 rounded-full neu-inset-light">
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <MapPin className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-medium mb-0.5 tracking-wide">
                  Facility
                </span>
                <div className="flex items-center gap-1 font-bold text-xs text-[#181C28]">
                  <span>{selectedFacility}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer group">
              <Building2 className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-medium mb-0.5 tracking-wide">
                  Mode
                </span>
                <div className="flex items-center gap-1 font-bold text-xs text-[#181C28]">
                  <span>{selectedMode}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 cursor-pointer group">
              <CreditCard className="w-4 h-4 text-gray-500 group-hover:text-gray-800 transition-colors" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-medium mb-0.5 tracking-wide">
                  Data Stream
                </span>
                <div className="flex items-center gap-1 font-bold text-xs text-[#181C28]">
                  <span>{dataStream}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pill: Parallax TwinOS Button */}
          <a
            href="/product"
            className="bg-[#F1E2E2] text-[#181C28] px-4 py-2 rounded-full font-semibold text-[13px] flex items-center gap-3 transition-all translate-x-3 neu-raised-light neu-raised-light-hover"
          >
            <span>Parallax TwinOS</span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center neu-raised-light text-[#3B82F6]"
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </a>
        </div>

        {/* 02. Left Vertical Floating Sidebar */}
        <div 
          className="hidden lg:flex flex-col items-center justify-center absolute top-[50%] -translate-y-1/2 left-6 z-30 w-[58px] bg-[#F1E2E2] rounded-full py-6 min-h-[420px] border border-white/40 transition-all"
          style={{ boxShadow: '8px 8px 18px rgba(0,0,0,0.4), -8px -8px 18px rgba(255,255,255,0.15)' }}
        >
          <div className="flex flex-col items-center gap-6 w-full">
            {[
              {
                name: "Platform",
                href: "#platform",
                icon: <Layers className="w-[18px] h-[18px]" />,
              },
              {
                name: "Solutions",
                href: "#solutions",
                icon: <Briefcase className="w-[18px] h-[18px]" />,
              },
              {
                name: "About",
                href: "#about",
                icon: <Info className="w-[18px] h-[18px]" />,
              },
              {
                name: "Technology",
                href: "#technology",
                icon: <Cpu className="w-[18px] h-[18px]" />,
              },
              {
                name: "Pricing",
                href: "#pricing",
                icon: <CreditCard className="w-[18px] h-[18px]" />,
              },
              {
                name: "Testimonials",
                href: "#testimonials",
                icon: <Star className="w-[18px] h-[18px]" />,
              },
              {
                name: "Resources",
                href: "#faq",
                icon: <BookOpen className="w-[18px] h-[18px]" />,
              },
            ].map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                title={link.name}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  idx === 0
                    ? "neu-inset-light text-[#3291B6]"
                    : "text-gray-500 hover:text-[#181C28] neu-raised-light neu-raised-light-hover"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute top-[17%] w-full flex justify-center z-20 pointer-events-none px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/95 leading-[1.15] text-center drop-shadow-md tracking-tight font-sans max-w-3xl mx-auto">
            Transform Your Physical Environments Into Intelligent{" "}
            <span className="text-[#3291B6]">Digital Experiences</span>
          </h1>
        </div>

        {/* 04. Hero Subtitle Text */}
        <div className="absolute top-[49%] left-8 md:left-8 xl:left-[108px] w-full md:max-w-[320px] xl:max-w-[380px] z-20 pointer-events-none hidden md:block">
          <p className="text-[14px] xl:text-[15px] text-white/90 leading-[1.7] drop-shadow-md font-light"></p>
        </div>

        {/* 05. Bottom Floating Action Cards */}
        <div className="absolute bottom-6 left-6 md:left-8 xl:left-[108px] right-6 md:right-8 xl:right-10 z-20 flex flex-col md:flex-row items-end justify-between gap-4 xl:gap-6 pointer-events-auto">
          {/* Bottom-Left White Card: Find The Perfect Place */}
          <div 
            className="bg-[#F1E2E2] rounded-[24px] xl:rounded-[32px] p-5 xl:p-7 w-full md:w-[280px] xl:w-[360px] flex flex-col justify-between relative text-[#181C28] border border-white/40 transition-all"
            style={{ boxShadow: '8px 8px 18px rgba(0,0,0,0.4), -8px -8px 18px rgba(255,255,255,0.15)' }}
          >
            <h3 className="text-[17px] font-bold mb-2 tracking-tight">
              Active Simulations
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-6 w-[95%]">
              Monitor real-time spatial data streams and predictive AI models
              running across your global facilities. Start optimizing your
              physical operations today.
            </p>

            <div className="flex items-center gap-4">
              <div>
                <div className="text-3xl font-extrabold leading-none tracking-tight">
                  250M+
                </div>
                <div className="text-[10px] text-gray-400 font-medium mt-1">
                  Sensors Active
                </div>
              </div>

              <div className="flex items-center -space-x-2.5 ml-auto">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=120&q=80"
                  alt="Property 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80"
                  alt="Property 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=120&q=80"
                  alt="Property 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              </div>

              <button
                onClick={onExplorePlatform}
                className="w-9 h-9 rounded-full neu-raised-light neu-raised-light-hover bg-[#F1E2E2] text-[#181C28] flex items-center justify-center transition-all shrink-0"
              >
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* 06. Interactive Text & Controls Overlay Aligned 100% with Reference Image */}
        <div className="hidden md:flex absolute bottom-6 right-6 md:right-8 xl:right-10 z-30 w-[440px] md:w-[360px] xl:w-[440px] h-[340px] md:h-[300px] xl:h-[340px] pointer-events-auto p-5 xl:p-7 flex-col justify-between text-[#161B26]">
          {/* Navy Badge with Lucide Icon */}
          <div className="absolute left-[25px] bottom-[5px] w-[100px] h-[100px] rounded-full neu-inset-light bg-[#F1E2E2] flex items-center justify-center pointer-events-none">
            <Aperture
              className="w-12 h-12 text-[#3291B6] animate-[spin_8s_linear_infinite]"
              strokeWidth={1.5}
            />
          </div>

          {/* Top Header: Title, Location & Arrow Button */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[21px] font-bold text-[#161B26] tracking-tight mb-1">
                GigaFactory Alpha
              </h3>
              <div className="flex items-center gap-1.5 text-[12px] text-[#50596B] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#50596B]" />
                <span>Nevada Operations Center</span>
              </div>
            </div>

            <button
              onClick={onRequestDemo}
              className="w-13 h-13 rounded-full bg-[#F1E2E2] neu-raised-light neu-raised-light-hover text-[#161B26] flex items-center justify-center shrink-0"
            >
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Description Paragraph */}
          <p className="text-[12px] text-[#404859] leading-[1.65] font-normal my-1 pr-2">
            This digital twin seamlessly integrates thousands of IoT sensors,
            offering a real-time 3D simulation of assembly lines. Predictive AI
            optimizes production throughput dynamically.
          </p>

          {/* Specs Section (Right-aligned over frosted glass) */}
          <div className="flex flex-col items-end space-y-1.5 text-[12px] font-medium text-[#404859] pr-4 my-1">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
                2.4M sq ft
              </span>
              <span className="text-[#A0A7B5]">•</span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
                15K sensors
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                98.4% Eff.
              </span>
              <span className="text-[#A0A7B5]">•</span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                12ms Latency
              </span>
            </div>
          </div>

          {/* Bottom Row: 3 Action Pill Buttons (Right-aligned) */}
          <div className="flex items-end justify-between pt-1">
            {/* Left spacer for Canvas Navy Badge */}
            <div className="w-[140px]" />

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-3.5">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={toggleLike}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[#161B26] transition-all bg-[#F1E2E2] ${isLiked ? "neu-pressed-light" : "neu-raised-light neu-raised-light-hover"}`}
                >
                  <Heart
                    className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-[#161B26]"}`}
                  />
                </button>
                <span className="text-[11px] font-semibold text-[#50596B]">
                  {(likeCount / 1000).toFixed(1)}K
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[#161B26] transition-all bg-[#F1E2E2] ${isSaved ? "neu-pressed-light" : "neu-raised-light neu-raised-light-hover"}`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${isSaved ? "fill-[#161B26] text-[#161B26]" : "text-[#161B26]"}`}
                  />
                </button>
                <span className="text-[11px] font-semibold text-[#50596B]">
                  157
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button className="w-12 h-12 rounded-full bg-[#F1E2E2] neu-raised-light neu-raised-light-hover flex items-center justify-center text-[#161B26] transition-all">
                  <Share2 className="w-4 h-4 text-[#161B26]" />
                </button>
                <span className="text-[11px] font-semibold text-transparent select-none">
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
