/*
Design Philosophy: Brutalism + Martial Arts Aesthetic
- Sharp geometric forms with diagonal cuts
- High contrast: black background, white text, red accents
- Asymmetric layouts
- Minimal but maximum impact
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Instagram, TrendingUp, Youtube, Phone, Star, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState("hakkimda");

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent("Merhaba, web siteniz üzerinden ulaşıyorum. Özel dersler ve fiyat bilgisi hakkında bilgi almak istiyorum.");
  const whatsappLink = `https://wa.me/905XX5XXXXXX?text=${whatsappMessage}`;

  // Real Google reviews from customers
  const testimonials = [
    {
      name: "Akın Özkan",
      text: "Baki ile boksa başlayalı 3 ay oldu ve bu kararı verdiğim için çok mutluyum. Kendisi gerçekten profesyonel, disiplinli ve ciddi bir eğitmen. İletişim ve sohbet becerileri de çok güçlü; sadece boks öğrenmiyor, aynı zamanda iyi bir ortam ve sağlam bir arkadaşlık kazanıyorsunuz.",
      rating: 5,
    },
    {
      name: "Mustafa Bozkurt",
      text: "Boksa yeni başlamış olmama rağmen Baki Yılmaz Boxing Academy'de kendimi çok rahat hissettim. Eğitmenlerin sabrı ve teknik anlatımı çok iyi. Burası sadece bir spor salonu değil, gerçek bir boks okulu atmosferi var.",
      rating: 5,
    },
    {
      name: "Bilal Yılmaz",
      text: "Yıllardır emek veren değerli hocam Baki Yılmaz'a en içten teşekkürlerimi sunuyorum.",
      rating: 5,
    },
    {
      name: "Doruk Özkan",
      text: "Birkaç aydır Baki ile ders yapıyorum. Çok ilgili ve etkili bir şekilde öğretiyor. Hem öğretmen hem arkadaş gibi. Başladığımdan beri kondisyonum ve özgüvenim arttı.",
      rating: 5,
    },
    {
      name: "Ahmet Kaan Kara",
      text: "Baki Hoca ile geçirdiğim süreçte gelişimime çok katkısı oldu ve ilgisini hiç eksik etmedi. Bana boksu sevdirdi ve spor hayatımın bir parçası oldu.",
      rating: 5,
    },
    {
      name: "Yılmaz Çoban",
      text: "10 yıldır Baki Yılmaz ile çalışıyorum. Boks öğrenmek isteyen veya yeni başlayan herkese tavsiye edeceğim, başarılı ve disiplinli bir antrenör.",
      rating: 5,
    },
    {
      name: "Elif Beyza Çorlu",
      text: "Milli sporcu olarak 3 yıldır Baki hocamla çalışıyorum. Hem sohbetleri hem antrenmanları çok keyifli. Bu sporla ilgilenen herkesin gelmesini tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Baki Yağız Baykal",
      text: "3 aydır geliyorum. Çok temiz, güzel ve öğretici bir yer. Tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Sergen Seyhun",
      text: "Yıllardır fitness yapan biri olarak Baki ile ilk dersimi aldım. Bu kadar ilgili ve bilgili birini görmemiştim. Gerçekten çok profesyonel.",
      rating: 5,
    },
    {
      name: "Bike Şenel",
      text: "Baki hocanın kişisel ilgisi, beslenme programı ve özel antrenmanları sayesinde kısa sürede yaklaşık 20 kilo verdim. Sporu sevdiren, tutkulu bir antrenör.",
      rating: 5,
    },
    {
      name: "Feryal Doğan",
      text: "Eşimle birlikte yeniden spor yapmaya başlamak için Baki hocayı bulduk ve çok memnun kaldık. Motive edici ve faydalı bir ortam.",
      rating: 5,
    },
    {
      name: "Büşra Kara",
      text: "Etkili bir boks paket eğitimi aldım. Hiç bilgim yokken hocam sayesinde boksu sevdim. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
  ];

  const testimonialItems = testimonials.map((t) => (
    <div key={t.name} className="bg-background p-8 border-2 border-border">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-lg mb-4 text-muted-foreground">"{t.text}"</p>
      <p className="font-bold">{t.name}</p>
    </div>
  ))

  // Services without emojis - with placeholder for images
  const services = [
    { title: "Boks", description: "Teknik, hız ve güç geliştirme" },
    { title: "Kickboks", description: "Tam vücut antrenmanı" },
    { title: "Fonksiyonel Antrenman", description: "Gerçek hayat hareketleri" },
    { title: "Fitness", description: "Hedef odaklı kondisyonlama" },
    { title: "Kondisyon Geliştirme", description: "Dayanıklılık ve enerji" },
    { title: "Yağ Yakımı Programları", description: "Hızlı ve etkili sonuçlar" },
  ];

  // Objectives - professional list
  const objectives = [
    "Güç",
    "Kuvvet",
    "Dayanıklılık",
    "Kondisyon",
    "Özgüven",
    "Hız",
    "Disiplin",
    "Yaşam biçimi",
  ];

  // Target audience
  const targetAudience = [
    "Kilo vermek isteyenler",
    "Kondisyonunu artırmak isteyenler",
    "Sporla disiplin kazanmak isteyen herkes için",
    "Güç ve dayanıklılığını geliştirmek isteyenler",
    "Profesyonel antrenman sistemi arayanlar",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BY</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">BAKI YILMAZ</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#hakkimda" className="hover:text-primary transition">HAKKIMDA</a>
            <a href="#hizmetler" className="hover:text-primary transition">HİZMETLER</a>
            <a href="#amac" className="hover:text-primary transition">AMAÇ</a>
            <a href="#kimler" className="hover:text-primary transition">KİMLER İÇİN</a>
            <a href="#sss" className="hover:text-primary transition">SSS</a>
            <a href="#iletisim" className="hover:text-primary transition">İLETİŞİM</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 ml-4">
              Fiyat bilgisi al
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20"
        style={{
          backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/boxing-ring-video-bg.mp4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/ZtxZoIfEuaiQfjAz.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="mb-6 inline-block border-2 border-primary px-4 py-2">
            <span className="text-primary font-bold tracking-wider">B.Y. FIGHT CLUB ACADEMY</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            GÜVEN<br />
            DİSİPLİN<br />
            TECRÜBE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            29 yıllık spor tecrübesi ve milli sporcu ile boks, kickboks, fonksiyonel antrenman ve fitness alanlarında birebir özel ders ve grup dersi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-8 text-lg font-bold">
              Hemen iletişime geç
            </Button>
            <a href={whatsappLink}>
              <Button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 py-3 px-8 text-lg font-bold w-full">
                Fiyat bilgisi al
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-20 bg-background">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">HAKKIMDA</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                29 yıllık spor tecrübesi ve milli sporcu ile; boks, kickboks, fonksiyonel antrenman ve fitness alanlarında birebir, hedef odaklı özel dersler veriyorum.
              </p>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Disiplinli ve sonuç odaklı çalışma sistemiyle; kilo verme, kondisyon geliştirme, güç ve dayanıklılık artırma konularında profesyonel destek sağlıyorum.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sporun yalnızca fiziksel değil, karakter gelişimi açısından da güçlü bir araç olduğuna inanıyorum.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card p-6 border-2 border-border">
                <h3 className="font-bold text-lg mb-2">Tecrübe ve Altyapı</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> 29 yıllık spor tecrübesi</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Milli sporcu</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Disiplinli ve sistemli antrenman yaklaşımı</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Hedef ve sonuç odaklı çalışma modeli</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-card">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">ÖZELLİKLİ DERS ALANLARI</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const images = [
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/GQjWJuFVwwdEmHqL.jpg',
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/xjNVvyFRYMovepuU.jpg',
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/ifGWsJdGuGEAAoCb.jpg',
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/QBqVqYGduUvuuKNK.jpg',
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/GQjWJuFVwwdEmHqL.jpg',
                'https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/xjNVvyFRYMovepuU.jpg',
              ];
              return (
                <div key={service.title} className="bg-background p-8 border-2 border-border hover:border-primary transition">
                  <img src={images[idx % images.length]} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="amac" className="py-20 bg-background">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">AMAÇ NET</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {objectives.map((obj) => (
              <div key={obj} className="bg-card p-6 border-2 border-border text-center">
                <p className="text-xl font-bold">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="kimler" className="py-20 bg-card">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">KİMLER İÇİN?</h2>
          <div className="space-y-4">
            {targetAudience.map((audience) => (
              <div key={audience} className="bg-background p-6 border-l-4 border-primary">
                <p className="text-lg">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section className="py-20 bg-background">
        <div className="container animate-on-scroll">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">Burada sadece kilo verilmez.</h3>
            <p className="text-xl text-muted-foreground mb-4">Burada kondisyon inşa edilir, karakter şekillenir, irade güçlenir.</p>
            <p className="text-xl text-muted-foreground mb-4">Bahane değil sonuç isteyenler için.</p>
            <p className="text-xl text-muted-foreground">Sınırlarını zorlamak isteyenler için.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-card">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">MÜŞTERİ YORUMLARI</h2>
          <Carousel items={testimonialItems} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sss" className="py-20 bg-background">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">SIKÇA SORULAN SORULAR</h2>
          <div className="space-y-4 max-w-3xl">
            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Antrenmanlar nasıl geçer?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Antrenmanlar kişiye özel planlanır. Teknik boks eğitimi, kondisyon çalışmaları, cardio ve fonksiyonel antrenmanlar birlikte uygulanır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Dersler her seviyeye uygun mu?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Evet. Hiç spor yapmamış kişilerden ileri seviye sporculara kadar herkes için özel program hazırlanır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Beslenme programı veriliyor mu?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Evet. Hedefe göre (kilo verme, kilo alma, performans artışı) beslenme yönlendirmesi yapılır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Yarışmalara hazırlanabilir miyim?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Evet. Müsabık sporcular için özel disiplinli antrenman programı uygulanır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hangi yaş aralığı kabul ediliyor?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">4 – 70 yaş arası öğrencilerimiz bulunmaktadır. Her yaşa uygun program uygulanır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Kadınlar için uygun mu?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Evet. Kadın öğrenciler için özel program uygulanır. Boks aynı zamanda güçlü bir cardio ve sıkılaşma antrenmanıdır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Daha önce spor yapmadım, başlayabilir miyim?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Kesinlikle evet. Sıfırdan başlayan birçok öğrencimiz bulunmaktadır. Program seviyeye göre başlatılır.</p>
            </details>

            <details className="bg-card p-6 border-2 border-border group cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center">
                Sakatlanma riski var mı?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">Kontrollü ve disiplinli çalışma sayesinde risk minimuma indirilir. Teknik eğitim önceliklidir.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Quick Info Form Section */}
      <section className="py-20 bg-card">
        <div className="container animate-on-scroll max-w-2xl">
          <h2 className="text-4xl font-black mb-8">BİLGİ VE FIYAT ALMAK İÇİN</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bilgi ve fiyat almak için iletişim bilgilerinizi aşağıya bırakabilirsiniz veya WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Ad Soyad" className="w-full bg-background border-2 border-border p-4 text-foreground" />
            <input type="tel" placeholder="Telefon" className="w-full bg-background border-2 border-border p-4 text-foreground" />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-bold">
              BİLGİ AL
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-background">
        <div className="container animate-on-scroll">
          <h2 className="text-5xl font-black mb-12">HEMEN BAŞLAYALIM</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* WhatsApp */}
            <div className="bg-card p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">Hızlı bilgi almak için WhatsApp'tan yazabilirsiniz.</p>
              <a href={whatsappLink}>
                <Button className="bg-green-600 text-white hover:bg-green-700 w-full py-3 text-lg font-bold">
                  WHATSAPP'TAN YAZ
                </Button>
              </a>
            </div>

            {/* Location */}
            <div className="bg-card p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">Konum</h3>
              <p className="text-muted-foreground mb-2">B.Y. Fight Club Academy</p>
              <p className="text-muted-foreground mb-6">Ataşehir, İstanbul</p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-3 text-lg font-bold">
                YOL TARİFİ AL
              </Button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="bg-card p-12 border-2 border-border">
            <h3 className="text-2xl font-bold mb-8">SOSYAL MEDYA</h3>
            <div className="flex gap-6 justify-center">
              <a href="https://instagram.com/baki_ylmaz" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-background border-2 border-border hover:border-primary transition flex items-center justify-center rounded">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://tiktok.com/@bakiyilmazfightclub" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-background border-2 border-border hover:border-primary transition flex items-center justify-center rounded">
                <TrendingUp className="w-8 h-8" />
              </a>
              <a href="https://youtube.com/@bakiylmaz6484" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-background border-2 border-border hover:border-primary transition flex items-center justify-center rounded">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="tel:+905XX5XXXXXX" className="w-16 h-16 bg-background border-2 border-border hover:border-primary transition flex items-center justify-center rounded">
                <Phone className="w-8 h-8" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-background border-2 border-border hover:border-primary transition flex items-center justify-center rounded">
                <MapPin className="w-8 h-8" />
              </a>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Disiplinli antrenman, net hedefler ve gerçek sonuçlar için doğru yerdesiniz.
            </p>
            <p className="text-center text-muted-foreground mt-2">
              İlk adımı atın, gerisini birlikte planlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container text-center text-muted-foreground">
          <p>©2026 Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
