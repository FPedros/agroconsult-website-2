import { useEffect, useRef, useState } from "react";
import { Award, Compass, Handshake, Users } from "lucide-react";

const pillars = [
  {
    label: "Nosso Propósito",
    subtitle: "por que existimos?",
    body: "Gerar conhecimento para promover e impactar positivamente o agronegócio.",
    icon: <Compass size={20} />
  },
  {
    label: "Nossa Missão",
    subtitle: "o que fazemos bem?",
    body: "Transformar conhecimento em soluções de mercado para o agronegócio.",
    icon: <Handshake size={20} />
  },
  {
    label: "Nossa Visão",
    subtitle: "onde queremos chegar?",
    body: "Ser a empresa de inteligência de mercado mais confiável do agronegócio.",
    icon: <Award size={20} />
  }
];

const valores = [
  "Conhecimento",
  "Evolução Constante",
  "Comprometimento",
  "Somos um time",
  "Respeito",
  "Excellence"
];

export default function QuemSomos() {
  const [hovered, setHovered] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();

  const cards = [
    ...pillars.map((item) => ({ ...item, type: "pillar" as const })),
    {
      label: "Nossos Valores",
      subtitle: "base de crenças e comportamentos éticos",
      values: valores,
      icon: <Users size={20} />,
      type: "valores" as const
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes = Array.from({ length: 60 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0012,
      vy: (Math.random() - 0.5) * 0.0012
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };
    resize();

    const render = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.globalCompositeOperation = "lighter";

      // update and draw nodes
      nodes.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = p.x * w;
        const py = p.y * h;
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.002 + idx);
        const radius = 1.2 + pulse * 1.3;

        const glow = ctx.createRadialGradient(px, py, 0, px, py, radius * 4);
        glow.addColorStop(0, "rgba(120,255,210,0.55)");
        glow.addColorStop(1, "rgba(120,255,210,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // draw neural-style links
      const maxDist = 0.22;
      const maxDistSq = maxDist * maxDist;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > maxDistSq) continue;
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * 0.55;
          ctx.strokeStyle = `rgba(120,255,210,${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x * w, a.y * h);
          ctx.lineTo(b.x * w, b.y * h);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "source-over";
      animationRef.current = requestAnimationFrame(render);
    };
    animationRef.current = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-gradient text-white relative overflow-hidden pt-16 lg:pt-0">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <section className="section-padding w-full relative z-10 min-h-screen flex items-center pt-12 pb-16 sm:pt-20 sm:pb-20 lg:pt-0 lg:pb-0">
        <div className="page-container space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Quem somos</p>
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-4xl">Cultura Agroconsult</h1>
            <p className="text-base text-white/85">
              Propósito, missão, visão e valores que guiam nossas decisões e projetos no agro.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((item, idx) => {
              const isHovered = hovered === idx;
              return (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white/12 p-5 shadow-xl ring-1 ring-white/20 backdrop-blur transition duration-300"
                  style={{
                    transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow: isHovered ? "0 24px 70px rgba(0,0,0,0.28)" : undefined
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
                    {item.icon}
                    {item.label}
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                    {"subtitle" in item ? item.subtitle : "base de crenças e comportamentos éticos"}
                  </p>
                  {"values" in item ? (
                    <ul className="mt-3 space-y-2 text-sm text-white">
                      {item.values?.map((val) => (
                        <li key={val} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                          <span>{val}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-base font-semibold text-white">{item.body}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
