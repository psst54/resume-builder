/** @jsxImportSource @emotion/react */

import Image from "next/image";

export default function Icon({
  title,
  onClick,
}: {
  title: string;
  onClick?: any; // [todo] fix any
}) {
  return (
    <Image
      src={`/${title}.svg`}
      alt={`${title} icon`}
      width="24"
      height="24"
      onClick={onClick}
      css={{
        cursor: "pointer",
      }}
    />
  );
}
