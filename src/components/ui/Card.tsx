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
      whileHover={onClick ? { y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" } : undefined}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}`}
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
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
}

export function CardTitle({ children }: CardTitleProps) {
  return <h3 className="text-xl font-semibold text-gray-800 mb-2">{children}</h3>
}

interface CardDescriptionProps {
  children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <p className="text-gray-600 text-sm">{children}</p>
}