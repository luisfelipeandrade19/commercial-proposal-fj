import * as motion from "motion/react-client"

export default function SlideInBottom({ children, className, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
                duration: 0.9,
                delay: delay,
                type: "spring",
                bounce: 0.3
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}