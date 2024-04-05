/** @jsxImportSource @emotion/react */

import { ReactElement, useState } from "react";
import { color } from "@/styles/color";

const tabHeader = { display: "flex", marginBottom: "1rem" };
const tabItem = {
  flexGrow: 1,
  background: "transparent",
  padding: "0.5rem 2rem",
  border: "none",
  borderBottom: `2px solid ${color.lightGray.standard}`,

  cursor: "pointer",

  "&:hover": {
    background: color.white.hover,
  },

  "&:active": {
    background: color.white.active,
  },
};

const selectedTabItem = {
  borderBottom: `2px solid ${color.primary.standard}`,
  color: color.primary.standard,
  fontWeight: "bold",
};

export default function Tabs({ children }: { children: ReactElement[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div css={tabHeader}>
        {children.map((tab, index) => {
          return (
            <div
              css={[tabItem, index === selectedIndex && selectedTabItem]}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {tab.props.label}
            </div>
          );
        })}
      </div>

      {children[selectedIndex]}
    </div>
  );
}
