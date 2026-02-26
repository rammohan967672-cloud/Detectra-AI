import React from "react";
import { Shield, ArrowRight, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="text-cyan-400 w-6 h-6" />
            <span className="font-bold text-xl">
              DETECTRA <span className="text-cyan-400">AI</span>
            </span>
          </div>
          <a
            href="#request-demo"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Request Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Synthetic media is already being{" "}
            <span className="text-cyan-400">weaponized</span> for financial fraud.
          </h1>
          <p className="text-lg text-white/60 mb-10">
            Detectra AI delivers multi-layer neural forensic architecture
            built specifically for fraud prevention teams.
          </p>
          <a
            href="#request-demo"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition"
          >
            Apply for Private Product Demonstration
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-xs text-white/40 uppercase tracking-widest">
            Access limited to qualified enterprise fraud prevention teams
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Traditional fraud systems are blind to synthetic deception.
          </h2>
          <p className="text-white/60 mb-8">
            Legacy infrastructure was never built to detect neural-generated
            voice cloning, synthetic video spoofing, and executive impersonation.
          </p>
          <ul className="space-y-4 text-white/70">
            <li>• CEO voice cloning wire fraud</li>
            <li>• KYC video spoofing attacks</li>
            <li>• Cross-modal impersonation campaigns</li>
          </ul>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 border-t border-white/10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Built by a Fraud Risk Analyst
          </h2>
          <p className="text-lg font-bold">Ram Mohan Midde</p>
          <p className="text-cyan-400 text-sm mb-6">
            Founder & CEO, Detectra AI
          </p>
          <p className="text-white/60 mb-6">
            Detectra AI was founded to close the growing blind spot
            in traditional fraud detection systems against AI-generated deception.
          </p>
          <p className="flex justify-center items-center gap-2 text-white/50 text-sm">
            <Mail className="w-4 h-4" />
            ceo@detectraai.com
          </p>
        </div>
      </section>

      {/* DEMO FORM */}
      <section
        id="request-demo"
        className="scroll-mt-24 py-24 bg-cyan-400/5 border-t border-white/10 px-6"
      >
        <div className="max-w-xl mx-auto bg-slate-900 p-8 rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Request Private Demonstration
          </h2>

          <form
            action="https://formspree.io/f/xeelpvbr"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded bg-slate-800 border border-white/10"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              required
              className="w-full p-3 rounded bg-slate-800 border border-white/10"
            />

            <input
              type="email"
              name="email"
              placeholder="Official Company Email"
              required
              className="w-full p-3 rounded bg-slate-800 border border-white/10"
            />

            <input
              type="text"
              name="fraudExposure"
              placeholder="Estimated Monthly Fraud Exposure"
              required
              className="w-full p-3 rounded bg-slate-800 border border-white/10"
            />

            <textarea
              name="message"
              placeholder="Tell us about your current challenges..."
              rows={4}
              className="w-full p-3 rounded bg-slate-800 border border-white/10"
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-3 rounded font-bold hover:opacity-90 transition"
            >
              Submit Demo Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-white/40 text-sm">
        © 2026 Detectra AI. All rights reserved. <br />
        contact@detectraai.com
      </footer>
    </div>
  );
}