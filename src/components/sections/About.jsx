import SectionLabel from "../common/SectionLabel";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-20">
            <SectionLabel>About</SectionLabel>
            <div className="grid grid-cols-2 gap-12 items-start">
                <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
                    <p>
                        I'm a third-year Computer Science student at IIIT Kottayam with a dual focus on
                        full-stack development and cybersecurity. I enjoy building systems that are both secure
                        and scalable.
                    </p>
                    <p>
                        Currently sub-leading the Cyber Security division at BETA Labs and actively building
                        Konnect - a self-hosted, end-to-end encrypted university chat platform.
                    </p>
                    <p>
                        Outside of code I compete in CTFs and grind DSA on LeetCode. Knight-rated, top 5.8%
                        globally.
                    </p>
                </div>
                <div className="space-y-3">
                    {PORTFOLIO_DATA.stats.map((stat) => (
                        <div key={stat.num} className="p-5 bg-white border border-stone-200 rounded-lg">
                            <div style={{ fontFamily: "'DM Serif Display', serif" }} className="text-3xl text-stone-900">
                                {stat.num}
                            </div>
                            <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
