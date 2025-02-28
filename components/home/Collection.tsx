import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    title: "FASHION CLOTHING",
    image: "/assets/home/hero-img/young-woman-4266712_1280.jpg",
    link: "/shop",
  },
  {
    id: 2,
    title: "ACCESSORIES & JEWELRY",
    image: "/assets/product/earrings.jpg",
    link: "/shop",
  },
];

export default function Collection() {
  return (
    <div className="w-full container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl my-10 tracking-wide">COLLECTION</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {collections.map((collection) => (
          <div key={collection.id} className="relative group overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{collection.title}</h3>
                <Link
                  href={collection.link}
                  className="inline-flex items-center bg-white px-6 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
                >
                  SHOP NOW
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
