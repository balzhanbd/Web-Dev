import { Component } from "@angular/core"

interface Product {
  id: number
  image: string
  name: string
  description: string
  rating: number
  link: string
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
      name: "Apple iPhone 14 Pro Max 128Gb purple",
      description: "A powerful smartphone with an advanced camera system and stunning display.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-fioletovyi-106363342/",
    },
    {
      id: 2,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/62948396695582/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
      name: "Apple iPhone 14 Pro 128Gb purple",
      description: "A premium smartphone with innovative features and exceptional performance.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363319/",
    },
    {
      id: 3,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h54/63073437229086/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
      name: "Apple iPhone 14 128Gb black",
      description: "A sleek and powerful smartphone with impressive camera capabilities.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/",
    },
    {
      id: 4,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h10/63073435230238/apple-iphone-14-128gb-belyj-106363150-1.jpg",
      name: "Apple iPhone 14 128Gb white",
      description: "A stylish and feature-rich smartphone with excellent performance.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-belyi-106363150/",
    },
    {
      id: 5,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/63072540131358/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg",
      name: "Apple iPhone 14 128Gb purple",
      description: "A vibrant and powerful smartphone with advanced features.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/",
    },
    {
      id: 6,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h30/33271773821982/apple-iphone-12-128gb-sinij-100656958-1-Container.jpg",
      name: "Apple iPhone 12 128Gb blue",
      description: "A popular smartphone with a great balance of features and performance.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-12-128gb-sinii-100656958/",
    },
    {
      id: 7,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
      name: "Apple iPhone 13 128Gb black",
      description: "A powerful and sleek smartphone with improved camera capabilities.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/",
    },
    {
      id: 8,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/hc9/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
      name: "Apple iPhone 13 128Gb white",
      description: "An elegant smartphone with impressive performance and features.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/",
    },
    {
      id: 9,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h4b/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg",
      name: "Apple iPhone 13 128Gb blue",
      description: "A stylish smartphone with excellent camera quality and performance.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/",
    },
    {
      id: 10,
      image:
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/63073056096286/apple-iphone-14-pro-256gb-fioletovyj-106363323-1.jpg",
      name: "Apple iPhone 14 Pro 256Gb purple",
      description: "A high-end smartphone with advanced features and ample storage.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363323/",
    },
  ]

  shareProduct(product: Product) {
    const message = `Check out this product: ${product.name} - ${product.link}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`

    if (confirm("Choose a platform to share:\n1. WhatsApp\n2. Telegram")) {
      window.open(whatsappUrl, "_blank")
    } else {
      window.open(telegramUrl, "_blank")
    }
  }
}

