import { Link } from "react-router";

export default function About() {
  return (
    <div className="space-y-24">

      <section className="text-center py-20 bg-linear-to-r from-yellow-300 to-yellow-400 text-white rounded-3xl shadow-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Tentang Edukasi 🎓
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          EduCourse Hub adalah platform pembelajaran teknologi modern
          yang membantu siswa dan calon developer meningkatkan
          keterampilan mereka melalui materi yang terstruktur,
          praktis, dan mudah dipahami.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            🎯 Visi Kami
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Menjadi platform pembelajaran teknologi terbaik di Indonesia
            yang mampu mencetak generasi digital yang kompeten,
            kreatif, dan siap bersaing di era global.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            🚀 Misi Kami
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Menyediakan materi pembelajaran berkualitas tinggi
            yang relevan dengan kebutuhan industri serta
            membantu peserta memahami konsep melalui praktik langsung.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Mengapa Memilih Kami?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              📚 Materi Terstruktur
            </h3>
            <p className="text-gray-600">
              Pembelajaran disusun dari tingkat dasar hingga lanjutan
              sehingga mudah dipahami oleh semua kalangan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              💡 Praktik Langsung
            </h3>
            <p className="text-gray-600">
              Setiap kursus dilengkapi dengan latihan dan proyek nyata
              agar peserta dapat langsung menerapkan ilmunya.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Relevan dengan Industri
            </h3>
            <p className="text-gray-600">
              Materi selalu diperbarui mengikuti perkembangan teknologi terbaru.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 rounded-3xl">
        <div className="grid md:grid-cols-3 text-center gap-10">
          <div className="w-full p-16 rounded-3xl hover:bg-blue-100 transition">
            <h3 className="text-4xl font-extrabold text-yellow-300">50+</h3>
            <p className="text-gray-600 mt-2">Kursus Tersedia</p>
          </div>

          <div className="w-full p-16 rounded-3xl hover:bg-blue-100 transition">
            <h3 className="text-4xl font-extrabold text-yellow-300">10K+</h3>
            <p className="text-gray-600 mt-2">Siswa Aktif</p>
          </div>

          <div className="w-full p-16 rounded-3xl hover:bg-blue-100 transition">
            <h3 className="text-4xl font-extrabold text-yellow-300">95%</h3>
            <p className="text-gray-600 mt-2">Tingkat Kepuasan</p>
          </div>
        </div>
      </section>

      <section className="text-center py-16 bg-yellow-300 text-white rounded-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Meningkatkan Keterampilanmu?
        </h2>

        <p className="mb-8 opacity-90">
          Mulailah perjalanan belajarmu hari ini dan wujudkan
          impian menjadi developer profesional 🚀
        </p>

        <Link
          to="/courses"
          className="bg-white text-yellow-300 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Lihat Daftar Kursus
        </Link>
      </section>

    </div>
  );
}