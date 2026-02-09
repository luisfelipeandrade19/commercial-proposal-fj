import * as motion from "motion/react-client"

export default function EnterAnimation({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, filter: "blur(10px)"  }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)"  }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                scale: {
                    type: "spring",
                    visualDuration: 0.6,
                    bounce: 0.4
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
