import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Play } from "lucide-react";
import LinkCard from "./components/LinkCards";
import EnglishFeature from "./components/EnglishFeature";
import { LINKS, WHATSAPP_NUMBERS } from "./data/links";

function App() {
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isWhatsappOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isWhatsappOpen]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Cairo',sans-serif] pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%]"
        >
          <MessageCircle size={100} className="text-[#56ccd2]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[5%]"
        >
          <Play size={120} className="text-[#ef5a4b]" />
        </motion.div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-[500px] mx-auto flex justify-between items-center py-8 px-6">
        <a
          href="https://www.youtube.com/@MahmoudRadwan.Englishawy"
          className="bg-[#56ccd2] text-white text-[11px] font-black px-5 py-2.5 rounded-full shadow-lg shadow-[#56ccd2]/20 hover:scale-105 transition-transform active:scale-95 no-underline"
        >
          Subscribe
        </a>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <h2 className="text-[#2d336b] font-black text-xl leading-none tracking-tighter">
              ENGLISH<span className="text-[#56ccd2]">AWY</span>
            </h2>
            <span className="text-[8px] font-black text-[#2d336b]/40 uppercase tracking-[0.2em] mt-1">
              Official Platform
            </span>
          </div>
          <img
            src="/512x512bb.jpg"
            alt="Logo"
            className="h-11 w-11 object-cover rounded-2xl border-2 border-white shadow-sm"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[500px] mx-auto px-6">
        {/* Profile Section */}
        <section className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <motion.div
              animate={{ rotate: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[#56ccd2] rounded-[2.8rem] opacity-20 scale-105"
            />
            <img
              src="/OIP (1).webp"
              className="relative w-36 h-36 rounded-[3rem] object-cover border-4 border-white shadow-2xl"
              alt="Mr. Radwan"
            />
          </div>
          <h1 className="text-3xl font-black text-[#2d336b] mb-1">
            Mahmoud Radwan
          </h1>
          <p className="text-[#56ccd2] font-black text-[11px] uppercase tracking-[0.3em]">
            Englishawy Expert
          </p>
        </section>
        <EnglishFeature />

        {/* Dynamic Links */}
        <div className="flex flex-col gap-4">
          {LINKS.map((link, index) => (
            <LinkCard
              key={link.id}
              link={link}
              index={index}
              onSupportClick={() => setIsWhatsappOpen(true)}
            />
          ))}
        </div>
      </main>

      {/* Modal Portal */}
      {createPortal(
        <AnimatePresence>
          {isWhatsappOpen && (
            <div
              className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/50"
              onClick={() => setIsWhatsappOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-[360px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 pb-4 text-center border-b border-gray-100 bg-white">
                  <button
                    onClick={() => setIsWhatsappOpen(false)}
                    className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-gray-400 hover:text-black active:scale-90 transition-all duration-200 z-10"
                  >
                    <X size={20} />
                  </button>

                  <div className="bg-[#56ccd2]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={32} className="text-[#56ccd2]" />
                  </div>
                  <h2 className="text-xl font-black text-[#2d336b] mb-1">
                    Technical Support
                  </h2>
                  <p className="text-gray-400 font-bold text-xs uppercase">
                    Choose your department
                  </p>
                </div>

                <div className="overflow-y-auto max-h-[40vh] custom-scrollbar bg-white">
                  <div className="p-8 pt-4 custom-scrollbar-content">
                    <div className="grid gap-3">
                      {WHATSAPP_NUMBERS.map((num) => (
                        <a
                          key={num.id}
                          href={`https://wa.me/${num.phone}`}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-[#56ccd2]/10 hover:border-[#56ccd2]/30 transition-all duration-300 ease-in-out no-underline"
                        >
                          <div className="bg-[#56ccd2] text-white p-2 rounded-lg group-hover:scale-110 group-hover:bg-[#56ccd2]/90 transition-all duration-300">
                            <MessageCircle size={18} />
                          </div>
                          <span className="font-black text-[#2d336b] text-sm group-hover:text-[#56ccd2] transition-colors duration-300">
                            {num.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}

export default App;
