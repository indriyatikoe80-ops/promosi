export interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
  isDecimal?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface DownloadData {
  title: string;
  subtitle: string;
  buttonText: string;
  trustBadges: string[];
}

export interface FooterData {
  brand: string;
  description: string;
  quickLinks: string[];
  contact: {
    email: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  duration: string;
  isPopular?: boolean;
  features: string[];
}

export interface AppData {
  appName: string;
  tagline: string;
  email: string;
  description: string;
  hero: HeroData;
  stats: Stat[];
  features: Feature[];
  learningModules: { icon: string; title: string; desc: string }[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  pricing: PricingTier[];
  download: DownloadData;
  footer: FooterData;
}

export const APP_DATA: AppData = {
  appName: 'Aplikasi Belajar Anak',
  tagline: 'Belajar Sambil Bermain',
  email: 'candra.buwana80@gmail.com',
  description: 'Aplikasi Belajar yang dirancang khusus untuk anak - anak berkebutuhan khusus',
  
  hero: {
    badge: 'Aplikasi Belajar #1 untuk Anak',
    title: 'Belajar Sambil Bermain, Cerdas Sejak Dini!',
    subtitle: 'Aplikasi belajar interaktif yang dirancang khusus untuk anak - anak berkebutuhan khusus. Dilengkapi animasi lucu dan suara yang membuat belajar jadi super seru!',
    ctaPrimary: 'Hubungi via Email',
    ctaSecondary: 'Pelajari Fiturnya',
  },
  
  stats: [
    { value: 1000, label: 'Download', suffix: '+', isDecimal: false },
    { value: 4.8, label: 'Rating', suffix: '', isDecimal: true },
    { value: 50, label: 'Materi', suffix: '+', isDecimal: false },
    { value: 10, label: 'Mini Game', suffix: '+', isDecimal: false },
  ],
  
  features: [
    {
      icon: '🎮',
      title: 'Belajar Interaktif',
      desc: 'Materi disajikan dalam format permainan yang seru, membuat anak semangat belajar setiap hari.',
      color: 'var(--primary-400)'
    },
    {
      icon: '🔊',
      title: 'Suara & Animasi',
      desc: 'Dilengkapi efek suara, musik, dan animasi lucu yang membuat pengalaman belajar lebih hidup.',
      color: 'var(--secondary-400)'
    },
    {
      icon: '🔡',
      title: 'Mengenal Huruf',
      desc: 'Latihan mengenal huruf alfabet dengan cara yang menyenangkan dan mudah dipahami.',
      color: 'var(--accent-blue)'
    },
    {
      icon: '🔢',
      title: 'Mengenal Angka',
      desc: 'Belajar menghitung dengan benda-benda lucu dan kuis yang menantang.',
      color: 'var(--accent-pink)'
    },
    {
      icon: '📶',
      title: 'Bisa Offline',
      desc: 'Tidak perlu koneksi internet. Anak bisa belajar kapan saja dan di mana saja.',
      color: 'var(--accent-purple)'
    },
    {
      icon: '🛡️',
      title: 'Konten Edukasi Aman',
      desc: 'Semua materi dirancang khusus untuk anak-anak, aman dan menstimulasi perkembangan kognitif mereka.',
      color: 'var(--accent-teal)'
    },
    {
      icon: '💎',
      title: 'Opsi Bebas Iklan',
      desc: 'Tersedia pilihan Lisensi Premium dengan harga terjangkau untuk pengalaman belajar 100% bebas gangguan iklan.',
      color: 'var(--primary-500)'
    }
  ],
  
  learningModules: [
    { icon: '📖', title: 'Mengenal Huruf A-Z', desc: 'Belajar mengenal huruf alfabet' },
    { icon: '🔢', title: 'Mengenal Angka 1-20', desc: 'Belajar menghitung dengan fun' },
    { icon: '✏️', title: 'Belajar Menulis', desc: 'Latihan menulis dengan panduan' },
    { icon: '🗣️', title: 'Mengeja Kata', desc: 'Latihan mengeja kata sederhana' },
    { icon: '🎮', title: 'Mini Game', desc: 'Permainan edukatif seru' },
  ],
  
  testimonials: [
    {
      name: 'Sarah',
      role: 'Ibu dari Amanda',
      text: 'Anakku jadi semangat belajar huruf sejak pakai aplikasi ini. Tampilannya lucu banget dan gampang dipakai sendiri. Recommended!',
      rating: 5
    },
    {
      name: 'Budi',
      role: 'Guru TK',
      text: 'Aplikasi ini sangat membantu untuk persiapan sekolah. Anak saya sekarang sudah bisa membaca suku kata sederhana.',
      rating: 5
    },
    {
      name: 'Wati',
      role: 'Ibu dua anak',
      text: 'Bagus sekali! Tidak perlu koneksi internet juga bisa used. Sudah saya rekomendasikan ke teman-teman.',
      rating: 5
    }
  ],
  
  faqs: [
    {
      question: 'Apakah aplikasi ini gratis?',
      answer: 'Ya, Aplikasi Belajar Anak sepenuhnya gratis untuk diunduh dan semua modul dasar dapat dimainkan secara gratis (didukung oleh iklan yang aman untuk anak).'
    },
    {
      question: 'Berapa usia yang sesuai?',
      answer: 'Aplikasi ini dirancang untuk anak usia 3-7 tahun, khususnya TK A, TK B, dan PAUD.'
    },
    {
      question: 'Bisa offline?',
      answer: 'Ya! Modul yang sudah dibuka dapat diakses tanpa koneksi internet (khusus versi Premium).'
    },
    {
      question: 'Bagaimana cara menghilangkan iklan?',
      answer: 'Kami menyediakan Lisensi Premium di dalam aplikasi (pembelian satu kali atau berlangganan) yang akan menghapus seluruh iklan selamanya atau sesuai durasi yang dipilih.'
    }
  ],
  
  pricing: [
    {
      id: '1-bulan',
      name: 'Paket 1 Bulan',
      price: 'Rp 15.000',
      originalPrice: 'Rp 35.000',
      duration: '/ bulan',
      features: ['Bebas dari semua iklan', 'Akses fitur premium', 'Bisa dimainkan offline', 'Batal kapan saja']
    },
    {
      id: '6-bulan',
      name: 'Paket 6 Bulan',
      price: 'Rp 50.000',
      originalPrice: 'Rp 120.000',
      duration: '/ 6 bulan',
      features: ['Bebas dari semua iklan', 'Akses fitur premium', 'Bisa dimainkan offline', 'Batal kapan saja', 'Lebih hemat!']
    },
    {
      id: 'selamanya',
      name: 'Paket Selamanya',
      price: 'Rp 99.000',
      originalPrice: 'Rp 250.000',
      duration: 'Satu kali bayar',
      isPopular: true,
      features: ['Bebas dari semua iklan selamanya', 'Akses fitur premium selamanya', 'Bisa dimainkan offline selamanya', 'Lisensi berlaku seumur hidup']
    }
  ],
  
  download: {
    title: 'Mulai Petualangan Belajar Sekarang!',
    subtitle: 'Download Aplikasi Belajar Anak gratis sekarang dan berikan pengalaman belajar terbaik untuk si kecil!',
    buttonText: '📧 Hubungi via Email',
    trustBadges: ['✅ Gratis Diunduh', '✅ Opsi Premium Tanpa Iklan', '✅ Bisa Offline', '✅ Aman untuk Anak'],
  },
  
  footer: {
    brand: 'Aplikasi Belajar Anak',
    description: 'Aplikasi belajar interaktif untuk anak usia dini yang membuat belajar jadi menyenangkan.',
    quickLinks: ['Beranda', 'Fitur', 'Tampilan', 'Download'],
    contact: {
      email: 'candra.buwana80@gmail.com',
    }
  }
};

export default APP_DATA;