import React, { useState, useEffect } from "react";
import { Lightbulb, Sparkles, BookOpen, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TIPS = [
  {
    wrong: "I'm student",
    right: "I'm a student",
    note: "Don't forget the article 'a'",
    category: "Articles",
  },
  {
    wrong: "I'm looking forward to see you",
    right: "I'm looking forward to seeing you",
    note: "Always use -ing after this phrase",
    category: "Gerunds",
  },
  {
    wrong: "He study English",
    right: "He studies English",
    note: "Present simple 's' with he/she/it",
    category: "Present Simple",
  },
  {
    wrong: "I have 20 years",
    right: "I am 20 years old",
    note: "Use 'to be' for age, not 'have'",
    category: "Common Mistakes",
  },
  {
    wrong: "I prefer tea than coffee",
    right: "I prefer tea to coffee",
    note: "Use 'to' with prefer",
    category: "Prepositions",
  },
  {
    wrong: "She don't like coffee",
    right: "She doesn't like coffee",
    note: "Use 'doesn't' with he/she/it",
    category: "Auxiliary Verbs",
  },
  {
    wrong: "I go to cinema yesterday",
    right: "I went to the cinema yesterday",
    note: "Use past tense for completed actions",
    category: "Past Simple",
  },
  {
    wrong: "How many money do you have?",
    right: "How much money do you have?",
    note: "'Money' is uncountable → use 'much'",
    category: "Quantifiers",
  },
];

const getRandomTip = () => TIPS[Math.floor(Math.random() * TIPS.length)];

export default function EnglishFeature() {
  const [tip, setTip] = useState(getRandomTip());
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTip(getRandomTip());
      setShowExplanation(false);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setTip(getRandomTip());
    setShowExplanation(false);
  };

  return (
    <div className="group relative mb-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2d336b] via-[#56ccd2] to-[#2d336b] p-[2px] shadow-[0_20px_40px_-15px_rgba(86,204,210,0.3)] transform-gpu transition-all duration-500 hover:scale-[1.02]">
      <div className="relative z-10 h-full w-full rounded-[2.5rem] bg-white/90 backdrop-blur-sm p-6">
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 opacity-5 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
          <BookOpen size={120} className="text-[#56ccd2]" />
        </div>
        <div className="absolute -top-6 -left-6 opacity-5 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
          <Lightbulb size={100} className="text-[#2d336b]" />
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Header with category and refresh */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#56ccd2]/10">
                <Sparkles size={14} className="text-[#56ccd2]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2d336b]/60">
                {tip.category}
              </span>
            </div>

            {/* Refresh button */}
            <button
              onClick={handleRefresh}
              className="text-xs text-[#56ccd2] hover:text-[#2d336b] transition-colors flex items-center gap-1 bg-[#56ccd2]/5 px-3 py-1 rounded-full hover:bg-[#56ccd2]/10"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 4v6h-6M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
              <span>New tip</span>
            </button>
          </div>

          {/* Main content */}
          <div className="space-y-4">
            {/* Wrong section */}
            <div className="bg-red-50/80 rounded-2xl p-4 border border-red-100">
              <p className="text-[10px] font-black uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                Don't say
              </p>
              <p className="text-base font-medium text-red-500 line-through decoration-red-300 decoration-2">
                {tip.wrong}
              </p>
            </div>

            {/* Right section  */}
            <div className="bg-green-50/80 rounded-2xl p-4 border border-green-100">
              <p className="text-[10px] font-black uppercase tracking-wider text-green-500 mb-2 flex items-center gap-1">
                <CheckCircle size={12} className="text-green-500" />
                Better say
              </p>
              <p className="text-xl font-black text-[#2d336b]">{tip.right}</p>
            </div>

            {/* Note section with toggle */}
            <div
              className="mt-2 rounded-xl bg-[#56ccd2]/5 p-3 cursor-pointer hover:bg-[#56ccd2]/10 transition-all border border-[#56ccd2]/10"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#56ccd2] text-white flex items-center justify-center text-xs font-bold">
                  i
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#56ccd2]">
                  Why? {showExplanation ? "▲" : "▼"}
                </span>
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-[#2d336b]/70 mt-2 leading-relaxed border-t border-[#56ccd2]/20 pt-2"
                  >
                    {tip.note}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Small footer */}
          <div className="mt-4 text-[8px] font-black text-[#2d336b]/30 uppercase tracking-wider text-center flex items-center justify-center gap-1">
            <span className="w-1 h-1 bg-[#56ccd2] rounded-full"></span>
            grammar secret · refresh for more
            <span className="w-1 h-1 bg-[#56ccd2] rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#56ccd2]/20 to-[#2d336b]/20 blur-2xl -z-10" />
    </div>
  );
}
