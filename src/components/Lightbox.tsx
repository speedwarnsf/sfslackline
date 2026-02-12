'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

export interface LightboxImage {
  src: string;
  alt?: string;
  caption?: string;
}

export function useLightbox(images: LightboxImage[]) {
  const [index, setIndex] = useState(-1);
  const open = (i: number) => setIndex(i);
  const close = () => setIndex(-1);
  return { index, open, close, images };
}

export default function Lightbox({
  images,
  index,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const touchStart = useRef<number | null>(null);

  useEffect(() => setCurrent(index), [index]);

  const prev = useCallback(() => setCurrent((c) => (c > 0 ? c - 1 : images.length - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c < images.length - 1 ? c + 1 : 0)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  if (index < 0 || !images[current]) return null;
  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
      onClick={onClose}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(diff) > 50) { diff > 0 ? prev() : next(); }
        touchStart.current = null;
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-4xl max-h-[75vh]">
          <Image
            src={img.src}
            alt={img.alt || ''}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>
        {(img.caption || img.alt) && (
          <p className="text-white/80 text-sm font-light mt-3 text-center max-w-lg px-4">
            {img.caption || img.alt}
          </p>
        )}
        {images.length > 1 && (
          <p className="text-white/40 text-xs mt-1">{current + 1} / {images.length}</p>
        )}
      </div>
    </div>
  );
}
