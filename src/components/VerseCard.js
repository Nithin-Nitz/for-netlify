import React from "react";

export default function VerseCard({ verse, fade }) {
  return (
    <div
      className="verse-card"
      tabIndex={0}
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
      aria-live="polite"
    >
      <div className="sanskrit" lang="sa">
        {verse.sanskrit}
      </div>
      <div className="transliteration">{verse.transliteration}</div>
      <div className="translation">{verse.translation}</div>
      <div>
        — Bhagavad Gita {verse.chapter}:{verse.verse}
      </div>
    </div>
  );
}
