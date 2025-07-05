import "@vidstack/react/player/styles/base.css";
import { useRef } from "react";
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";
import trimmedVideoDogor from "../assets/trimmedVideoDogor.mp4";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function HeroVideo({
  name,
  subtitle,
}: {
  name: string;
  subtitle: string;
}) {
  const player = useRef<MediaPlayerInstance>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <MediaPlayer
      className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
      title="Main Video"
      src={trimmedVideoDogor}
      crossOrigin
      loop
      playsInline
      autoPlay
      muted
      ref={player}
    >
      <MediaProvider>
        <div className="w-full h-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blend-overlay bg-black/50">
          <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="relative h-screen w-full overflow-hidden"
          >
            <div className="relative h-full flex items-center justify-center text-center z-20">
              <div className="px-4">
                <motion.h1
                  initial={{ y: 50 }}
                  animate={inView ? { y: 0 } : {}}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                >
                  {name}
                </motion.h1>
                {subtitle && (
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-100 drop-shadow-md"
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.section>
        </div>
      </MediaProvider>
    </MediaPlayer>
  );
}
