import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroProps {
  name: string;
  image: string;
  subtitle?: string;
}

export const Hero = ({ name, image, subtitle }: HeroProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/50 to-gray-100 dark:from-black/80 dark:via-black/60 dark:to-black transition-colors duration-300" />
      </div>

      <div className="absolute inset-0 z-10 opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="soundGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                className="text-gray-200 dark:text-gray-500"
                style={{ stopColor: 'currentColor' }}
              />
              <stop
                offset="50%"
                className="text-white dark:text-gray-400"
                style={{ stopColor: 'currentColor' }}
              />
              <stop
                offset="100%"
                className="text-gray-200 dark:text-gray-500"
                style={{ stopColor: 'currentColor' }}
              />
            </linearGradient>
          </defs>

          <motion.path
            d="M-50,400 
               Q180,200 360,400 
               T720,400 
               T1080,400 
               T1440,400"
            stroke="url(#soundGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.9, 0.9, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.4, 0.8, 1],
              ease: "easeInOut"
            }}
          />

          <motion.path
            d="M-50,380 
               Q180,180 360,380 
               T720,380 
               T1080,380 
               T1440,380"
            stroke="url(#soundGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.8, 0.8, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.4, 0.8, 1],
              ease: "easeInOut",
              delay: 0.2
            }}
          />

          <motion.path
            d="M-50,420 
               Q180,220 360,420 
               T720,420 
               T1080,420 
               T1440,420"
            stroke="url(#soundGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.8, 0.8, 0],
              y: [0, -25, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.4, 0.8, 1],
              ease: "easeInOut",
              delay: 0.4
            }}
          />

          <motion.path
            d="M-50,440 
               Q180,240 360,440 
               T720,440 
               T1080,440 
               T1440,440"
            stroke="url(#soundGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.8, 0.8, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.4, 0.8, 1],
              ease: "easeInOut",
              delay: 0.6
            }}
          />
        </svg>
      </div>

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
  );
};
