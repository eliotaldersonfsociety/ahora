"use client";
import Image from 'next/image';
import Link from 'next/link';

const externalImageLoader = ({ src }: { src: string }) => src;

const promoCards = [
  {
    title: 'Actualiza tu celular y el de tu familia',
    subtitle: 'Última tecnología',
    buttonText: 'Ver más',
    imageSrc: '/t2.png',
    imageAlt: 'Smartphone última generación',
    path: "/categorias/celulares",
  },
  {
    title: 'Lleva tu juego al siguinte nivel',
    subtitle: 'Tu pediddo contra entrega',
    buttonText: 'Ver más',
    imageSrc: '/t3.png',
    imageAlt: 'Consola PS5 con control',
    path: "/categorias/gamer",
  },
  {
    title: 'Experiencia de sonido',
    subtitle: 'Ofertas Especiales',
    buttonText: 'Descubrir',
    imageSrc: '/t16.png',
    imageAlt: 'Auriculares de alta calidad',
    path: "/categorias/gamer",
  },
  {
    title: 'Equipa tu hogar con lo mejor',
    subtitle: 'Tecnología para el Hogar',
    buttonText: 'Explorar',
    imageSrc: '/t20.png',
    imageAlt: 'Dispositivos de hogar inteligente',
    path: "/categorias/hogaryjardin",
  },
];

const categoryCards = [
  {
    title: "Electrónica",
    mainImage: "/per1.webp",
    link: "https://next-navy-seven.vercel.app/product/142",
    subImages: [
      {
        src: "/per2.webp",
        link: "https://next-navy-seven.vercel.app/product/189",
      },
      {
        src: "/per3.webp",
        link: "https://next-navy-seven.vercel.app/product/197",
      },
      {
        src: "/per4.jpg",
        link: "https://next-navy-seven.vercel.app/product/206",
      },
      {
        src: "/per5.jpg",
        link: "https://next-navy-seven.vercel.app/product/223",
      },
    ],
  },
  {
    title: "Moda",
    mainImage: "/mo4.jpeg",
    link: "https://next-navy-seven.vercel.app/product/238",
    subImages: [
      {
        src: "/bi1.webp",
        link: "https://next-navy-seven.vercel.app/product/379",
      },
      {
        src: "/bi2.webp",
        link: "https://next-navy-seven.vercel.app/product/368",
      },
      {
        src: "/bi3.webp",
        link: "https://next-navy-seven.vercel.app/product/325",
      },
      {
        src: "/bi4.jpg",
        link: "https://next-navy-seven.vercel.app/product/484",
      },
    ],
  },
  {
    title: "Hogar",
    mainImage: "/mo1.webp",
    link: "https://next-navy-seven.vercel.app/product/721",
    subImages: [
      {
        src: "/mo2.webp",
        link: "https://next-navy-seven.vercel.app/product/855",
      },
      {
        src: "/mo3.jpeg",
        link: "https://next-navy-seven.vercel.app/product/866",
      },
      {
        src: "/mo4.jpg",
        link: "https://next-navy-seven.vercel.app/product/869",
      },
      {
        src: "/mo5.jpg",
        link: "https://next-navy-seven.vercel.app/product/880",
      },
    ],
  },
];

export default function PromoCards() {
  return (
    <div className="bg-gray-200 py-4">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 lg:mx-36">
          {promoCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-between items-stretch relative">
                <div className="p-6 space-y-4 flex-1">
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{card.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold">{card.title}</h3>
                  <Link href={card.path}>
                    <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-sm font-semibold transition-colors">
                      {card.buttonText}
                    </button>
                  </Link>
                </div>
                <div className="relative w-full md:w-48 h-40 md:h-48">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    layout="fill"
                    objectFit="contain"
                    className="object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mx-36">
          {categoryCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <a href={card.link}>
                  <div className="relative h-48 mb-4">
                    <Image
                      loader={externalImageLoader}
                      src={card.mainImage}
                      alt={card.title}
                      layout="fill"
                      objectFit="contain"
                      className="object-center rounded-md"
                    />
                  </div>
                </a>
                <div className="grid grid-cols-4 gap-2">
                  {card.subImages.map((subImage, subIndex) => (
                    <a key={subIndex} href={subImage.link}>
                      <div className="relative h-12 w-12">
                        <Image
                          loader={externalImageLoader}
                          src={subImage.src}
                          alt={`${card.title} sub-image ${subIndex + 1}`}
                          layout="fill"
                          objectFit="contain"
                          className="object-center rounded-md"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
