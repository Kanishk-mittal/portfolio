import { NAV_LINKS } from "../../data/portfolioData";

export default function Nav({ active }) {
    return (
        <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
            <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
                <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-xs text-stone-400 tracking-widest">
                    .
                </span>
                <div className="flex gap-7">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className={`text-sm capitalize transition-colors duration-150 ${active === link ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
