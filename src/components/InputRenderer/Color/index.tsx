import { Dispatch, SetStateAction } from "react";
import HexCode from "./HexCode";
import Palette from "./Palette";

export default function Color({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) {
  function checkIsValidHexCode({ color }: { color: string }) {
    return (
      /^#[0-9A-Fa-f]{3}$/i.test(color) ||
      /^#[0-9A-Fa-f]{4}$/i.test(color) ||
      /^#[0-9A-Fa-f]{6}$/i.test(color) ||
      /^#[0-9A-Fa-f]{8}$/i.test(color)
    );
  }

  return (
    <>
      {!checkIsValidHexCode({ color: color }) && (
        <p>* 올바른 색상 코드가 아닌 경우, 색상이 나타나지 않을 수 있습니다.</p>
      )}
      <HexCode color={color} setColor={setColor} />
      <Palette color={color} setColor={setColor} />
    </>
  );
}
