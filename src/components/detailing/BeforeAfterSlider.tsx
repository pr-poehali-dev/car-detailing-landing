import { useState } from "react";

interface Props {
  before: string;
  after: string;
  label: string;
  tag: string;
}

export default function BeforeAfterSlider({ before, after, label, tag }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = { current: null as HTMLDivElement | null };

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
      <div
        ref={(el) => { containerRef.current = el; }}
        className="relative select-none"
        style={{ aspectRatio: "4/3", cursor: "col-resize" }}
        onMouseDown={(e) => { setDragging(true); updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging) updatePos(e.clientX); }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => setDragging(false)}
      >
        <img src={after} alt="После" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="До" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: "none" }} />
        </div>

        <div className="absolute top-0 bottom-0 w-px" style={{ left: `${pos}%`, background: "#C9A84C", boxShadow: "0 0 12px rgba(201,168,76,0.6)" }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#0A0A0A", border: "2px solid #C9A84C", boxShadow: "0 0 16px rgba(201,168,76,0.5)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/>
            </svg>
          </div>
        </div>

        <div className="absolute top-3 left-3 px-2 py-1 rounded-sm text-[10px] tracking-widest uppercase"
          style={{ background: "rgba(10,10,10,0.75)", color: "rgba(237,232,222,0.6)", fontFamily: "'Golos Text', sans-serif", pointerEvents: "none" }}>
          До
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-sm text-[10px] tracking-widest uppercase"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontFamily: "'Golos Text', sans-serif", pointerEvents: "none" }}>
          После
        </div>
      </div>

      <div className="px-6 py-4" style={{ background: "#111" }}>
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "4px" }}>{tag}</p>
        <h4 style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, color: "#EDE8DE" }}>{label}</h4>
      </div>
    </div>
  );
}
