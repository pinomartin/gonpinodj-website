import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

interface BiographyProps {
  content: string;
  image: string;
}

export const Biography = ({ content, image }: BiographyProps) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          {t("common.biography")}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {t("biography.myStory.title")}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("biography.myStory.content")}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {t("biography.notableCollaborations.title")}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("biography.notableCollaborations.content")}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {t("biography.musicalGenres.title")}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("biography.musicalGenres.content")}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={image}
                alt={t("common.biography")}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
