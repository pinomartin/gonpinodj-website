'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const CLIENT_ID = "F3QWu4vVHIWXxyHXFTxhItd9dKFwKCUa"; // Replace with your actual Client ID
const USERNAME = "djgonpino"; // Replace with your SoundCloud username

const SoundCloudPlayer: React.FC = () => {
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchTrack = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Get the user's SoundCloud profile
        const userRes = await axios.get(
          `https://api-v2.soundcloud.com/resolve?url=https://soundcloud.com/${USERNAME}&client_id=${CLIENT_ID}`
        );

        const userId = userRes.data.id;

        // Get the user's latest track
        const tracksRes = await axios.get(
          `https://api-v2.soundcloud.com/users/${userId}/tracks?client_id=${CLIENT_ID}`
        );

        console.log(tracksRes, "tracksRes");

        if (tracksRes.data.collection.length > 0) {
          setTrackUrl(tracksRes.data.collection[0].uri); // Get the first track
        }
      } catch (error) {
        console.error("Error fetching track:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
            {t('music.title')}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {loading && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  {t('music.loading')}
                </p>
              </div>
            )}
            
            {error && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <p className="text-red-500 dark:text-red-400">
                  {t('music.error')}
                </p>
              </div>
            )}
            
            {trackUrl && !loading && !error && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <ReactPlayer
                  url={trackUrl}
                  width="100%"
                  height="166px"
                  controls
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundCloudPlayer;
