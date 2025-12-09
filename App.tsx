
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, AlertTriangle, TrendingDown } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { GlassCard } from './components/GlassCard';
import { MediaPlaceholder } from './components/MediaPlaceholder';
import { ResultsChart } from './components/ResultsChart';
import { CONTENT } from './constants';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#A020F0] selection:text-white">
      <Navbar />

      {/* --- Section 1: Hero --- */}
      <section id="story" className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0015FF] via-black to-black text-white">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#0015FF]/20 border border-[#0015FF] text-[#0015FF] text-sm font-semibold mb-6">
              Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Three Hours a Day, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Just to Check PDFs
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              How WeWill.ai helped CT Consulting turn a manual bottleneck into a custom AI-powered app.
            </p>
            
            <GlassCard theme="dark" className="mt-8">
              <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                {CONTENT.section1}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#0015FF]/20 border border-white/10 group">
              <img 
                src="team.jpg" 
                alt="WeWill.ai and CT Consulting team members" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* --- Section 2: Document Chain --- */}
      <Section id="process" theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-dark">The Document Chain Nobody Sees</h2>
            <GlassCard theme="light">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {CONTENT.section2}
              </p>
            </GlassCard>
          </div>
          <div>
            <MediaPlaceholder 
              type="graphic" 
              description="Diagram of document chain: OC → OF → COF → DDT → Invoice" 
              className="bg-white border-gray-300"
            />
          </div>
        </div>
      </Section>

      {/* --- Section 3: Before the App --- */}
      <Section theme="dark">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Before the App: Starting with Questions</h2>
            <div className="w-20 h-1 bg-[#0015FF] mx-auto rounded-full"></div>
          </div>

          <GlassCard theme="dark" className="relative overflow-hidden">
             {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A020F0]/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-200 leading-relaxed whitespace-pre-line mb-6">
                  {CONTENT.section3}
                </p>
              </div>
              
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                <img 
                  src="workshop.jpg" 
                  alt="Workshop session: people mapping processes" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </GlassCard>

          <blockquote className="text-2xl md:text-3xl font-semibold text-center leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            "We didn’t start by building an AI app. We started by asking where people were actually losing time."
          </blockquote>
        </div>
      </Section>

      {/* --- Section 4: Hidden Cost --- */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-dark">The Hidden Cost of Manual Checking</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {CONTENT.section4}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-lg text-red-600">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Time Lost Analysis</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600 font-medium">Daily Cost</span>
                  <span className="text-2xl font-bold text-gray-900">3–4 Hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600 font-medium">Monthly Cost</span>
                  <span className="text-2xl font-bold text-gray-900">60–80 Hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-l-4 border-red-500">
                  <span className="text-gray-600 font-medium">Annual Cost</span>
                  <span className="text-2xl font-bold text-red-600">~100 Days</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 text-center">
                Equivalent to 83–110 full working days per year for one person.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Section 5: Designing the Solution --- */}
      <Section id="app" theme="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Designing Around the Way People Work</h2>
        </div>
        
        <GlassCard theme="dark" className="mb-12 border-t-4 border-t-[#A020F0]">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                {CONTENT.section5}
              </p>
            </div>
            <div className="flex-1 w-full">
              <MediaPlaceholder 
                type="graphic" 
                description='The "WeWill Layer" between ERP + email and the documents' 
                height="h-72"
              />
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* --- Section 6: How it works --- */}
      <Section theme="light">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">How the WeWill Layer Works</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                {CONTENT.section6}
              </p>
            </div>
            <div className="flex-1 w-full">
              <MediaPlaceholder 
                type="video" 
                description="Motion graphic: documents flowing from inbox → WeWill layer → Auto-OK / Review queues" 
                className="bg-white shadow-lg"
              />
            </div>
          </div>

          <blockquote className="border-l-4 border-[#0015FF] pl-6 py-2 text-xl md:text-2xl italic font-medium text-gray-800 bg-white p-6 rounded-r-xl shadow-sm">
            "The goal wasn’t to remove humans from the loop, but to make sure they only step in when their judgment really matters."
          </blockquote>
        </div>
      </Section>

      {/* --- Section 7: The Bug Catch --- */}
      <Section theme="dark" className="bg-[#111]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#A020F0]">
              <AlertTriangle size={28} />
              <span className="font-bold tracking-wider uppercase">Real World Scenario</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Day It Caught Five Extra Lines</h2>
            <GlassCard theme="dark">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {CONTENT.section7}
              </p>
            </GlassCard>
          </div>
          <div>
            <MediaPlaceholder 
              type="graphic" 
              description="Comparison: Original Order vs Confirmation with 5 extra lines highlighted in red" 
              height="h-[400px]"
              className="border-red-500/30 bg-red-900/10"
            />
          </div>
        </div>
      </Section>

      {/* --- Section 8: Results --- */}
      <Section id="results" theme="light">
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark">From 16 Minutes to 4</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GlassCard theme="light" className="flex flex-col justify-center">
             <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                {CONTENT.section8}
              </p>
          </GlassCard>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
             <ResultsChart />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Highlight Cards */}
          <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500">
            <h4 className="font-bold text-lg mb-2 text-gray-900">Massive Time Savings</h4>
            <p className="text-sm text-gray-600">Reduced document processing time by 75%.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-purple-500">
            <h4 className="font-bold text-lg mb-2 text-gray-900">Enhanced Master Data</h4>
            <p className="text-sm text-gray-600">Cleaned up product codes and supplier details automatically.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-indigo-500">
            <h4 className="font-bold text-lg mb-2 text-gray-900">AI Insights</h4>
            <p className="text-sm text-gray-600">Added visibility on margins, top products, and suppliers.</p>
          </div>
        </div>
      </Section>

      {/* --- Section 9: Conclusion --- */}
      <Section theme="gradient" className="min-h-[80vh] flex items-center text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <TrendingDown className="w-16 h-16 mx-auto mb-8 text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">What We Learned: Always Start from the Bottleneck</h2>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed whitespace-pre-line mb-12">
              {CONTENT.section9}
            </p>

            <button 
              onClick={scrollToTop}
              className="group relative px-8 py-4 bg-white text-[#0015FF] font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Back to Top <ArrowDown className="rotate-180 group-hover:-translate-y-1 transition-transform" size={18} />
              </span>
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-white/10 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
             <div className="font-bold text-2xl tracking-tight text-white mb-2">
              WeWill<span className="text-[#0015FF]">.ai</span>
            </div>
            <p className="text-gray-500 text-sm">Building AI around the way you work.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} WeWill.ai</span>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
