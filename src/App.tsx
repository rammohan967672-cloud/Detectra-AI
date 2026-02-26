
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Search, 
  Lock, 
  ChevronRight, 
  Mic, 
  Video, 
  UserCheck, 
  Layers, 
  Activity, 
  Globe, 
  Mail,
  ArrowRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-glow rounded flex items-center justify-center">
          <Shield className="text-charcoal w-5 h-5" />
        </div>
        <span className="font-sans font-bold text-xl tracking-tight">DETECTRA <span className="text-cyan-glow">AI</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#problem" className="hover:text-cyan-glow transition-colors">Problem</a>
        <a href="#technology" className="hover:text-cyan-glow transition-colors">Technology</a>
        <a href="#who-we-serve" className="hover:text-cyan-glow transition-colors">Solutions</a>
        <a href="#founder" className="hover:text-cyan-glow transition-colors">Founder</a>
      </div>
      <button className="bg-white text-charcoal px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-glow transition-all duration-300">
        Request Demo
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden">
    <div className="absolute inset-0 grid-background opacity-40" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-glow/10 blur-[120px] rounded-full" />
    
    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-[10px] font-mono uppercase tracking-widest mb-6">
          Neural Forensic Architecture v4.0
        </span>
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 leading-[1.1]">
          Synthetic media is already being <span className="text-cyan-glow cyan-glow-text">weaponized</span> for financial fraud.
        </h1>
        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          Detectra AI delivers multi-layer neural forensic architecture to prevent and detect synthetic deception across financial systems.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <button className="group bg-cyan-glow text-charcoal px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 cyan-glow-box">
            Apply for Private Product Demonstration
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-white/40 font-mono uppercase tracking-tighter">
            Access limited to qualified enterprise fraud prevention teams.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-32 border-t border-white/5 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-rows-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-4">The Threat Landscape</h2>
          <h3 className="text-4xl font-bold mb-6 leading-tight">Traditional fraud systems are blind to synthetic deception.</h3>
          <p className="text-white/60 text-lg mb-8">
            Legacy security infrastructures were built to detect stolen credentials and behavioral anomalies, not pixel-perfect neural reconstructions.
          </p>
          <div className="space-y-6">
            {[
              { icon: Mic, title: "CEO Voice Cloning Scams", desc: "High-fidelity audio synthesis used to bypass verbal authorization protocols." },
              { icon: Video, title: "KYC Video Spoofing", desc: "Real-time facial re-enactment to deceive automated identity verification systems." },
              { icon: UserCheck, title: "Synthetic Executive Impersonation", desc: "Coordinated cross-modal attacks targeting internal financial controllers." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <item.icon className="text-cyan-glow w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-white/40">THREAT_VECTOR_ANALYSIS</span>
              <Activity className="text-cyan-glow w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  className="h-full bg-cyan-glow" 
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-white/40">
                <span>NEURAL_ARTIFACT_DENSITY</span>
                <span>85% CRITICAL</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  className="h-full bg-red-500" 
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-white/40">
                <span>LATENCY_SPOOF_PROBABILITY</span>
                <span>92% HIGH</span>
              </div>
            </div>
            <div className="mt-12 p-4 bg-black/40 rounded border border-white/5 font-mono text-[11px] text-cyan-glow/70 leading-relaxed">
              {`> INITIALIZING_FORENSIC_SCAN...
> DETECTING_SPECTRAL_INCONSISTENCIES...
> WARNING: BEHAVIORAL_SIGNAL_DEVIATION_DETECTED
> SOURCE: SYNTHETIC_NEURAL_ENGINE_04`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseBreakdown = () => (
  <section className="py-32 bg-white/[0.02] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-4">Operational Intelligence</h2>
        <h3 className="text-4xl font-bold">Executive Voice Cloning Wire Fraud</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="p-6 border-l-2 border-red-500/50 bg-red-500/5">
            <h4 className="font-bold text-red-400 mb-2 uppercase text-xs tracking-widest">The Scenario</h4>
            <p className="text-white/70 leading-relaxed">
              A financial controller receives a high-priority call from the CEO's cloned voice, requesting an urgent offshore transfer for a "confidential acquisition." The voice is indistinguishable from the real CEO, including unique speech patterns and emotional inflections.
            </p>
          </div>
          <div className="p-6 border-l-2 border-cyan-glow/50 bg-cyan-glow/5">
            <h4 className="font-bold text-cyan-glow mb-2 uppercase text-xs tracking-widest">The Interception</h4>
            <p className="text-white/70 leading-relaxed">
              Detectra AI's passive monitoring layer analyzes the stream in real-time, identifying microscopic acoustic anomalies that exist only in synthetically generated speech.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Frame-level artifact detection", desc: "Identifying pixel-level inconsistencies in video streams." },
            { title: "Acoustic anomaly mapping", desc: "Detecting non-human spectral signatures in audio." },
            { title: "Cross-modal signal validation", desc: "Verifying sync between visual and auditory cues." },
            { title: "Multi-layer neural forensic analysis", desc: "Deep-layer inspection of neural network patterns." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 border-white/5 hover:border-cyan-glow/30 transition-colors">
              <div className="text-cyan-glow font-mono text-xs mb-3">0{i+1}</div>
              <h5 className="font-bold text-sm mb-2">{item.title}</h5>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Technology = () => (
  <section id="technology" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-20">
        <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-4">Core Architecture</h2>
        <h3 className="text-4xl font-bold mb-6">Multi-Layer Neural Forensic Architecture</h3>
        <p className="text-white/60 text-lg">
          Our proprietary stack operates across four distinct forensic layers to ensure zero-trust verification of all digital media assets.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { title: "Frame-level anomaly detection", desc: "Scanning for temporal inconsistencies and generative artifacts at the sub-pixel level." },
          { title: "Spectral voice artifact mapping", desc: "Analyzing frequency distributions to identify synthetic vocoder signatures." },
          { title: "Behavioral signal deviation modeling", desc: "Mapping micro-expressions and speech cadence against established human baselines." },
          { title: "Cross-modal integrity validation", desc: "Ensuring mathematical alignment between audio, video, and metadata streams." }
        ].map((layer, i) => (
          <div key={i} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-cyan-glow/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative glass-card p-8 h-full flex flex-col">
              <div className="w-10 h-10 rounded bg-cyan-glow/10 flex items-center justify-center mb-6">
                <Layers className="text-cyan-glow w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg mb-4 leading-tight">{layer.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{layer.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Differentiation = () => (
  <section className="py-32 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="glass-card overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-mono text-[10px] text-white/40 uppercase">Feature</th>
                  <th className="p-4 font-mono text-[10px] text-white/40 uppercase">Generic Tools</th>
                  <th className="p-4 font-mono text-[10px] text-cyan-glow uppercase">Detectra AI</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                {[
                  { f: "Real-time API Integration", g: "Limited", d: "Native" },
                  { f: "Cross-Modal Analysis", g: "No", d: "Yes" },
                  { f: "Fraud Workflow Hooks", g: "No", d: "Yes" },
                  { f: "Custom Model Training", g: "No", d: "Enterprise Only" },
                  { f: "Air-Gapped Deployment", g: "No", d: "Available" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="p-4 font-medium text-white">{row.f}</td>
                    <td className="p-4">{row.g}</td>
                    <td className="p-4 text-cyan-glow font-bold">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-4">The Edge</h2>
          <h3 className="text-4xl font-bold mb-6">Not Generic Detection. Fraud-Focused Intelligence.</h3>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            While generic deepfake detectors focus on social media content, Detectra AI is engineered specifically for the high-stakes environment of financial fraud prevention.
          </p>
          <ul className="space-y-4">
            {["Direct integration with KYC/AML pipelines", "Low-latency forensic scoring", "Detailed audit trails for compliance"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <Zap className="text-cyan-glow w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const WhoWeServe = () => (
  <section id="who-we-serve" className="py-32 bg-white/[0.01]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-16">Enterprise Deployment</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {[
          { name: "Fintech", icon: Zap },
          { name: "NBFCs", icon: Activity },
          { name: "Cybersecurity Firms", icon: Lock },
          { name: "Media Organizations", icon: Globe },
          { name: "Government Risk Teams", icon: Shield }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-glow/50 group-hover:bg-cyan-glow/5 transition-all duration-300">
              <item.icon className="text-white/40 group-hover:text-cyan-glow w-8 h-8 transition-colors" />
            </div>
            <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FounderSection = () => (
  <section id="founder" className="py-32 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6">
      <div className="glass-card p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Shield className="w-32 h-32 text-cyan-glow" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-2 border-cyan-glow/30 p-2">
              <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-white/20 font-mono text-[10px] text-center px-4 uppercase tracking-tighter">
                Founder Photo
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-mono text-cyan-glow uppercase tracking-widest mb-4">Our Leadership</h2>
            <h3 className="text-3xl font-bold mb-2">Built by a Fraud Risk Analyst.</h3>
            <div className="mb-6">
              <p className="text-xl font-bold text-white">Ram Mohan Midde</p>
              <p className="text-cyan-glow text-sm font-mono">Founder & CEO, Detectra AI</p>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Ram Mohan Midde founded Detectra AI after recognizing the rapid evolution of AI-powered financial impersonation attacks and the growing blind spots in traditional fraud prevention systems.
            </p>
            <div className="flex items-center gap-2 text-white/40 hover:text-cyan-glow transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-mono">ceo@detectraai.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    exposure: '',
    message: ''
  });

  return (
    <section className="py-32 bg-cyan-glow/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">Financial fraud is evolving. Your detection systems must evolve faster.</h2>
            <p className="text-white/60 text-xl mb-12">
              Join the waitlist for our private beta. We prioritize organizations with high-volume digital identity verification needs.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                <span className="text-white/80">Enterprise-grade SLA</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                <span className="text-white/80">Dedicated forensic support</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                <span className="text-white/80">Custom neural model fine-tuning</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <form action="https://formspree.io/f/xeelpvbr" method="POST" className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors text-sm"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Official Company Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors text-sm"
                  placeholder="john@acme.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Estimated Monthly Fraud Exposure</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors text-sm appearance-none text-white/60">
                  <option>Select range...</option>
                  <option>$10k - $100k</option>
                  <option>$100k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors text-sm resize-none"
                  placeholder="Tell us about your current challenges..."
                />
              </div>
              <button className="w-full bg-cyan-glow text-charcoal py-4 rounded-lg font-bold hover:opacity-90 transition-opacity cyan-glow-box">
                Apply for Private Product Demonstration
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-cyan-glow rounded flex items-center justify-center">
              <Shield className="text-charcoal w-4 h-4" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight">DETECTRA <span className="text-cyan-glow">AI</span></span>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            Protecting global financial institutions from the next generation of synthetic media attacks.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest">Product</h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Forensics</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Security</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest">Company</h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest">Contact</h5>
            <p className="text-sm text-white/60">contact@detectraai.com</p>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
        <p>© 2026 Detectra AI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-glow selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <CaseBreakdown />
        <Technology />
        <Differentiation />
        <WhoWeServe />
        <FounderSection />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}
