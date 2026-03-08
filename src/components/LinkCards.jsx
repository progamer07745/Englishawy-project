import { motion } from "framer-motion";
import { useState } from "react";

const getBrandStyles = (title) => {
  const t = title.toLowerCase();
  if (t.includes("platform")) return "bg-[#ef5a4b] shadow-[#ef5a4b]/30";
  if (t.includes("youtube")) return "bg-[#FF0000] shadow-[#FF0000]/30";
  if (t.includes("facebook")) return "bg-[#1877F2] shadow-[#1877F2]/30";
  if (t.includes("whatsapp")) return "bg-[#25D366] shadow-[#25D366]/30";
  if (t.includes("telegram")) return "bg-[#24A1DE] shadow-[#24A1DE]/30";
  if (t.includes("technical")) return "bg-[#56ccd2] shadow-[#56ccd2]/30";
  return "bg-[#2d336b] shadow-indigo-900/20";
};

function LinkCard({ link, index, onSupportClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = link.icon;
  const brandClass = getBrandStyles(link.title);
  const isSupport =
    link.id === 10 || link.title.toLowerCase().includes("support");

  const handleClick = () => {
    if (isSupport) {
      onSupportClick();
    } else if (link.url) {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  };

  const hoverRotate = index % 2 === 0 ? 2 : -2;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        rotate: hoverRotate,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="w-full cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${brandClass} flex items-center p-1 rounded-[2.5rem] shadow-xl relative overflow-hidden`}
      >
        {/* الأيقونة الصغيرة في الشمال (بتفضل موجودة) */}
        <div className="bg-white/20 p-4 rounded-[2.2rem] ml-1 relative z-10">
          {Icon && <Icon size={26} className="text-white" />}
        </div>

        {/* النص في النص */}
        <div className="flex-1 text-center pr-4 text-white font-black text-lg italic uppercase relative z-10">
          {link.title}
        </div>

        {/* الجهة اليمين - فيها السهم والأيقونة الكبيرة */}
        <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden">
          {/* السهم العادي (يختفي مع hover) */}
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute text-white/50"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.div>

          {/* الأيقونة الكبيرة (تظهر مع hover) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.2 : 0.5,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
            className="absolute"
          >
            {Icon && (
              <Icon size={48} className="text-white/90 drop-shadow-lg" />
            )}
          </motion.div>

          {/* تأثير توهج خلف الأيقونة (اختياري) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 0.6 : 0,
              scale: isHovered ? 1.5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-12 h-12 bg-white/20 rounded-full blur-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default LinkCard;
