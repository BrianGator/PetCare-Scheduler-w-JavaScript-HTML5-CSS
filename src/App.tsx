/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Dog, 
  Cat, 
  Calendar, 
  Heart, 
  Award, 
  Mail, 
  CheckCircle, 
  ChevronUp, 
  Star,
  ShieldCheck,
  Zap,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface Recommendation {
  id: number;
  name: string;
  text: string;
}

// --- Data ---

const INITIAL_SKILLS: Skill[] = [
  { id: 1, name: "Java Backend Dev", icon: <Code className="w-8 h-8 text-blue-500" /> },
  { id: 2, name: "Pet First Aid", icon: <ShieldCheck className="w-8 h-8 text-red-500" /> },
  { id: 3, name: "Behavioral Training", icon: <Dog className="w-8 h-8 text-orange-500" /> },
  { id: 4, name: "Mobile UI/UX", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
  { id: 5, name: "Nutrition Planning", icon: <Heart className="w-8 h-8 text-pink-500" /> },
];

const INITIAL_PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Java Pet Scheduler", 
    description: "A robust Java-based backend system for managing pet appointments and medical histories with enterprise-grade reliability.",
    icon: <Calendar className="w-10 h-10 text-indigo-600" />
  },
  { 
    id: 2, 
    title: "Pawsitive Hub", 
    description: "A community platform built with HTML/CSS focusing on connecting pet owners with local certified trainers and walkers.",
    icon: <Cat className="w-10 h-10 text-orange-400" />
  },
  { 
    id: 3, 
    title: "K9 Health Monitor", 
    description: "Real-time health tracking app that visualizes pet activity metrics using D3.js and responsive CSS layouts.",
    icon: <Heart className="w-10 h-10 text-red-400" />
  },
];

const INITIAL_RECOMMENDATIONS: Recommendation[] = [
  { id: 1, name: "Sarah Jenkins", text: "Brian is the most reliable pet care professional we've ever worked with. His Java scheduler made our booking process seamless!" },
  { id: 2, name: "Michael Chen", text: "Incredible attention to detail. My energetic Labrador came back home calm and perfectly trained. Highly recommended!" },
  { id: 3, name: "Emily Rodriguez", text: "The health tracker Brian built helped us save our cat's life by spotting early warning signs. A true innovator." },
];

export default function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(INITIAL_RECOMMENDATIONS);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmitRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;

    const newRec: Recommendation = {
      id: Date.now(),
      name: newName,
      text: newText,
    };

    setRecommendations([...recommendations, newRec]);
    setNewName('');
    setNewText('');
    
    // Task 3: Trigger showPopup only when a new recommendation is submitted
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Task 1: Your own name appears in the top-left corner */}
          <div className="font-bold text-xl tracking-tight text-indigo-900" id="profile-name">
            Brian McCarthy
          </div>
          
          {/* Task 1: Navigation bar includes About Me, Project Details, Skills, and Recommendations */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-indigo-600 transition-colors">About Me</a>
            <a href="#projects" className="text-sm font-medium hover:text-indigo-600 transition-colors">Project Details</a>
            <a href="#skills" className="text-sm font-medium hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#recommendations" className="text-sm font-medium hover:text-indigo-600 transition-colors">Recommendations</a>
            {/* Task 1: Home icon works correctly */}
            <button 
              onClick={scrollToTop}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Back to home"
            >
              <Home id="home-icon" className="w-5 h-5 text-indigo-600" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* About Me Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 hover:underline hover:font-black hover:decoration-indigo-500 transition-all cursor-default">About Me</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Hi, I'm <span className="font-bold text-indigo-600 underline decoration-indigo-200">Brian McCarthy</span>. I bridge the gap between technical innovation and compassionate pet care. With a background in IBM Java technologies and a passion for animals, I create digital solutions that help pet owners manage their busy lives while ensuring their furry companions get the best possible care.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Whether it's developing custom scheduling algorithms or providing hands-on behavioral training, my goal is to enhance the bond between humans and pets through technology and expert care.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Brian McCarthy - Pet Care Professional" 
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award className="text-amber-500" />
                  <span className="font-bold text-sm">Certified IBM Java Dev & Trainer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-24 border-y border-neutral-200 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center hover:underline hover:font-black hover:decoration-indigo-500 transition-all cursor-default">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {INITIAL_SKILLS.map((skill) => (
                <motion.div 
                  key={skill.id}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-sm text-neutral-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left hover:underline hover:font-black hover:decoration-indigo-500 transition-all cursor-default">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6 p-4 bg-indigo-50 rounded-2xl w-fit group-hover:bg-indigo-100 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                  View Case Study <CheckCircle className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left hover:underline hover:font-black hover:decoration-indigo-500 transition-all cursor-default">Recommendations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode='popLayout'>
              {recommendations.map((rec) => (
                <motion.div 
                  key={rec.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 bg-indigo-900 text-white rounded-2xl shadow-lg relative"
                >
                  <Star className="absolute top-6 right-6 text-amber-400 w-5 h-5" fill="currentColor" />
                  <p className="text-lg italic mb-6 leading-relaxed text-indigo-100">
                    "{rec.text}"
                  </p>
                  <div className="mt-auto">
                    <span className="font-bold text-lg">— {rec.name}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* New Recommendation Form */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-neutral-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Write a Recommendation</h3>
            <form onSubmit={handleSubmitRecommendation} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Share your experience working with Brian..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200"
              >
                Submit Recommendation
              </button>
            </form>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h4 className="font-bold text-xl mb-4">Brian McCarthy</h4>
            <p className="text-neutral-400 max-w-xs text-sm">Bridging pet care and technology with Java-powered solutions for modern pet owners.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={scrollToTop} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <ChevronUp className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Brian McCarthy • Portfolio Project
        </div>
      </footer>

      {/* Success Popup */}
      {/* Task 3: showPopup triggered only when a new recommendation is submitted */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-white border border-green-100 shadow-2xl rounded-2xl px-8 py-6 flex items-center gap-4"
          >
            <div className="p-2 bg-green-100 rounded-full text-green-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-xl">Submission Successful!</h4>
              <p className="text-neutral-600">Thank you for your recommendation.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
