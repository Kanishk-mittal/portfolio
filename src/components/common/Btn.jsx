export default function Btn({ href, variant = "outline", children }) {
    const base =
        "inline-flex items-center gap-1.5 px-5 py-2.5 text-sm rounded-md transition-all duration-200 cursor-pointer";

    const styles = {
        primary: "bg-stone-900 text-white hover:bg-stone-700",
        outline: "border border-stone-300 text-stone-700 hover:border-stone-900 hover:bg-stone-50",
    };

    return (
        <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]}`}>
            {children}
        </a>
    );
}
