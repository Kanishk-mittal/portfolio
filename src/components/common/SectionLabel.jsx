export default function SectionLabel({ children }) {
    return (
        <div className="flex items-center gap-3 mb-10">
            <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs tracking-widest uppercase text-stone-400"
            >
                {children}
            </span>
            <div className="flex-1 h-px bg-stone-200" />
        </div>
    );
}
