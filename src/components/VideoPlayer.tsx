import "@vidstack/react/player/styles/base.css";

import { useRef } from "react";

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  // Poster,
  // Track,
  // type MediaCanPlayDetail,
  // type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  // type MediaProviderChangeEvent,
} from "@vidstack/react";

// import { VideoLayout } from './components/layouts/video-layout';
// import { textTracks } from './tracks';
import trimmedVideoDogor from "../assets/trimmedVideoDogor.mp4";

export function VideoPlayer() {
  const player = useRef<MediaPlayerInstance>(null);

  function onProviderChange(
    provider: MediaProviderAdapter | null
    // nativeEvent: MediaProviderChangeEvent
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }


  return (
    <MediaPlayer
      className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
      title="Sprite Fight"
      src={trimmedVideoDogor}
      crossOrigin
      loop
      playsInline
      autoPlay
      muted
      onProviderChange={onProviderChange}
      ref={player}
    >
      <MediaProvider>
        <div className="w-full h-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blend-overlay bg-black/50">
          <div className="relative flex items-center justify-center w-full h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
              {"Hirings"}
            </h2>
          </div>
        </div>
      </MediaProvider>
    </MediaPlayer>
  );
}
