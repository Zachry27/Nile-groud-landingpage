import { useState } from 'react';
import {
  ArrowRight, BadgeCheck, Building2, BusFront, CheckCircle2, ChevronDown,
  Compass, FileCheck2, GraduationCap, Hotel, Landmark, Luggage, MapPin,
  Menu, MessageCircle, Plane, ShieldCheck, UsersRound, X
} from 'lucide-react';

const WA_NUMBER = '201515311259';

const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Landmark,
    eyebrow: 'Egypt Operations',
    title: 'Land Arrangement Mesir',
    text: 'Hotel, transportasi, itinerary, handling, guide, dan kebutuhan operasional rombongan selama di Mesir.',
    points: ['Hotel & akomodasi', 'Transport & handling', 'Itinerary & guide lokal'],
  },
  {
    icon: Compass,
    eyebrow: 'Spiritual Journey',
    title: 'Perjalanan Ibadah & Ziarah',
    text: 'Pendampingan perjalanan ibadah, ziarah, wisata Islami, dan rihlah sejarah untuk individu maupun grup.',
    points: ['Ziarah Mesir', 'Umrah & perjalanan kombinasi', 'Pendamping berbahasa Indonesia'],
  },
  {
    icon: FileCheck2,
    eyebrow: 'Document Desk',
    title: 'Visa & Entry Support',
    text: 'Konsultasi kebutuhan visa, entry, dokumen perjalanan, dan koordinasi administrasi sesuai profil perjalanan.',
    points: ['Visa Mesir', 'Visa Umrah', 'Pengecekan kebutuhan dokumen'],
  },
  {
    icon: Plane,
    eyebrow: 'Travel Desk',
    title: 'Tiket & Transportasi',
    text: 'Bantuan pencarian tiket penerbangan dan transportasi sesuai rute, tanggal, jumlah peserta, dan kebutuhan bagasi.',
    points: ['Tiket internasional', 'Airport transfer', 'Transportasi lokal'],
  },
  {
    icon: Luggage,
    eyebrow: 'Cairo ⇄ Indonesia',
    title: 'Bagasi Cairo ⇄ Jakarta',
    text: 'Konsultasi pengiriman bagasi untuk pelajar, keluarga, dan komunitas dengan detail slot dan ketentuan melalui admin.',
    points: ['Cairo → Jakarta', 'Jakarta → Cairo', 'Konfirmasi jadwal & berat'],
  },
  {
    icon: GraduationCap,
    eyebrow: 'Student Support',
    title: 'Pendidikan di Mesir',
    text: 'Pendampingan kebutuhan pelajar Indonesia sejak persiapan studi hingga adaptasi awal kehidupan di Cairo.',
    points: ['Konsultasi studi', 'Dokumen & kedatangan', 'Akomodasi & kebutuhan lokal'],
  },
];

const advantages = [
  {
    icon: MapPin,
    title: 'Berbasis di Cairo',
    text: 'Koordinasi kebutuhan dilakukan dengan memahami kondisi dan alur lapangan di Mesir.',
  },
  {
    icon: UsersRound,
    title: 'Individu hingga Rombongan',
    text: 'Layanan bisa disesuaikan untuk keluarga, pelajar, komunitas, travel, maupun kebutuhan B2B.',
  },
  {
    icon: ShieldCheck,
    title: 'Satu Pintu Komunikasi',
    text: 'Berbagai kebutuhan perjalanan dapat dikoordinasikan melalui satu tim agar proses lebih sederhana.',
  },
  {
    icon: BadgeCheck,
    title: 'Kebutuhan Dibahas di Awal',
    text: 'Rute, jadwal, ruang lingkup, dan kebutuhan khusus dikonsultasikan sebelum proses berjalan.',
  },
];

const faqs = [
  {
    q: 'Apakah Nile Group melayani travel agent dan rombongan?',
    a: 'Ya. Kebutuhan hotel, transportasi, handling, itinerary, guide, visa, dan layanan darat lainnya dapat dikonsultasikan berdasarkan jumlah peserta dan jadwal perjalanan.',
  },
  {
    q: 'Apakah layanan hanya tersedia untuk perjalanan wisata?',
    a: 'Tidak. Nile Group juga menangani kebutuhan pendidikan, bagasi Cairo–Jakarta, dokumen, perjalanan ibadah, dan kebutuhan pendukung lainnya di Mesir.',
  },
  {
    q: 'Bagaimana cara mendapatkan penawaran harga?',
    a: 'Hubungi admin melalui WhatsApp lalu kirim jenis layanan, tanggal, jumlah peserta, serta kebutuhan utama. Tim akan membantu memetakan kebutuhan sebelum memberikan penawaran.',
  },
  {
    q: 'Apakah harga di website merupakan harga final?',
    a: 'Tidak. Harga dapat berubah mengikuti tanggal, ketersediaan, jumlah peserta, rute, dan detail kebutuhan. Penawaran aktual dikonfirmasi oleh admin.',
  },
  {
    q: 'Apakah pengajuan visa pasti disetujui?',
    a: 'Nile Group membantu proses dan pengecekan kebutuhan dokumen. Keputusan akhir tetap berada pada otoritas penerbit visa atau izin masuk.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="topbar">
        <div className="shell topbar-inner">
          <div className="topbar-main">
            <span className="topbar-badge">CAIRO · EGYPT</span>
            <span>Travel, land arrangement, pendidikan & layanan lokal dalam satu pintu.</span>
          </div>
          <a
            href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi layanan.")}
            target="_blank"
            rel="noreferrer"
            className="topbar-link"
          >
            Konsultasi admin <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <header className="header">
        <div className="shell header-inner">
          <a href="#beranda" className="brand" onClick={closeMenu}>
            <span className="brand-mark">
              <img src="/assets/nile-logo.webp" alt="Nile Group" />
            </span>
            <span className="brand-copy">
              <strong>NILE GROUP</strong>
              <small>PEOPLE · PLACES · POSSIBILITIES</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a href="#layanan">Layanan</a>
            <a href="#solusi">Solusi Praktis</a>
            <a href="#travel">Untuk Travel</a>
            <a href="#mengapa">Mengapa Nile</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <a
              className="header-cta"
              href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi. Kebutuhan saya: ...")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              <span>Hubungi Kami</span>
            </a>
            <button
              className="menu-button"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="shell mobile-menu-inner">
              <a href="#layanan" onClick={closeMenu}>Layanan <ArrowRight size={15} /></a>
              <a href="#solusi" onClick={closeMenu}>Solusi Praktis <ArrowRight size={15} /></a>
              <a href="#travel" onClick={closeMenu}>Untuk Travel <ArrowRight size={15} /></a>
              <a href="#mengapa" onClick={closeMenu}>Mengapa Nile <ArrowRight size={15} /></a>
              <a href="#faq" onClick={closeMenu}>FAQ <ArrowRight size={15} /></a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="beranda" className="hero">
          <img className="hero-bg" src="/assets/nile-hero.webp" alt="" aria-hidden="true" />
          <div className="hero-shade" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow light">NILE GROUP · CAIRO</span>
              <h1>Mesir Lebih Dekat.<br />Perjalanan Lebih Terarah.</h1>
              <p>
                Dari perjalanan, visa, pendidikan hingga kebutuhan travel & rombongan,
                Nile Group membantu Anda bergerak di Mesir dengan proses yang lebih jelas,
                rapi, dan mudah dikonsultasikan.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi. Kebutuhan saya: ...")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  Konsultasi WhatsApp
                  <ArrowRight size={16} />
                </a>
                <a className="btn btn-glass" href="#layanan">
                  Lihat Layanan
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-points">
                <span><MapPin size={15} /> Berbasis di Cairo</span>
                <span><UsersRound size={15} /> Individu & grup</span>
                <span><Building2 size={15} /> Travel & B2B</span>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-note">
                <span className="hero-note-line" />
                <p>“Jembatan kebutuhan Indonesia dengan layanan lokal di Mesir.”</p>
                <small>TRAVEL · EDUCATION · LOCAL SUPPORT</small>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Cakupan layanan">
          <div className="shell trust-grid">
            <div>
              <Compass size={21} />
              <span><strong>Travel & Pribadi</strong><small>Individu, keluarga, komunitas</small></span>
            </div>
            <div>
              <Building2 size={21} />
              <span><strong>Travel & Rombongan</strong><small>LA, handling, hotel, transport</small></span>
            </div>
            <div>
              <GraduationCap size={21} />
              <span><strong>Student Support</strong><small>Kebutuhan studi & adaptasi</small></span>
            </div>
            <div>
              <MessageCircle size={21} />
              <span><strong>Admin Langsung</strong><small>Konsultasi kebutuhan via WhatsApp</small></span>
            </div>
          </div>
        </section>

        <section id="layanan" className="section services-section">
          <div className="shell">
            <div className="section-heading centered">
              <span className="eyebrow">LAYANAN UTAMA</span>
              <h2>Satu partner untuk berbagai kebutuhan Anda di Mesir.</h2>
              <p>
                Terinspirasi dari pola layanan Barokah Group, namun disusun ulang untuk positioning Nile Group:
                lebih fokus pada Mesir, pendidikan, perjalanan, dan kebutuhan operasional lokal.
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, eyebrow, title, text, points }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-top">
                    <span className="service-icon"><Icon size={22} /></span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <span className="card-kicker">{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}><CheckCircle2 size={14} /> {point}</li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Assalamu'alaikum Nile Group, saya ingin konsultasi tentang ${title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Konsultasikan <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solusi" className="section practical-section">
          <div className="shell">
            <div className="split-heading">
              <div>
                <span className="eyebrow light">SOLUSI PRAKTIS</span>
                <h2>Layanan yang dekat dengan kebutuhan sehari-hari di Cairo.</h2>
              </div>
              <p>
                Bukan sekadar paket perjalanan. Nile Group juga menjadi titik konsultasi untuk
                kebutuhan yang sering dihadapi pelajar, keluarga, dan warga Indonesia di Mesir.
              </p>
            </div>

            <div className="practical-grid">
              <article className="practical-card featured">
                <div className="practical-icon"><Luggage size={26} /></div>
                <span>CAIRO ⇄ JAKARTA</span>
                <h3>Bagasi & Pengiriman</h3>
                <p>Kirim estimasi berat, jenis barang, dan target waktu. Admin membantu mengecek jadwal dan ketersediaan slot.</p>
                <a
                  href={waLink("Assalamu'alaikum Nile Group, saya ingin tanya bagasi Cairo-Jakarta. Estimasi berat saya: ... kg.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tanya jadwal bagasi <ArrowRight size={15} />
                </a>
              </article>

              <article className="practical-card">
                <div className="practical-icon"><GraduationCap size={26} /></div>
                <span>PENDIDIKAN</span>
                <h3>Persiapan Studi di Mesir</h3>
                <p>Konsultasi kebutuhan dokumen, kedatangan, akomodasi, serta orientasi awal bagi calon pelajar Indonesia.</p>
                <a
                  href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi persiapan studi di Mesir.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasi pendidikan <ArrowRight size={15} />
                </a>
              </article>

              <article className="practical-card">
                <div className="practical-icon"><FileCheck2 size={26} /></div>
                <span>DOCUMENT DESK</span>
                <h3>Visa & Dokumen</h3>
                <p>Jelaskan tujuan perjalanan, paspor, dan kebutuhan Anda. Tim membantu mengarahkan dokumen yang perlu dipersiapkan.</p>
                <a
                  href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi visa dan dokumen perjalanan.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Cek kebutuhan dokumen <ArrowRight size={15} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="travel" className="section b2b-section">
          <div className="shell b2b-grid">
            <div className="b2b-copy">
              <span className="eyebrow">UNTUK TRAVEL & ROMBONGAN</span>
              <h2>Butuh operasional Mesir untuk banyak peserta?</h2>
              <p>
                Kirim jumlah peserta, tanggal, durasi, kota tujuan, standar hotel, serta kebutuhan transportasi.
                Kami bantu merapikan kebutuhan darat menjadi penawaran yang lebih mudah ditinjau.
              </p>
              <a
                className="btn btn-dark"
                href={waLink("Assalamu'alaikum Nile Group, saya ingin minta penawaran untuk travel/rombongan. Jumlah peserta: ... orang, tanggal: ..., kebutuhan: ...")}
                target="_blank"
                rel="noreferrer"
              >
                <Building2 size={18} />
                Minta Penawaran Rombongan
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="b2b-panel">
              {[
                { icon: Hotel, title: 'Hotel & Akomodasi', text: 'Pilihan sesuai area, kapasitas, dan standar rombongan.' },
                { icon: BusFront, title: 'Transportasi', text: 'Bus, airport transfer, dan mobilitas antarlokasi.' },
                { icon: UsersRound, title: 'Handling Group', text: 'Koordinasi kedatangan, perpindahan, dan kebutuhan lapangan.' },
                { icon: MapPin, title: 'Itinerary Mesir', text: 'Susunan perjalanan disesuaikan waktu dan tujuan grup.' },
              ].map(({ icon: Icon, title, text }) => (
                <div className="b2b-item" key={title}>
                  <Icon size={22} />
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mengapa" className="section why-section">
          <div className="shell">
            <div className="section-heading">
              <span className="eyebrow">MENGAPA NILE GROUP</span>
              <h2>Lebih sederhana ketika kebutuhan Anda ditangani dengan konteks lokal.</h2>
            </div>

            <div className="advantages-grid">
              {advantages.map(({ icon: Icon, title, text }, index) => (
                <article key={title}>
                  <span className="adv-index">0{index + 1}</span>
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section guide-section">
          <div className="shell">
            <div className="split-heading dark">
              <div>
                <span className="eyebrow light">SEBELUM BERANGKAT</span>
                <h2>Tiga hal yang sebaiknya disiapkan lebih awal.</h2>
              </div>
              <p>Konten informatif menggantikan artikel generik agar halaman lebih fokus pada keputusan calon pelanggan.</p>
            </div>
            <div className="guide-grid">
              <article><span>01</span><h3>Tujuan & tanggal perjalanan</h3><p>Tentukan tujuan utama, kota, tanggal, durasi, dan jumlah peserta agar kebutuhan bisa dihitung dengan lebih tepat.</p></article>
              <article><span>02</span><h3>Dokumen & status entry</h3><p>Pastikan paspor dan dokumen relevan sudah dicek sebelum pemesanan layanan yang bergantung pada izin masuk.</p></article>
              <article><span>03</span><h3>Prioritas layanan</h3><p>Hotel, transport, visa, guide, bagasi, atau pendidikan—beri tahu prioritas agar tim bisa menyusun solusi yang sesuai.</p></article>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">PERTANYAAN UMUM</span>
              <h2>Masih ada yang ingin ditanyakan?</h2>
              <p>Kami rangkum beberapa pertanyaan yang paling penting sebelum konsultasi.</p>
              <a
                className="text-link strong"
                href={waLink("Assalamu'alaikum Nile Group, saya masih punya pertanyaan tentang layanan Nile Group.")}
                target="_blank"
                rel="noreferrer"
              >
                Tanya langsung ke admin <ArrowRight size={15} />
              </a>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const open = openFaq === index;
                return (
                  <button
                    className={`faq-item ${open ? 'open' : ''}`}
                    key={item.q}
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="faq-question">
                      <span className="faq-number">0{index + 1}</span>
                      <strong>{item.q}</strong>
                      <ChevronDown size={18} />
                    </span>
                    {open && <span className="faq-answer">{item.a}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="shell cta-box">
            <div>
              <span className="eyebrow light">MULAI DARI KEBUTUHAN ANDA</span>
              <h2>Ceritakan rencana Anda.<br />Kami bantu rapikan langkah berikutnya.</h2>
              <p>Cairo, Egypt · Untuk individu, keluarga, pelajar, komunitas, dan mitra travel.</p>
            </div>
            <a
              className="btn btn-white"
              href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi. Kebutuhan saya: ...")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Hubungi Nile Group
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <span className="brand-mark footer-mark">
              <img src="/assets/nile-logo.webp" alt="Nile Group" />
            </span>
            <div>
              <strong>NILE GROUP</strong>
              <small>PEOPLE · PLACES · POSSIBILITIES</small>
              <p>Travel, pendidikan, dan layanan lokal yang berakar di Cairo.</p>
            </div>
          </div>
          <div>
            <strong>Navigasi</strong>
            <a href="#layanan">Layanan</a>
            <a href="#solusi">Solusi Praktis</a>
            <a href="#travel">Untuk Travel</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <strong>Layanan</strong>
            <a href="#layanan">Land Arrangement</a>
            <a href="#layanan">Visa & Entry</a>
            <a href="#layanan">Bagasi Cairo</a>
            <a href="#layanan">Pendidikan</a>
          </div>
          <div>
            <strong>Kontak</strong>
            <span>Cairo, Egypt</span>
            <a href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi.")} target="_blank" rel="noreferrer">WhatsApp Admin</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Nile Group.</span>
          <span>Building a brighter tomorrow.</span>
        </div>
      </footer>

      <a
        className="floating-wa"
        href={waLink("Assalamu'alaikum Nile Group, saya ingin konsultasi.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi Nile Group di WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

export default App;
