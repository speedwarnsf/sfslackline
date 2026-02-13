'use client';

import Image from 'next/image';
import Lightbox, { useLightbox } from '@/components/Lightbox';

/*
 * PHOTOS — Dedicated gallery page
 * All photos from /public/photos/ with EXIF metadata from SF_SLACKLINE_VOICE_AND_DATA.md
 */

const photos = [
  { src: '/photos/highline-2.jpg', caption: 'First highline · Feb 18, 2012 · Canon EOS-1D Mark IV', camera: 'Canon 1D IV', date: 'Feb 2012' },
  { src: '/photos/highline.jpg', caption: 'Highline · Feb 18, 2012 · Canon EOS-1D Mark IV', camera: 'Canon 1D IV', date: 'Feb 2012' },
  { src: '/photos/prideline.jpg', caption: 'Pride weekend · Jun 25, 2011 · MS690', camera: 'MS690', date: 'Jun 2011' },
  { src: '/photos/prideline-2.jpg', caption: 'Pride weekend · Jun 25, 2011', camera: '', date: 'Jun 2011' },
  { src: '/photos/ocean-beach.jpg', caption: 'Ocean Beach · 150ft over sand · Dec 6, 2011 · GPS: 37.7748, -122.4472', camera: '', date: 'Dec 2011' },
  { src: '/photos/ocean-beach-2.jpg', caption: 'Ocean Beach · 150ft line · Dec 5, 2011', camera: '', date: 'Dec 2011' },
  { src: '/photos/nightline-2.jpg', caption: 'Nightline at Dolores Park · Oct 12, 2010 · iPhone · GPS: 37.7593, -122.4260', camera: 'iPhone', date: 'Oct 2010' },
  { src: '/photos/nightline-3.jpg', caption: 'Nightline at Dolores Park', camera: '', date: '2011' },
  { src: '/photos/nightline.jpg', caption: 'Nightline at the palms · Dolores Park', camera: '', date: '2011' },
  { src: '/photos/rainbow.jpg', caption: 'Rainbow line · Aug 8, 2010 · Nikon D90', camera: 'Nikon D90', date: 'Aug 2010' },
  { src: '/photos/panhandle-170.jpg', caption: '170ft at the Panhandle · Nov 27, 2011', camera: '', date: 'Nov 2011' },
  { src: '/photos/panhandle-nemesis.jpg', caption: 'Panhandle nemesis line', camera: '', date: '2012' },
  { src: '/photos/july4th.jpg', caption: 'July 4th weekend · Jul 2, 2011 · Nikon D90', camera: 'Nikon D90', date: 'Jul 2011' },
  { src: '/photos/memorial.jpg', caption: 'Memorial Day · May 30, 2011 · Nikon D90', camera: 'Nikon D90', date: 'May 2011' },
  { src: '/photos/rooftop.jpg', caption: 'SF rooftop session · Feb 24, 2012 · iPhone 4 · GPS: 37.7868, -122.4038', camera: 'iPhone 4', date: 'Feb 2012' },
  { src: '/photos/yosemite.jpg', caption: 'Yosemite · Aug 10, 2010 · Canon PowerShot G11', camera: 'Canon G11', date: 'Aug 2010' },
  { src: '/photos/sausalito.jpg', caption: 'SlackDay festival · MLK Park, Sausalito · Sep 8, 2012 · 30+ people', camera: '', date: 'Sep 2012' },
  { src: '/photos/big-sur.jpg', caption: 'Big Sur', camera: '', date: '2011' },
  { src: '/photos/big-sur-2.jpg', caption: 'Big Sur', camera: '', date: '2011' },
  { src: '/photos/0-0.jpg', caption: 'Memorial Day · May 30, 2011', camera: '', date: 'May 2011' },
  { src: '/photos/april2011.jpg', caption: 'April 2011', camera: '', date: 'Apr 2011' },
];

export default function PhotosPage() {
  const lightbox = useLightbox(
    photos.map((p) => ({ src: p.src, alt: p.caption, caption: p.caption }))
  );

  return (
    <div className="mt-14 font-body bg-[#0A0A0A] min-h-screen">
      {lightbox.index >= 0 && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={lightbox.close} />
      )}

      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
          The Archive
        </h1>
        <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
          21 curated photos from a collection of 849 across 57 albums.
          Shot on Nikon D90s, Canon 1D Mark IVs, iPhones, and whatever was handy.
          Full archive lives at{' '}
          <a href="https://sfslackline.org" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E] underline hover:text-[#D4B85E]">
            sfslackline.org
          </a>.
        </p>
        <div className="flex gap-4 mt-6 text-white/30 text-xs">
          <span>21 photos</span>
          <span>·</span>
          <span>2010–2012</span>
          <span>·</span>
          <span>Click any photo to view full size</span>
        </div>
      </div>

      {/* Masonry-ish grid on dark bg */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => lightbox.open(i)}
            >
              <div className="relative overflow-hidden ">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium drop-shadow-lg">{photo.caption}</p>
                </div>
              </div>
              {photo.camera && (
                <p className="text-white/20 text-[10px] mt-1.5 pl-1">{photo.camera} · {photo.date}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/20 text-xs">
            849 photos · 57 albums · 2009–2013 · sfslackline.org
          </p>
          <p className="text-white/10 text-[10px] mt-2">
            Cameras: Nikon D90, Canon EOS-1D Mark IV, Canon PowerShot G11, iPhone 3GS/4/4S, MS690
          </p>
        </div>
      </div>
    </div>
  );
}
