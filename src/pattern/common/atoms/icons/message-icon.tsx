import React from "react";
import { IconProps } from "@/lib/types";

const MessageIcon = ({ color, width, height, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "15"}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.83323 9.45827H8.83323C9.01058 9.45827 9.15908 9.39845 9.27873 9.27879C9.39838 9.15914 9.45821 9.01064 9.45821 8.83329C9.45821 8.65595 9.39838 8.50745 9.27873 8.38779C9.15908 8.26814 9.01058 8.20831 8.83323 8.20831H3.83323C3.65588 8.20831 3.50738 8.26814 3.38773 8.38779C3.26808 8.50745 3.20825 8.65595 3.20825 8.83329C3.20825 9.01064 3.26808 9.15914 3.38773 9.27879C3.50738 9.39845 3.65588 9.45827 3.83323 9.45827ZM3.83323 6.95827H12.1666C12.3439 6.95827 12.4924 6.89845 12.6121 6.77879C12.7317 6.65914 12.7915 6.51064 12.7915 6.33329C12.7915 6.15595 12.7317 6.00745 12.6121 5.88779C12.4924 5.76814 12.3439 5.70831 12.1666 5.70831H3.83323C3.65588 5.70831 3.50738 5.76814 3.38773 5.88779C3.26808 6.00745 3.20825 6.15595 3.20825 6.33329C3.20825 6.51064 3.26808 6.65914 3.38773 6.77879C3.50738 6.89845 3.65588 6.95827 3.83323 6.95827ZM3.83323 4.45827H12.1666C12.3439 4.45827 12.4924 4.39845 12.6121 4.27879C12.7317 4.15914 12.7915 4.01064 12.7915 3.83329C12.7915 3.65595 12.7317 3.50745 12.6121 3.38779C12.4924 3.26814 12.3439 3.20831 12.1666 3.20831H3.83323C3.65588 3.20831 3.50738 3.26814 3.38773 3.38779C3.26808 3.50745 3.20825 3.65595 3.20825 3.83329C3.20825 4.01064 3.26808 4.15914 3.38773 4.27879C3.50738 4.39845 3.65588 4.45827 3.83323 4.45827ZM3.03196 12.5833L1.36371 14.2515C1.12653 14.4887 0.853828 14.5424 0.545606 14.4126C0.23737 14.2828 0.083252 14.0491 0.083252 13.7115V1.58973C0.083252 1.16879 0.229085 0.81248 0.520752 0.520813C0.812419 0.229146 1.16872 0.083313 1.58967 0.083313H14.4101C14.8311 0.083313 15.1874 0.229146 15.479 0.520813C15.7707 0.81248 15.9165 1.16879 15.9165 1.58973V11.0769C15.9165 11.4978 15.7707 11.8541 15.479 12.1458C15.1874 12.4374 14.8311 12.5833 14.4101 12.5833H3.03196ZM2.49992 11.3333H14.4101C14.4742 11.3333 14.533 11.3066 14.5864 11.2532C14.6399 11.1997 14.6666 11.141 14.6666 11.0769V1.58973C14.6666 1.52562 14.6399 1.46685 14.5864 1.41342C14.533 1.36 14.4742 1.33329 14.4101 1.33329H1.58967C1.52556 1.33329 1.46679 1.36 1.41336 1.41342C1.35994 1.46685 1.33323 1.52562 1.33323 1.58973V12.4871L2.49992 11.3333Z"
        fill={color ?? "#56616B"}
      />
    </svg>
  );
};

export default MessageIcon;
