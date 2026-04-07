export default function Tag({ children }) {
    return (
        <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs px-2 py-1 bg-stone-100 text-stone-500 rounded"
        >
            {children}
        </span>
    );
}
