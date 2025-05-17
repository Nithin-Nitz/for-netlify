import React, { useState, useEffect, useCallback } from "react";
import VerseReel from "./components/VerseReel";
import { verses } from "./data/verses";

const ReelsPage = () => {
  const [visibleVerses, setVisibleVerses] = useState([]);

useEffect(() => {
  setVisibleVerses(verses);
}, []);

   const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;

    if (scrollTop + windowHeight >= docHeight - 100) {
      loadMoreVerses();
    }
  }, []);

  const loadMoreVerses = () => {
    console.log('loadd')
    setVisibleVerses((prev) => {
      const nextBatch = verses.slice(prev.length, prev.length + 5);
      return [...prev, ...nextBatch];
    });
  };

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // ✅ now stable & ESLint-safe

  return (
    <>
      <style>{`
      `}</style>

      {visibleVerses.map((verse, idx) => (
        <VerseReel key={idx} verse={verse} />
      ))}
    </>
  );
};

export default ReelsPage;
