'use client';

import { useEffect, useRef, useState } from 'react';
import type maplibregl from 'maplibre-gl';

/*
 * ALL SPOT DATA FROM: SF_SLACKLINE_VOICE_AND_DATA.md
 * GPS from EXIF metadata or known park coordinates.
 * Tweet counts from @sfslackline archive (360 tweets, 2011–2018).
 */

interface Spot {
  name: string;
  aka: string;
  lat: number;
  lng: number;
  gpsSource: string;
  tweetCount: string;
  years: string;
  note: string;
  lengths?: string;
  active?: boolean; // for future real-time status
}

const spots: Spot[] = [
  {
    name: 'Dolores Park',
    aka: '"The Palms" · Cumberland & Dolores',
    lat: 37.7593,
    lng: -122.4260,
    gpsSource: 'nightline-2.jpg EXIF',
    tweetCount: '200+',
    years: '2010–2018',
    note: 'Primary spot since 2009. Near J Church line. "The palms."',
    lengths: '35–80ft typical, up to 6 lines simultaneously',
  },
  {
    name: 'The Panhandle',
    aka: 'Cole & Fell',
    lat: 37.7712,
    lng: -122.4530,
    gpsSource: 'Known park location + tweet references',
    tweetCount: '50+',
    years: '2011–2016',
    note: 'Longline territory. 80–200ft. "cole in the panhandle."',
    lengths: '80–195ft, record 186ft (Nov 2012)',
  },
  {
    name: 'Ocean Beach / Fort Funston',
    aka: 'South of hang gliders · Pilings',
    lat: 37.7748,
    lng: -122.4472,
    gpsSource: 'ocean-beach.jpg EXIF',
    tweetCount: '5+',
    years: '2011',
    note: '150ft line over sand. Beach slacklining at the pilings.',
    lengths: '150ft over sand',
  },
  {
    name: 'Golden Gate Park',
    aka: 'Near the log cabin',
    lat: 37.7694,
    lng: -122.4862,
    gpsSource: 'Tweet references',
    tweetCount: '5+',
    years: '2012–2016',
    note: '"Near the log cabin in GG park." 200–300ft threaded attempts.',
    lengths: '200–300ft threaded (Mar 2012)',
  },
  {
    name: 'Fort Miley',
    aka: 'Lands End area',
    lat: 37.7847,
    lng: -122.5057,
    gpsSource: 'Tweet Nov 24, 2013',
    tweetCount: '2+',
    years: '2013',
    note: '"Ft Miley line up one high and one low!" With Dat Phan.',
  },
  {
    name: 'Islais Creek Park',
    aka: 'Dogpatch · Waterlines',
    lat: 37.7564,
    lng: -122.3877,
    gpsSource: 'Tweet Oct 6, 2013',
    tweetCount: '3+',
    years: '2013',
    note: 'Waterlines. "Water Lines going up at islais park in dog patch." 71ft.',
    lengths: '71ft waterline',
  },
  {
    name: 'Precita Park',
    aka: 'Bernal Heights',
    lat: 37.7477,
    lng: -122.4124,
    gpsSource: 'Tweet Feb 2014',
    tweetCount: '3+',
    years: '2014',
    note: '"Short line up at Precita Park - Dat." Later-era spot.',
  },
  {
    name: 'Duboce Park',
    aka: 'Base of the park',
    lat: 37.7692,
    lng: -122.4337,
    gpsSource: 'Tweet Aug 10, 2016',
    tweetCount: '1',
    years: '2016',
    note: '"Nice looking line going up at the base of duboce park."',
  },
  {
    name: 'SF Rooftop',
    aka: 'Unknown location',
    lat: 37.7868,
    lng: -122.4038,
    gpsSource: 'rooftop.jpg EXIF · iPhone 4',
    tweetCount: '—',
    years: '2012',
    note: 'GPS from photo EXIF. Rooftop slackline session.',
  },
  {
    name: 'MLK Park, Sausalito',
    aka: 'Coloma St & Olima St',
    lat: 37.8590,
    lng: -122.4852,
    gpsSource: 'Tweet Sep 7, 2012',
    tweetCount: '3+',
    years: '2012',
    note: '"SlackDay in MLK park!! 30+ confirmed." Huge slackfest.',
  },
  {
    name: 'Lake Merritt, Oakland',
    aka: 'Near Grand Lake Theatre',
    lat: 37.8044,
    lng: -122.2606,
    gpsSource: 'Tweet Oct 1, 2011',
    tweetCount: '1',
    years: '2011',
    note: '"4 lines up at lake merrit in oakland. Field tripping in the east bay."',
  },
];

export default function SpotsPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [splitView, setSplitView] = useState(false);

  // Simulate active lines for demo
  const [activeLines, setActiveLines] = useState<string[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    let cancelled = false;

    import('maplibre-gl').then((ml) => {
      if (cancelled || !mapContainer.current) return;
    // CSS loaded via link tag below
    const maplibregl = ml.default;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/positron',
      center: [-122.435, 37.77],
      zoom: 12,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Add spot markers
    spots.forEach((spot) => {
      const el = document.createElement('div');
      el.className = 'spot-marker';
      el.innerHTML = `
        <div class="marker-dot ${spot.name === 'Dolores Park' || spot.name === 'The Panhandle' ? 'primary' : 'secondary'}">
          <div class="pulse-ring"></div>
        </div>
      `;

      el.addEventListener('click', () => {
        setSelectedSpot(spot);
        map.current?.flyTo({
          center: [spot.lng, spot.lat],
          zoom: 15,
          duration: 1200,
        });
      });

      new maplibregl.Marker({ element: el })
        .setLngLat([spot.lng, spot.lat])
        .addTo(map.current!);
    });

    }); // end dynamic import

    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const simulateLineUp = (spotName: string) => {
    setActiveLines((prev) => [...prev, spotName]);
    const spot = spots.find((s) => s.name === spotName);
    if (spot && map.current) {
      map.current.flyTo({
        center: [spot.lng, spot.lat],
        zoom: 16,
        duration: 1500,
      });
      setSelectedSpot(spot);
    }
  };

  const simulateLineDown = (spotName: string) => {
    setActiveLines((prev) => prev.filter((n) => n !== spotName));
  };

  return (
    <div className="mt-14 font-body">
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css" />
      {/* Header */}
      <div className="bg-[#1A3A4A] px-5 py-6 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white mb-1">Spot Map</h1>
          <p className="text-sm text-white/60 font-light">
            {spots.length} verified locations from tweets + EXIF GPS · {activeLines.length > 0 ? `${activeLines.length} line${activeLines.length > 1 ? 's' : ''} up now` : 'No lines up right now'}
          </p>
        </div>
      </div>

      {/* Active lines banner */}
      {activeLines.length > 0 && (
        <div className="bg-[#C8A84E] px-5 py-3">
          <div className="max-w-5xl mx-auto flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A3A4A] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1A3A4A]" />
            </span>
            <span className="text-[#1A3A4A] text-sm font-semibold">
              {activeLines.join(' · ')} — LINE{activeLines.length > 1 ? 'S' : ''} UP
            </span>
          </div>
        </div>
      )}

      {/* Map + sidebar layout */}
      <div className="flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 180px)' }}>
        {/* Map */}
        <div className="relative flex-1 min-h-[400px]">
          <div ref={mapContainer} className="absolute inset-0" />

          {/* Selected spot card */}
          {selectedSpot && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:w-80 bg-white rounded-xl shadow-lg p-4 z-10">
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg"
              >
                ×
              </button>
              <h3 className="font-display text-lg font-black text-[#1A3A4A]">{selectedSpot.name}</h3>
              <p className="text-xs text-[#1E6B7B] font-medium">{selectedSpot.aka}</p>
              <p className="text-xs text-gray-500 font-light mt-2">{selectedSpot.note}</p>
              {selectedSpot.lengths && (
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-medium text-[#1A3A4A]">Lines:</span> {selectedSpot.lengths}
                </p>
              )}
              <div className="mt-3 flex gap-4 text-[10px] text-gray-400">
                <span>{selectedSpot.tweetCount} tweets</span>
                <span>Active {selectedSpot.years}</span>
                <span>📍 {selectedSpot.gpsSource}</span>
              </div>
              {activeLines.includes(selectedSpot.name) && (
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C8A84E]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A84E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8A84E]" />
                  </span>
                  LINE UP NOW
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar — spot list */}
        <div className="lg:w-80 bg-[#F2F4F6] overflow-y-auto border-l border-gray-200">
          {/* Demo controls */}
          <div className="p-4 bg-[#1A3A4A] text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Demo: simulate real-time</p>
            <div className="flex gap-2">
              <button
                onClick={() => simulateLineUp('Dolores Park')}
                className="px-3 py-1.5 bg-[#C8A84E] text-[#1A3A4A] rounded text-xs font-semibold hover:bg-[#B8983E] transition-colors"
              >
                DP Line Up
              </button>
              <button
                onClick={() => simulateLineUp('The Panhandle')}
                className="px-3 py-1.5 bg-[#C8A84E] text-[#1A3A4A] rounded text-xs font-semibold hover:bg-[#B8983E] transition-colors"
              >
                Panhandle Up
              </button>
              <button
                onClick={() => setActiveLines([])}
                className="px-3 py-1.5 border border-white/20 text-white/60 rounded text-xs hover:bg-white/5 transition-colors"
              >
                All Down
              </button>
            </div>
          </div>

          {/* Spot list */}
          <div className="divide-y divide-gray-200">
            {spots.map((spot) => (
              <button
                key={spot.name}
                onClick={() => {
                  setSelectedSpot(spot);
                  map.current?.flyTo({
                    center: [spot.lng, spot.lat],
                    zoom: 15,
                    duration: 1200,
                  });
                }}
                className={`w-full text-left p-4 hover:bg-white transition-colors ${
                  selectedSpot?.name === spot.name ? 'bg-white' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-[#1A3A4A]">{spot.name}</h3>
                    <p className="text-[11px] text-[#1E6B7B]">{spot.aka}</p>
                  </div>
                  {activeLines.includes(spot.name) && (
                    <span className="relative flex h-3 w-3 mt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A84E] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8A84E]" />
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">{spot.tweetCount} tweets · {spot.years}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spot Profiles — Full list view */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">All Spots</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Full profiles for every verified location</p>

          <div className="space-y-4">
            {spots.map((spot) => (
              <div key={spot.name} className="p-5 rounded-xl border border-gray-100 hover:border-[#C8A84E]/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-24 shrink-0">
                    <span className="text-[10px] font-mono text-[#C8A84E] bg-[#C8A84E]/10 px-2 py-0.5 rounded">{spot.tweetCount} tweets</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-black text-[#1A3A4A]">{spot.name}</h3>
                    <p className="text-xs text-[#1E6B7B] font-medium">{spot.aka}</p>
                    <p className="text-sm text-gray-600 font-light mt-2 leading-relaxed">{spot.note}</p>
                    {spot.lengths && (
                      <p className="text-xs text-gray-500 mt-2">
                        <span className="font-semibold text-[#1A3A4A]">Lines:</span> {spot.lengths}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-4 text-[10px] text-gray-400">
                      <span>Active: {spot.years}</span>
                      <span>GPS: {spot.gpsSource}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS for map markers */}
      <style jsx global>{`
        .spot-marker {
          cursor: pointer;
        }
        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: relative;
          border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .marker-dot.primary {
          background: #C8A84E;
          width: 20px;
          height: 20px;
        }
        .marker-dot.secondary {
          background: #1E6B7B;
        }
        .pulse-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid #C8A84E;
          animation: pulse-ring 2s ease-out infinite;
          opacity: 0;
        }
        .marker-dot.secondary .pulse-ring {
          border-color: #1E6B7B;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .maplibregl-map {
          font-family: var(--font-body), system-ui, sans-serif;
        }
      `}</style>
    </div>
  );
}
