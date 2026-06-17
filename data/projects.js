export const projects = [
  {
    slug: "izmit-atalayevler",
    name: "İzmit Atalayevler",
    location: "Kocaeli / İzmit",
    category: "Kat Karşılığı · Konut Projesi",
    year: "2025",
    status: "Devam Ediyor",
    cover: "/assets/images/projects/atalayevler.jpg",
    gallery: [
      "/assets/images/projects/atalayevler.jpg",
      "/assets/images/projects/architecture-detail.jpg",
      "/assets/images/projects/construction-wide.jpg",
    ],
    short:
      "İzmit Atalayevler'de modern yaşam standartlarını öne çıkaran, kat karşılığı modelle hayata geçirilen butik konut projesi.",
    description:
      "Atalayevler bölgesinde planlanan bu projemiz; fonksiyonel iç mekân kurgusu, yüksek kalite malzeme seçimi ve özenli mimari detaylarla bölgenin değerine değer katmayı hedefliyor. Çevre dostu çözümler ve aile odaklı tasarım anlayışı projeyi öne çıkaran temel unsurlardır.",
    featured: true,
  },
  {
    slug: "umraniye-camlica-konutlari",
    name: "Ümraniye Çamlıca Konutları",
    location: "İstanbul / Ümraniye",
    category: "Konut Projesi",
    year: "2024",
    status: "Tamamlandı",
    cover: "/assets/images/projects/camlica-konutlari.jpg",
    gallery: [
      "/assets/images/projects/camlica-konutlari.jpg",
      "/assets/images/projects/luxury-project.jpg",
      "/assets/images/projects/interior-project.jpg",
    ],
    short:
      "Ümraniye Çamlıca'da modern mimari çizgilerle planlanan, konforlu yaşam alanları sunan kurumsal konut projesi.",
    description:
      "Çamlıca'nın huzurlu dokusuna yakışan bu konut projemizde; geniş yaşam alanları, kaliteli ortak alanlar ve yüksek standartlı yapı malzemeleri bir araya gelir. Lokasyonun avantajlarını mimari kaliteyle birleştirerek uzun vadede değer kazanan bir yaşam alanı sunuyoruz.",
    featured: true,
  },
  {
    slug: "sultanbeyli-golet-apartman",
    name: "Sultanbeyli Gölet Apartman",
    location: "İstanbul / Sultanbeyli",
    category: "Kat Karşılığı · Konut Projesi",
    year: "2024",
    status: "Tamamlandı",
    cover: "/assets/images/projects/golet-apartman.jpg",
    gallery: [
      "/assets/images/projects/golet-apartman.jpg",
      "/assets/images/projects/hero-detail.jpg",
      "/assets/images/projects/service-wide.jpg",
    ],
    short:
      "Sultanbeyli Gölet bölgesinde kat karşılığı modelle geliştirilen, modern çizgilere sahip butik apartman projesi.",
    description:
      "Gölet bölgesinin gelişen kentsel dokusuna katkı sunan bu projemiz; kompakt ama ferah iç mekân kurgusu, kaliteli cephe çözümleri ve doğru maliyet yönetimi ile arsa sahibine ve son kullanıcıya yüksek değer sunar.",
    featured: true,
  },
  {
    slug: "kurumsal-ofis-projesi",
    name: "Kurumsal Ofis Projesi",
    location: "İstanbul",
    category: "Ticari Yapı",
    year: "2023",
    status: "Tamamlandı",
    cover: "/assets/images/projects/architecture-detail.jpg",
    gallery: [
      "/assets/images/projects/architecture-detail.jpg",
      "/assets/images/projects/service-detail-1.jpg",
    ],
    short:
      "Modern cephe çözümleri ve fonksiyonel iç mekân planlamasıyla markalara değer katan kurumsal ofis yapısı.",
    description:
      "Ticari yapı kategorisindeki bu projemizde; güçlü taşıyıcı sistem, enerji verimli cephe ve esnek ofis kurguları tek bir kompozisyonda buluşur.",
    featured: false,
  },
  {
    slug: "iç-mekan-uygulama",
    name: "Premium İç Mekân Uygulama",
    location: "İstanbul",
    category: "Renovasyon · Uygulama",
    year: "2024",
    status: "Tamamlandı",
    cover: "/assets/images/projects/interior-project.jpg",
    gallery: [
      "/assets/images/projects/interior-project.jpg",
      "/assets/images/projects/service-detail-2.jpg",
    ],
    short:
      "Detaycı işçilik, kaliteli malzeme ve modern tasarım dilini bir araya getiren premium iç mekân uygulaması.",
    description:
      "Yüksek standartlı iç mekân uygulamamızda; doğal malzemeler, sade ama etkili detaylar ve özel üretim donatılarla benzersiz bir atmosfer oluşturduk.",
    featured: false,
  },
  {
    slug: "luxury-konut-konsepti",
    name: "Premium Konut Konsepti",
    location: "İstanbul",
    category: "Konut Projesi",
    year: "2024",
    status: "Konsept",
    cover: "/assets/images/projects/luxury-project.jpg",
    gallery: [
      "/assets/images/projects/luxury-project.jpg",
      "/assets/images/projects/hero-detail.jpg",
    ],
    short:
      "Üst segment kullanıcılar için planlanan, mimari kaliteyi ön plana çıkaran konut konsept çalışması.",
    description:
      "Yüksek tavan, geniş açıklık ve doğal ışığı maksimize eden plan kurgusuyla; premium konut deneyiminin yeni standartlarını belirleyen bir konsept çalışması.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
