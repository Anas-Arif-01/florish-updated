'use client';

import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaterialHero from '@/components/MaterialHero';
import ServiceOptions from '@/components/ServiceOptions';
import {
  ArrowUpRight,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  BadgeCheck,
} from 'lucide-react';

/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = '923299906666';

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message: string) {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
}

/* =========================================================
   THEME — "Pastel Dreamland"

   Client palette (Coolors):
     #CDB4DB lavender · #FFC8DD blush · #FFAFCC candy
     #BDE0FE baby blue · #A2D2FF sky

   Every pastel is used exactly as supplied. Because all five are
   light, text/hover states use tonal shades of the same hues
   (deep plum ink, deep rose, deep lavender) so contrast stays AA.

   Everything lives in this one block. To reuse it site-wide, move
   it into globals.css and put the `fl-root` class on <body>.
========================================================= */

const THEME_CSS = `
/* ---------- tokens ---------- */
.fl-root{
  --fl-lavender:#CDB4DB;--fl-blush:#FFC8DD;--fl-candy:#FFAFCC;--fl-baby:#BDE0FE;--fl-sky:#A2D2FF;
  --fl-ink:#3B2A4F;--fl-ink-soft:#5B4A6E;--fl-ink-muted:#75668A;
  --fl-rose:#A63D77;--fl-star:#D94F8C;--fl-lavender-deep:#9D7FB5;--fl-plum:#2E1F42;
  --fl-bg:#FFF8FB;--fl-white:#FFFFFF;--fl-tint-blush:#FFF0F6;--fl-tint-baby:#EAF4FF;--fl-tint-lav:#F4ECF8;--fl-border:#EBD9F1;
  --fl-shadow-soft:0 14px 34px -16px rgba(157,127,181,.5);
  --fl-shadow-pink:0 22px 46px -18px rgba(255,110,165,.5);
  --fl-font-display:var(--font-display,ui-serif,Georgia,Cambria,"Times New Roman",serif);
  background:var(--fl-bg);color:var(--fl-ink);
}
.fl-root ::selection{background:var(--fl-blush);color:var(--fl-ink)}
.fl-root :focus-visible{outline:2px solid var(--fl-lavender-deep);outline-offset:3px}

/* ---------- text ---------- */
.fl-ink{color:var(--fl-ink)}
.fl-body{color:var(--fl-ink-soft)}
.fl-muted{color:var(--fl-ink-muted)}
.fl-rose{color:var(--fl-rose)}
.fl-lav{color:var(--fl-lavender-deep)}
.fl-on-plum{color:#E6D9F0}
.fl-display{font-family:var(--fl-font-display)}
.fl-accent{font-family:var(--fl-font-display);font-style:italic;font-weight:500;padding-right:.08em;
  background:linear-gradient(90deg,#C2467F,#8B5FB0);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
.fl-accent-light{font-family:var(--fl-font-display);font-style:italic;font-weight:500;padding-right:.08em;
  background:linear-gradient(90deg,var(--fl-blush),var(--fl-baby));-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
.fl-stat{display:inline-block;font-weight:600;letter-spacing:-.01em;
  background:linear-gradient(90deg,#C2467F,#8B5FB0);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}

/* ---------- section surfaces (solid tints of the palette) ---------- */
.fl-bg-soft{background:var(--fl-bg)}
.fl-bg-white{background:var(--fl-white)}
.fl-bg-baby{background:var(--fl-tint-baby)}
.fl-bg-lav{background:var(--fl-tint-lav)}
.fl-bg-plum{background:
  radial-gradient(55% 45% at 10% 0%,rgba(205,180,219,.30),transparent 62%),
  radial-gradient(45% 40% at 95% 100%,rgba(162,210,255,.22),transparent 62%),
  var(--fl-plum)}
.fl-bg-cta{background:linear-gradient(115deg,#FFC8DD 0%,#FFAFCC 32%,#CDB4DB 68%,#A2D2FF 100%)}

/* ---------- floor textures (plank + parquet), fade out at section edges ---------- */
.fl-tex{position:relative;isolation:isolate}
.fl-tex::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background-repeat:repeat;opacity:.9;
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 18%,#000 82%,transparent 100%);
  mask-image:linear-gradient(to bottom,transparent 0%,#000 18%,#000 82%,transparent 100%)}
.fl-tex-plank::before{background-size:300px 120px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80' fill='none' stroke='%23CDB4DB' stroke-opacity='.45'%3E%3Cpath d='M0 .5H200M0 20.5H200M0 40.5H200M0 60.5H200'/%3E%3Cpath d='M.5 0V20M70.5 20V40M140.5 40V60M35.5 60V80'/%3E%3Cpath stroke-opacity='.22' d='M10 10q30-5 60 0t60 0M90 30q25 4 50 0t50 0M20 50q28-5 56 0t56 0M120 70q25 4 50 0'/%3E%3C/svg%3E")}
.fl-tex-plank-light::before{background-size:300px 120px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80' fill='none' stroke='%23FFFFFF' stroke-opacity='.09'%3E%3Cpath d='M0 .5H200M0 20.5H200M0 40.5H200M0 60.5H200'/%3E%3Cpath d='M.5 0V20M70.5 20V40M140.5 40V60M35.5 60V80'/%3E%3Cpath stroke-opacity='.05' d='M10 10q30-5 60 0t60 0M90 30q25 4 50 0t50 0M20 50q28-5 56 0t56 0M120 70q25 4 50 0'/%3E%3C/svg%3E")}
.fl-tex-parquet::before{background-size:64px 64px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' stroke='%239D7FB5' stroke-opacity='.22'%3E%3Cpath d='M.5 0V40M20.5 0V40M0 .5H40M0 20.5H40'/%3E%3Cpath d='M0 10.5H20M30.5 0V20M10.5 20V40M20 30.5H40'/%3E%3C/svg%3E")}

/* ---------- ambient shapes ---------- */
.fl-blob{position:absolute;border-radius:50%;pointer-events:none;
  transform:translate3d(calc(var(--mx,0) * var(--d,24px)),calc(var(--my,0) * var(--d,24px)),0);
  transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.fl-blob-pink{background:radial-gradient(circle,rgba(255,175,204,.55),transparent 65%)}
.fl-blob-blue{background:radial-gradient(circle,rgba(162,210,255,.55),transparent 65%)}
.fl-blob-lav{background:radial-gradient(circle,rgba(205,180,219,.6),transparent 65%)}
.fl-blob-white{background:radial-gradient(circle,rgba(255,255,255,.6),transparent 65%)}
@keyframes fl-float{0%,100%{transform:translate3d(0,0,0) rotate(0deg)}50%{transform:translate3d(0,-16px,0) rotate(8deg)}}
@keyframes fl-twinkle{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:.95;transform:scale(1.1)}}
.fl-float{animation:fl-float 9s ease-in-out infinite}
.fl-twinkle{animation:fl-twinkle 3.6s ease-in-out infinite}

/* ---------- eyebrow pill ---------- */
.fl-eyebrow{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .95rem .4rem .8rem;border-radius:999px;
  font-size:.8125rem;font-weight:600;letter-spacing:.02em;color:var(--fl-rose);
  background:rgba(255,200,221,.45);border:1px solid rgba(255,175,204,.6)}
.fl-eyebrow::before{content:'';height:.4rem;width:.4rem;border-radius:50%;background:var(--fl-star);box-shadow:0 0 0 3px rgba(255,175,204,.4)}
.fl-eyebrow-dark{color:#FFD9E8;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.22)}
.fl-eyebrow-on-color{color:var(--fl-ink);background:rgba(255,255,255,.55);border-color:rgba(255,255,255,.8)}
.fl-rule{height:3px;width:4rem;border-radius:999px;background:linear-gradient(90deg,var(--fl-candy),var(--fl-lavender),var(--fl-sky))}

/* ---------- buttons ---------- */
.fl-btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;
  border-radius:999px;padding:.8rem 1.6rem;font-size:.875rem;font-weight:600;line-height:1.2;white-space:nowrap;border:1px solid transparent;cursor:pointer;
  transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s,background .3s,border-color .3s,color .3s}
.fl-btn:hover{transform:translateY(-2px)}
.fl-btn:active{transform:translateY(0)}
.fl-btn-sm{padding:.62rem .9rem;font-size:.6875rem}
.fl-btn-lg{padding:1rem 2rem;font-size:.9375rem}
.fl-btn-primary{background:linear-gradient(135deg,var(--fl-candy),var(--fl-blush));color:var(--fl-ink);
  border-color:rgba(255,255,255,.7);box-shadow:0 10px 24px -12px rgba(255,110,165,.75)}
.fl-btn-primary:hover{background:linear-gradient(135deg,#FF9DC1,var(--fl-candy));box-shadow:0 16px 30px -12px rgba(255,110,165,.85)}
.fl-btn-primary::after{content:'';position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.6) 50%,transparent 65%);
  transform:translateX(-130%);transition:transform .9s ease}
.fl-btn-primary:hover::after{transform:translateX(130%)}
.fl-btn-outline{background:rgba(255,255,255,.85);color:var(--fl-ink);border:1.5px solid var(--fl-lavender)}
.fl-btn-outline:hover{background:var(--fl-blush);border-color:var(--fl-candy)}
.fl-btn-plum{background:var(--fl-plum);color:#fff}
.fl-btn-plum:hover{background:var(--fl-ink);box-shadow:0 16px 30px -14px rgba(46,31,66,.7)}
.fl-btn-white{background:#fff;color:var(--fl-ink);box-shadow:0 12px 26px -14px rgba(46,31,66,.45)}
.fl-btn-white:hover{background:var(--fl-tint-blush);box-shadow:0 18px 32px -14px rgba(46,31,66,.5)}
.fl-btn-ghost{background:rgba(255,255,255,.07);color:#fff;border:1.5px solid rgba(255,255,255,.4)}
.fl-btn-ghost:hover{background:rgba(255,255,255,.16);border-color:#fff}
.fl-link{display:inline-flex;align-items:center;gap:.25rem;font-weight:600;color:var(--fl-rose);cursor:pointer;transition:gap .3s,color .3s}
.fl-link:hover{gap:.5rem;color:var(--fl-ink)}
.fl-iconbtn{display:flex;height:2.25rem;width:2.25rem;align-items:center;justify-content:center;border-radius:999px;cursor:pointer;
  background:rgba(255,255,255,.95);color:var(--fl-ink);border:1px solid var(--fl-border);
  box-shadow:0 6px 16px -8px rgba(157,127,181,.6);transition:transform .3s,background .3s,border-color .3s}
.fl-iconbtn:hover{transform:scale(1.1);background:var(--fl-candy);border-color:var(--fl-candy)}
.fl-arrow{display:flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:999px;cursor:pointer;
  background:#fff;color:var(--fl-ink);border:1.5px solid var(--fl-lavender);transition:transform .3s,background .3s,border-color .3s}
.fl-arrow:not(:disabled):hover{background:var(--fl-blush);border-color:var(--fl-candy)}
.fl-arrow:disabled{opacity:.4;cursor:default}
.fl-dot{height:.375rem;width:.375rem;border-radius:999px;background:var(--fl-lavender);cursor:pointer;transition:width .3s,background .3s}
.fl-dot-active{width:1.5rem;background:var(--fl-rose)}

/* ---------- chips + tabs ---------- */
.fl-chip{display:inline-flex;align-items:center;border-radius:999px;padding:.3rem .75rem;font-size:.6875rem;font-weight:600;
  color:var(--fl-ink);background:rgba(255,255,255,.92);border:1px solid var(--fl-border);backdrop-filter:blur(6px)}
.fl-tab{border-radius:999px;padding:.55rem 1.1rem;font-size:.75rem;font-weight:600;cursor:pointer;
  background:#fff;color:var(--fl-ink-soft);border:1px solid var(--fl-border);transition:transform .3s,background .3s,border-color .3s,box-shadow .3s}
.fl-tab:hover{transform:translateY(-2px);background:var(--fl-blush);border-color:var(--fl-candy)}
.fl-tab-active,.fl-tab-active:hover{background:linear-gradient(135deg,var(--fl-candy),var(--fl-lavender));color:var(--fl-ink);border-color:transparent;box-shadow:var(--fl-shadow-pink)}
.fl-verified{display:inline-flex;align-items:center;gap:.5rem;border-radius:999px;padding:.5rem 1rem;background:#fff;border:1px solid var(--fl-border)}

/* ---------- cards ---------- */
.fl-card{background:#fff;border:1px solid var(--fl-border);box-shadow:0 8px 24px -16px rgba(157,127,181,.4);
  transition:transform .5s cubic-bezier(.2,.7,.2,1),box-shadow .5s,border-color .5s}
.fl-card-hover:hover{transform:translateY(-8px);border-color:var(--fl-candy);box-shadow:var(--fl-shadow-pink)}
.fl-card-quiet:hover{border-color:var(--fl-candy)}
.fl-card:hover .fl-title{color:var(--fl-rose)}
.fl-title{transition:color .3s}
.fl-specs{border-top:1px solid var(--fl-border)}
.fl-specrow{border-bottom:1px dashed var(--fl-border)}
.fl-specrow:last-child{border-bottom:0}
.fl-icon-badge{display:inline-flex;height:3rem;width:3rem;align-items:center;justify-content:center;border-radius:1rem;
  background:linear-gradient(135deg,var(--fl-blush),var(--fl-lavender));color:var(--fl-ink)}
.fl-step{position:relative;z-index:1;display:inline-flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;border-radius:999px;
  background:linear-gradient(135deg,var(--fl-candy),var(--fl-lavender));color:var(--fl-ink);border:4px solid #fff;
  font-family:var(--fl-font-display);font-size:1.125rem;font-weight:700;box-shadow:var(--fl-shadow-soft)}
.fl-avatar{display:inline-flex;height:2.25rem;width:2.25rem;flex-shrink:0;align-items:center;justify-content:center;border-radius:999px;
  background:linear-gradient(135deg,var(--fl-blush),var(--fl-baby));color:var(--fl-ink);font-size:.875rem;font-weight:700}
.fl-faq{background:var(--fl-bg);border:1px solid var(--fl-border);transition:background .3s,border-color .3s,box-shadow .3s}
.fl-faq-open{background:#FFEAF3;border-color:var(--fl-candy);box-shadow:var(--fl-shadow-soft)}
.fl-frame{background:linear-gradient(135deg,var(--fl-candy),var(--fl-lavender) 55%,var(--fl-sky))}
/* arch = semicircle top sized to the box ratio, soft rounded base */
.fl-arch-34{border-radius:50% 50% 1.5rem 1.5rem/37.5% 37.5% 1.5rem 1.5rem}
.fl-arch-45{border-radius:50% 50% 2rem 2rem/40% 40% 2rem 2rem}
.fl-badge{background:linear-gradient(135deg,var(--fl-candy),var(--fl-lavender));color:var(--fl-ink);box-shadow:var(--fl-shadow-pink)}
.fl-scrim{background:linear-gradient(to top,rgba(46,31,66,.88) 0%,rgba(46,31,66,.35) 45%,rgba(46,31,66,0) 100%)}
.fl-fade-y{-webkit-mask-image:linear-gradient(to bottom,transparent,#000 14%,#000 86%,transparent);
  mask-image:linear-gradient(to bottom,transparent,#000 14%,#000 86%,transparent)}

/* ---------- interaction: spotlight, tilt, progress ---------- */
.fl-spot{position:relative;isolation:isolate;overflow:hidden}
.fl-spot::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:0;transition:opacity .35s;
  background:radial-gradient(360px circle at var(--x,50%) var(--y,50%),rgba(255,200,221,.65),transparent 60%)}
.fl-spot:hover::before{opacity:1}
.fl-tilt{transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  transition:transform .5s cubic-bezier(.2,.7,.2,1);will-change:transform}
.fl-tilt:hover{transition:transform .12s linear}
.fl-progress{position:fixed;top:0;left:0;right:0;z-index:60;height:3px;pointer-events:none;
  transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,var(--fl-candy),var(--fl-lavender),var(--fl-sky))}
.fl-reveal{transition-property:opacity,transform}

/* ---------- reduced motion ---------- */
@media (prefers-reduced-motion:reduce){
  .fl-root *,.fl-root *::before,.fl-root *::after{animation:none!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
  .fl-blob,.fl-tilt{transform:none!important}
  .fl-root .fl-reveal{opacity:1!important;transform:none!important;transition:none!important}
}
`;

/* =========================================================
   SMALL HELPERS
========================================================= */

/** Typed helper for setting CSS custom properties inline. */
function cv(vars: Record<string, string | number>): React.CSSProperties {
  return vars as unknown as React.CSSProperties;
}

/* =========================================================
   ANIMATION HOOKS
========================================================= */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

/**
 * Tracks the pointer over a section and exposes it as --mx / --my
 * (-0.5 … 0.5). Children with .fl-blob drift with it. No re-renders.
 */
function useMouseParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const frame = useRef(0);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`fl-reveal ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: inView ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   INTERACTIVE + DECORATIVE PIECES
========================================================= */

/** Gentle 3D tilt that follows a mouse pointer. Ignored on touch. */
function Tilt({
  children,
  className = '',
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={`fl-tilt ${className}`}
    >
      {children}
    </div>
  );
}

/** Hanging pendant lamp — a classic interior-design silhouette. */
function Lamp({
  className = '',
  style,
  shade = '#FFAFCC',
  glow = '#FFF8FB',
  cord = '#9D7FB5',
}: {
  className?: string;
  style?: React.CSSProperties;
  shade?: string;
  glow?: string;
  cord?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* cord */}
      <line x1="50" y1="0" x2="50" y2="52" stroke={cord} strokeWidth="2" />
      {/* shade */}
      <path
        d="M20 96 C20 60, 34 52, 50 52 C66 52, 80 60, 80 96 Z"
        fill={shade}
      />
      {/* inner glow */}
      <ellipse cx="50" cy="96" rx="22" ry="5" fill={glow} opacity="0.9" />
      {/* light pool */}
      <path
        d="M28 96 L72 96 L82 128 L18 128 Z"
        fill={glow}
        opacity="0.28"
      />
    </svg>
  );
}

/** Fanned material swatch — interior-materials motif. */
function SwatchFan({
  className = '',
  style,
  colors = ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'],
}: {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {colors.map((c, i) => {
        const deg = -60 + i * 30;
        return (
          <rect
            key={i}
            x="46"
            y="6"
            width="9"
            height="46"
            rx="3"
            fill={c}
            transform={`rotate(${deg} 50 56)`}
          />
        );
      })}
      {/* rivet */}
      <circle cx="50" cy="56" r="5" fill="#2E1F42" />
      <circle cx="50" cy="56" r="2" fill="#FFF8FB" />
    </svg>
  );
}

/** Soft scalloped edge. `fill` must equal the neighbouring section's background. */
function WaveDivider({
  fill,
  position = 'top',
}: {
  fill: string;
  position?: 'top' | 'bottom';
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 z-[1] block h-10 w-full sm:h-14 lg:h-[72px] ${
        position === 'top' ? '-top-px' : '-bottom-px rotate-180'
      }`}
    >
      <path
        d="M0 0H1440V36C1340 70 1240 78 1140 58C1040 38 940 6 840 14C740 22 640 66 540 74C440 82 340 62 240 44C140 26 70 22 0 34Z"
        style={{ fill }}
      />
    </svg>
  );
}

const PROJECT_SHOWCASES = [
  {
    title: 'Textured Feature Wall',
    category: 'Wall Coverings',
    slug: 'wall-coverings',
    image: '/images/products/wall-coverings/wall-covering-1.jpeg',
    imageAlt: 'Textured dark feature wall panels installed in a room',
  },
  {
    title: 'Tailored Window Styling',
    category: 'Window Coverings',
    slug: 'window-coverings',
    image: '/images/products/window-coverings/curtains-1.jpeg',
    imageAlt: 'Custom curtains and drapery installed in a dining space',
  },
  {
    title: 'A Thoughtful Living Space',
    category: 'Window Coverings',
    slug: 'window-coverings',
    image: '/images/products/window-coverings/door-1.jpeg',
    imageAlt: 'A finished living room with dark window blinds',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Consultation',
    text: 'Tell us about your space, requirements, style, and approximate budget.',
  },
  {
    number: '02',
    title: 'Materials & Samples',
    text: 'Explore suitable materials and review samples before making a decision.',
  },
  {
    number: '03',
    title: 'Quotation',
    text: 'Receive a detailed quotation covering your selected materials and requirements.',
  },
  {
    number: '04',
    title: 'Installation',
    text: 'Our installation team handles the finishing process and final inspection.',
  },
];

/* =========================================================
   FAQS
========================================================= */

const FAQS = [
  {
    question: 'Can I see or feel a material before I order it?',
    answer:
      'Yes. After your initial consultation, our team can arrange physical samples for you to review, allowing you to judge the texture, finish, and color in your own space before committing.',
  },
  {
    question: 'Do you handle installation, or just supply the material?',
    answer:
      'We handle both. Our installation teams fit the materials we supply, and our team will explain the installation plan before you confirm.',
  },
  {
    question: 'Where do your materials come from?',
    answer:
      'We source and import materials from manufacturers across China, Germany, Turkey, Switzerland, and Korea, selecting products based on finish, application, and durability.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We provide interior materials, design guidance, supply, and installation services across Pakistan.',
  },
  {
    question: 'Can I request a quotation for a complete project?',
    answer:
      'Yes. Contact our team with your project requirements, approximate dimensions, preferred materials, and location. We can then guide you through suitable options and prepare a quotation.',
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const TESTIMONIALS = [
  {
    name: 'Ansar Javed',
    meta: 'Homeowner, Islamabad',
    rating: 5,
    content:
      'An exceptional experience with Flourish Interiors. The team was cooperative, committed, and genuinely focused on delivering quality products and a smooth process from start to finish.',
    reviewUrl: 'https://share.google/jU3Y6ub9wZ5hzKSUj',
  },
  {
    name: 'Farooqmalaysia21',
    meta: 'Interior Client',
    rating: 5,
    content:
      'From the moment we visited, we were impressed by the wide range of premium materials and the helpful guidance throughout the selection process.',
    reviewUrl: 'https://share.google/1A5oGTX9ha543zXOo',
  },
  {
    name: 'Sabih Qazi',
    meta: 'Residential Project',
    rating: 5,
    content:
      'Excellent experience with very professional people. They guided us very well and made the entire journey feel easy and stress-free.',
    reviewUrl: 'https://share.google/kGrnBsgE4CFBEdDXK',
  },
  {
    name: 'Adnan Shamim',
    meta: 'Wall Design Client',
    rating: 5,
    content:
      'The wall designs and installation quality were outstanding. The team helped us choose the right look for our space and executed it beautifully.',
    reviewUrl: 'https://share.google/jU3Y6ub9wZ5hzKSUj',
  },
  {
    name: 'Sana Bilal',
    meta: 'Villa Owner',
    rating: 5,
    content:
      'Our experience was smooth, professional, and incredibly detailed. The recommendations were practical and the final finish exceeded expectations.',
    reviewUrl: 'https://share.google/AHiteHXpcIRKfsiTS',
  },
  {
    name: 'Hammad Raza',
    meta: 'Office Renovation',
    rating: 5,
    content:
      'We wanted a premium yet functional finish for our office and Flourish Interiors delivered exactly that with thoughtful guidance and quality products.',
  },
];

/* =========================================================
   HELPERS
========================================================= */

/* =========================================================
   FINAL CTA
========================================================= */

function CtaSection() {
  const { ref, onMouseMove, onMouseLeave } = useMouseParallax<HTMLElement>();

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="fl-bg-cta relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32"
    >
      <WaveDivider fill="var(--fl-bg)" position="top" />

      <div
        aria-hidden="true"
        className="fl-blob fl-blob-white -left-20 top-1/4 h-[22rem] w-[22rem]"
        style={cv({ '--d': '32px' })}
      />
      <div
        aria-hidden="true"
        className="fl-blob fl-blob-white -right-24 bottom-0 h-[24rem] w-[24rem]"
        style={cv({ '--d': '-30px' })}
      />
      <Lamp
        className="pointer-events-none absolute -left-6 bottom-2 h-32 w-24 opacity-50 sm:h-40 sm:w-28"
        shade="#FFFFFF"
        glow="#FFC8DD"
        cord="#FFC8DD"
      />
      <SwatchFan
        className="pointer-events-none absolute -right-4 top-20 h-24 w-24 opacity-50 sm:h-32 sm:w-32"
        colors={['#FFFFFF', '#FFC8DD', '#FFAFCC', '#CDB4DB', '#A2D2FF']}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="fl-eyebrow fl-eyebrow-on-color">
            Start Your Project
          </span>

          <h2 className="fl-ink mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s find the right finish for your space.
          </h2>

          <p className="fl-ink mx-auto mt-5 max-w-2xl text-sm leading-7 md:text-base">
            Browse our materials, request samples, or speak directly with our
            team about your project requirements.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="fl-btn fl-btn-white fl-btn-lg w-full sm:w-auto"
            >
              Browse Full Catalog
            </Link>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Hi! I am interested in speaking to a consultant about my interior project.'
                )
              }
              className="fl-btn fl-btn-plum fl-btn-lg w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN HOMEPAGE
========================================================= */

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  const testimonialGroups = useMemo(() => {
    const groups: (typeof TESTIMONIALS)[] = [];
    for (let i = 0; i < TESTIMONIALS.length; i += 4) {
      groups.push(TESTIMONIALS.slice(i, i + 4));
    }
    return groups;
  }, []);

  const currentTestimonialGroup =
    testimonialGroups[testimonialIndex] ?? testimonialGroups[0];

  const nextTestimonials = () =>
    setTestimonialIndex((c) => (c + 1) % testimonialGroups.length);

  const prevTestimonials = () =>
    setTestimonialIndex(
      (c) => (c - 1 + testimonialGroups.length) % testimonialGroups.length
    );

  // Testimonial autoplay — pauses while the visitor hovers or focuses it
  useEffect(() => {
    if (testimonialGroups.length <= 1 || testimonialsPaused) return;
    const id = setInterval(() => {
      setTestimonialIndex((c) => (c + 1) % testimonialGroups.length);
    }, 5500);
    return () => clearInterval(id);
  }, [testimonialGroups.length, testimonialsPaused]);

  // Scroll progress bar (no re-renders — writes straight to the element)
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <main className="fl-root min-h-screen font-sans antialiased">
      <style dangerouslySetInnerHTML={{ __html: THEME_CSS }} />
      <div ref={progressRef} aria-hidden="true" className="fl-progress" />

      <MaterialHero />

      <div id="services">
        <ServiceOptions />
      </div>

      {/* PROJECT SHOWCASE */}
      <section
        id="projects"
        className="fl-bg-soft relative py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 text-center sm:mb-12">
              <span className="fl-eyebrow">Project Showcase</span>

              <h2 className="fl-ink mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Spaces We’ve Helped Shape
              </h2>

              <p className="fl-body mx-auto mt-3 max-w-2xl text-sm sm:text-base">
                Explore a few finished spaces featuring Flourish materials and
                thoughtful interior details.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {PROJECT_SHOWCASES.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <Tilt>
                  <Link
                    href={`/catalog?category=${project.slug}`}
                    className="group fl-bg-lav relative block aspect-[3/4] overflow-hidden fl-arch-34 shadow-[0_24px_40px_-24px_rgba(157,127,181,0.7)]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="fl-scrim absolute inset-0" />

                    <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-5">
                      <span className="text-[11px] font-medium text-white/80">
                        {project.category}
                      </span>

                      <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                        {project.title}
                      </h3>

                      <div className="fl-ink mt-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold transition-colors group-hover:bg-[#FFC8DD]">
                        Explore
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — a real sequence, so it keeps its numbers */}
      <section className="fl-bg-lav py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
              <span className="fl-eyebrow">How We Work</span>

              <h2 className="fl-ink mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                From material selection to installation.
              </h2>

              <p className="fl-body mt-4 text-sm leading-6">
                A straightforward process designed to make choosing and
                installing interior finishes easier.
              </p>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed lg:block"
              style={{ borderColor: 'rgba(157,127,181,0.55)' }}
            />

            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <span className="fl-step">{step.number}</span>

                  <h3 className="fl-ink mt-5 text-lg font-semibold sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="fl-body mx-auto mt-3 max-w-xs text-sm leading-6">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fl-bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="fl-eyebrow">Good to Know</span>

              <h2 className="fl-ink mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions, answered.
              </h2>

              <p className="fl-body mt-4 text-sm">
                A few useful things to know before starting your project.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={faq.question} delay={index * 60}>
                  <div
                    className={`fl-faq rounded-2xl ${
                      isOpen ? 'fl-faq-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left sm:gap-5 sm:px-5 sm:py-5"
                    >
                      <span className="fl-ink flex items-start gap-3 text-sm font-semibold sm:text-base">
                        <HelpCircle className="fl-rose mt-0.5 h-4 w-4 flex-shrink-0" />
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={`fl-lav h-4 w-4 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? '340px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="px-4 pb-4 pl-11 sm:px-5 sm:pb-5 sm:pl-12">
                        <p className="fl-body text-sm leading-6">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="fl-bg-soft py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 text-center sm:mb-12">
              <span className="fl-eyebrow">Client Experiences</span>

              <h2 className="fl-ink mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                What our clients say.
              </h2>

              <p className="fl-body mx-auto mt-4 max-w-2xl text-sm leading-6">
                Feedback from homeowners and businesses who have worked with
                Flourish Interiors.
              </p>

              <div className="fl-verified mt-6">
                <BadgeCheck className="fl-lav h-4 w-4" />
                <span className="fl-ink text-xs font-semibold">
                  Verified Google Reviews
                </span>
              </div>
            </div>
          </Reveal>

          <div
            key={testimonialIndex}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            style={{ animation: 'fadeSlide 500ms cubic-bezier(.2,.7,.2,1) both' }}
            onMouseEnter={() => setTestimonialsPaused(true)}
            onMouseLeave={() => setTestimonialsPaused(false)}
            onFocus={() => setTestimonialsPaused(true)}
            onBlur={() => setTestimonialsPaused(false)}
          >
            {currentTestimonialGroup.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="fl-card fl-card-quiet flex min-h-[240px] flex-col justify-between rounded-3xl p-5 sm:min-h-[270px] sm:p-6"
              >
                <div>
                  <div
                    className="flex gap-1"
                    style={{ color: 'var(--fl-star)' }}
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="fl-body mt-5 text-sm leading-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div
                  className="mt-7 border-t pt-4"
                  style={{ borderColor: 'var(--fl-border)' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="fl-avatar" aria-hidden="true">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>

                    <div>
                      <div className="fl-ink font-semibold">
                        {testimonial.name}
                      </div>

                      <div className="fl-muted text-xs">{testimonial.meta}</div>
                    </div>
                  </div>

                  {testimonial.reviewUrl && (
                    <a
                      href={testimonial.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fl-link mt-4 text-[11px]"
                    >
                      Read full review
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {testimonialGroups.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prevTestimonials}
                aria-label="Previous testimonials"
                className="fl-arrow"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonialGroups.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Go to testimonial group ${index + 1}`}
                    className={`fl-dot ${
                      testimonialIndex === index ? 'fl-dot-active' : ''
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonials}
                aria-label="Next testimonials"
                className="fl-arrow"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaSection />
    </main>
  );
}