import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                width: "10px",
                height: "10px",
                backgroundColor: "white",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "difference",
            }}
            animate={{
                x: position.x - 5, // Centering the dot on the cursor
                y: position.y - 5, // Centering the dot on the cursor
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
    );
};

export default CursorFollow;
