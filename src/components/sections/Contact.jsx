import Btn from "../common/Btn";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
            <div className="text-center py-16 px-8 bg-white border border-stone-200 rounded-2xl">
                <h2 style={{ fontFamily: "'DM Serif Display', serif" }} className="text-4xl font-normal text-stone-900 mb-4">
                    Let's work together.
                </h2>
                <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                    Open to internships, open-source collaborations, and interesting projects.
                    <br />
                    Drop a message - I reply fast.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                    <Btn href={`mailto:${PORTFOLIO_DATA.email}`} variant="primary">
                        {PORTFOLIO_DATA.email}
                    </Btn>
                    <Btn href={PORTFOLIO_DATA.github}>GitHub ↗</Btn>
                    <Btn href={PORTFOLIO_DATA.leetcode}>LeetCode ↗</Btn>
                </div>
            </div>
        </section>
    );
}
