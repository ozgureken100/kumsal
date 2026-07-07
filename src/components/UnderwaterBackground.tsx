// Tüm sayfanın arkasında duran sabit "su altı" katmanı:
// Instagram mavi-pembe degrade zemin, yukarıdan süzülen ışık hüzmeleri,
// yükselen kabarcıklar ve dalgalanan ışık lekeleri (caustics).

// Kabarcıklar deterministik üretilir; her render'da aynı kalır.
const BUBBLES = Array.from({ length: 26 }, (_, i) => {
  const seed = (i * 2654435761) % 1000
  return {
    left: (seed % 97) + 1, // %1–98 arası yatay konum
    size: 5 + (seed % 23), // 5–27 px
    duration: 11 + (seed % 17), // 11–27 sn
    delay: -((seed % 190) / 10), // negatif: sayfa açılır açılmaz dolu görünsün
    opacity: 0.18 + (seed % 30) / 100, // 0.18–0.47
    sway: 4 + (seed % 5), // yatay salınım süresi
  }
})

const RAYS = [
  { left: '4%', width: 130, delay: 0, duration: 9 },
  { left: '18%', width: 210, delay: -3, duration: 12 },
  { left: '38%', width: 150, delay: -6, duration: 10 },
  { left: '57%', width: 240, delay: -2, duration: 14 },
  { left: '76%', width: 160, delay: -8, duration: 11 },
  { left: '90%', width: 120, delay: -5, duration: 13 },
]

export default function UnderwaterBackground() {
  return (
    <div aria-hidden className="uw-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Derin okyanus zemini: Instagram mavi → mor → pembe */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#5b2a86_0%,#3b2a8f_18%,#2438a8_42%,#16276f_68%,#0a1440_88%,#060d2b_100%)]" />

      {/* Yüzeye yakın pembe/mor parıltılar */}
      <div className="uw-glow absolute -top-[20%] left-[8%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(225,48,108,0.38)_0%,rgba(225,48,108,0)_70%)]" />
      <div className="uw-glow-slow absolute -top-[12%] right-[4%] h-[50vh] w-[45vw] rounded-full bg-[radial-gradient(circle,rgba(131,58,180,0.42)_0%,rgba(131,58,180,0)_70%)]" />
      <div className="uw-glow absolute bottom-[8%] left-[30%] h-[40vh] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(64,93,230,0.28)_0%,rgba(64,93,230,0)_72%)]" />

      {/* Yukarıdan süzülen ışık hüzmeleri */}
      {RAYS.map((ray, i) => (
        <div
          key={i}
          className="uw-ray absolute -top-[12%] h-[85vh] origin-top"
          style={{
            left: ray.left,
            width: ray.width,
            animationDuration: `${ray.duration}s`,
            animationDelay: `${ray.delay}s`,
          }}
        />
      ))}

      {/* Dalgalanan ışık lekeleri (caustics) */}
      <div className="uw-caustic absolute inset-0" />

      {/* Yükselen kabarcıklar */}
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="uw-bubble absolute bottom-0"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            ['--bubble-o' as string]: b.opacity,
            ['--sway-d' as string]: `${b.sway}s`,
          }}
        >
          <span className="uw-bubble-inner block h-full w-full rounded-full" />
        </span>
      ))}

      {/* Derinlik vinyeti: kenarlar hafif kararır */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_45%,rgba(4,8,30,0.55)_100%)]" />
    </div>
  )
}
