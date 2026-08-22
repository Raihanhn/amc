// components/Ticker.js
// Infinite-scrolling text ticker. Each word is outlined by default and
// fills solid gold on hover. Hovering the strip also pauses the scroll
// so the visitor can actually read/interact with a word.

const DEFAULT_ITEMS = [
  "Schengen Region",
  "Turkey",
  "United Arab Emirates",
  "Russia",
  "Serbia",
  "Portugal",
  "North Macedonia",
  "Armenia",
  "Saudi Arabia",
  "Moldova",
  "Belarus",
  "Kazakhstan",
];

export default function Ticker({ items = DEFAULT_ITEMS }) {
  // duplicate the list once so translateX(-50%) loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="ticker-wrap bg-platinum-50 border-y border-platinum-200 py-8 md:py-10">
      <div className="ticker-track">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`} className="ticker-word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
