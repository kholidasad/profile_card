import React, { useEffect, useState } from "react";

/** Utility: get initial dark mode from localStorage or system */
function getInitialDarkMode() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const profile = {
    name: "Khalid Al Asad",
    title: "Backend Developer | Cloud Enthusiast",
    bio: `I’m a backend-focused software engineer with 3+ years of experience 
      building and maintaining scalable systems using PHP (Laravel/OctoberCMS), 
      Golang (Gin/Fiber), and Node.js (Express/Nest).

      My expertise spans API development, database design (MySQL/MongoDB), 
      and cloud infrastructure (AWS, Docker, Nginx, CI/CD).

      I enjoy solving complex problems, automating workflows, 
      and continuously learning new technologies.

      Outside of coding, I’m passionate about financial planning, fitness, 
      and creative side projects that blend tech with everyday life.`,
    photo:
      "https://wvaicvbgat0ui7fr.public.blob.vercel-storage.com/IMG_20250101_162016-D0OQ95HnkqaxAgEpVrpo1AQlU8CpHc.jpg?q=80&w=1200&auto=format&fit=crop",
    contacts: [
      { label: "Email", href: "mailto:khalidalasad03@gmail.com", icon: MailIcon },
      { label: "LinkedIn", href: "https://linkedin.com/in/khalid-al-asad", icon: LinkedInIcon },
      { label: "GitHub", href: "https://github.com/kholidasad", icon: GitHubIcon },
    ],
  };

  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-6 transition-colors duration-300">
        <div className="relative w-[360px] bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
            onClick={() => setDarkMode((v) => !v)}
            className="absolute right-3 top-3 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full
                       bg-white/70 dark:bg-slate-700/70 backdrop-blur ring-1 ring-black/5 dark:ring-white/10
                       text-slate-700 dark:text-slate-100 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Moon icon for light mode */}
            <span
              className={`absolute transition-all duration-500 ${
                darkMode ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <MoonIcon className="w-5 h-5" />
            </span>
            {/* Sun icon for dark mode */}
            <span
              className={`absolute transition-all duration-500 ${
                darkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
              }`}
            >
              <SunIcon className="w-5 h-5" />
            </span>
          </button>

          {/* Photo */}
          <div className="relative h-56">
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/40 via-indigo-600/30 to-transparent mix-blend-multiply" />
          </div>

          {/* Content */}
          <div className="p-7">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-300">{profile.title}</p>

            <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {bioParagraphs.map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 text-slate-400 dark:text-slate-300">
              {profile.contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  aria-label={c.label}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-600 dark:hover:text-white transition"
                >
                  <c.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==== Icon Components ==== */
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.3 6.2 7.6V23h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V23h-5V8z" />
    </svg>
  );
}
function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.92.12 3.23.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.38.82 1.13.82 2.28v3.38c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
