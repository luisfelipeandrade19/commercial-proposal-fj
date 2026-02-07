import * as motion from "motion/react-client"

export default function EnterAnimation({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
