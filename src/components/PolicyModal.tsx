import React from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      id="policy-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          {isPrivacy ? 'Kebijakan Privasi Nile Group' : 'Syarat & Ketentuan Layanan'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                Nile Group berkomitmen penuh melindungi privasi data setiap jamaah, mahasiswa, dan mitra bisnis kami.
              </p>
              <h4 className="font-bold text-stone-800 text-sm">1. Pengumpulan Data Pribadi</h4>
              <p>
                Informasi seperti nama, paspor, kontak WhatsApp, riwayat pendidikan, dan berkas visa hanya dikumpulkan untuk keperluan pemrosesan dokumen resmi di instansi pemerintah Mesir dan Indonesia.
              </p>
              <h4 className="font-bold text-stone-800 text-sm">2. Keamanan Berkas</h4>
              <p>
                Semua salinan dokumen fisik maupun digital disimpan dengan enkripsi ketat dan tidak pernah dialihkan kepada pihak ketiga tanpa izin tertulis.
              </p>
              <h4 className="font-bold text-stone-800 text-sm">3. Hak Pengguna</h4>
              <p>
                Anda berhak meminta pembaruan, verifikasi, atau penghapusan data kontak Anda setelah seluruh proses layanan selesai.
              </p>
            </>
          ) : (
            <>
              <p>
                Dengan menggunakan layanan Nile Group, Anda menyetujui ketentuan operasional dan kesepakatan akad berikut:
              </p>
              <h4 className="font-bold text-stone-800 text-sm">1. Ruang Lingkup Layanan</h4>
              <p>
                Nile Group bertindak sebagai fasilitator resmi perjalanan ibadah, pendampingan pendidikan Al-Azhar, konsultasi bisnis, dan kepengurusan visa di Mesir.
              </p>
              <h4 className="font-bold text-stone-800 text-sm">2. Kepatuhan Regulasi</h4>
              <p>
                Setiap pemohon wajib mematuhi ketentuan hukum yang berlaku di Republik Arab Mesir dan Republik Indonesia, termasuk kepatuhan izin tinggal (Iqamah) dan tata tertib universitas.
              </p>
              <h4 className="font-bold text-stone-800 text-sm">3. Transparansi Biaya</h4>
              <p>
                Seluruh rincian tarif dan tahapan pembayaran disepakati secara terbuka sebelum proses berkas dimulai.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0c2c23] text-white rounded-xl text-xs font-semibold hover:bg-[#071f19] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
