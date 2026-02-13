import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mt-14 font-body min-h-[60vh] flex items-center justify-center bg-[#F5F0E0]">
      <div className="text-center px-5">
        <p className="font-display text-8xl sm:text-9xl font-black text-[#1A3A4A]/10 leading-none">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] -mt-4 mb-3">
          Line&apos;s down.
        </h1>
        <p className="text-[#1A3A4A]/60 text-sm font-light mb-6 max-w-sm mx-auto">
          This page doesn&apos;t exist — kind of like SF Rec &amp; Park&apos;s slacklining policy.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1A3A4A] text-[#C8A84E] px-6 py-3  text-xs font-bold uppercase tracking-widest hover:bg-[#0F2A36] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
