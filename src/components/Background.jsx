import { useEffect, useRef } from 'react';

const NUM_NODES = 55;
const MAX_DISTANCE = 130;

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = Math.max(window.innerHeight, 900);
    let rafId = null;
    let nodes = [];

    const initNodes = () => {
      nodes = Array.from({ length: NUM_NODES }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight, 900);
      canvas.width = width;
      canvas.height = height;
      initNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = width + 20;
        if (a.x > width + 20) a.x = -20;
        if (a.y < -20) a.y = height + 20;
        if (a.y > height + 20) a.y = -20;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = '#67e8f9';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#67e8f9';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(draw);
    };

    canvas.width = width;
    canvas.height = height;
    initNodes();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(34, 211, 238, 0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-[#0e7490]/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#0891b2]/15 blur-[120px]" />
      <div className="absolute -bottom-24 left-1/3 w-[26rem] h-[26rem] rounded-full bg-[#22d3ee]/10 blur-[100px]" />
    </div>
  );
};

export default Background;
