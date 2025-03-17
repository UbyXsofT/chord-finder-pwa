// context/ThemeProviderWrapper.tsx
"use client";

import { ThemeProvider } from "./ThemeContext";
import React, { ReactNode } from "react";

interface ThemeProviderWrapperProps {
	children: ReactNode;
}

export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
