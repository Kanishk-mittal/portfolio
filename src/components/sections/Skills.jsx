import SectionLabel from "../common/SectionLabel";
import Tag from "../common/Tag";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function Skills() {
    return (
        <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
            <SectionLabel>Skills</SectionLabel>
            <div className="grid grid-cols-2 gap-4">
                {PORTFOLIO_DATA.skills.map((skillGroup) => (
                    <div key={skillGroup.group} className="p-5 bg-white border border-stone-200 rounded-xl">
                        <h4 className="text-sm font-medium text-stone-800 mb-3">{skillGroup.group}</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {skillGroup.items.map((item) => (
                                <Tag key={item}>{item}</Tag>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
