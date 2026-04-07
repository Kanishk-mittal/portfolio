import SectionLabel from "../common/SectionLabel";
import Tag from "../common/Tag";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function Projects() {
    return (
        <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
            <SectionLabel>Projects</SectionLabel>
            <div className="flex flex-col gap-5">
                {PORTFOLIO_DATA.projects.map((project) => (
                    <div
                        key={project.name}
                        className="group p-7 bg-white border border-stone-200 rounded-xl hover:border-stone-900 transition-colors duration-200"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-base font-medium text-stone-900">{project.name}</h3>
                            {project.status && (
                                <span
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                    className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded tracking-wider uppercase"
                                >
                                    {project.status}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                            className="text-xs text-stone-400 hover:text-stone-900 transition-colors duration-150 inline-flex items-center gap-1"
                        >
                            View source ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
