import { IconProps } from "@/app/types/global";
import React from "react";

const ThreeDotsBorderedIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
    >
      <path
        fill="black"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"
      />
    </svg>
  );
};

export default ThreeDotsBorderedIcon;