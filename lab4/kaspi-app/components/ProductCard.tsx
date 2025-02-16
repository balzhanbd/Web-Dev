"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: number
  images: string[]
  name: string
  description: string
  rating: number
  link: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const shareWhatsApp = (product: Product) => {
    const message = `Check out this product: ${product.name} - ${product.link}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const shareTelegram = (product: Product) => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`
    window.open(telegramUrl, "_blank")
  }

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const decimalPart = rating - fullStars

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative w-5 h-5">
            <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${index < fullStars ? 100 : index === fullStars ? decimalPart * 100 : 0}%`,
                height: "100%",
                overflow: "hidden",
              }}
            >
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="product-card">
      <div className="relative">
        <Image
          src={product.images[currentImageIndex] || "/placeholder.svg"}
          alt={product.name}
          width={250}
          height={250}
          className="product-image"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <div className="mt-2">{renderRating(product.rating)}</div>
      <a href={product.link} target="_blank" rel="noopener noreferrer" className="view-button">
        View on Kaspi.kz
      </a>
      <div className="flex justify-between mt-2">
        <button onClick={() => shareWhatsApp(product)} className="share-button bg-green-500">
          WhatsApp
        </button>
        <button onClick={() => shareTelegram(product)} className="share-button bg-blue-500">
          Telegram
        </button>
      </div>
    </div>
  )
}

