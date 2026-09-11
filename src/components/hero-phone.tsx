"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { logo, site, ussdMenu } from "@/content/site";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;
const KEY_ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

/**
 * A feature phone showing the real *347*319# menu. The highlighted option
 * cycles as if someone were choosing, and the handset tilts toward a mouse.
 */
export function HeroPhone() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState(0);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), { stiffness: 140, damping: 18 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 140, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setSelected((index) => (index + 1) % ussdMenu.length), 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="relative flex min-h-[560px] justify-center pt-5 pb-10 [perspective:1200px] sm:min-h-[600px]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[340px] -translate-1/2 rounded-full bg-leaf/[0.07] sm:size-[430px]"
      />

      <motion.div
        className="relative w-[272px] flex-none sm:w-[296px]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
      >
        <div className="-rotate-[3.5deg]">
          <div className="animate-float">
            <div className="rounded-[46px] bg-[#0b0b0c] p-[11px] shadow-[0_50px_90px_rgba(20,38,26,0.32),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <div
                role="img"
                aria-label={`The Promise Point USSD menu after dialling ${site.ussdCode}, with six registration options`}
                className="overflow-hidden rounded-[36px] bg-[#1c1c1e]"
              >
                <div aria-hidden>
                  <div className="flex items-center justify-between px-6 pt-[15px] pb-[9px] text-[13px] font-semibold text-white">
                    <span>4:33</span>
                    <span className="inline-block h-[9px] w-[17px] rounded-[3px] border-[1.5px] border-white" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 pt-2.5">
                    <span className="rounded-full bg-[#2c2c2e] px-[15px] py-[7px] text-[12.5px] font-semibold text-[#98989d]">
                      Cancel
                    </span>
                    <span className="text-[13px] font-semibold text-white">{site.ussdCode}</span>
                    <span className="rounded-full bg-leaf px-[15px] py-[7px] text-[12.5px] font-bold text-white">Reply</span>
                  </div>

                  <div className="px-5 pt-7 pb-[18px] text-center">
                    <span className="mb-3 inline-flex rounded-lg bg-white px-2 py-1.5">
                      <Image src={logo.src} alt="" width={logo.width} height={logo.height} className="h-5 w-auto" />
                    </span>
                    <div className="px-1 text-left text-sm leading-[2] text-[#f2f2f2]">
                      <p className="mb-2 text-center font-bold text-white">Promise Point</p>
                      <motion.ol
                        initial="hidden"
                        animate="shown"
                        variants={{ shown: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } } }}
                      >
                        {ussdMenu.map((label, index) => (
                          <motion.li
                            key={label}
                            variants={{ hidden: { opacity: 0, x: -6 }, shown: { opacity: 1, x: 0 } }}
                            className={cn(
                              "-mx-1.5 flex gap-[9px] rounded-md px-1.5 transition-colors duration-500",
                              selected === index && "bg-white/[0.08]",
                            )}
                          >
                            <span className="flex-none font-bold text-gold">{index + 1}.</span>
                            <span>{label}</span>
                          </motion.li>
                        ))}
                      </motion.ol>
                    </div>
                  </div>

                  <div className="px-4 pb-2.5">
                    <div className="flex h-10 items-center rounded-xl border-[1.5px] border-[#6e6e73] px-[13px] text-sm text-white">
                      <motion.span
                        key={selected}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {selected + 1}
                      </motion.span>
                      <span className="ml-px h-4 w-px animate-blink bg-[#0a84ff]" />
                    </div>
                    <p className="mt-[7px] text-center text-[11.5px] text-[#8e8e93]">181 characters remaining</p>
                  </div>

                  <div className="grid grid-cols-10 gap-[5px] bg-[#2c2c2e] px-[7px] pt-[11px] pb-[15px]">
                    {KEY_ROWS.map((row, rowIndex) =>
                      row.split("").map((key, keyIndex) => (
                        <span
                          key={key}
                          className={cn(
                            "grid h-[25px] place-items-center rounded-[5px] bg-[#5a5a5e] text-[10px] font-medium text-white",
                            keyIndex === 0 && rowIndex === 1 && "col-start-2",
                            keyIndex === 0 && rowIndex === 2 && "col-start-3",
                          )}
                        >
                          {key}
                        </span>
                      )),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-[112px] -left-8 z-10 sm:-left-[104px]"
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease }}
        >
          <div className="flex animate-float-slow items-center gap-3 whitespace-nowrap rounded-[20px] bg-white px-4 py-3.5 shadow-[0_22px_48px_rgba(20,38,26,0.16)] [animation-delay:0.8s] sm:px-[19px] sm:py-[15px]">
            <span className="grid size-[38px] flex-none place-items-center rounded-xl bg-mint">
              <Check aria-hidden className="size-[18px] text-leaf" strokeWidth={2.75} />
            </span>
            <span>
              <span className="block font-display text-[15px] font-bold">&#8358;42,500</span>
              <span className="mt-px block text-xs text-stone">Paid to Adeola B.</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-8 bottom-[96px] z-10 sm:-right-[118px]"
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6, ease }}
        >
          <div className="flex animate-float-slow items-center gap-3 whitespace-nowrap rounded-[20px] bg-white px-4 py-3.5 shadow-[0_22px_48px_rgba(20,38,26,0.16)] [animation-delay:0.3s] sm:px-[19px] sm:py-[15px]">
            <span className="grid size-[38px] flex-none place-items-center rounded-xl bg-gold-soft">
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A8760A"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h12" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-[15px] font-bold">1.42 MT recorded</span>
              <span className="mt-px block text-xs text-stone">Delivery #1182 &middot; Grade A</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
