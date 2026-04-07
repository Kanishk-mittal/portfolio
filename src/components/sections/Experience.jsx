import SectionLabel from "../common/SectionLabel";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function Experience() {
    return (
        <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
            <SectionLabel>Experience</SectionLabel>
            <div className="flex flex-col divide-y divide-stone-100">
                {PORTFOLIO_DATA.experience.map((entry) => (
                    <div key={entry.role} className="grid grid-cols-[160px_1fr] gap-6 py-6 first:pt-0 last:pb-0">
                        <div style={{ fontFamily: "'DM Mono', monospace" }} className="text-xs text-stone-400 leading-relaxed pt-0.5">
                            {entry.location}
                            <br />
                            {entry.period}
                            {entry.duration && (
                                <>
                                    <br />
                                    {entry.duration}
                                </>
                            )}
                        </div>
                        <div>
                            <div className="text-sm font-medium text-stone-900 mb-0.5">{entry.role}</div>
                            <div className="text-xs text-stone-400 mb-2">{entry.org}</div>
                            <div className="text-sm text-stone-500 leading-relaxed">{entry.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
