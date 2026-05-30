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
  discount: string;
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
  learningModules: { icon: string; title: string; desc: string; color: string; isFree: boolean }[];
  screenshots: { src: string; label: string }[];
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
  description:
    'Aplikasi belajar interaktif yang dirancang khusus untuk anak-anak berkebutuhan khusus dengan 24 modul edukatif yang menyenangkan.',

  hero: {
    badge: 'Aplikasi Belajar Terlengkap untuk Anak ABK',
    title: 'Belajar Sambil Bermain, Tumbuh Bersama!',
    subtitle:
      'Aplikasi belajar interaktif dengan 24 modul edukatif, dirancang khusus untuk anak-anak berkebutuhan khusus. Dilengkapi musik latar, animasi ceria, dan laporan perkembangan anak.',
    ctaPrimary: 'Hubungi via Email',
    ctaSecondary: 'Lihat Modul Belajar',
  },

  stats: [
    { value: 1000, label: 'Download', suffix: '+', isDecimal: false },
    { value: 4.8, label: 'Rating', suffix: '', isDecimal: true },
    { value: 24, label: 'Modul Belajar', suffix: '', isDecimal: false },
    { value: 8, label: 'Jenis Game', suffix: '+', isDecimal: false },
  ],

  features: [
    {
      icon: 'gamepad',
      title: '24 Modul Interaktif',
      desc: 'Dari membaca suku kata, menyusun kalimat, puzzle gambar, hingga terapi snoezelen — semua tersedia.',
      color: '#FFB300',
    },
    {
      icon: 'sound',
      title: 'Musik & Suara Ceria',
      desc: 'Dilengkapi background music, efek suara, dan text-to-speech untuk pengalaman belajar yang hidup.',
      color: '#43A047',
    },
    {
      icon: 'report',
      title: 'Laporan Perkembangan',
      desc: 'Pantau kemajuan anak secara detail — skor, sesi belajar, grafik perkembangan tiap modul.',
      color: '#42A5F5',
    },
    {
      icon: 'offline',
      title: 'Bisa Offline (Premium)',
      desc: 'Pengguna Premium dapat mengakses semua modul tanpa koneksi internet, kapan saja & di mana saja.',
      color: '#AB47BC',
    },
    {
      icon: 'shield',
      title: 'Konten Aman ABK',
      desc: 'Dirancang khusus untuk anak berkebutuhan khusus — antarmuka sederhana, visual jelas, respons suara.',
      color: '#26C6DA',
    },
    {
      icon: 'premium',
      title: 'Bebas Iklan (Premium)',
      desc: 'Nikmati belajar tanpa gangguan iklan dengan Lisensi Premium. Bayar sekali, akses selamanya.',
      color: '#FF7043',
    },
    {
      icon: 'therapy',
      title: 'Terapi Snoezelen',
      desc: 'Modul unik terapi snoezelen multisensori untuk stimulasi sensorik anak berkebutuhan khusus.',
      color: '#EC407A',
    },
  ],

  // Data modul diambil langsung dari public/data/modules.json di aplikasi asli
  learningModules: [
    { icon: 'abc', title: 'Huruf Besar & Kecil', desc: 'Belajar mengenal dan membedakan huruf besar dan kecil', color: '#FFB300', isFree: true },
    { icon: 'book', title: 'Membaca Suku Kata', desc: 'Latihan membaca suku kata dengan panduan suara interaktif', color: '#42A5F5', isFree: false },
    { icon: 'write', title: 'Menulis Kata', desc: 'Latihan menulis kata dengan panduan titik-titik interaktif', color: '#26C6DA', isFree: false },
    { icon: 'write', title: 'Menulis Kalimat', desc: 'Latihan menulis kalimat pendek dengan panduan yang jelas', color: '#5C6BC0', isFree: false },
    { icon: 'sentence', title: 'Menyusun Kalimat', desc: 'Menyusun kata-kata acak menjadi kalimat yang benar', color: '#FF7043', isFree: true },
    { icon: 'fruit', title: 'Nama Buah', desc: 'Mencocokkan gambar buah dengan namanya secara interaktif', color: '#EF5350', isFree: true },
    { icon: 'animal', title: 'Nama Hewan', desc: 'Mencocokkan gambar hewan dengan namanya beserta suaranya', color: '#8D6E63', isFree: true },
    { icon: 'transport', title: 'Alat Transportasi', desc: 'Mengenal berbagai alat transportasi darat, laut, dan udara', color: '#26A69A', isFree: true },
    { icon: 'activity', title: 'Nama Aktivitas', desc: 'Mengenal berbagai aktivitas sehari-hari dengan gambar lucu', color: '#FFA726', isFree: true },
    { icon: 'body', title: 'Anggota Tubuh', desc: 'Mengenal bagian-bagian tubuh manusia dengan cara seru', color: '#66BB6A', isFree: true },
    { icon: 'tool', title: 'Fungsi Benda', desc: 'Mencocokkan benda dengan fungsinya dalam kehidupan sehari-hari', color: '#EC407A', isFree: true },
    { icon: 'image', title: 'Mencocokkan Gambar', desc: 'Mencari dan mencocokkan gambar yang sama dari beberapa pilihan', color: '#AB47BC', isFree: true },
    { icon: 'pair', title: 'Memasangkan Gambar', desc: 'Memasangkan gambar yang memiliki hubungan atau keterkaitan', color: '#42A5F5', isFree: true },
    { icon: 'search', title: 'Mencari Gambar', desc: 'Menemukan gambar benda yang disebutkan di antara pilihan', color: '#FFB300', isFree: true },
    { icon: 'puzzle', title: 'Puzzle Gambar', desc: 'Menyusun potongan gambar menjadi gambar yang utuh', color: '#43A047', isFree: true },
    { icon: 'pattern', title: 'Lengkapi Pola', desc: 'Melengkapi pola gambar dan warna untuk melatih logika', color: '#FF7043', isFree: true },
    { icon: 'group', title: 'Kelompokkan Gambar', desc: 'Mengelompokkan gambar berdasarkan kategori yang sama', color: '#26C6DA', isFree: true },
    { icon: 'sequence', title: 'Urutan Aktivitas', desc: 'Mengurutkan gambar aktivitas sehari-hari sesuai tahapannya', color: '#5C6BC0', isFree: true },
    { icon: 'memory', title: 'Modul Memori', desc: 'Permainan memori untuk melatih daya ingat dan konsentrasi', color: '#EF5350', isFree: true },
    { icon: 'number', title: 'Modul Berhitung', desc: 'Belajar berhitung penjumlahan dan pengurangan dengan benda', color: '#8D6E63', isFree: true },
    { icon: 'emotion', title: 'Mengenali Emosi', desc: 'Mengenal dan memahami ekspresi emosi untuk kecerdasan emosional', color: '#FFA726', isFree: true },
    { icon: 'sound', title: 'Mengenali Suara', desc: 'Menebak suara hewan, benda, dan alam sekitar', color: '#66BB6A', isFree: true },
    { icon: 'shield', title: 'Boleh / Tidak Boleh', desc: 'Belajar membedakan perilaku yang boleh dan tidak boleh dilakukan', color: '#EC407A', isFree: true },
    { icon: 'therapy', title: 'Terapi Snoezelen', desc: 'Stimulasi multisensori untuk relaksasi dan terapi sensorik ABK', color: '#AB47BC', isFree: true },
  ],

  screenshots: [
    { src: `${import.meta.env.BASE_URL}membaca.png`, label: 'Modul Membaca Suku Kata' },
    { src: `${import.meta.env.BASE_URL}lengkapi-pola.png`, label: 'Modul Lengkapi Pola' },
    { src: `${import.meta.env.BASE_URL}cari-gambar.png`, label: 'Modul Mencari Gambar' },
    { src: `${import.meta.env.BASE_URL}menyusun-kalimat.png`, label: 'Modul Menyusun Kalimat' },
    { src: `${import.meta.env.BASE_URL}daftar-modul.png`, label: 'Daftar 24 Modul Belajar' },
  ],

  testimonials: [
    {
      name: 'Sarah',
      role: 'Ibu dari Amanda (ABK)',
      text: 'Anakku yang berkebutuhan khusus jadi lebih semangat belajar! Modulnya lengkap banget dan tampilannya sangat anak-friendly. Recommended!',
      rating: 5,
    },
    {
      name: 'Budi',
      role: 'Terapis Anak',
      text: 'Aplikasi ini sangat membantu terapi saya. Fitur Snoezelen dan laporan perkembangan sangat berguna untuk memantau progres anak.',
      rating: 5,
    },
    {
      name: 'Wati',
      role: 'Guru SLB',
      text: 'Bagus sekali! Tidak perlu koneksi internet untuk premium. Saya gunakan di kelas setiap hari. Anak-anak suka sekali modul puzzle dan memorinya.',
      rating: 5,
    },
  ],

  faqs: [
    {
      question: 'Apakah aplikasi ini gratis?',
      answer:
        'Ya, aplikasi ini gratis diunduh. Hampir semua modul (22 dari 24 modul) bisa dimainkan gratis dengan iklan. Hanya modul Membaca Suku Kata dan Menulis yang memerlukan lisensi Premium.',
    },
    {
      question: 'Untuk siapa aplikasi ini dirancang?',
      answer:
        'Aplikasi ini dirancang khusus untuk anak berkebutuhan khusus (ABK), namun juga cocok untuk anak-anak usia 3-8 tahun secara umum, termasuk TK A, TK B, PAUD, dan SD kelas awal.',
    },
    {
      question: 'Ada berapa modul belajar?',
      answer:
        'Saat ini tersedia 24 modul belajar yang mencakup: membaca, menulis, berhitung, menyusun kalimat, mencocokkan gambar, puzzle, pola, mengenal emosi, mengenal suara, terapi snoezelen, dan masih banyak lagi.',
    },
    {
      question: 'Apa itu Terapi Snoezelen?',
      answer:
        'Terapi Snoezelen adalah pendekatan multisensori untuk relaksasi dan stimulasi sensorik yang dirancang khusus untuk anak berkebutuhan khusus. Modul ini membantu anak dalam regulasi sensorik dan ketenangan.',
    },
    {
      question: 'Bagaimana fitur Laporan Perkembangan?',
      answer:
        'Aplikasi merekam setiap sesi belajar anak, termasuk skor, jumlah jawaban benar/salah, durasi bermain, dan grafik perkembangan per modul. Orang tua dan terapis dapat memantau kemajuan anak secara detail.',
    },
    {
      question: 'Bagaimana cara menghilangkan iklan?',
      answer:
        'Beli Lisensi Premium di dalam aplikasi. Pembayaran dilakukan via Midtrans (transfer bank, e-wallet, kartu kredit). Setelah pembayaran berhasil, kode lisensi dikirim ke email dan WhatsApp Anda.',
    },
    {
      question: 'Apakah bisa digunakan offline?',
      answer:
        'Ya! Pengguna Premium dapat mengakses semua modul tanpa koneksi internet. Pengguna gratis memerlukan koneksi internet untuk memuat iklan.',
    },
  ],

  // Harga diambil langsung dari LicenseModal.tsx -> getPriceInfo()
  pricing: [
    {
      id: '1-bulan',
      name: 'Paket 1 Bulan',
      price: 'Rp 15.000',
      originalPrice: 'Rp 35.000',
      duration: '/ bulan',
      discount: 'Diskon 57%',
      features: [
        'Bebas dari semua iklan',
        'Akses semua 24 modul',
        'Bisa dimainkan offline',
        'Laporan perkembangan lengkap',
      ],
    },
    {
      id: '6-bulan',
      name: 'Paket 6 Bulan',
      price: 'Rp 50.000',
      originalPrice: 'Rp 120.000',
      duration: '/ 6 bulan',
      discount: 'Diskon 58%',
      features: [
        'Bebas dari semua iklan',
        'Akses semua 24 modul',
        'Bisa dimainkan offline',
        'Laporan perkembangan lengkap',
        'Hemat vs paket bulanan!',
      ],
    },
    {
      id: '1-tahun',
      name: 'Paket 1 Tahun',
      price: 'Rp 150.000',
      originalPrice: 'Rp 500.000',
      duration: '/ 1 tahun',
      discount: 'Diskon 70%',
      isPopular: true,
      features: [
        'Bebas iklan selama 1 tahun',
        'Akses semua 24 modul',
        'Bisa dimainkan offline',
        'Laporan perkembangan lengkap',
        'Nilai terbaik!',
      ],
    },
  ],

  download: {
    title: 'Mulai Perjalanan Belajar Si Kecil Sekarang!',
    subtitle:
      'Download gratis dan buka 22 modul edukatif sekarang juga. Upgrade ke Premium untuk pengalaman belajar penuh tanpa batas.',
    buttonText: 'Download APK Sekarang',
    emailButtonText: 'Hubungi via Email',
    apkUrl: '/apk/app-release.apk',
    trustBadges: [
      'Gratis Diunduh',
      '22 Modul Gratis',
      'Bisa Offline (Premium)',
      'Khusus Anak ABK',
    ],
  },

  footer: {
    brand: 'Aplikasi Belajar Anak',
    description:
      'Aplikasi belajar interaktif dengan 24 modul edukatif, dirancang khusus untuk anak berkebutuhan khusus (ABK).',
    quickLinks: ['Beranda', 'Fitur', 'Modul', 'Tampilan', 'Harga'],
    contact: {
      email: 'candra.buwana80@gmail.com',
    },
  },
};

export default APP_DATA;