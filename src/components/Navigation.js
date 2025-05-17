import React from "react";

export default function Navigation({ onPrev, onNext, onShare }) {
  return (
    <div className="nav-buttons" role="navigation" aria-label="Verse navigation">
      <button onClick={onPrev} aria-label="Previous verse">
        Prev
      </button>
      <button onClick={onShare} className="share-btn" aria-label="Share verse">
        Share
      </button>
      <button onClick={onNext} aria-label="Next verse">
        Next
      </button>
    </div>
  );
}
