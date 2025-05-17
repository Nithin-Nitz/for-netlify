import React from "react";

const VerseReel = ({ verse }) => {
  return (
    <div className="reel">
      <div className="overlay" />
      <div className="content">
        <div className="sanskrit">{verse.sanskrit}</div>
        <div className="transliteration">{verse.transliteration}</div>
        <div className="translation">{verse.translation}</div>
        <div className="meta">— Bhagavad Gita {verse.chapter}:{verse.verse}</div>
      </div>
    </div>
  );
};

export default VerseReel;
