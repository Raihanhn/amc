// components/Seal.js

export default function Seal({ number, label }) {
  return (
    <div className="seal">
      <span className="seal-num">{number}</span>
      <span className="seal-label">{label}</span>
    </div>
  );
}