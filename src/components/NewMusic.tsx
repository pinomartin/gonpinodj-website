import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const CLIENT_ID = "F3QWu4vVHIWXxyHXFTxhItd9dKFwKCUa"; // Replace with your actual Client ID
const USERNAME = "djgonpino"; // Replace with your SoundCloud username

const SoundCloudPlayer: React.FC = () => {
  const [trackUrl, setTrackUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
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
      }
    };

    fetchTrack();
  }, []);

  return (
    <div>
      <h2>My SoundCloud Music</h2>
      {trackUrl ? (
        <ReactPlayer url={trackUrl} controls />
      ) : (
        <p>Loading track...</p>
      )}
    </div>
  );
};

export default SoundCloudPlayer;
