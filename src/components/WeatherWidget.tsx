'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  temp: string;
  condition: string;
  wind: string;
  humidity: string;
  feelsLike: string;
  icon: string;
}

function getWeatherIcon(code: string): string {
  // wttr.in condition codes mapped to simple text icons
  const c = parseInt(code, 10);
  if (c === 113) return 'Clear';
  if (c === 116) return 'Partly cloudy';
  if (c === 119 || c === 122) return 'Overcast';
  if (c === 143 || c === 248 || c === 260) return 'Foggy';
  if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314, 353, 356, 359].includes(c)) return 'Rain';
  if ([179, 182, 185, 227, 230, 281, 284, 317, 320, 323, 326, 329, 332, 335, 338, 350, 362, 365, 368, 371, 374, 377, 392, 395].includes(c)) return 'Snow/Sleet';
  if ([200, 386, 389].includes(c)) return 'Thunderstorm';
  return 'Unknown';
}

function getSlacklineVerdict(condition: string, windMph: number, tempF: number): { verdict: string; detail: string } {
  if (condition.includes('Rain') || condition.includes('Thunder')) {
    return { verdict: 'Sketch', detail: 'Wet webbing is slippery. Not ideal but some of us go anyway.' };
  }
  if (condition.includes('Fog')) {
    return { verdict: 'Moody', detail: 'Classic SF fog. Line will be damp. Grip is reduced but the vibes are unreal.' };
  }
  if (windMph > 20) {
    return { verdict: 'Windy', detail: 'Wind over 20mph makes longlines a fight. Short lines still work.' };
  }
  if (windMph > 12) {
    return { verdict: 'Breezy', detail: 'Noticeable wind. Longlines will sway. Short park lines are fine.' };
  }
  if (tempF < 50) {
    return { verdict: 'Cold', detail: 'Bundle up. Barefoot is rough below 50F. Shoes on the line work.' };
  }
  if (tempF > 85) {
    return { verdict: 'Hot', detail: 'Sunscreen. Water. The webbing gets hot in direct sun.' };
  }
  if (condition.includes('Clear') || condition.includes('Partly')) {
    return { verdict: 'Send it', detail: 'Good conditions. Lines up. Sun out. Come play.' };
  }
  return { verdict: 'Decent', detail: 'Conditions are workable. Get out there.' };
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://wttr.in/San+Francisco?format=j1', {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        const current = data.current_condition?.[0];
        if (!current) throw new Error('No data');

        setWeather({
          temp: current.temp_F,
          condition: getWeatherIcon(current.weatherCode),
          wind: current.windspeedMiles,
          humidity: current.humidity,
          feelsLike: current.FeelsLikeF,
          icon: current.weatherCode,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (error) return null;

  if (loading) {
    return (
      <div className="bg-[#1A3A4A] p-5 border border-[#C8A84E]/20 animate-pulse">
        <div className="h-4 bg-white/10 w-32 mb-3" />
        <div className="h-8 bg-white/10 w-20 mb-2" />
        <div className="h-3 bg-white/10 w-48" />
      </div>
    );
  }

  if (!weather) return null;

  const windMph = parseInt(weather.wind, 10);
  const tempF = parseInt(weather.temp, 10);
  const { verdict, detail } = getSlacklineVerdict(weather.condition, windMph, tempF);

  return (
    <div className="bg-[#1A3A4A] p-5 sm:p-6 border border-[#C8A84E]/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] text-[#C8A84E] font-semibold uppercase tracking-widest mb-1">SF Weather Now</p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl font-black text-white">{weather.temp}F</span>
            <span className="text-white/50 text-sm font-light">{weather.condition}</span>
          </div>
          <div className="flex gap-4 mt-2 text-xs text-white/40">
            <span>Feels {weather.feelsLike}F</span>
            <span>Wind {weather.wind}mph</span>
            <span>Humidity {weather.humidity}%</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            verdict === 'Send it' ? 'bg-[#C8A84E] text-[#1A3A4A]' :
            verdict === 'Sketch' || verdict === 'Windy' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
            'bg-white/10 text-white/70 border border-white/20'
          }`}>
            {verdict}
          </span>
        </div>
      </div>
      <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">{detail}</p>
      <p className="text-[10px] text-white/20 mt-2">via wttr.in -- weather matters for outdoor slacklining</p>
    </div>
  );
}
