import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ColorTheme = "default" | "royal";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
};

type ThemeProviderState = {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (theme: ColorTheme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  colorTheme: "default",
  setTheme: () => null,
  setColorTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  defaultColorTheme = "default",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  );
  
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () => (localStorage.getItem("colorTheme") as ColorTheme) || defaultColorTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log("Theme changed to:", theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", colorTheme);
    localStorage.setItem("colorTheme", colorTheme);
    console.log("Color theme changed to:", colorTheme);
  }, [colorTheme]);

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => {
      console.log("Setting theme to:", theme);
      setTheme(theme);
    },
    setColorTheme: (theme: ColorTheme) => {
      console.log("Setting color theme to:", theme);
      setColorTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};