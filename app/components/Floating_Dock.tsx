import {cn} from "@/lib/utils";
import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import {useRef, useState} from "react";

export const Floating_Dock = ({
                                 items,
                                 desktopClassName,
                                 mobileClassName,
                             }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName}/>
            <FloatingDockMobile items={items} className={mobileClassName}/>
        </>
    );
};

// ----------------------
// MOBILE VERSION (same as desktop UI)
// ----------------------
const FloatingDockMobile = ({
                                items,
                                className,
                            }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "md:hidden mx-auto mt-4 h-16 w-full inset-x-6 max-w-md rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 flex items-center justify-center px-4",
                className
            )}
        >
            <div className="flex w-full items-center justify-between">
                {items.map((item) => (
                    <a
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10"
                    >
                        <div className="h-5 w-5 text-white">{item.icon}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

// ----------------------
// DESKTOP VERSION
// ----------------------
const FloatingDockDesktop = ({
                                 items,
                                 className,
                             }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden h-20 items-center dark:bg-neutral-800 gap-8 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 px-7 md:flex",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

// ----------------------
// ICON MAGNET EFFECT (Desktop Only)
// ----------------------
function IconContainer({
                           mouseX,
                           title,
                           icon,
                           href,
                       }: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? {x: 0, width: 0};
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    const width = useSpring(widthTransform, {mass: 0.1, stiffness: 150, damping: 12});
    const height = useSpring(heightTransform, {mass: 0.1, stiffness: 150, damping: 12});
    const widthIcon = useSpring(widthIconTransform, {mass: 0.1, stiffness: 150, damping: 12});
    const heightIcon = useSpring(heightIconTransform, {mass: 0.1, stiffness: 150, damping: 12});

    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            <motion.div
                ref={ref}
                style={{width, height}}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-lg"
            >
                {/* Tooltip */}
                {hovered && (
                    <motion.div
                        initial={{opacity: 0, y: 6, x: "-50%"}}
                        animate={{opacity: 1, y: 0, x: "-50%"}}
                        exit={{opacity: 0, y: 4, x: "-50%"}}
                        className="absolute -top-7 left-1/2 px-2 py-0.5 rounded-md text-xs whitespace-nowrap border border-white/10 bg-black/40 backdrop-blur-md text-white"
                    >
                        {title}
                    </motion.div>
                )}

                <motion.div
                    style={{width: widthIcon, height: heightIcon}}
                    className="flex items-center justify-center text-white"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}