import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)',
    			primary: 'var(--primary)'
    		},
    		fontFamily: {
    			goldman: 'goldman',
    			bebas: 'Bebas Neue',
    			teko: 'Teko'
    		},
    		width: {
    			'25': '100px',
    			'50': '200px'
    		},
    		animation: {
    			colorChange: 'spinColor 5s linear infinite'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
