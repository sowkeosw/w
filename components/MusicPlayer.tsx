import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Loader2 } from 'lucide-react';

// Declare SoundCloud Widget API types
declare global {
  interface Window {
    SC: any;
  }
}

// SoundCloud Track URL
const SOUNDCLOUD_URL = "https://soundcloud.com/sdwjdjksd/minamoto";

const MusicPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [widget, setWidget] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Script loading logic
    const scriptId = 'soundcloud-api-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initWidget = () => {
      if (!iframeRef.current || !window.SC) return;

      try {
        const scWidget = window.SC.Widget(iframeRef.current);
        setWidget(scWidget);

        scWidget.bind(window.SC.Widget.Events.READY, () => {
          console.log('SoundCloud Widget Ready');
          setIsReady(true);
          // Attempt to set volume, though some mobile browsers ignore this
          scWidget.setVolume(50); 
        });

        scWidget.bind(window.SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
        });

        scWidget.bind(window.SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });

        scWidget.bind(window.SC.Widget.Events.FINISH, () => {
          setIsPlaying(false);
        });
        
        scWidget.bind(window.SC.Widget.Events.ERROR, (e: any) => {
          console.error('SoundCloud Widget Error:', e);
          setLoadError(true);
        });

      } catch (error) {
        console.error("Error initializing widget:", error);
        setLoadError(true);
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://w.soundcloud.com/player/api.js";
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = initWidget;
    } else {
      // If script already loaded, just init
      if (window.SC) {
        initWidget();
      } else {
        // Wait for it if it's currently loading
        script.onload = initWidget;
      }
    }

    // Cleanup not strictly necessary for singleton script, but good practice to unbind if we could
    return () => {
      // We don't remove the script to avoid reloading it constantly
    };
  }, []);

  const handlePlayToggle = () => {
    if (!widget || !isReady) return;

    if (isPlaying) {
      widget.pause();
    } else {
      widget.play();
    }
  };

  const handleMuteToggle = () => {
    if (!widget || !isReady) return;
    
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    widget.setVolume(newMuteState ? 0 : 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in-up">
        {/* 
          SoundCloud Iframe 
          - Using opacity 0 instead of clip to ensure better mobile compatibility 
          - pointer-events-none to prevent interaction with the invisible frame
        */}
        <div className="absolute opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
          <iframe
              ref={iframeRef}
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
              title="SoundCloud Player"
          />
        </div>
        
        {/* Controls */}
        <div className={`flex items-center gap-2 p-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300 ${isReady ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
            
            {/* Loading Indicator */}
            {!isReady && !loadError && (
               <Loader2 size={16} className="text-red-500 animate-spin mx-2" />
            )}

            {loadError && (
               <span className="text-xs text-red-500 px-2">Error</span>
            )}

            {isReady && (
              <>
                <button 
                    onClick={handleMuteToggle}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    title={isMuted ? "음소거 해제" : "음소거"}
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <button 
                    onClick={handlePlayToggle}
                    className={`
                        flex items-center justify-center w-10 h-10 rounded-full 
                        transition-all duration-300 transform hover:scale-105 active:scale-95
                        ${isPlaying 
                            ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }
                    `}
                    title={isPlaying ? "일시정지" : "재생"}
                >
                    {isPlaying ? (
                        <Pause size={20} className="fill-current" />
                    ) : (
                        <Play size={20} className="fill-current ml-0.5" />
                    )}
                </button>
              </>
            )}
        </div>
        
        {/* Now Playing Label */}
        {isPlaying && (
            <div className="absolute -top-8 right-0 bg-red-900/80 px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest text-white border border-red-500/30 whitespace-nowrap animate-pulse">
                NOW PLAYING
            </div>
        )}
    </div>
  );
};

export default MusicPlayer;