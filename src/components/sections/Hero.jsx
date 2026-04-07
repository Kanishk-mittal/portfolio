import Btn from "../common/Btn";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function Hero() {
    return (
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
            <h1
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-7xl font-normal leading-none tracking-tight text-stone-900 mb-6"
            >
                Kanishk
                <br />
                <span className="text-stone-400 italic">Mittal.</span>
            </h1>
            <p className="text-base text-stone-500 max-w-lg leading-relaxed mb-10">{PORTFOLIO_DATA.description}</p>
            <div className="flex gap-3 flex-wrap">
                <Btn href={`mailto:${PORTFOLIO_DATA.email}`} variant="primary">
                    Get in touch ↗
                </Btn>
                <Btn href={PORTFOLIO_DATA.github}>GitHub</Btn>
                <Btn href={PORTFOLIO_DATA.leetcode}>LeetCode</Btn>
                <Btn href={PORTFOLIO_DATA.linkedin}>LinkedIn</Btn>
            </div>
        </section>
    );
}
