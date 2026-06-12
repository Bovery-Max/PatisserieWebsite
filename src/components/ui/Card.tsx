import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div
      whileHover={onClick ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className={`
        bg-white/80 backdrop-blur-sm
        rounded-2xl shadow-lg border border-white/20
        overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export function CardGlass({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div
      whileHover={onClick ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className={`
        bg-white/60 dark:bg-gray-900/60
        backdrop-blur-xl
        rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30
        overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

interface CardImageProps {
  src: string
  alt: string
}

export function CardImage({ src, alt }: CardImageProps) {
  return (
    <div className="aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-text-primary mb-2 font-heading ${className}`}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return <p className={`text-text-secondary text-sm line-clamp-3 ${className}`}>{children}</p>
}

interface CardBadgeProps {
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function CardBadge({ children, variant = "primary" }: CardBadgeProps) {
  const styles = variant === "primary"
    ? "bg-primary-500 text-white"
    : "bg-pastry-200 text-text-primary"

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
      {children}
    </span>
  )
}