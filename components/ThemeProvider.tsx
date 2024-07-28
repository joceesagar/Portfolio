import React , { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface CustomThemeProviderProps {
    children: ReactNode
    attribute?: string; // Add other props as needed
    defaultTheme?: string;
    enableSystem?: boolean;
    forcedTheme?: string;
}
// ReactNode: This type from React represents any renderable content (strings, numbers, elements, fragments, portals, etc.).
// CustomThemeProviderProps:  explicitly requires children of type ReactNode.

export function ThemeProvider({children, ...props}: CustomThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}