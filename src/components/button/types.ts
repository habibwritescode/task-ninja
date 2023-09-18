import { ReactNode } from "react";

export type BtnVariant = "primary" | "secondary";

export type ButtonProps = {
  children: ReactNode;
  variant?: BtnVariant;
  height?: string;
};
