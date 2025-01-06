import React from "react";

export interface ITwoColProps {
  twoColData: React.ReactNode | null;
  footerContainerClass?: string;
  currentYear?: number;
  siteName?: string;
  children?: React.ReactNode;
}
