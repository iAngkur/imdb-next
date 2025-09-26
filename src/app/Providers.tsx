
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {

    return (
        <ThemeProvider defaultTheme='light' attribute='class'>
            {children}
        </ThemeProvider>
    )
}
