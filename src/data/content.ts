import { ServiceItem, TestimonialItem, ArticleItem, Language } from '../types';

export const BRAND_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJcgrr8jN1hE0c2PoYdQBw2qnY8Q0TRVyfTzk3xa-gvz-HTbGsy7r5L6is3O5R0XkiRjqJe6J1r23t7AsmH2V8D_bS1ajQTCWA-Bleri2gFjh-x44oqjs8eBokwbW3Iux-FcmmZ8Weft7NoObkLEBodtyBEBv1vhFiqkDRa345ArOetNNnMNduKcEZ4a3zTr21HAfQw5wyzDjSFugat8qA4rj_O2lJmaBLtSZz26d3KEECT6C9XMxn0pOWcgBwuMWbyqo',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx4-RCs8_lxqV4EEi62YJRzTzN75oeZxR_rYeu_604Ouz5AJh2aw52rFc4CfulLsmSazDm8twgRYr5_K-Z04x7lsRt_4FaRhbKEx3FaFzRHNOYBFKnRG5gNLC__Zn0KmdpxEhMaN3XqPdRqmScYZuwpDEwIBWFshr3B5yGY_sClCc_Wn2CWVUIoSiifw4t6fIXHM4ZpnirAAG1sKoyzRGCPXAYvinolH8IaAI0vvs9sxpOXUML07PIgqKnRARNS-DAgXI',
  services: {
    ibadah: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl2HN9601PnilrSRhq_gQhiWWbhmk0-s-cxXEkG17MqSudmsr1XPmmCr96HKuztre0xoLYf1ylQLyx8N-1zWcNPqtsQ5B17SQUFR6mIEFyQWpb03jkvOEGtjlXHEOTwsOD9ufjuZIClN4R5C6G0b5l5hiyUtS2ytX7Ofxlox7r2SMc15cEfKtrlUcNI6JPTa4YmTDgqH8UAMK16SsDmkoNKDdbeXjXUJ4io2a2Y3zOtutIqdWzQI4wSA',
    pendidikan: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW45bL3dRdJiT_sWeRCEAqUP3bCengfG8ICEcFNhxoAW5HYaZKljWYr8i7SXcmoxTB5HO6OEykyvaaYgoFK42CMvYsPZ0I1HwKhU-RQmMPYpR9qy7EgNNHdDz7ukCuRniJJc-NhLK-VxnWnXxZKuP4TJsb8n9GUQtRNA-Syv52eHJ3f8NgIV9HAFSt2pdCspmovW_Tp_dEbb8PbVe5R4Ncq4LGx_4Mw78GmqCSbGZVb6zZwgThUzIpDA',
    bisnis: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuEBAsrdQzJSob1rRA8miaQzcx9Rkz8uiQCaq8f-7dqWX_VxbdzyyY45qmOGYMUeVekjmhpq641HkTs2wlYaZ-DKLIPbl6A13I_P_XrTfsEmwzdhW3CQtmvJxlzZqULP3UwFySvuMJgk-2Mg3it4H3cz0Xl4jYsGz9HbK_b98eCmQKO3g7mAAc_JyEYIzkLpc98Y5ZKPRi1id008NioXmr4jEhofSQUBFiVzCXsdug3wrZBWFqDulY3w',
    pendukung: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-NjuIFf3DKVMxLaqwlvGfk2VLMNhjzBogWIThopsHG6R07hAX23YahPQNoYL9BVH1LIEi_ZyP_4qu0KRWLfXKT81Dk89AidPIGL2JVu7tpZXuzSnJlOCpt5z6uGMqS1mZkM8o4hyq2hHloj6DEaos9AJr2q4N6NmSxwrQqax_F5DnGosj0xnEdLFjM2LQc06_KZwXkOn4z6aSgfjLc_PqGGUYrb_qGYdpRoDCXIQJR2DH9I5EUv_U1Q'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'perjalanan-ibadah',
    title: 'Perjalanan Ibadah',
    shortDesc: 'Umrah, ziarah, wisata Islami, dan layanan pendukung di Tanah Suci.',
    icon: '🕌',
    image: BRAND_ASSETS.services.ibadah,
    fullDesc: 'Menyediakan paket perjalanan ibadah Umrah Plus Kairo, ziarah makam para nabi, ulama mazhab, dan jejak sahabat di Mesir dengan bimbingan ustadz muthawwif berkompeten.',
    features: [
      'Paket Umrah Plus Ziarah Mesir (Kairo, Iskandariyah / Alexandria, Terusan Suez, Tursina)',
      'Kunjungan maqam Imam Asy-Syafi\'i, Sayyidah Zainab, Sayyiduna Husein, dan Ibnu Hajar Al-Asqalani',
      'Muthawwif dan pemandu berbahasa Indonesia berpengalaman alumni Al-Azhar',
      'Akomodasi hotel berbintang dekat situs bersejarah dan transportasi bus VIP ber-AC'
    ],
    packages: [
      {
        name: 'Umrah Plus Mesir 12 Hari',
        details: 'Makkah, Madinah, Kairo, Piramida Giza, Masjid Al-Azhar & Maqam Auliya',
        target: 'Keluarga & Jamaah Umum'
      },
      {
        name: 'Ziarah & Rihlah Ilmiah 7 Hari',
        details: 'Wisata sejarah peradaban Islam di Mesir bersama pembimbing ulama',
        target: 'Komunitas & Majelis Taklim'
      }
    ],
    process: [
      'Konsultasi jadwal keberangkatan & pemilihan paket',
      'Pengurusan visa ziarah & umrah secara terpadu',
      'Pembekalan manasik & edukasi sejarah situs suci',
      'Pendampingan penuh dari keberangkatan hingga kepulangan'
    ]
  },
  {
    id: 'pendidikan-di-mesir',
    title: 'Pendidikan di Mesir',
    shortDesc: 'Konsultasi kuliah, pendaftaran, pengurusan dokumen, hingga pendampingan.',
    icon: '🎓',
    image: BRAND_ASSETS.services.pendidikan,
    fullDesc: 'Pendampingan komprehensif bagi calon mahasiswa yang ingin melanjutkan studi ke Universitas Al-Azhar Kairo maupun lembaga bahasa (Markaz Lughoh) terakreditasi.',
    features: [
      'Bimbingan pendaftaran resmi jalur Kemenag, PUSIBA, maupun jalur mandiri muadalah',
      'Penerjemahan tersumpah, legalisasi dokumen di Kemenlu, Kemenkumham, dan Kedubes Mesir',
      'Penyediaan asrama / flat aman dekat kampus Al-Azhar (Darrasah / Nasr City)',
      'Talaqqi ilmiah, bimbingan belajar tahsin/tahfidz, dan adaptasi kehidupan mahasiswa'
    ],
    packages: [
      {
        name: 'Paket Pendampingan Dokumen & Visa Pelajar',
        details: 'Legalisasi ijazah, transkrip, surat rekomendasi, dan pengurusan visa pelajar',
        target: 'Calon Mahasiswa Baru'
      },
      {
        name: 'Paket Sambut & Adaptasi Kairo',
        details: 'Penjemputan bandara, pencarian tempat tinggal, pengurusan izin tinggal (iqamah)',
        target: 'Mahasiswa Tingkat 1 & Mahasiswa Bahasa'
      }
    ],
    process: [
      'Asesmen berkas akademik & konsultasi jurusan',
      'Proses legalisasi kedutaan & pendaftaran universitas',
      'Pengurusan visa kedatangan & tiket penerbangan',
      'Penyambutan di Kairo, check-in asrama, dan bimbingan akademik'
    ]
  },
  {
    id: 'layanan-bisnis',
    title: 'Layanan Bisnis',
    shortDesc: 'Pendampingan bisnis, legalitas, networking, dan peluang investasi di Mesir.',
    icon: '🏛️',
    image: BRAND_ASSETS.services.bisnis,
    fullDesc: 'Menjembatani pelaku bisnis dan investor Indonesia dengan pasar Mesir dan Timur Tengah melalui legalitas resmi, survei pasar, dan kemitraan strategis.',
    features: [
      'Pendirian badan usaha / kantor perwakilan resmi di Mesir',
      'Riset pasar & business matching untuk komoditas kopi, rempah, kurma, dan tekstil',
      'Pendampingan pameran dagang internasional di Cairo International Convention Centre',
      'Bantuan legal kontrak dwibahasa (Arab-Indonesia/Inggris) dan kepatuhan hukum lokal'
    ],
    packages: [
      {
        name: 'Market Entry & Business Matching',
        details: 'Analisis pasar Mesir, penjadwalan temu mitra lokal, dan negosiasi B2B',
        target: 'Eksportir / Importir'
      },
      {
        name: 'Legalitas & Perizinan Dagang',
        details: 'Registrasi izin dagang, perpajakan lokal, dan izin tinggal investor',
        target: 'Perusahaan & Investor'
      }
    ],
    process: [
      'Diskusi kebutuhan bisnis & verifikasi legalitas',
      'Penyusunan peta jalan regulasi & pemetaan mitra potensial',
      'Fasilitasi pertemuan B2B dan kunjungan lapangan di Mesir',
      'Pengawalan kontrak kerja sama dan operasional berkala'
    ]
  },
  {
    id: 'layanan-pendukung',
    title: 'Layanan Pendukung',
    shortDesc: 'Pengurusan visa, akomodasi, transportasi, penerjemah, dan kebutuhan lainnya.',
    icon: '🛂',
    image: BRAND_ASSETS.services.pendukung,
    fullDesc: 'Layanan terintegrasi untuk memastikan kelancaran aktivitas pribadi, keluarga, maupun delegasi selama berada di Mesir dengan standar kenyamanan tinggi.',
    features: [
      'Pengurusan Visa Mesir (Turis, Pelajar, Bisnis, Multiple Entry) tanpa repot',
      'Penyewaan apartemen fully-furnished di area aman dan strategis di Kairo',
      'Rental mobil VIP, minibus, bus pariwisata beserta sopir berpengalaman',
      'Penerjemah tersumpah Arab-Indonesia untuk pertemuan resmi, riset, atau peradilan'
    ],
    packages: [
      {
        name: 'Concierge Layanan Visa & Tiket',
        details: 'Pengurusan visa kilat, asuransi perjalanan, dan reservasi tiket',
        target: 'Pelancong & Pebisnis'
      },
      {
        name: 'VIP Ground Handling Kairo',
        details: 'Penjemputan bandara, armada ber-AC, pemandu lokal, dan akomodasi',
        target: 'Delegasi & Keluarga'
      }
    ],
    process: [
      'Pengajuan kebutuhan & dokumen pendukung via sistem/WhatsApp',
      'Verifikasi kilat oleh tim operasional di Jakarta dan Kairo',
      'Penerbitan dokumen / konfirmasi reservasi fasilitas',
      'Dukungan customer service aktif 24 jam selama di Mesir'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Ustadz Ahmad Fauzi, Lc.',
    role: 'Alumni Fakultas Ushuluddin Al-Azhar',
    location: 'Kairo / Jakarta',
    quote: 'Nile Group sangat amanah mengurus seluruh berkas pendaftaran dan visa saya ke Al-Azhar. Begitu mendarat di Bandara Kairo, tim langsung menyambut dan membantu saya mencari tempat tinggal yang nyaman dekat kampus.',
    rating: 5
  },
  {
    id: 'testi-2',
    name: 'Hj. Ratna Wulandari',
    role: 'Koordinator Rombongan Umrah Plus Kairo',
    location: 'Surabaya',
    quote: 'Ziarah jejak para nabi dan ulama bersama Nile Group sungguh berkesan. Muthawwif-nya santun, penjelasannya kaya referensi sejarah Islam, dan hotel serta busnya sangat representatif.',
    rating: 5
  },
  {
    id: 'testi-3',
    name: 'H. Bambang Sugiarto',
    role: 'Direktur PT Cahaya Rempah Nusantara',
    location: 'Bandung',
    quote: 'Membuka pasar ekspor ke Mesir jadi jauh lebih mudah dengan bantuan pendampingan bisnis dari Nile Group. Legalitas beres, komunikasi dengan mitra Arab berjalan lancar tanpa kendala bahasa.',
    rating: 5
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'panduan-al-azhar',
    title: 'Panduan Lengkap Kuliah di Universitas Al-Azhar Kairo',
    category: 'Pendidikan',
    date: '15 Maret 2024',
    readTime: '5 menit baca',
    image: BRAND_ASSETS.services.pendidikan,
    snippet: 'Ketahui tahapan pendaftaran, tes seleksi bahasa (PUSIBA), legalisasi ijazah, dan estimasi biaya hidup mahasiswa di Kairo.',
    content: [
      'Universitas Al-Azhar di Kairo merupakan salah satu pusat keilmuan Islam tertua dan paling dihormati di dunia. Bagi pelajar Indonesia, menuntut ilmu di bumi para nabi ini adalah impian besar yang membutuhkan persiapan matang.',
      'Tahapan penting pendaftaran meliputi penyetaraan (muadalah) ijazah pesantren atau madrasah, tes kemampuan bahasa Arab melalui Pusat Bahasa Al-Azhar (PUSIBA) atau lembaga resmi terkait, serta proses legalisasi di kementerian dan kedutaan.',
      'Nile Group hadir mendampingi calon mahasiswa sejak pengurusan berkas di tanah air hingga orientasi tempat tinggal dan pendaftaran administrasi langsung di Kairo.'
    ]
  },
  {
    id: 'ziarah-jejak-nabi-mesir',
    title: 'Napak Tilas Jejak Para Nabi & Auliya di Tanah Mesir',
    category: 'Ziarah & Sejarah',
    date: '28 Februari 2024',
    readTime: '6 menit baca',
    image: BRAND_ASSETS.services.ibadah,
    snippet: 'Menelusuri jejak Nabi Musa di Bukit Sinai, Nabi Yusuf di Lembah Nil, hingga maqam Imam Syafi\'i dan cucu Rasulullah SAW.',
    content: [
      'Mesir diberkahi dengan kisah-kisah para nabi besar yang diabadikan di dalam Al-Qur\'an. Dari jejak Nabi Musa AS saat bermunajat di Lembah Thuwadan Jabal Musa (Sinai), hingga keteguhan Nabi Yusuf AS memimpin ketahanan pangan.',
      'Di sudut-sudut kota Kairo Lama, kita dapat menziarahi maqam ulama panutan bangsa Nusantara, Imam Asy-Syafi\'i rahimahullah, serta keluarga suci Nabi (Ahlul Bayt) seperti Sayyidah Nafisah dan Sayyidah Zainab.',
      'Perjalanan bersama Nile Group dirancang untuk menghadirkan getaran ruhani dan wawasan sejarah yang mendalam, bukan sekadar wisata biasa.'
    ]
  },
  {
    id: 'peluang-bisnis-mesir',
    title: 'Peluang Bisnis Ekspor Komoditas Indonesia ke Mesir',
    category: 'Bisnis & Investasi',
    date: '10 Januari 2024',
    readTime: '4 menit baca',
    image: BRAND_ASSETS.services.bisnis,
    snippet: 'Tingginya minat pasar Mesir terhadap kopi robusta Indonesia, rempah-rempah, dan minyak kelapa sawit membuka peluang emas bagi pelaku usaha.',
    content: [
      'Mesir merupakan salah satu mitra dagang terbesar Indonesia di kawasan Timur Tengah dan Afrika Utara (MENA). Konsumsi kopi di Mesir terus meningkat pesat dengan mayoritas biji kopi robusta diimpor dari Indonesia.',
      'Selain kopi, komoditas seperti cengkeh, pala, kayu manis, dan produk kelapa sawit memiliki permintaan stabil. Namun, memahami regulasi impor (seperti platform ACI / Nafeza) dan kontrak hukum setempat memerlukan mitra lokal berpengalaman.',
      'Nile Group menyediakan jembatan legal dan pendampingan bisnis langsung di Kairo untuk memastikan transaksi berjalan aman dan berkelanjutan.'
    ]
  }
];

export const TRANSLATIONS = {
  id: {
    nav: {
      beranda: 'Beranda',
      tentang: 'Tentang Kami',
      layanan: 'Layanan',
      mengapa: 'Mengapa Nile',
      testimoni: 'Testimoni',
      artikel: 'Artikel',
      kontak: 'Kontak',
      hubungi: 'Hubungi Kami'
    },
    hero: {
      eyebrow: 'NILE GROUP',
      headline: 'Lebih Dekat\nKe Tanah Para Nabi',
      description: 'Nile Group hadir sebagai jembatan kebaikan untuk perjalanan, pendidikan, bisnis, dan layanan Islami di Mesir. Bersama, kita wujudkan lebih banyak keberkahan.',
      ctaKonsultasi: 'Konsultasi Sekarang',
      ctaLayanan: 'Lihat Layanan',
      verse: '“Dan berilah mereka kabar gembira dengan negeri yang aman.”',
      verseRef: '— QS. Saba’ : 15',
      features: [
        { title: 'Amanah\ndan Profesional' },
        { title: 'Berdasarkan\nNilai Islami' },
        { title: 'Jangkauan Luas\ndi Mesir' },
        { title: 'Solusi Terpercaya\nuntuk Masa Depan' }
      ],
      stats: [
        { value: '500+', label: 'Jamaah & Klien\nTerlayani' },
        { value: '10+', label: 'Layanan\nUnggulan' },
        { value: '5+', label: 'Tahun\nPengalaman' },
        { value: '98%', label: 'Tingkat\nKepuasan' }
      ]
    },
    services: {
      eyebrow: 'LAYANAN KAMI',
      headline: 'Solusi Lengkap untuk Kebutuhan Anda di Mesir',
      description: 'Dari perjalanan ibadah, pendidikan, hingga kebutuhan bisnis. Nile Group siap menjadi mitra terpercaya Anda.',
      detailBtn: 'Pelajari Selengkapnya',
      consultBtn: 'Konsultasi Layanan Ini'
    },
    about: {
      eyebrow: 'TENTANG KAMI',
      headline: 'Jembatan Kebaikan Nusantara & Negeri Para Nabi',
      p1: 'Nile Group didirikan oleh sinergi para alumni Universitas Al-Azhar Kairo dan profesional Indonesia dengan satu misi mulia: menghadirkan kemudahan, transparansi, dan rasa aman bagi setiap warga Indonesia yang berhajat ke Mesir.',
      p2: 'Dengan kantor operasional di Kairo dan perwakilan di Indonesia, kami mengawal kebutuhan Anda secara menyeluruh mulai dari perjalanan ibadah & ziarah, bimbingan studi Al-Azhar, kemitraan bisnis perdagangan, hingga legalitas visa.',
      pillarsHeadline: 'Nilai Pokok Kami',
      pillars: [
        { title: 'Amanah & Syar\'i', desc: 'Menjunjung integritas dan kesesuaian syariat dalam setiap akad dan pendampingan.' },
        { title: 'Jaringan Masyaikh & Alumni', desc: 'Akses langsung dengan para ulama, rektorat kampus Al-Azhar, dan komunitas lokal Mesir.' },
        { title: 'Legalitas Terjamin', desc: 'Bekerja sama dengan instansi resmi di Indonesia dan Mesir untuk kepastian berkas.' },
        { title: 'Pendampingan 24/7', desc: 'Tim di Kairo siap sedia mendampingi dan memberikan solusi saat Anda berada di Mesir.' }
      ]
    },
    whyUs: {
      eyebrow: 'MENGAPA NILE GROUP',
      headline: 'Keunggulan Layanan Kami di Mesir',
      subtitle: 'Dedikasi penuh menghadirkan kenyamanan, kepastian, dan keberkahan untuk setiap langkah Anda.'
    },
    testimonials: {
      eyebrow: 'TESTIMONI',
      headline: 'Cerita Nyata dari Jamaah & Mitra',
      subtitle: 'Kepercayaan Anda adalah amanah terbesar yang selalu kami rawat dengan sepenuh hati.'
    },
    articles: {
      eyebrow: 'ARTIKEL & INFORMASI',
      headline: 'Wawasan & Panduan Seputar Mesir',
      subtitle: 'Informasi praktis dan mendalam untuk persiapan studi, ibadah, dan bisnis Anda.',
      readMore: 'Baca Selengkapnya'
    },
    footer: {
      copyright: '© 2024 Nile Group. All Rights Reserved. People • Places • Possibilities.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan'
    },
    modal: {
      consultTitle: 'Konsultasi Layanan Nile Group',
      consultSubtitle: 'Hubungi tim kami langsung melalui WhatsApp atau lengkapi formulir di bawah ini.',
      nameLabel: 'Nama Lengkap',
      phoneLabel: 'Nomor WhatsApp / HP',
      emailLabel: 'Email (Opsional)',
      serviceLabel: 'Layanan yang Diminati',
      notesLabel: 'Pesan / Pertanyaan Anda',
      sendWhatsapp: 'Chat Langsung via WhatsApp',
      submitForm: 'Kirim Permintaan Konsultasi',
      successMessage: 'Terima kasih! Pesan Anda telah kami terima. Tim Nile Group akan segera menghubungi Anda dalam 1x24 jam.'
    }
  },
  en: {
    nav: {
      beranda: 'Home',
      tentang: 'About Us',
      layanan: 'Services',
      mengapa: 'Why Nile',
      testimoni: 'Testimonials',
      artikel: 'Articles',
      kontak: 'Contact',
      hubungi: 'Contact Us'
    },
    hero: {
      eyebrow: 'NILE GROUP',
      headline: 'Closer to the Land\nof the Prophets',
      description: 'Nile Group is here as a bridge of goodwill for pilgrimage, higher education, commerce, and Islamic services in Egypt. Together, we manifest blessings.',
      ctaKonsultasi: 'Consult Now',
      ctaLayanan: 'Explore Services',
      verse: '“And give them glad tidings of a land of security and peace.”',
      verseRef: '— Surah Saba : 15',
      features: [
        { title: 'Trustworthy\n& Professional' },
        { title: 'Based on\nIslamic Values' },
        { title: 'Extensive Reach\nin Egypt' },
        { title: 'Trusted Solutions\nfor the Future' }
      ],
      stats: [
        { value: '500+', label: 'Clients & Pilgrims\nServed' },
        { value: '10+', label: 'Featured\nServices' },
        { value: '5+', label: 'Years of\nExperience' },
        { value: '98%', label: 'Satisfaction\nRate' }
      ]
    },
    services: {
      eyebrow: 'OUR SERVICES',
      headline: 'Complete Solutions for Your Needs in Egypt',
      description: 'From sacred pilgrimage and Al-Azhar education to business facilitation. Nile Group is ready to be your dependable partner.',
      detailBtn: 'Learn More',
      consultBtn: 'Inquire About This Service'
    },
    about: {
      eyebrow: 'ABOUT US',
      headline: 'Connecting Global Travelers with the Land of the Prophets',
      p1: 'Nile Group was established through the synergy of Al-Azhar University alumni and seasoned professionals to provide transparent, reliable, and respectful services in Egypt.',
      p2: 'With active offices in Cairo and partners worldwide, we manage your journeys, academic pursuits, business developments, and visa paperwork from start to finish.',
      pillarsHeadline: 'Our Core Pillars',
      pillars: [
        { title: 'Integrity & Sharia-Aligned', desc: 'Upholding strict moral honesty in all agreements and services.' },
        { title: 'Al-Azhar Scholarly Network', desc: 'Direct access to respected scholars, university deans, and Cairo communities.' },
        { title: 'Official Legality', desc: 'Full compliance with Indonesian and Egyptian governmental procedures.' },
        { title: '24/7 Cairo Support', desc: 'Local staff on the ground in Cairo ready to assist around the clock.' }
      ]
    },
    whyUs: {
      eyebrow: 'WHY NILE GROUP',
      headline: 'Our Key Advantages in Egypt',
      subtitle: 'Dedicated to delivering comfort, certainty, and peace of mind at every step.'
    },
    testimonials: {
      eyebrow: 'TESTIMONIALS',
      headline: 'Real Stories from Clients & Partners',
      subtitle: 'Your trust is our highest priority, guarded with integrity and care.'
    },
    articles: {
      eyebrow: 'INSIGHTS & GUIDES',
      headline: 'Essential Knowledge & Guides on Egypt',
      subtitle: 'Practical information for prospective students, pilgrims, and business delegations.',
      readMore: 'Read Full Article'
    },
    footer: {
      copyright: '© 2024 Nile Group. All Rights Reserved. People • Places • Possibilities.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    modal: {
      consultTitle: 'Consult with Nile Group',
      consultSubtitle: 'Reach our team directly via WhatsApp or complete the inquiry form below.',
      nameLabel: 'Full Name',
      phoneLabel: 'WhatsApp / Phone Number',
      emailLabel: 'Email (Optional)',
      serviceLabel: 'Service of Interest',
      notesLabel: 'Message / Questions',
      sendWhatsapp: 'Direct Chat on WhatsApp',
      submitForm: 'Submit Inquiry',
      successMessage: 'Thank you! Your request has been received. Our team will contact you shortly.'
    }
  },
  ar: {
    nav: {
      beranda: 'الرئيسية',
      tentang: 'من نحن',
      layanan: 'خدماتنا',
      mengapa: 'لماذا نايل جروب',
      testimoni: 'آراء العملاء',
      artikel: 'المقالات',
      kontak: 'اتصل بنا',
      hubungi: 'تواصل معنا'
    },
    hero: {
      eyebrow: 'مجموعة النيل',
      headline: 'أقرب إلى أرض الأنبياء',
      description: 'مجموعة النيل جسر من الخير لرحلات العبادة، والدراسة بالأزهر الشريف، والأعمال التجارية، والخدمات الإسلامية في مصر.',
      ctaKonsultasi: 'استشر الآن',
      ctaLayanan: 'تصفح الخدمات',
      verse: '“Dan berilah mereka kabar gembira dengan negeri yang aman.”',
      verseRef: '— سورة سبأ : ١٥',
      features: [
        { title: 'أمانة واحترافية عالية' },
        { title: 'على نهج القيم الإسلامية' },
        { title: 'شبكة واسعة في مصر' },
        { title: 'حلول موثوقة للمستقبل' }
      ],
      stats: [
        { value: '+500', label: 'معتمر وعميل تم خدمتهم' },
        { value: '+10', label: 'خدمات متميزة' },
        { value: '+5', label: 'سنوات من الخبرة' },
        { value: '98%', label: 'نسبة الرضا' }
      ]
    },
    services: {
      eyebrow: 'خدماتنا',
      headline: 'حلول شاملة لاحتياجاتكم في مصر',
      description: 'من رحلات العمرة والزيارة والتعليم الأزهري إلى فرص التجارة والاستثمار في مصر.',
      detailBtn: 'تفاصيل الخدمة',
      consultBtn: 'طلب استشارة'
    },
    about: {
      eyebrow: 'من نحن',
      headline: 'جسر التواصل بين إندونيسيا وأرض الكنانة',
      p1: 'تأسست مجموعة النيل من خلال تكاتف خريجي جامعة الأزهر ورجال الأعمال لتقديم خدمات موثوقة وآمنة في مصر.',
      p2: 'من خلال مقرنا في القاهرة وممثلينا في إندونيسيا، نلبي كافة الاحتياجات باحترافية تامة.',
      pillarsHeadline: 'قيمنا الأساسية',
      pillars: [
        { title: 'الأمانة والشرعية', desc: 'الالتزام بأعلى معايير الصدق والأحكام الشرعية.' },
        { title: 'شبكة علماء الأزهر', desc: 'تواصل مباشر مع مشايخ الأزهر والمؤسسات العلمية.' },
        { title: 'إجراءات قانونية موثقة', desc: 'توثيق رسمي وتأشيرات معتمدة ومضمونة.' },
        { title: 'مرافقة مستمرة 24/7', desc: 'فريق عمل متواجد في القاهرة على مدار الساعة.' }
      ]
    },
    whyUs: {
      eyebrow: 'لماذا نايل جروب',
      headline: 'مميزاتنا الحصرية في مصر',
      subtitle: 'تفانٍ كامل لتوفير الراحة واليقين والبركة في كل خطوة.'
    },
    testimonials: {
      eyebrow: 'آراء العملاء',
      headline: 'قصص حقيقية وتجارب ملهمة',
      subtitle: 'ثقتكم أمانة نعتز بها ونرعاها بإخلاص.'
    },
    articles: {
      eyebrow: 'مقالات ومعلومات',
      headline: 'دليلك الشامل في مصر',
      subtitle: 'معلومات عملية وموثوقة للدراسة والزيارة والتجارة في مصر.',
      readMore: 'قراءة المقال'
    },
    footer: {
      copyright: '© 2024 Nile Group. All Rights Reserved. People • Places • Possibilities.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    },
    modal: {
      consultTitle: 'استشارة خدمات مجموعة النيل',
      consultSubtitle: 'تواصل معنا مباشرة عبر الواتساب أو املأ النموذج أدناه.',
      nameLabel: 'الاسم الكامل',
      phoneLabel: 'رقم الواتساب / الهاتف',
      emailLabel: 'البريد الإلكتروني (اختياري)',
      serviceLabel: 'الخدمة المطلوبة',
      notesLabel: 'رسالتك أو استفسارك',
      sendWhatsapp: 'محادثة فورية عبر واتساب',
      submitForm: 'إرسال طلب الاستشارة',
      successMessage: 'شكراً لك! تم استلام رسالتك وسيتواصل معك فريقنا في أقرب وقت.'
    }
  }
};
