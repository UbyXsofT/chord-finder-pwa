// context/HeaderProviderWrapper.tsx
"use client";

import { HeaderProvider } from "./HeaderContext";

export default function HeaderProviderWrapper({ children }: { children: React.ReactNode }) {
	return <HeaderProvider>{children}</HeaderProvider>;
}
