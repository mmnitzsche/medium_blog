import React, { useState, useEffect, useRef } from "react";

interface Props {
  FullText: string;
}

export default function JobDescription(props: Props) {
  const fullText = props.FullText;
  const firstDotIndex = fullText.indexOf(".") + 1;
  const shortText = fullText.slice(0, firstDotIndex);

  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleIcon = !isExpanded ? "▼" : "▲";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 868);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded, isMobile]);

  const LargeSizeState = () => (
    <div className="relative">
      <div
        className="transition-all duration-700 ease-in-out overflow-hidden relative"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "150px",
        }}
        ref={contentRef}
      >
        <p className="text-sm">{isExpanded ? fullText : shortText}</p>
      </div>
      <div
        onClick={handleToggleText}
        className="cursor-pointer w-2 hover:text-black text-slate-400"
      >
        {toggleIcon}
      </div>
    </div>
  );

  const SmallSizeState = () => (
    <div className="relative">
      <div
        onClick={handleToggleText}
        className="transition-all duration-700 ease-in-out overflow-hidden relative"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "60px",
        }}
        ref={contentRef}
      >
        <p className="text-sm">{shortText}</p>
      </div>
    </div>
  );

  return <>{isMobile ? <SmallSizeState /> : <LargeSizeState />}</>;
}
