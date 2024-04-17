import { ReactElement } from "react";

export default function Tab({
  label,
  children,
}: {
  label: string;
  children: ReactElement;
}) {
  return children;
}
