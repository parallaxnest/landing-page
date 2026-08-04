import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDollarSign,
  Database,
  Gauge,
  LockKeyhole,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { FooterSection } from "./FooterSection";

const LIVE_PRODUCT_URL = "https://app.parallaxnest.com";

const outcomes = [
  {
    icon: MessageSquareText,
    title: "Ask your business, not your database",
    text: "Nexvanta turns everyday questions into clear answers, so teams can explore performance without waiting on a specialist or learning a new query language.",
    accent: "#3291B6",
  },
  {
    icon: CircleDollarSign,
    title: "Price with more confidence",
    text: "Model pricing decisions against the signals that actually move your business. See the likely impact before a new rule reaches customers.",
    accent: "#BB8ED0",
  },
  {
    icon: Gauge,
    title: "Move from signal to decision",
    text: "A live operating view brings revenue, usage, and performance signals into one calm workspace built for action, not dashboard theatre.",
    accent: "#E0A8A8",
  },
];

const workflow = [
  ["01", "Ask", "Start with a plain-language question about revenue, customers, usage, or performance."],
  ["02", "Understand", "Nexvanta finds the right context, explains the result, and keeps the reasoning visible."],
  ["03", "Decide", "Compare scenarios, share the answer, and take the next step with the team."],
];

export const ProductPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F1E2E2] text-[#1a232b] font-sans">
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <a href="/" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#3291B6] neu-raised-light hover:neu-raised-light-hover">
              <ArrowLeft className="h-4 w-4" /> Back to Parallax Nest
            </a>
            <span className="hidden rounded-full px-4 py-2 text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 neu-inset-light sm:inline-flex">
              NEXVANTA / PRODUCT BRIEF
            </span>
          </div>

          {/* Hero */}
          <section className="relative grid items-center gap-12 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-32">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-bold tracking-wider text-[#3291B6] neu-inset-light">
                <Sparkles className="h-4 w-4 text-[#BB8ED0]" />
                <span>THE DECISION LAYER FOR MODERN TEAMS</span>
              </div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[#101820] sm:text-6xl lg:text-8xl">
                Your data, finally <span className="text-[#3291B6]">ready to talk.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl">
                Nexvanta gives operators, finance teams, and product leaders a shared way to ask better questions, understand what is changing, and decide what to do next.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={LIVE_PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-2xl bg-[#3291B6] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition hover:bg-[#287796] hover:shadow-2xl">
                  Open Nexvanta <ArrowUpRightIcon />
                </a>
                <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] neu-raised-light hover:neu-raised-light-hover">
                  See how it works <ChevronRight className="h-4 w-4 text-[#3291B6]" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#3291B6]" /> Plain-language analysis</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#3291B6]" /> Scenario-ready pricing</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#BB8ED0]/20 blur-3xl" />
              <div className="relative rounded-[2.75rem] p-3 neu-inset-light">
                <div className="relative overflow-hidden rounded-[2.25rem] bg-[#101820] p-5 text-white shadow-2xl sm:p-7">
                  <div className="mb-8 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-gray-400">
                    <span>NEXVANTA / LIVE VIEW</span><span className="flex items-center gap-2 text-[#7dd3d9]"><i className="h-2 w-2 rounded-full bg-[#7dd3d9]" /> Connected</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-start gap-3"><div className="rounded-xl bg-[#3291B6]/20 p-2 text-[#7dd3d9]"><Search className="h-4 w-4" /></div><div><p className="text-xs text-gray-400">You asked</p><p className="mt-1 text-sm font-medium">“What changed in expansion revenue this month?”</p></div></div>
                    <div className="my-5 h-px bg-white/10" />
                    <p className="mb-2 text-[10px] font-mono uppercase tracking-wider text-[#7dd3d9]">Nexvanta found a story</p>
                    <p className="text-sm leading-relaxed text-gray-200">Expansion revenue is up <span className="font-bold text-[#7dd3d9]">18.6%</span>, led by enterprise accounts in North America. Two cohorts are showing early churn risk.</p>
                    <div className="mt-5 grid grid-cols-3 gap-2 text-center"><Metric value="18.6%" label="Expansion" color="text-[#7dd3d9]" /><Metric value="$1.24M" label="MRR impact" color="text-[#BB8ED0]" /><Metric value="2" label="Watchlist" color="text-[#E0A8A8]" /></div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3"><MiniCard label="PRICING SCENARIO" value="+8.4% MRR" icon={<CircleDollarSign className="h-4 w-4" />} /><MiniCard label="DATA HEALTH" value="All systems clear" icon={<ShieldCheck className="h-4 w-4" />} /></div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="pb-24" id="platform">
            <SectionIntro eyebrow="WHY NEXVANTA" title="Less hunting. More knowing." text="The best insight is the one your team can understand, trust, and use before the moment passes." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">{outcomes.map(({ icon: Icon, title, text, accent }) => <article key={title} className="rounded-3xl p-7 neu-raised-light transition hover:-translate-y-1"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl neu-inset-light" style={{ color: accent }}><Icon className="h-6 w-6" /></div><h3 className="text-xl font-bold tracking-tight text-[#101820]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-gray-600">{text}</p><div className="mt-7 h-1 w-10 rounded-full" style={{ backgroundColor: accent }} /></article>)}</div>
          </section>

          {/* How it works */}
          <section className="rounded-[2.75rem] bg-[#101820] px-6 py-16 text-white shadow-2xl sm:px-12 lg:px-20" id="how-it-works">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-mono font-bold tracking-[0.2em] text-[#7dd3d9]">THE NEXVANTA LOOP</p><h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">A clearer path from question to action.</h2><p className="mt-5 max-w-md leading-relaxed text-gray-400">Nexvanta keeps the interface human while it handles the complexity behind the scenes.</p></div><div className="space-y-4">{workflow.map(([number, title, text]) => <div key={number} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5"><span className="font-mono text-sm text-[#BB8ED0]">{number}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-gray-400">{text}</p></div><ArrowRight className="ml-auto mt-1 hidden h-4 w-4 text-[#3291B6] sm:block" /></div>)}</div></div>
          </section>

          {/* Product areas */}
          <section className="py-24" id="solutions"><SectionIntro eyebrow="BUILT FOR THE MOMENTS THAT MATTER" title="One workspace. Many ways to make a better call." text="Bring the people closest to the decision into the same context, whether they are planning the next price move or investigating a performance shift." /><div className="mt-12 grid gap-6 lg:grid-cols-2"><ProductArea icon={<Workflow />} label="AI QUERY COMPILATION" title="From “what happened?” to “show me why.”" text="Explore trends, cohorts, and relationships in natural language. Every answer is shaped for people first, with enough context to make it useful in the next meeting." tags={["Revenue exploration", "Cohort analysis", "Team-ready answers"]} /><ProductArea icon={<BarChart3 />} label="AI-POWERED PRICING" title="Test the move before you make it." text="Compare pricing ideas against real operating signals. See the upside, spot the trade-offs, and give your team a shared starting point for the decision." tags={["Scenario planning", "MRR impact", "Decision history"]} /></div></section>

          {/* Trust */}
          <section className="grid gap-6 pb-24 lg:grid-cols-[1.1fr_0.9fr]" id="security"><div className="rounded-3xl p-8 neu-raised-light sm:p-10"><div className="flex items-center gap-3 text-[#3291B6]"><LockKeyhole className="h-5 w-5" /><span className="text-xs font-mono font-bold tracking-[0.18em]">DESIGNED FOR TRUST</span></div><h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-[#101820] sm:text-4xl">Clarity is only valuable when your team can rely on it.</h2><p className="mt-5 max-w-xl leading-relaxed text-gray-600">Nexvanta keeps access, context, and the path to an answer visible. Your people get the confidence to explore without losing the controls your organization needs.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><TrustItem title="Private by design" text="Secure proxy tunnels keep sensitive data in the right place." /><TrustItem title="Permission-aware" text="Teams see the context they are meant to act on." /><TrustItem title="Explainable answers" text="Follow the reasoning behind every result." /><TrustItem title="Ready for scale" text="Stay responsive as questions and data grow." /></div></div><div className="relative overflow-hidden rounded-3xl bg-[#141f2a] p-8 text-white neu-raised-dark sm:p-10"><div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#3291B6]/20 blur-3xl" /><Network className="h-10 w-10 text-[#7dd3d9]" /><p className="mt-16 text-5xl font-extrabold tracking-tight">One source of <span className="text-[#7dd3d9]">truth.</span></p><p className="mt-5 max-w-sm leading-relaxed text-gray-400">Make the same answer available to the people who need to understand it, challenge it, and act on it.</p></div></section>

          {/* Technical foundation */}
          <section className="border-t border-gray-300/60 pt-20" id="technology"><SectionIntro eyebrow="THE FOUNDATION, KEPT IN THE BACKGROUND" title="Enterprise-grade intelligence without an enterprise-grade learning curve." text="Nexvanta is designed to feel simple at the surface. Underneath, NVIDIA’s AI stack gives the product the speed, scale, and real-time awareness needed for serious data work." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><TechItem icon={<BrainCircuit />} name="NVIDIA NeMo" text="Specialized training for schema-aware language understanding." /><TechItem icon={<Zap />} name="NVIDIA NIM" text="Low-latency reasoning and query translation through optimized services." /><TechItem icon={<BarChart3 />} name="NVIDIA RAPIDS" text="GPU-accelerated processing for fast analytics and dashboards." /><TechItem icon={<ShieldCheck />} name="NVIDIA Morpheus" text="Real-time monitoring, governance, and anomaly detection." /></div></section>

          {/* CTA */}
          <section className="mt-24 overflow-hidden rounded-[2.75rem] bg-[#3291B6] px-6 py-16 text-center text-white shadow-2xl sm:px-10"><p className="text-xs font-mono font-bold tracking-[0.2em] text-white/75">YOUR NEXT DECISION STARTS HERE</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">Give your questions somewhere better to go.</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">Open Nexvanta and see what your data can say when the whole team can ask.</p><a href={LIVE_PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#101820] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#141f2a]">Launch Nexvanta <ArrowUpRightIcon /></a></section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

const ArrowUpRightIcon = () => <ArrowRight className="h-4 w-4 -rotate-45" />;

const SectionIntro = ({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) => <div className="max-w-2xl"><p className="text-xs font-mono font-bold tracking-[0.2em] text-[#3291B6]">{eyebrow}</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#101820] sm:text-5xl">{title}</h2><p className="mt-5 text-lg leading-relaxed text-gray-600">{text}</p></div>;

const Metric = ({ value, label, color }: { value: string; label: string; color: string }) => <div className="rounded-xl bg-white/[0.05] p-3"><p className={`text-sm font-bold ${color}`}>{value}</p><p className="mt-1 text-[9px] font-mono uppercase tracking-wider text-gray-500">{label}</p></div>;

const MiniCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><div className="flex items-center gap-2 text-[#7dd3d9]">{icon}<span className="text-[9px] font-mono tracking-wider text-gray-500">{label}</span></div><p className="mt-2 text-xs font-semibold text-gray-200">{value}</p></div>;

const ProductArea = ({ icon, label, title, text, tags }: { icon: React.ReactNode; label: string; title: string; text: string; tags: string[] }) => <article className="rounded-3xl p-8 neu-raised-light sm:p-10"><div className="flex items-center gap-3 text-[#3291B6]"><span className="rounded-xl p-2 neu-inset-light">{icon}</span><span className="text-xs font-mono font-bold tracking-[0.15em]">{label}</span></div><h3 className="mt-7 text-3xl font-extrabold tracking-tight text-[#101820]">{title}</h3><p className="mt-4 leading-relaxed text-gray-600">{text}</p><div className="mt-7 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 neu-inset-light">{tag}</span>)}</div></article>;

const TrustItem = ({ title, text }: { title: string; text: string }) => <div className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3291B6]" /><div><p className="text-sm font-bold text-[#101820]">{title}</p><p className="mt-1 text-xs leading-relaxed text-gray-500">{text}</p></div></div>;

const TechItem = ({ icon, name, text }: { icon: React.ReactNode; name: string; text: string }) => <div className="rounded-2xl p-5 neu-inset-light"><div className="flex items-center gap-3 text-[#3291B6]"><span>{icon}</span><p className="text-sm font-bold text-[#101820]">{name}</p></div><p className="mt-3 text-xs leading-relaxed text-gray-600">{text}</p></div>;
