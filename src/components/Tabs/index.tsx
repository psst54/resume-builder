/** @jsxImportSource @emotion/react */

import { ReactElement, useState } from "react";
import { COLOR } from "@/styles/color";

const tabHeader = {
  display: "flex",
  marginBottom: "1rem",
};
const tabItem = {
  flexGrow: 1,
  background: "transparent",
  padding: "0.5rem 2rem",
  border: "none",
  borderBottom: `2px solid ${COLOR.LIGHT_GRAY.STANDARD}`,

  cursor: "pointer",

  "&:hover": {
    background: COLOR.white.HOVER,
  },

  "&:active": {
    background: COLOR.white.ACTIVE,
  },
};

const selectedTabItem = {
  borderBottom: `2px solid ${COLOR.PRIMARY.STANDARD}`,
  color: COLOR.PRIMARY.STANDARD,
  fontWeight: "bold",
};

export default function Tabs({ children }: { children: ReactElement[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div css={tabHeader}>
        {children.map((tab, index) => (
          <button
            key={index}
            css={[tabItem, index === selectedIndex && selectedTabItem]}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {children[selectedIndex]}
    </div>
  );
}
