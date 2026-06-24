import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/hero-collage.jpg
var hero_collage_default = "/assets/hero-collage-C2RjOi3Y.jpg";
//#endregion
//#region src/assets/system-collage.jpg
var system_collage_default = "/assets/system-collage-C0jyRjRw.jpg";
//#endregion
//#region src/assets/thesis-collage.jpg
var thesis_collage_default = "/assets/thesis-collage-BBXhDvZJ.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function useReveal() {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .15 });
		el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	return ref;
}
var REVENUE_OPTIONS = [
	{
		value: "",
		label: "Select a range",
		tier: ""
	},
	{
		value: "<1cr",
		label: "Under ₹1 Cr",
		tier: "book"
	},
	{
		value: "1-5cr",
		label: "₹1–5 Cr",
		tier: "book"
	},
	{
		value: "5-25cr",
		label: "₹5–25 Cr",
		tier: "boardroom"
	},
	{
		value: "25-100cr",
		label: "₹25–100 Cr",
		tier: "boardroom"
	},
	{
		value: "100cr+",
		label: "₹100 Cr+",
		tier: "boardroom"
	}
];
var THESIS = [
	"Competition is a tax you volunteered for.",
	"Your demand is rented, and the rent climbs every year.",
	"Massive cash flows only exist in a vacuum.",
	"Own the demand and you set the price the market reacts to."
];
var SYSTEM = [
	{
		title: "Demand Infrastructure",
		body: "We build acquisition channels you own outright — the kind competitors can't see and couldn't copy if they did. Demand that compounds instead of resetting every month."
	},
	{
		title: "Psychological Moats",
		body: "A product is a commodity. A paradigm is a monopoly. We move your positioning until comparing you to a competitor feels like a category error to the buyer."
	},
	{
		title: "Cash Flow Architecture",
		body: "Traffic flatters the ego. Cash pays the bills. We install the backend private equity uses to turn captured demand into cash flow you can predict to the month."
	}
];
function Landing() {
	const [tier, setTier] = useState("boardroom");
	const [revenue, setRevenue] = useState("5-25cr");
	const [submitted, setSubmitted] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	const pageRef = useReveal();
	async function handleSubmit(e, kind) {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		try {
			if ((await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new FormData(e.currentTarget)
			})).json()).success) setSubmitted(kind);
			else setError("Something went wrong. Email rockysagoo@gmail.com and we'll sort it.");
		} catch {
			setError("Something went wrong. Email rockysagoo@gmail.com and we'll sort it.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ jsxs("main", {
		ref: pageRef,
		className: "min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-line animate-fade-in",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "flex items-center gap-2.5 group",
							children: [/* @__PURE__ */ jsx("span", { className: "inline-block w-6 h-6 bg-accent rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" }), /* @__PURE__ */ jsx("span", {
								className: "font-display text-lg font-semibold tracking-tight",
								children: "RSC"
							})]
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "hidden md:flex items-center gap-10 mono-label",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#thesis",
									className: "hover:text-foreground transition-colors",
									children: "Thesis"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#system",
									className: "hover:text-foreground transition-colors",
									children: "System"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#apply",
									className: "hover:text-foreground transition-colors",
									children: "Apply"
								})
							]
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#apply",
							className: "hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors",
							children: "Boardroom Access →"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", { id: "top" }),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32 relative",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-12 gap-10 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-7",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mono-label mb-8 flex items-center gap-3 animate-fade-up",
								children: [/* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 bg-accent" }), "Monopoly Demand Systems"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "display-h text-[clamp(2.6rem,7.2vw,6.6rem)] max-w-[18ch] animate-fade-up",
								style: { animationDelay: "0.1s" },
								children: ["Every business runs on demand.", /* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: " Almost none own it."
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up",
								style: { animationDelay: "0.25s" },
								children: [
									"You did everything right, and the whole thing still rests on an ad account and an algorithm you don't control.",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground font-medium",
										children: "We make the demand yours — so no competitor can copy it or take it."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex flex-wrap items-center gap-4 animate-fade-up",
								style: { animationDelay: "0.4s" },
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#apply",
									className: "group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-medium tracking-tight hover:bg-accent transition-all duration-300 hover:gap-5",
									children: ["Engineer My Monopoly", /* @__PURE__ */ jsx("span", {
										"aria-hidden": true,
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								}), /* @__PURE__ */ jsx("a", {
									href: "#thesis",
									className: "inline-flex items-center gap-2 px-2 py-4 mono-label hover:text-foreground transition-colors",
									children: "Read the thesis ↓"
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "md:col-span-5 relative animate-fade-in",
						style: { animationDelay: "0.3s" },
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("img", {
								src: hero_collage_default,
								alt: "Toppled chess king beside stacks of gold coins — a collage about market dominance",
								width: 1280,
								height: 1024,
								className: "w-full h-auto animate-float"
							}), /* @__PURE__ */ jsxs("svg", {
								className: "absolute -top-6 -right-4 w-24 h-24 text-accent animate-spin-slow hidden md:block",
								viewBox: "0 0 120 120",
								children: [
									/* @__PURE__ */ jsx("circle", {
										cx: "60",
										cy: "60",
										r: "58",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1"
									}),
									/* @__PURE__ */ jsx("text", {
										fill: "currentColor",
										className: "font-mono text-[9px]",
										children: /* @__PURE__ */ jsx("textPath", {
											href: "#circ",
											startOffset: "0",
											children: "OWN THE DEMAND · SET THE PRICE ·"
										})
									}),
									/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", {
										id: "circ",
										d: "M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
									}) })
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-y border-line bg-foreground text-background overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex animate-marquee whitespace-nowrap py-5",
					children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ jsx("div", {
						className: "flex items-center shrink-0",
						children: [
							"Demand Infrastructure",
							"Psychological Moats",
							"Cash Flow Architecture",
							"Dominate, or Die",
							"By Application Only",
							"Est. 2026"
						].map((w) => /* @__PURE__ */ jsxs("span", {
							className: "flex items-center font-display text-2xl md:text-4xl px-8",
							children: [w, /* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 bg-accent rotate-45 ml-8" })]
						}, w))
					}, k))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "thesis",
				className: "border-t border-line",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-12 gap-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-4 reveal",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mono-label",
									children: "The Thesis"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "display-h text-4xl md:text-5xl mt-4",
									children: "Four truths most owners never act on."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-10 hidden md:block relative",
									children: /* @__PURE__ */ jsx("img", {
										src: thesis_collage_default,
										alt: "Portrait collage with red marker annotations",
										width: 900,
										height: 1100,
										loading: "lazy",
										className: "w-full h-auto max-w-[280px] -rotate-2"
									})
								})
							]
						}), /* @__PURE__ */ jsx("ol", {
							className: "md:col-span-8 md:col-start-5 space-y-0",
							children: THESIS.map((t, i) => /* @__PURE__ */ jsxs("li", {
								className: "reveal flex items-start gap-8 md:gap-12 py-8 border-t border-line first:border-t-0 group",
								style: { transitionDelay: `${i * 90}ms` },
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-display text-accent text-3xl md:text-5xl font-medium leading-none w-16 shrink-0 transition-transform duration-300 group-hover:-translate-y-1",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ jsx("p", {
									className: "display-h text-2xl md:text-4xl transition-colors group-hover:text-accent",
									children: t
								})]
							}, i))
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-line bg-muted/40",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-36",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mono-label",
							children: "A short history"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "display-h text-3xl md:text-5xl mt-4 mb-10",
							children: "Gone are the days when the hardest worker won."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed",
							children: [
								/* @__PURE__ */ jsx("p", { children: "For most of history, business was a street fight. You undercut the shop next door and opened before anyone else was awake, and in a good year you kept a little more than they did." }),
								/* @__PURE__ */ jsx("p", { children: "Then a few owners did something stranger than competing harder. They ended the fight. They stopped trying to be the cheapest name in the market and quietly became the only one that mattered." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"That is the whole game now. The market still has room for the man who out-works everyone on a thin margin and a tired body.",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground font-medium",
										children: "It pays a fortune to the owner nobody can compete with."
									})
								] }),
								/* @__PURE__ */ jsx("p", {
									className: "text-foreground font-medium",
									children: "The old way is still open to you. It just doesn't pay anymore."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-foreground text-background",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "font-mono uppercase tracking-[0.2em] text-xs text-background/60 mb-8 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 bg-accent" }), "The Cost of Waiting"]
					}), /* @__PURE__ */ jsxs("p", {
						className: "display-h text-3xl md:text-6xl max-w-[22ch]",
						children: [
							"If you don't monopolise your business today,",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "someone else will."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "system",
				className: "border-t border-line",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-12 gap-10 items-end mb-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-7 reveal",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mono-label",
								children: "The System"
							}), /* @__PURE__ */ jsxs("h2", {
								className: "display-h text-4xl md:text-6xl mt-4 max-w-[18ch]",
								children: ["Complex problems. ", /* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Simple systems."
								})]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "md:col-span-5 reveal",
							children: /* @__PURE__ */ jsx("img", {
								src: system_collage_default,
								alt: "Vintage factory and modern smartphone collage with red marker circles",
								width: 1280,
								height: 800,
								loading: "lazy",
								className: "w-full h-auto rotate-1 hover:rotate-0 transition-transform duration-700"
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-3 gap-px bg-line mt-6 border border-line",
						children: SYSTEM.map((s, i) => /* @__PURE__ */ jsxs("div", {
							className: "reveal bg-background p-8 md:p-10 flex flex-col hover:bg-muted/60 transition-colors duration-300 group",
							style: { transitionDelay: `${i * 120}ms` },
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "font-mono text-xs text-accent mb-8 transition-transform duration-300 group-hover:translate-x-1",
									children: [
										"0",
										i + 1,
										" / 03"
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "display-h text-2xl md:text-3xl mb-5",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground leading-relaxed",
									children: s.body
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mono-label",
						children: "The Diagnosis"
					}), /* @__PURE__ */ jsxs("p", {
						className: "display-h text-3xl md:text-5xl mt-6",
						children: [
							"Your margin is thin enough to feel every bad month in your chest, and you're one competitor's discount from a bad quarter.",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "You don't own a business. You own a high-risk job."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "apply",
				className: "border-t border-line bg-muted/40",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-36",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-12 gap-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mono-label",
									children: "The Terms"
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "display-h text-4xl md:text-6xl mt-4",
									children: ["This is not for everyone. ", /* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "By design."
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-lg text-muted-foreground leading-relaxed",
									children: "RSC works with established owners who already built something real and are done playing a rigged game they were never meant to win."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg text-foreground font-medium",
									children: "If you want a position your competitors can't price against and can't outlast — start here."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "md:col-span-7",
							children: /* @__PURE__ */ jsxs("div", {
								className: "bg-background border border-line p-8 md:p-12",
								children: [
									/* @__PURE__ */ jsx("label", {
										className: "block mono-label mb-4",
										children: "Start here · Your annual revenue"
									}),
									/* @__PURE__ */ jsx("select", {
										value: revenue,
										onChange: (e) => {
											const v = e.target.value;
											setRevenue(v);
											setTier(REVENUE_OPTIONS.find((o) => o.value === v)?.tier || "");
											setSubmitted(null);
										},
										className: "w-full bg-transparent border-b-2 border-foreground text-xl md:text-2xl font-display py-3 pr-8 focus:outline-none focus:border-accent appearance-none cursor-pointer",
										style: {
											backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 14 10'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23111' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
											backgroundRepeat: "no-repeat",
											backgroundPosition: "right 0.25rem center"
										},
										children: REVENUE_OPTIONS.map((o) => /* @__PURE__ */ jsx("option", {
											value: o.value,
											children: o.label
										}, o.value))
									}),
									tier === "boardroom" && submitted !== "apply" && /* @__PURE__ */ jsxs("form", {
										onSubmit: (e) => handleSubmit(e, "apply"),
										className: "mt-10 space-y-6",
										children: [
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "access_key",
												value: "YOUR_WEB3FORMS_KEY"
											}),
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "subject",
												value: "RSC Boardroom Application"
											}),
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "annual_revenue",
												value: revenue
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mono-label",
												children: "You're in range. A few details and RSC will reach out."
											}),
											/* @__PURE__ */ jsxs(FormGrid, { children: [
												/* @__PURE__ */ jsx(Field, {
													label: "Full Name",
													name: "name",
													required: true
												}),
												/* @__PURE__ */ jsx(Field, {
													label: "Email",
													name: "email",
													type: "email",
													required: true
												}),
												/* @__PURE__ */ jsx(Field, {
													label: "Phone / WhatsApp",
													name: "phone",
													required: true
												}),
												/* @__PURE__ */ jsx(Field, {
													label: "Business or Website",
													name: "business",
													required: true
												})
											] }),
											/* @__PURE__ */ jsx(Field, {
												label: "What's capping your growth right now?",
												name: "message",
												textarea: true,
												required: true
											}),
											/* @__PURE__ */ jsx("button", {
												type: "submit",
												disabled: submitting,
												className: "bg-foreground text-background px-8 py-4 font-medium hover:bg-accent transition-colors disabled:opacity-50",
												children: submitting ? "Submitting…" : "Apply for Boardroom Access →"
											}),
											error && /* @__PURE__ */ jsx("p", {
												className: "text-accent text-sm",
												children: error
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mono-label !text-[0.65rem]",
												children: "Private & confidential · Reviewed personally by RSC"
											})
										]
									}),
									tier === "book" && submitted !== "book" && /* @__PURE__ */ jsxs("form", {
										onSubmit: (e) => handleSubmit(e, "book"),
										className: "mt-10 space-y-6",
										children: [
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "access_key",
												value: "YOUR_WEB3FORMS_KEY"
											}),
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "subject",
												value: "RSC Book Request"
											}),
											/* @__PURE__ */ jsx("input", {
												type: "hidden",
												name: "annual_revenue",
												value: revenue
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground leading-relaxed",
												children: "RSC advisory begins at ₹5 Cr in revenue. You're building toward it — and the playbook that gets you there is the same one in the book. Take it, and join the community while you grow."
											}),
											/* @__PURE__ */ jsxs(FormGrid, { children: [/* @__PURE__ */ jsx(Field, {
												label: "Full Name",
												name: "name",
												required: true
											}), /* @__PURE__ */ jsx(Field, {
												label: "Email",
												name: "email",
												type: "email",
												required: true
											})] }),
											/* @__PURE__ */ jsx("button", {
												type: "submit",
												disabled: submitting,
												className: "bg-foreground text-background px-8 py-4 font-medium hover:bg-accent transition-colors disabled:opacity-50",
												children: submitting ? "Sending…" : "Send Me the Book →"
											}),
											error && /* @__PURE__ */ jsx("p", {
												className: "text-accent text-sm",
												children: error
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mono-label !text-[0.65rem]",
												children: "No spam · The book, then the community"
											})
										]
									}),
									submitted === "apply" && /* @__PURE__ */ jsx(SuccessBlock, {
										title: "Application received.",
										body: "Your details are in. If your business is a fit, RSC will reach out directly. Keep an eye on your inbox."
									}),
									submitted === "book" && /* @__PURE__ */ jsx(SuccessBlock, {
										title: "You're in.",
										body: "Check your inbox for Building a Business Monopoly — and welcome to the community."
									})
								]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-wrap items-end justify-between gap-8",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ jsx("span", { className: "inline-block w-5 h-5 bg-accent rotate-45" }), /* @__PURE__ */ jsx("span", {
									className: "font-display text-lg font-semibold",
									children: "RSC"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mono-label",
								children: "Monopoly Demand Systems"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mono-label mt-1 text-foreground",
								children: "Dominate, or die."
							})
						] }),
						/* @__PURE__ */ jsxs("nav", {
							className: "flex gap-8 mono-label",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#thesis",
									className: "hover:text-foreground",
									children: "Thesis"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#system",
									className: "hover:text-foreground",
									children: "System"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#apply",
									className: "hover:text-foreground",
									children: "Apply"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-right",
							children: [/* @__PURE__ */ jsx("a", {
								href: "mailto:rockysagoo@gmail.com",
								className: "text-foreground border-b border-line hover:border-foreground",
								children: "rockysagoo@gmail.com"
							}), /* @__PURE__ */ jsx("p", {
								className: "mono-label mt-2",
								children: "© 2026 · By application only"
							})]
						})
					]
				})
			})
		]
	});
}
function FormGrid({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid sm:grid-cols-2 gap-6",
		children
	});
}
function Field({ label, name, type = "text", required, textarea }) {
	const base = "w-full bg-transparent border-b border-line py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors";
	return /* @__PURE__ */ jsxs("label", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx("span", {
			className: "mono-label mb-2",
			children: label
		}), textarea ? /* @__PURE__ */ jsx("textarea", {
			name,
			required,
			rows: 3,
			className: base
		}) : /* @__PURE__ */ jsx("input", {
			name,
			type,
			required,
			className: base
		})]
	});
}
function SuccessBlock({ title, body }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-10 border-t border-line pt-8",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mono-label text-accent",
				children: "Confirmed"
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "display-h text-2xl md:text-3xl mt-3",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: body
			})
		]
	});
}
//#endregion
export { Landing as component };
