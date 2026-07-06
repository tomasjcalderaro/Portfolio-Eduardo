import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
    children: React.ReactNode;
    };

    const FadeInSection = ({ children }: Props) => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        amount: 0.2,
    });

    return (
        <motion.div
        ref={ref}
        animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 60,
        }}
        transition={{
            duration: 0.7,
        }}
        >
        {children}
        </motion.div>
    );
};

export default FadeInSection;