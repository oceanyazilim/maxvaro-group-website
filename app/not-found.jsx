import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Sayfa Bulunamadı",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-ink-50">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <div className="font-display text-[120px] lg:text-[180px] leading-none text-ink-200">404</div>
          <div className="eyebrow text-gold-dark">Sayfa Bulunamadı</div>
          <h1 className="mt-4 font-display text-3xl lg:text-4xl text-ink leading-tight">
            Aradığınız sayfa mevcut değil.
          </h1>
          <p className="mt-4 text-ink-500">
            Aradığınız içerik kaldırılmış, taşınmış veya geçici olarak kullanılamıyor olabilir.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">Anasayfaya Dön</Link>
            <Link href="/iletisim" className="btn btn-outline">İletişime Geç</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
