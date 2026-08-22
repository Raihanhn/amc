// components/Ticker.js
// Two-line infinite ticker. Each word is outlined by default; as the
// ticker keeps moving, whichever word is currently under the cursor
// fills solid gold with a left-to-right wipe animation — the animation
// never pauses, only the word under the pointer changes.

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

function TickerRow({ items, reverse = false, slow = false }) {
  // duplicate the list once so translateX(-50%) loops seamlessly
  const loop = [...items, ...items];
  const trackClass = [
    "ticker-track",
    reverse ? "ticker-track-reverse" : "",
    slow ? "ticker-track-slow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={trackClass}>
      {loop.map((word, i) => (
        <span className="ticker-word" key={`${word}-${i}`}>
          {/* real text, always readable */}
          <span className="ticker-word-outline">{word}</span>
          {/* solid overlay, revealed left-to-right on hover */}
          <span className="ticker-word-fill" aria-hidden="true">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker({ items = DEFAULT_ITEMS, itemsRow2 }) {
  const row2 = itemsRow2 || [...items].reverse();

  return (
    <div className="ticker-wrap bg-platinum-50 border-y border-platinum-200 py-6 md:py-8">
      <TickerRow items={items} />
      <TickerRow items={row2} reverse slow />
    </div>
  );
}