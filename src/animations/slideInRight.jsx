import * as motion from "motion/react-client"

export default function SlideInRight({ children, className, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
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
