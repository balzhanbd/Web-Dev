"use client"
import ProductCard from "./ProductCard"

interface Product {
  id: number
  images: string[]
  name: string
  description: string
  rating: number
  link: string
}

const products: Product[] = [
  {
    id: 1,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h30/63073424990238/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/h29/63073425514526/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-3.jpg",
    ],
    name: "Apple iPhone 14 Pro Max 128Gb purple",
    description: "A powerful smartphone with an advanced camera system and stunning display.",
    rating: 5,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-fioletovyi-106363342/",
  },
  {
    id: 2,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/62948396695582/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/h2c/63073424138270/apple-iphone-14-pro-128gb-fioletovyj-106363319-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h16/63073424662558/apple-iphone-14-pro-128gb-fioletovyj-106363319-3.jpg",
    ],
    name: "Apple iPhone 14 Pro 128Gb purple",
    description: "A premium smartphone with innovative features and exceptional performance.",
    rating: 4.5,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363319/",
  },
  {
    id: 3,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h54/63073437229086/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h7b/63073437753374/apple-iphone-14-128gb-cernyj-106363023-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h31/63073438277662/apple-iphone-14-128gb-cernyj-106363023-3.jpg",
    ],
    name: "Apple iPhone 14 128Gb black",
    description: "A sleek and powerful smartphone with impressive camera capabilities.",
    rating: 4.8,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/",
  },
  {
    id: 4,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h10/63073435230238/apple-iphone-14-128gb-belyj-106363150-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/h17/63073435754526/apple-iphone-14-128gb-belyj-106363150-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h80/63073436278814/apple-iphone-14-128gb-belyj-106363150-3.jpg",
    ],
    name: "Apple iPhone 14 128Gb white",
    description: "A stylish and feature-rich smartphone with excellent performance.",
    rating: 4.7,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-belyi-106363150/",
  },
  {
    id: 5,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/63072540131358/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h91/63072540655646/apple-iphone-14-128gb-sirenevyj-106363117-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h43/63072541179934/apple-iphone-14-128gb-sirenevyj-106363117-3.jpg",
    ],
    name: "Apple iPhone 14 128Gb purple",
    description: "A vibrant and powerful smartphone with advanced features.",
    rating: 4.6,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/",
  },
  {
    id: 6,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h30/33271773821982/apple-iphone-12-128gb-sinij-100656958-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h82/33271777524766/apple-iphone-12-128gb-sinij-100656958-2-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h62/h23/33271781227550/apple-iphone-12-128gb-sinij-100656958-3-Container.jpg",
    ],
    name: "Apple iPhone 12 128Gb blue",
    description: "A popular smartphone with a great balance of features and performance.",
    rating: 4.3,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-128gb-sinii-100656958/",
  },
  {
    id: 7,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h97/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h47/46392662917150/apple-iphone-13-128gb-cernyj-102298404-3-Container.jpg",
    ],
    name: "Apple iPhone 13 128Gb black",
    description: "A powerful and sleek smartphone with improved camera capabilities.",
    rating: 4.9,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/",
  },
  {
    id: 8,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/hc9/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/h49/46392664424478/apple-iphone-13-128gb-belyj-102298420-2-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hdc/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg",
    ],
    name: "Apple iPhone 13 128Gb white",
    description: "An elegant smartphone with impressive performance and features.",
    rating: 4.7,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/",
  },
  {
    id: 9,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h4b/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h83/46392661934110/apple-iphone-13-128gb-sinij-102298364-2-Container.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/h40/46392662130718/apple-iphone-13-128gb-sinij-102298364-3-Container.jpg",
    ],
    name: "Apple iPhone 13 128Gb blue",
    description: "A stylish smartphone with excellent camera quality and performance.",
    rating: 4.6,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/",
  },
  {
    id: 10,
    images: [
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/63073056096286/apple-iphone-14-pro-256gb-fioletovyj-106363323-1.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hde/63073056620574/apple-iphone-14-pro-256gb-fioletovyj-106363323-2.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h3b/63073057144862/apple-iphone-14-pro-256gb-fioletovyj-106363323-3.jpg",
    ],
    name: "Apple iPhone 14 Pro 256Gb purple",
    description: "A high-end smartphone with advanced features and ample storage.",
    rating: 4.8,
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363323/",
  },
]

export default function ProductList() {
  return (
    <div className="products-container">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

