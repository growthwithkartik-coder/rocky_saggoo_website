import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroCollage from "@/assets/hero-collage.jpg";
import systemCollage from "@/assets/system-collage.jpg";
import thesisCollage from "@/assets/thesis-collage.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RSC — Monopoly Demand Systems" },
      {
        name: "description",
        content:
          "We help established business owners become the monopoly in their market. Own the demand. Set the price the market reacts to.",
      },
      { property: "og:title", content: "RSC — Monopoly Demand Systems" },
      {
        property: "og:description",
        content: "Own the demand. Set the price the market reacts to.",
      },
    ],
  }),
  component: Landing,
});

type Tier = "boardroom" | "book" | "";

const REVENUE_OPTIONS: { value: string; label: string; tier: Tier }[] = [
  { value: "", label: "Select a range", tier: "" },
  { value: "<1cr", label: "Under ₹1 Cr", tier: "book" },
  { value: "1-5cr", label: "₹1–5 Cr", tier: "book" },
  { value: "5-25cr", label: "₹5–25 Cr", tier: "boardroom" },
  { value: "25-100cr", label: "₹25–100 Cr", tier: "boardroom" },
  { value: "100cr+", label: "₹100 Cr+", tier: "boardroom" },
];

const THESIS = [
  "Competition is a tax you volunteered for.",
  "Your demand is rented, and the rent climbs every year.",
  "Massive cash flows only exist in a vacuum.",
  "Own the demand and you set the price the market reacts to.",
];

const SYSTEM = [
  {
    title: "Demand Infrastructure",
    body: "We build acquisition channels you own outright — the kind competitors can't see and couldn't copy if they did. Demand that compounds instead of resetting every month.",
  },
  {
    title: "Psychological Moats",
    body: "A product is a commodity. A paradigm is a monopoly. We move your positioning until comparing you to a competitor feels like a category error to the buyer.",
  },
  {
    title: "Cash Flow Architecture",
    body: "Traffic flatters the ego. Cash pays the bills. We install the backend private equity uses to turn captured demand into cash flow you can predict to the month.",
  },
];

function Landing() {
  const [tier, setTier] = useState<Tier>("boardroom");
  const [revenue, setRevenue] = useState("5-25cr");
  const [submitted, setSubmitted] = useState<null | "apply" | "book">(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const pageRef = useReveal();


  async function handleSubmit(e: FormEvent<HTMLFormElement>, kind: "apply" | "book") {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      const json = await res.json();
      if (json.success) setSubmitted(kind);
      else setError("Something went wrong. Email rockysagoo@gmail.com and we'll sort it.");
    } catch {
      setError("Something went wrong. Email rockysagoo@gmail.com and we'll sort it.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* TOP BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-line animate-fade-in">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="inline-block w-6 h-6 bg-accent rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
            <span className="font-display text-lg font-semibold tracking-tight">RSC</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 mono-label">
            <a href="#thesis" className="hover:text-foreground transition-colors">Thesis</a>
            <a href="#system" className="hover:text-foreground transition-colors">System</a>
            <a href="#apply" className="hover:text-foreground transition-colors">Apply</a>
          </nav>
          <a
            href="#apply"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Boardroom Access →
          </a>
        </div>
      </header>

      <div id="top" />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32 relative">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="mono-label mb-8 flex items-center gap-3 animate-fade-up">
              <span className="inline-block w-2 h-2 bg-accent" />
              Monopoly Demand Systems
            </div>
            <h1
              className="display-h text-[clamp(2.6rem,7.2vw,6.6rem)] max-w-[18ch] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Every business runs on demand.
              <span className="text-muted-foreground"> Almost none own it.</span>
            </h1>
            <p
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              You did everything right, and the whole thing still rests on an ad
              account and an algorithm you don't control.{" "}
              <span className="text-foreground font-medium">
                We make the demand yours — so no competitor can copy it or take it.
              </span>
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#apply"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-medium tracking-tight hover:bg-accent transition-all duration-300 hover:gap-5"
              >
                Engineer My Monopoly
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#thesis"
                className="inline-flex items-center gap-2 px-2 py-4 mono-label hover:text-foreground transition-colors"
              >
                Read the thesis ↓
              </a>
            </div>
          </div>

          {/* HERO COLLAGE */}
          <div className="md:col-span-5 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img
                src={heroCollage}
                alt="Toppled chess king beside stacks of gold coins — a collage about market dominance"
                width={1280}
                height={1024}
                className="w-full h-auto animate-float"
              />
              <svg
                className="absolute -top-6 -right-4 w-24 h-24 text-accent animate-spin-slow hidden md:block"
                viewBox="0 0 120 120"
              >
                <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="1" />
                <text fill="currentColor" className="font-mono text-[9px]">
                  <textPath href="#circ" startOffset="0">
                    OWN THE DEMAND · SET THE PRICE ·
                  </textPath>
                </text>
                <defs>
                  <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-line bg-foreground text-background overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {[
                "Demand Infrastructure",
                "Psychological Moats",
                "Cash Flow Architecture",
                "Dominate, or Die",
                "By Application Only",
                "Est. 2026",
              ].map((w) => (
                <span key={w} className="flex items-center font-display text-2xl md:text-4xl px-8">
                  {w}
                  <span className="inline-block w-2 h-2 bg-accent rotate-45 ml-8" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* THESIS */}
      <section id="thesis" className="border-t border-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4 reveal">
              <div className="mono-label">The Thesis</div>
              <h2 className="display-h text-4xl md:text-5xl mt-4">
                Four truths most owners never act on.
              </h2>
              <div className="mt-10 hidden md:block relative">
                <img
                  src={thesisCollage}
                  alt="Portrait collage with red marker annotations"
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="w-full h-auto max-w-[280px] -rotate-2"
                />
              </div>
            </div>
            <ol className="md:col-span-8 md:col-start-5 space-y-0">
              {THESIS.map((t, i) => (
                <li
                  key={i}
                  className="reveal flex items-start gap-8 md:gap-12 py-8 border-t border-line first:border-t-0 group"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="font-display text-accent text-3xl md:text-5xl font-medium leading-none w-16 shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="display-h text-2xl md:text-4xl transition-colors group-hover:text-accent">
                    {t}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>


      {/* STORY */}
      <section className="border-t border-line bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="mono-label">A short history</div>
          <h2 className="display-h text-3xl md:text-5xl mt-4 mb-10">
            Gone are the days when the hardest worker won.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              For most of history, business was a street fight. You undercut the shop
              next door and opened before anyone else was awake, and in a good year you
              kept a little more than they did.
            </p>
            <p>
              Then a few owners did something stranger than competing harder. They
              ended the fight. They stopped trying to be the cheapest name in the
              market and quietly became the only one that mattered.
            </p>
            <p>
              That is the whole game now. The market still has room for the man who
              out-works everyone on a thin margin and a tired body.{" "}
              <span className="text-foreground font-medium">
                It pays a fortune to the owner nobody can compete with.
              </span>
            </p>
            <p className="text-foreground font-medium">
              The old way is still open to you. It just doesn't pay anymore.
            </p>
          </div>
        </div>
      </section>

      {/* INVERTED STATEMENT */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="font-mono uppercase tracking-[0.2em] text-xs text-background/60 mb-8 flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-accent" />
            The Cost of Waiting
          </div>
          <p className="display-h text-3xl md:text-6xl max-w-[22ch]">
            If you don't monopolise your business today,{" "}
            <span className="text-accent">someone else will.</span>
          </p>
        </div>
      </section>

      {/* SYSTEM */}
      <section id="system" className="border-t border-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-7 reveal">
              <div className="mono-label">The System</div>
              <h2 className="display-h text-4xl md:text-6xl mt-4 max-w-[18ch]">
                Complex problems. <span className="text-muted-foreground">Simple systems.</span>
              </h2>
            </div>
            <div className="md:col-span-5 reveal">
              <img
                src={systemCollage}
                alt="Vintage factory and modern smartphone collage with red marker circles"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full h-auto rotate-1 hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-line mt-6 border border-line">
            {SYSTEM.map((s, i) => (
              <div
                key={s.title}
                className="reveal bg-background p-8 md:p-10 flex flex-col hover:bg-muted/60 transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-mono text-xs text-accent mb-8 transition-transform duration-300 group-hover:translate-x-1">
                  0{i + 1} / 03
                </span>
                <h3 className="display-h text-2xl md:text-3xl mb-5">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* DIAGNOSIS */}
      <section className="border-t border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="mono-label">The Diagnosis</div>
          <p className="display-h text-3xl md:text-5xl mt-6">
            Your margin is thin enough to feel every bad month in your chest, and
            you're one competitor's discount from a bad quarter.{" "}
            <span className="text-accent">You don't own a business. You own a high-risk job.</span>
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="border-t border-line bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="mono-label">The Terms</div>
              <h2 className="display-h text-4xl md:text-6xl mt-4">
                This is not for everyone. <span className="text-muted-foreground">By design.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                RSC works with established owners who already built something real and
                are done playing a rigged game they were never meant to win.
              </p>
              <p className="mt-6 text-lg text-foreground font-medium">
                If you want a position your competitors can't price against and can't
                outlast — start here.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="bg-background border border-line p-8 md:p-12">
                <label className="block mono-label mb-4">
                  Start here · Your annual revenue
                </label>
                <select
                  value={revenue}
                  onChange={(e) => {
                    const v = e.target.value;
                    setRevenue(v);
                    const opt = REVENUE_OPTIONS.find((o) => o.value === v);
                    setTier(opt?.tier || "");
                    setSubmitted(null);
                  }}
                  className="w-full bg-transparent border-b-2 border-foreground text-xl md:text-2xl font-display py-3 pr-8 focus:outline-none focus:border-accent appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 14 10'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23111' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.25rem center",
                  }}
                >
                  {REVENUE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>

                {tier === "boardroom" && submitted !== "apply" && (
                  <form onSubmit={(e) => handleSubmit(e, "apply")} className="mt-10 space-y-6">
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                    <input type="hidden" name="subject" value="RSC Boardroom Application" />
                    <input type="hidden" name="annual_revenue" value={revenue} />
                    <p className="mono-label">You're in range. A few details and RSC will reach out.</p>
                    <FormGrid>
                      <Field label="Full Name" name="name" required />
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Phone / WhatsApp" name="phone" required />
                      <Field label="Business or Website" name="business" required />
                    </FormGrid>
                    <Field
                      label="What's capping your growth right now?"
                      name="message"
                      textarea
                      required
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-foreground text-background px-8 py-4 font-medium hover:bg-accent transition-colors disabled:opacity-50"
                    >
                      {submitting ? "Submitting…" : "Apply for Boardroom Access →"}
                    </button>
                    {error && <p className="text-accent text-sm">{error}</p>}
                    <p className="mono-label !text-[0.65rem]">
                      Private &amp; confidential · Reviewed personally by RSC
                    </p>
                  </form>
                )}

                {tier === "book" && submitted !== "book" && (
                  <form onSubmit={(e) => handleSubmit(e, "book")} className="mt-10 space-y-6">
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                    <input type="hidden" name="subject" value="RSC Book Request" />
                    <input type="hidden" name="annual_revenue" value={revenue} />
                    <p className="text-muted-foreground leading-relaxed">
                      RSC advisory begins at ₹5 Cr in revenue. You're building toward
                      it — and the playbook that gets you there is the same one in the
                      book. Take it, and join the community while you grow.
                    </p>
                    <FormGrid>
                      <Field label="Full Name" name="name" required />
                      <Field label="Email" name="email" type="email" required />
                    </FormGrid>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-foreground text-background px-8 py-4 font-medium hover:bg-accent transition-colors disabled:opacity-50"
                    >
                      {submitting ? "Sending…" : "Send Me the Book →"}
                    </button>
                    {error && <p className="text-accent text-sm">{error}</p>}
                    <p className="mono-label !text-[0.65rem]">No spam · The book, then the community</p>
                  </form>
                )}

                {submitted === "apply" && (
                  <SuccessBlock
                    title="Application received."
                    body="Your details are in. If your business is a fit, RSC will reach out directly. Keep an eye on your inbox."
                  />
                )}
                {submitted === "book" && (
                  <SuccessBlock
                    title="You're in."
                    body="Check your inbox for Building a Business Monopoly — and welcome to the community."
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-block w-5 h-5 bg-accent rotate-45" />
              <span className="font-display text-lg font-semibold">RSC</span>
            </div>
            <p className="mono-label">Monopoly Demand Systems</p>
            <p className="mono-label mt-1 text-foreground">Dominate, or die.</p>
          </div>
          <nav className="flex gap-8 mono-label">
            <a href="#thesis" className="hover:text-foreground">Thesis</a>
            <a href="#system" className="hover:text-foreground">System</a>
            <a href="#apply" className="hover:text-foreground">Apply</a>
          </nav>
          <div className="text-right">
            <a
              href="mailto:rockysagoo@gmail.com"
              className="text-foreground border-b border-line hover:border-foreground"
            >
              rockysagoo@gmail.com
            </a>
            <p className="mono-label mt-2">© 2026 · By application only</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FormGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-6">{children}</div>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b border-line py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors";
  return (
    <label className="flex flex-col">
      <span className="mono-label mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function SuccessBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-10 border-t border-line pt-8">
      <div className="mono-label text-accent">Confirmed</div>
      <h3 className="display-h text-2xl md:text-3xl mt-3">{title}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
