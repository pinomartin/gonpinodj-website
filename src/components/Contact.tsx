import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Instagram, Music2, Youtube } from "lucide-react";

interface ContactProps {
  email: string;
  instagram: string;
  spotify?: string;
  youtube: string;
}

export const Contact = ({
  email,
  instagram,
  spotify,
  youtube,
}: ContactProps) => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Mail, href: `mailto:${email}`, label: "Email" },
    {
      icon: Instagram,
      href: `https://instagram.com/${instagram}`,
      label: "Instagram",
    },
    { icon: Youtube, href: `https://youtube.com/${youtube}`, label: "Youtube" },
    ...(spotify ? [{ icon: Music2, href: spotify, label: "Spotify" }] : []),
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          {t("common.bookingContact")}
        </h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-gray-700 dark:text-white" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};