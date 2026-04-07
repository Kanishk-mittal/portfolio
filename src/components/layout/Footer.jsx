export default function Footer() {
    return (
        <footer className="border-t border-stone-200 py-6 text-center">
            <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-xs text-stone-400">
                Built by Kanishk Mittal · {new Date().getFullYear()}
            </span>
        </footer>
    );
}
