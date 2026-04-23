const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`relative w-full overflow-hidden h-px my-0 ${flip ? "scale-y-[-1]" : ""}`}>
    <div
      className="w-full h-px"
      style={{ background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.3) 30%, rgba(168,85,247,0.3) 70%, transparent 100%)" }}
    />
  </div>
);

export default SectionDivider;
