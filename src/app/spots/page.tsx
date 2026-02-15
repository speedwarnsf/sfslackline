'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

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
  photo?: string;
  photoCaption?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  bestTimes?: string;
  whatToBring?: string[];
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
    photo: '/photos/nightline-2.jpg',
    photoCaption: 'Nightline at the palms · Oct 2010',
    difficulty: 'All Levels',
    bestTimes: 'Sundays afternoon. Weekdays after 4pm in summer. Avoid mornings — fog burns off by noon.',
    whatToBring: ['Tree pads', 'Sunscreen', 'Water', 'Ratchet kit or primitive setup', 'Shoes (grass can be damp)'],
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
    photo: '/photos/panhandle-170.jpg',
    photoCaption: '170ft at Cole & Fell · Nov 2011',
    difficulty: 'Intermediate',
    bestTimes: 'Weekends midday. Less foot traffic than Dolores. Wind can pick up in the afternoon.',
    whatToBring: ['Pulley system (ratchet won\'t cut it for 100ft+)', 'Tree pads', 'Backup line', 'Patience'],
  },
  {
    name: 'Ocean Beach / Fort Funston',
    aka: 'South of hang gliders · Pilings',
    lat: 37.7141,
    lng: -122.5024,
    gpsSource: 'Corrected to southern Ocean Beach / Fort Funston area',
    tweetCount: '5+',
    years: '2011',
    note: '150ft line over sand. Beach slacklining at the pilings.',
    lengths: '150ft over sand',
    photo: '/photos/ocean-beach.jpg',
    photoCaption: '150ft over sand · Dec 2011',
    difficulty: 'Advanced',
    bestTimes: 'Low wind days only. Check forecast — the beach gets hammered by wind. Best in fall when the fog clears.',
    whatToBring: ['Pulley system', 'Extra webbing', 'Warm layers', 'Windbreaker', 'Sand-resistant gear bags'],
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
    difficulty: 'Advanced',
    bestTimes: 'Weekends. Less crowded than Dolores. Fog can linger here longer — give it until noon.',
    whatToBring: ['Full longline setup', 'Tree pads (big trees here)', 'Layers — GGP is cooler than the Mission'],
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
    photo: '/photos/highline.jpg',
    photoCaption: 'Highline · Feb 2012',
    difficulty: 'Advanced',
    bestTimes: 'Morning before the wind picks up. Lands End gets battered in the afternoon.',
    whatToBring: ['Full rigging kit', 'Harness + leash if highlining', 'Warm layers', 'First aid kit'],
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
    difficulty: 'Intermediate',
    bestTimes: 'Weekends. Check tide — water level affects the setup.',
    whatToBring: ['Waterline-rated webbing', 'Towel', 'Change of clothes', 'Tree pads'],
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
    difficulty: 'Beginner',
    bestTimes: 'Afternoons. Quieter neighborhood park — less foot traffic.',
    whatToBring: ['Ratchet kit', 'Tree pads', 'Water'],
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
    difficulty: 'Beginner',
    bestTimes: 'Weekday evenings, weekend mornings. Small park — go when it\'s quiet.',
    whatToBring: ['Ratchet kit', 'Tree pads'],
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

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export default function SpotsPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [activeLines, setActiveLines] = useState<string[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapFailed, setMapFailed] = useState(false);

  const isSplit = activeLines.length >= 2;

  // Initialize map once and keep it alive across view transitions
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    let cancelled = false;

    const initMap = () => {
      if (cancelled || !mapContainer.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mapboxgl = (window as any).mapboxgl;
      if (!mapboxgl || !MAPBOX_TOKEN) {
        setMapFailed(true);
        return;
      }
      mapboxgl.accessToken = MAPBOX_TOKEN;
      try {
        const m = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/outdoors-v12',
          center: [-122.435, 37.77],
          zoom: 12,
        });
        mapRef.current = m;
        m.on('load', () => { if (!cancelled) setMapLoaded(true); });
        m.on('error', () => { if (!cancelled) setMapFailed(true); });
        m.addControl(new mapboxgl.NavigationControl(), 'top-right');

        spots.forEach((spot) => {
          const el = document.createElement('div');
          el.className = 'spot-marker';
          el.innerHTML = `<div class="marker-dot ${spot.name === 'Dolores Park' || spot.name === 'The Panhandle' ? 'primary' : 'secondary'}"><div class="pulse-ring"></div></div>`;
          el.addEventListener('click', () => {
            setSelectedSpot(spot);
            m.flyTo({ center: [spot.lng, spot.lat], zoom: 15, duration: 1200 });
          });
          new mapboxgl.Marker({ element: el }).setLngLat([spot.lng, spot.lat]).addTo(m);
        });
      } catch {
        setMapFailed(true);
      }
    };

    const existing = document.getElementById('mapbox-gl-script');
    if (existing) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.id = 'mapbox-gl-script';
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.js';
      script.async = true;
      script.onload = initMap;
      script.onerror = () => setMapFailed(true);
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.css';
      document.head.appendChild(link);
    }

    return () => {
      cancelled = true;
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef.current as any).remove?.();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resize map when returning from split view
  useEffect(() => {
    if (!isSplit && mapRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const m = mapRef.current as any;
      // Allow DOM to update visibility before resizing
      requestAnimationFrame(() => {
        m.resize?.();
      });
    }
  }, [isSplit]);

  const [zoomedSpot, setZoomedSpot] = useState<Spot | null>(null);

  const flyTo = (spot: Spot) => {
    setSelectedSpot(spot);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const m = mapRef.current as any;
    if (m?.flyTo) {
      m.flyTo({ center: [spot.lng, spot.lat], zoom: 15, duration: 1200 });
    }
    // For static map fallback — show zoomed satellite of this spot
    if (mapFailed || !mapRef.current) {
      setZoomedSpot(spot);
    }
    // Scroll to map
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const simulateLineUp = (name: string) => {
    setActiveLines(prev => [...prev, name]);
    const spot = spots.find(s => s.name === name);
    if (spot) flyTo(spot);
  };

  // Static map URL as fallback
  const staticMapUrl = MAPBOX_TOKEN
    ? `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/${spots
        .map(s => `pin-s+C8A84E(${s.lng},${s.lat})`)
        .join(',')
      }/-122.435,37.77,11,0/800x500@2x?access_token=${MAPBOX_TOKEN}`
    : '';

  return (
    <div className="mt-14 font-body">
      {/* Header */}
      <div className="bg-[#1A3A4A] px-5 py-6 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white mb-1">Where We Slack</h1>
          <p className="text-sm text-white/60 font-light">
            {spots.length} spots from 9 years of tweets &amp; EXIF data · {activeLines.length > 0 ? `${activeLines.length} line${activeLines.length > 1 ? 's' : ''} up` : 'Come out and change that'}
          </p>
        </div>
      </div>

      {/* Active lines banner */}
      {activeLines.length > 0 && (
        <div className="bg-[#C8A84E] px-5 py-3">
          <div className="max-w-5xl mx-auto flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full  bg-[#1A3A4A] opacity-75" />
              <span className="relative inline-flex  h-3 w-3 bg-[#1A3A4A]" />
            </span>
            <span className="text-[#1A3A4A] text-sm font-semibold">
              {activeLines.join(' · ')} — LINE{activeLines.length > 1 ? 'S' : ''} UP
            </span>
          </div>
        </div>
      )}

      {/* Map area — splits when multiple lines are active */}
      {isSplit && (
        /* SPLIT VIEW: one panel per active line */
        <div
          className={`grid w-full ${activeLines.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : activeLines.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 sm:grid-rows-2'}`}
          style={{ height: '65vh', minHeight: '450px' }}
        >
          {activeLines.slice(0, 4).map((name) => {
            const spot = spots.find(s => s.name === name);
            if (!spot) return null;
            const panelMapUrl = MAPBOX_TOKEN
              ? `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/pin-l+C8A84E(${spot.lng},${spot.lat})/${spot.lng},${spot.lat},16,0/400x400@2x?access_token=${MAPBOX_TOKEN}`
              : '';
            return (
              <div key={name} className="relative overflow-hidden border border-[#1A3A4A]/20">
                {panelMapUrl && (
                  <img src={panelMapUrl} alt={spot.name} className="w-full h-full object-cover" />
                )}
                {/* Pulsing beacon overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full  bg-[#C8A84E] opacity-60" />
                    <span className="relative inline-flex  h-6 w-6 bg-[#C8A84E] border-2 border-white shadow-lg" />
                  </span>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full  bg-[#C8A84E] opacity-75" />
                      <span className="relative inline-flex  h-2 w-2 bg-[#C8A84E]" />
                    </span>
                    <span className="text-white text-xs font-semibold">{spot.name}</span>
                  </div>
                  <p className="text-white/60 text-[10px] mt-0.5">{spot.aka}</p>
                  {spot.lengths && <p className="text-white/50 text-[10px]">{spot.lengths}</p>}
                  <a
                    href={`https://earth.google.com/web/@${spot.lat},${spot.lng},50a,100d,35y,0h,45t,0r`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A84E] text-[10px] font-medium hover:text-white transition-colors mt-1 inline-block"
                  >
                    Google Earth →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SINGLE MAP VIEW — always mounted, hidden during split to preserve map instance */}
      <div className="relative w-full" style={{ height: isSplit ? 0 : '65vh', minHeight: isSplit ? 0 : '450px', overflow: isSplit ? 'hidden' : undefined, visibility: isSplit ? 'hidden' : undefined }}>
          <div
            ref={mapContainer}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {mapFailed && staticMapUrl && (
            <div className="absolute inset-0 z-[1]">
              <img
                src={zoomedSpot
                  ? `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/pin-l+C8A84E(${zoomedSpot.lng},${zoomedSpot.lat})/${zoomedSpot.lng},${zoomedSpot.lat},16,0/800x500@2x?access_token=${MAPBOX_TOKEN}`
                  : staticMapUrl
                }
                alt={zoomedSpot ? zoomedSpot.name : 'SF Slackline Spots'}
                className="w-full h-full object-cover"
              />
              {zoomedSpot ? (
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-white/90  px-3 py-2 shadow">
                    <p className="text-sm font-semibold text-[#1A3A4A]">{zoomedSpot.name}</p>
                    <p className="text-[10px] text-[#1E6B7B]">{zoomedSpot.aka}</p>
                  </div>
                  <button
                    onClick={() => setZoomedSpot(null)}
                    className="bg-white/90  px-3 py-2 shadow text-xs text-[#1A3A4A] font-medium hover:bg-white transition-colors"
                  >
                    All spots
                  </button>
                </div>
              ) : (
                <div className="absolute top-3 left-3 bg-white/90  px-3 py-2 shadow text-xs text-[#1A3A4A]">
                  Tap a spot below to zoom in
                </div>
              )}
            </div>
          )}

          {selectedSpot && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:w-80 bg-white  shadow-lg p-4 z-10">
              <button onClick={() => setSelectedSpot(null)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
              <h3 className="font-display text-lg font-black text-[#1A3A4A]">{selectedSpot.name}</h3>
              <p className="text-xs text-[#1E6B7B] font-medium">{selectedSpot.aka}</p>
              <p className="text-xs text-gray-500 font-light mt-2">{selectedSpot.note}</p>
              {selectedSpot.lengths && (
                <p className="text-xs text-gray-500 mt-1"><span className="font-medium text-[#1A3A4A]">Lines:</span> {selectedSpot.lengths}</p>
              )}
              <a
                href={`https://earth.google.com/web/@${selectedSpot.lat},${selectedSpot.lng},50a,300d,35y,0h,45t,0r`}
                target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E6B7B] hover:text-[#C8A84E] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                See the trees in Google Earth →
              </a>
              <div className="mt-2 flex gap-4 text-[10px] text-gray-400">
                <span>{selectedSpot.tweetCount} tweets</span>
                <span>Active {selectedSpot.years}</span>
              </div>
              {activeLines.includes(selectedSpot.name) && (
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#C8A84E]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full  bg-[#C8A84E] opacity-75" />
                    <span className="relative inline-flex  h-2 w-2 bg-[#C8A84E]" />
                  </span>
                  LINE UP NOW
                </div>
              )}
            </div>
          )}
        </div>

      {/* Demo controls */}
      <div className="bg-[#1A3A4A] px-5 py-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Demo: simulate real-time</p>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => simulateLineUp('Dolores Park')} className="px-3 py-1.5 bg-[#C8A84E] text-[#1A3A4A] text-xs font-semibold hover:bg-[#B8983E] transition-colors">DP Line Up</button>
            <button onClick={() => simulateLineUp('The Panhandle')} className="px-3 py-1.5 bg-[#C8A84E] text-[#1A3A4A] text-xs font-semibold hover:bg-[#B8983E] transition-colors">Panhandle Up</button>
            <button onClick={() => setActiveLines([])} className="px-3 py-1.5 border border-white/20 text-white/60 text-xs hover:bg-white/5 transition-colors">All Down</button>
          </div>
        </div>
      </div>

      {/* Line Lengths — from verified tweets */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-10">
        <blockquote className="border-l-4 border-[#C8A84E] pl-4 py-2 mb-8">
          <p className="text-[#1A3A4A] text-sm sm:text-base italic leading-relaxed">
            &ldquo;Equinox line this sunday!! 135&apos; at panhandle and cole. Celebrate perfect balance with us.&rdquo;
          </p>
          <footer className="text-[11px] text-[#1A3A4A]/40 mt-1.5 not-italic">@sfslackline &middot; Sep 22, 2013</footer>
        </blockquote>
        <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-1">Line Lengths</h2>
        <p className="text-sm text-gray-500 mb-6">Verified from @sfslackline tweets</p>
        <div className="space-y-2">
          {[
            { len: '35ft', ctx: 'Beginner lines at Dolores Park', pct: 12 },
            { len: '40ft', ctx: 'Panhandle secondary lines', pct: 14 },
            { len: '70–80ft', ctx: 'Standard park lines', pct: 27 },
            { len: '100ft', ctx: 'Panhandle with Mac · Dec 2011', pct: 34 },
            { len: '120ft', ctx: 'Panhandle · Dec 2013', pct: 41 },
            { len: '130–140ft', ctx: 'Cole & Fell — most common longline', pct: 48 },
            { len: '150ft', ctx: 'Ocean Beach over sand', pct: 51 },
            { len: '186ft', ctx: 'Panhandle record · Nov 2012', pct: 63 },
            { len: '195ft', ctx: 'Panhandle · Jun 2013', pct: 66 },
            { len: '200–300ft', ctx: 'GGP threaded · Mar 2012', pct: 100 },
          ].map((l) => (
            <div key={l.len}>
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-black text-[#1A3A4A] w-20 shrink-0 text-right">{l.len}</span>
                <div className="flex-1 bg-gray-100  h-5 overflow-hidden">
                  <div
                    className="h-full  bg-gradient-to-r from-[#1E6B7B] to-[#C8A84E]"
                    style={{ width: `${l.pct}%`, minWidth: '8px' }}
                  />
                </div>
              </div>
              <p className="text-[11px] text-gray-400 font-light ml-[calc(5rem+12px)]">{l.ctx}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Spots list */}
      <div className="max-w-5xl mx-auto px-5 py-10">
        <blockquote className="border-l-4 border-[#C8A84E] pl-4 py-2 mb-6">
          <p className="text-[#1A3A4A] text-sm italic leading-relaxed">
            &ldquo;4 lines up at lake merrit in oakland. Field tripping in the east bay.&rdquo;
          </p>
          <footer className="text-[11px] text-[#1A3A4A]/40 mt-1.5">@sfslackline &middot; Oct 1, 2011</footer>
        </blockquote>
        <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-1">All Spots</h2>
        <p className="text-sm text-gray-500 mb-6">Full profiles for every verified location</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {spots.map((spot) => (
            <button
              key={spot.name}
              onClick={() => flyTo(spot)}
              className="text-left  border border-gray-200 hover:border-[#1E6B7B] hover:shadow-md transition-all overflow-hidden"
            >
              {spot.photo && (
                <div className="relative h-48 sm:h-56">
                  <Image src={spot.photo} alt={spot.photoCaption || spot.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
              )}
              <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-[#1A3A4A]">{spot.name}</h3>
                  <p className="text-xs text-[#1E6B7B] font-medium">{spot.aka}</p>
                </div>
                <div className="flex items-center gap-2">
                  {spot.difficulty && (
                    <span className={`text-[10px] px-1.5 py-0.5 font-semibold border ${
                      spot.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                      spot.difficulty === 'Intermediate' ? 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20' :
                      spot.difficulty === 'Advanced' ? 'bg-red-50 text-red-600 border-red-200' :
                      'bg-[#1E6B7B]/10 text-[#1E6B7B] border-[#1E6B7B]/20'
                    }`}>{spot.difficulty}</span>
                  )}
                  {activeLines.includes(spot.name) && (
                    <span className="relative flex h-3 w-3 mt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full  bg-[#C8A84E] opacity-75" />
                      <span className="relative inline-flex  h-3 w-3 bg-[#C8A84E]" />
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{spot.note}</p>
              {spot.lengths && <p className="text-xs text-gray-400 mt-1"><span className="font-medium text-[#1A3A4A]">Lines:</span> {spot.lengths}</p>}
              {spot.bestTimes && (
                <p className="text-xs text-gray-400 mt-1"><span className="font-medium text-[#1A3A4A]">Best times:</span> {spot.bestTimes}</p>
              )}
              {spot.whatToBring && spot.whatToBring.length > 0 && (
                <div className="mt-2">
                  <span className="text-[10px] font-medium text-[#1A3A4A] uppercase tracking-wider">Bring:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {spot.whatToBring.map((item) => (
                      <span key={item} className="text-[10px] px-1.5 py-0.5 bg-[#F5F0E0] text-[#1A3A4A]/70 border border-[#C8A84E]/10">{item}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">{spot.tweetCount} tweets · {spot.years}</span>
                <a
                  href={`https://earth.google.com/web/@${spot.lat},${spot.lng},50a,300d,35y,0h,45t,0r`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-[10px] text-[#1E6B7B] hover:text-[#C8A84E] font-medium"
                >
                  Google Earth {"->"}
                </a>
              </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Marker CSS */}
      <style jsx global>{`
        .spot-marker { cursor: pointer; }
        .marker-dot {
          width: 16px; height: 16px;
          position: relative; border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
          transform: rotate(45deg);
        }
        .marker-dot.primary { background: #C8A84E; width: 20px; height: 20px; }
        .marker-dot.secondary { background: #1E6B7B; }
        .pulse-ring {
          position: absolute; inset: -6px;
          border: 2px solid #C8A84E;
          animation: pulse-ring 2s ease-out infinite; opacity: 0;
        }
        .marker-dot.secondary .pulse-ring { border-color: #1E6B7B; }
        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
