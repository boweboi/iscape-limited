export default function Logo() {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="text-xl font-bold text-black">iscape</span>
      <span className="-mt-0.5 text-[8px] font-semibold tracking-[0.2em] text-slate-500">
        LTD
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 48"
        preserveAspectRatio="none"
        className="pointer-events-none -mt-1 h-6 w-full overflow-visible"
      >
        <path
          d="M -23.5 -24 L 50 48 L 123.5 -24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
