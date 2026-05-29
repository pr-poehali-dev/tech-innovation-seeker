import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/43245e12-4edd-4ff4-8a85-0494b400aa3a/files/192b76f0-ce76-435f-a796-b42a475353bb.jpg"
          alt="Специальное дефектологическое образование"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Карьерный навигатор</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          СПЕЦИАЛЬНОЕ<br />(ДЕФЕКТОЛОГИЧЕСКОЕ)<br />ОБРАЗОВАНИЕ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Помогаем особенным детям раскрыть свой потенциал.<br />Профессия, в которой каждый шаг имеет значение.
        </p>
      </div>
    </div>
  );
}