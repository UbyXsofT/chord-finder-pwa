// context/HeaderContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderContextType {
	headerText: string;
	setHeaderText: (text: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
	children: ReactNode;
	defaultText?: string;
}

export const HeaderProvider = ({ children, defaultText = "" }: HeaderProviderProps) => {
	const [headerText, setHeaderText] = useState(defaultText);

	return <HeaderContext.Provider value={{ headerText, setHeaderText }}>{children}</HeaderContext.Provider>;
};

export const useHeader = () => {
	const context = useContext(HeaderContext);
	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};
