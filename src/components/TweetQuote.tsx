export default function TweetQuote({ text, date, note }: { text: string; date: string; note?: string }) {
  return (
    <blockquote className="border-l-4 border-[#C8A84E] pl-4 py-2 my-6">
      <p className="text-[#1A3A4A] text-sm sm:text-base italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <footer className="text-[11px] text-[#1A3A4A]/40 mt-1.5 not-italic">
        @sfslackline &middot; {date}
        {note && <span className="text-[#1E6B7B] ml-2">{note}</span>}
      </footer>
    </blockquote>
  );
}

export function TweetQuoteDark({ text, date, note }: { text: string; date: string; note?: string }) {
  return (
    <blockquote className="border-l-4 border-[#C8A84E] pl-4 py-2 my-6">
      <p className="text-white/90 text-sm sm:text-base italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <footer className="text-[11px] text-white/30 mt-1.5 not-italic">
        @sfslackline &middot; {date}
        {note && <span className="text-[#C8A84E] ml-2">{note}</span>}
      </footer>
    </blockquote>
  );
}
