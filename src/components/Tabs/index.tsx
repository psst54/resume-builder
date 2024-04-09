/** @jsxImportSource @emotion/react */

import { ReactElement, useEffect, useRef, useState } from "react";
import { indicator, selectedTabItem, tabHeader, tabItem } from "./style";

export default function Tabs({ children }: { children: ReactElement[] }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedRef.current || !headerRef.current || !indicatorRef.current) {
      return;
    }

    const selectedHeaderPosition = selectedRef.current.getBoundingClientRect();
    const headerPosition = headerRef.current.getBoundingClientRect();

    const newPosition = {
      left: selectedHeaderPosition.left - headerPosition.left,
      width: selectedHeaderPosition.width,
    };

    const indicator = indicatorRef.current;
    indicator.style.left = newPosition.left + "px";
    indicator.style.width = newPosition.width + "px";
  }, [selectedTabIndex]);

  return (
    <div>
      <div ref={headerRef} css={tabHeader}>
        {children.map((tab, index) => {
          const isSelected = index === selectedTabIndex;
          return (
            <button
              key={index}
              css={[tabItem, isSelected && selectedTabItem]}
              onClick={() => {
                setSelectedTabIndex(index);
              }}
              ref={isSelected ? selectedRef : null}
            >
              {tab.props.label}
            </button>
          );
        })}
        <div ref={indicatorRef} css={indicator} />
      </div>

      {children[selectedTabIndex]}
    </div>
  );
}
