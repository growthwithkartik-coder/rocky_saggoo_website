"use client";

import { useState } from "react";

export default function EmailCapture({
  buttonLabel,
  noteText,
}: {
  buttonLabel: string;
  noteText: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://a6scfrd5w6.execute-api.ap-south-1.amazonaws.com/user/AdsInquiryRsSchema",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: "na",
            email: email.trim(),
            phoneNumber: "na",
            profession: "na",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form className="capture" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="aapka email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted || submitting}
        />
        <button
          type="submit"
          disabled={submitted || submitting}
          style={submitted ? { opacity: 0.75 } : undefined}
        >
          {submitted ? "Bhej Diya ✓" : submitting ? "Bhej Rahe Hain…" : buttonLabel}
        </button>
      </form>
      {error && <p className="capture-note" style={{ color: "#c0392b" }}>{error}</p>}
      {!error && <p className="capture-note">{noteText}</p>}
    </>
  );
}
