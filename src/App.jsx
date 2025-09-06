import React from "react";

export default function App() {
  const profile = {
    name: "Cayce Pollard",
    title: "Multiverse Analyst",
    bio: "Lorem ipsum dolor ex magna. Interdum malesuada fames ac ante ipsum amet et faucibus. Pellentesque et venenatis dolor imperdiet lorem dolor mattis lorem sagittis.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    contacts: [
      { label: "Email", href: "mailto:khalidalasad03@gmail.com", icon: MailIcon },
      { label: "Phone", href: "tel:+62123456789", icon: PhoneIcon },
      { label: "Telegram", href: "https://t.me/username", icon: TelegramIcon },
      { label: "Twitter", href: "https://x.com", icon: XIcon },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-[360px] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Foto */}
        <div className="relative h-56">
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/40 via-indigo-600/30 to-transparent mix-blend-multiply" />
        </div>

        {/* Isi */}
        <div className="p-7">
          <h2 className="text-2xl font-semibold text-slate-700">{profile.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{profile.title}</p>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">{profile.bio}</p>

          {/* Icons */}
          <div className="mt-6 flex items-center gap-4 text-slate-400">
            {profile.contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                aria-label={c.label}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-600 transition"
              >
                <c.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==== SVG Icon Components ==== */
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 6.18 2 2 0 0 1 4.11 4h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L7.09 11a16 16 0 0 0 6 6l.57-1.21a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.9 15.6 9.7 20a1 1 0 0 0 1.6.8l2.3-1.7 4.7 3.4c.8.6 1.9.1 2.1-.9l3.6-16.9c.2-1-1-1.8-1.9-1.3L1.5 9.7c-1 .5-.8 2 .3 2.2l6.4 1.4 12.6-7.6-10.9 9.9Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}
