'use client';

import { useState } from 'react';

export default function YouTubeEmbed({ id, title }: { id: string; title?: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <div
        className="relative w-full overflow-hidden cursor-pointer group bg-black"
        style={{ paddingBottom: '56.25%' }}
        onClick={() => setLoaded(true)}
      >
        <img
          src={thumb}
          alt={title || 'Video thumbnail'}
          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-11 bg-[#1A3A4A] flex items-center justify-center group-hover:bg-[#C8A84E] transition-colors duration-200">
            <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white/70 text-[10px] font-medium">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title || 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
