/* 
Design Philosophy: Brutalism + Martial Arts Aesthetic
- Sharp geometric forms with diagonal cuts
- High contrast: black background, white text, red accents
- Asymmetric layouts
- Minimal but maximum impact
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Instagram, Linkedin, Youtube, Phone, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

  // Placeholder testimonials for carousel
  const testimonials = [
    {
      name: "Ahmet Kaya",
      role: "Müşteri",
      text: "Baki ile çalışmaya başladığımdan beri hayatım tamamen değişti. Profesyonel yaklaşımı ve motivasyonu sayesinde hedeflerime ulaştım.",
      rating: 5,
    },
    {
      name: "Zeynep Demir",
      role: "Müşteri",
      text: "Kickbox derslerinde öğrendiklerimin yanı sıra kendime olan güvenim de arttı. Çok teşekkür ederim Baki!",
      rating: 5,
    },
    {
      name: "Mehmet Yıldız",
      role: "Müşteri",
      text: "Fitness hedeflerime ulaşmak için Baki'nin yardımı çok önemliydi. Kişiselleştirilmiş programı sayesinde başarılı oldum.",
      rating: 5,
    },
    {
      name: "Ayşe Çetin",
      role: "Müşteri",
      text: "Grup derslerine katılmak çok eğlenceli. Baki'nin enerjisi ve bilgisi bizi her zaman motive ediyor.",
      rating: 5,
    },
  ];

  // Placeholder projects/success stories
  const projects = [
    {
      title: "Kilo Verme Programı",
      description: "12 haftalık kişiselleştirilmiş program ile 15kg kilo kaybı",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-4_1770937915000_na1fn_Zml0bmVzcy1jb2FjaGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTRfMTc3MDkzNzkxNTAwMF9uYTFmbl9abWwwYm1WemN5MWpiMkZqYUdsdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GosRFsGy65JDctuYHl73FdNB2iAWKCWxWmqhyq26b5boM7fYh~4mCCcAC6wvkNS6UvM05QIpOhds4Z8RJdoMOMgMSCVbIpmIl-TG5ONIBpWL6Di5d4EcFoTJNmylzxbnKhUhrkyvS8G5ievHDJD1MzW6D3Og~ZRwtIMGVcWDNYXKluFZKKyjqM4LiKbOTMmeD4VsdL2UDQ7zkQLRKEzu3EjWTOSSKIqJKHWIB0HUcBh8~7ukJdkTgGE510F9ndaHHHKswVSq-yy9pWnOHVlRmYh2rlqp84WiGfUZnJCIK829rs00cpGw8IZl5GpLqZMlfkrz4n4EsNkNvLgIGdRBlA__",
    },
    {
      title: "Boks Antrenmanı",
      description: "Başlangıç seviyesinden ileri seviyeye 6 aylık yoğun program",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-2_1770937920000_na1fn_Ym94aW5nLXRyYWluaW5nLWFjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTJfMTc3MDkzNzkyMDAwMF9uYTFmbl9ZbTk0YVc1bkxYUnlZV2x1YVc1bkxXRmpkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=usrpTbz2SumKb6HPJGVNfosf8Nlk9prR7fdZ1Qaxbb6snVREYAFlt4YlG9b~aQ69wGyFoYg91DZoVxFQQD4q3JRWNOD0tsNqEeP4-wFlCxIzDYwi9oAZGFnyTOjDRLqXcjmx4~yuVsVd0CWn-SactkVAFbaZpXYe022aR8moaG1F65MtnroPELwsOKl5z4Y6yu3RkAG0INs3qG4mvBlcsfm5ZitStlM1tP6EKd~GS6lY6UZqYrTIem-Wrd583c6AKTGWnWAGCuBw0s8sxlzJq8jMNxsolCICpKCzdgeFaInnyHUviwTt10D0S1Oy~fHg~dc7PmvilwifHRl5s~~Hnw__",
    },
    {
      title: "Kondisyon Geliştirme",
      description: "Spor spesifik kondisyon antrenmanı ile performans artışı",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-3_1770937922000_na1fn_a2lja2JveGluZy1zZXNzaW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTNfMTc3MDkzNzkyMjAwMF9uYTFmbl9hMmxqYTJKdmVHbHVaeTF6WlhOemFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f5WDsal71oR~EGR1BS1ruAC5an9A3Kb~HUP8Oc365Enf6SvQvlqYopw7Qr~fo5dMLwLYaFNAiFe8DqLO7xjMdBi9HageIwJtFv0aD6y2Ey7ZGck17Jb-SfAizrVgjkBE6MYvObfkzOCKNn4XNWp9hZWSIPhT8qHtlMPiU9~BurcnypyGi9bEuTE8nscJAGcK5HGZLbxQPPy07WO7Y12rglEB3Y3XAC-S10Ja~W7lTMgC9Lgo~Kdq8ossInR9KvrMg6p6jTH64OXoEwFnx5EkBKvF80y-JfSvyKJY6-eFF29my0Bwlr552E2~iJEPlM1Z0~l-6ehykaT1o3IbrHfzRQ__",
    },
  ];

  const testimonialItems = testimonials.map((testimonial, index) => (
    <div key={index} className="px-4 py-8 md:px-8">
      <Card className="p-8 bg-background border-2 border-border h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
        <div className="border-t border-border pt-4">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </Card>
    </div>
  ));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/ngcxJkaqTFjaQDNP.png" 
              alt="B.Y. Fight Club Academy" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold tracking-wider">BAKI YILMAZ</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#hakkimda" className="hover:text-primary transition-colors duration-200">HAKKIMDA</a>
            <a href="#hizmetler" className="hover:text-primary transition-colors duration-200">HİZMETLER</a>
            <a href="#projeler" className="hover:text-primary transition-colors duration-200">PROJELER</a>
            <a href="#referanslar" className="hover:text-primary transition-colors duration-200">REFERANSLAR</a>
            <a href="#iletisim" className="hover:text-primary transition-colors duration-200">İLETİŞİM</a>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            İLETİŞİME GEÇ
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-1_1770937916000_na1fn_aGVyby1ib3hpbmctYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTFfMTc3MDkzNzkxNjAwMF9uYTFmbl9hR1Z5YnkxaWIzaHBibWN0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J-PZMC9LBv~U9Bteoysd7cjw3Hg3~On0qUsAmrAEqnRQ5m6UZCtKvQI4DotM9eckzE40F4h0bfnLOeNdhrqdwS7V~0guKrWU4zQUB8Mbs7ixJ-qE~yhgcBTbVbrPKl5qoTsIOhrEPx~LUJIOoBIOkN3Oec09zmUmpgcx9~UUBpK8lgvcOw7FhDaYr1CuG0nQFpyA7l9~4rRezTmAgDFtF22rfDHXQz4FV5NTaYxex3qFdfMnsPDj2T9jAwK5NMRsjuFXywzmWjR0ysRWGj7hJc2~4xhtOl2IF9N8lvRMa9K4MM5wUb5i9ZAv42VkXullMZwYmhPxCeDcY8~-wdQFIQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="container relative z-10 text-center px-4 pt-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-primary bg-primary/10">
              <span className="text-primary text-sm font-bold tracking-widest">B.Y. FIGHT CLUB ACADEMY</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              BAKI YILMAZ
            </h1>
            <div className="h-1 w-32 bg-primary mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Profesyonel Dövüş Sanatları ve Fitness Antrenörü
            </p>
            <p className="text-base md:text-lg mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Boks, Kickbox, Tai Box ve fonksiyonel antrenman alanlarında uzmanlaşmış, 
              birebir ve grup dersleriyle hedeflerinize ulaşmanızı sağlayan profesyonel koçluk hizmeti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-200 hover:scale-105"
              >
                HEMEN BAŞLA
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("hizmetler")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 transition-all duration-200"
              >
                HİZMETLERİ KEŞFET
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-2_1770937920000_na1fn_Ym94aW5nLXRyYWluaW5nLWFjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTJfMTc3MDkzNzkyMDAwMF9uYTFmbl9ZbTk0YVc1bkxYUnlZV2x1YVc1bkxXRmpkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=usrpTbz2SumKb6HPJGVNfosf8Nlk9prR7fdZ1Qaxbb6snVREYAFlt4YlG9b~aQ69wGyFoYg91DZoVxFQQD4q3JRWNOD0tsNqEeP4-wFlCxIzDYwi9oAZGFnyTOjDRLqXcjmx4~yuVsVd0CWn-SactkVAFbaZpXYe022aR8moaG1F65MtnroPELwsOKl5z4Y6yu3RkAG0INs3qG4mvBlcsfm5ZitStlM1tP6EKd~GS6lY6UZqYrTIem-Wrd583c6AKTGWnWAGCuBw0s8sxlzJq8jMNxsolCICpKCzdgeFaInnyHUviwTt10D0S1Oy~fHg~dc7PmvilwifHRl5s~~Hnw__" 
                alt="Boks Antrenmanı" 
                className="w-full h-auto object-cover"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
                <span className="text-primary text-sm font-bold tracking-widest">HAKKIMDA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                PROFESYONEL ANTRENÖR
              </h2>
              <div className="h-1 w-24 bg-primary mb-6"></div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                B.Y. Fight Club Academy kurucusu olarak, dövüş sanatları ve fitness alanında 
                yıllara dayanan deneyimimle müşterilerime en iyi hizmeti sunuyorum. 
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Boks, kickbox, tai box gibi dövüş sanatlarının yanı sıra fonksiyonel antrenman 
                ve fitness programlarıyla kilo verme, sıkılaşma ve kondisyon kazanma hedeflerinize 
                ulaşmanıza yardımcı oluyorum.
              </p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> 15+ yıl deneyim</p>
                <p className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> 500+ başarılı öğrenci</p>
                <p className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Uluslararası sertifikalar</p>
              </div>
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                BENİMLE ÇALIŞ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 bg-card diagonal-top">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">HİZMETLER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UZMANLIK ALANLARI
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "BOKS", 
                desc: "Temel boks teknikleri ve ileri seviye stratejiler",
                price: "500 TL/saat"
              },
              { 
                title: "KICKBOX", 
                desc: "Yumruk ve tekme kombinasyonları ile tam vücut antrenmanı",
                price: "550 TL/saat"
              },
              { 
                title: "TAI BOX", 
                desc: "Muay Thai teknikleri ve geleneksel dövüş sanatları",
                price: "550 TL/saat"
              },
              { 
                title: "FONKSİYONEL ANTRENMAN", 
                desc: "Günlük yaşam için işlevsel güç ve hareket",
                price: "450 TL/saat"
              },
              { 
                title: "FITNESS & KİLO VERME", 
                desc: "Kişiselleştirilmiş fitness programları ve beslenme desteği",
                price: "400 TL/saat"
              },
              { 
                title: "GRUP DERSLERİ", 
                desc: "Motivasyonu artıran grup antrenman seansları",
                price: "250 TL/kişi"
              },
            ].map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-background border-2 border-border hover:border-primary transition-all duration-300 animate-on-scroll opacity-0 group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-1 w-12 bg-primary mb-4 group-hover:w-full transition-all duration-300"></div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <p className="text-primary font-bold text-lg">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">BAŞARI HİKAYELERİ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              PROJELER & SONUÇLAR
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-on-scroll opacity-0">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 group hover:scale-105"
              >
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="referanslar" className="py-24 bg-card diagonal-top">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">REFERANSLAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              MÜŞTERİ YORUMLARI
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <Carousel items={testimonialItems} autoScroll={true} interval={6000} />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">BECERİLER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UZMANLIKLARIN
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Boks Tekniği", level: 95 },
              { skill: "Kickbox", level: 90 },
              { skill: "Tai Box (Muay Thai)", level: 88 },
              { skill: "Fonksiyonel Antrenman", level: 92 },
              { skill: "Fitness Koçluğu", level: 90 },
              { skill: "Grup Eğitimi", level: 85 },
            ].map((item, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach Section */}
      <section className="py-24 bg-card diagonal-top">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/Tw8dNyn4ol89j1vA5YKIl5/sandbox/Zhl01TRnTJFidlWLPjMJJi-img-4_1770937915000_na1fn_Zml0bmVzcy1jb2FjaGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHc4ZE55bjRvbDg5ajF2QTVZS0lsNS9zYW5kYm94L1pobDAxVFJuVEpGaWRsV0xQak1KSmktaW1nLTRfMTc3MDkzNzkxNTAwMF9uYTFmbl9abWwwYm1WemN5MWpiMkZqYUdsdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GosRFsGy65JDctuYHl73FdNB2iAWKCWxWmqhyq26b5boM7fYh~4mCCcAC6wvkNS6UvM05QIpOhds4Z8RJdoMOMgMSCVbIpmIl-TG5ONIBpWL6Di5d4EcFoTJNmylzxbnKhUhrkyvS8G5ievHDJD1MzW6D3Og~ZRwtIMGVcWDNYXKluFZKKyjqM4LiKbOTMmeD4VsdL2UDQ7zkQLRKEzu3EjWTOSSKIqJKHWIB0HUcBh8~7ukJdkTgGE510F9ndaHHHKswVSq-yy9pWnOHVlRmYh2rlqp84WiGfUZnJCIK829rs00cpGw8IZl5GpLqZMlfkrz4n4EsNkNvLgIGdRBlA__" 
                alt="Fitness Koçluğu" 
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
                <span className="text-primary text-sm font-bold tracking-widest">YAKLAŞIM</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                KİŞİSELLEŞTİRİLMİŞ PROGRAM
              </h2>
              <div className="h-1 w-24 bg-primary mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hedef Belirleme</h3>
                    <p className="text-muted-foreground">
                      Öncelikle sizinle birlikte net hedefler belirliyor ve kişisel durumunuzu analiz ediyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Özel Program</h3>
                    <p className="text-muted-foreground">
                      Size özel antrenman programı hazırlıyor ve adım adım ilerlemenizi sağlıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sürekli Destek</h3>
                    <p className="text-muted-foreground">
                      Antrenmanlarınız boyunca sürekli motivasyon ve teknik destek sağlıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">SSS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SIKI SORULAN SORULAR
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 animate-on-scroll opacity-0">
            {[
              {
                q: "Başlangıç seviyesinde antrenman alabilir miyim?",
                a: "Evet! Tüm seviyelere uygun programlar hazırlıyorum. Başlangıçtan ileri seviyeye kadar herkes için özel programlar var."
              },
              {
                q: "Kaç kişilik grup dersleriniz var?",
                a: "Grup derslerimiz 4-10 kişi arasında değişiyor. Daha etkili antrenman için grup boyutunu sınırlandırıyorum."
              },
              {
                q: "Online antrenman imkanı var mı?",
                a: "Evet, online fitness ve beslenme koçluğu hizmeti sunuyorum. Boks ve dövüş sanatları için yüz yüze antrenman gereklidir."
              },
              {
                q: "İlk danışma ücretsiz mi?",
                a: "Evet, ilk görüşmede hedeflerinizi dinliyorum ve size uygun programı öneriyorum. Bu danışma tamamen ücretsizdir."
              },
              {
                q: "Paket programlar var mı?",
                a: "Evet, 10, 20 ve 30 seans paketleri sunuyorum. Paket alımında özel indirimler mevcuttur."
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card border-2 border-border animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-bold mb-3 text-primary">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-24 bg-card diagonal-top">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/20 border-l-4 border-primary">
              <span className="text-primary text-sm font-bold tracking-widest">İLETİŞİM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              HEMEN BAŞLAYALIM
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hedeflerinize ulaşmak için ilk adımı atın. Benimle iletişime geçin ve 
              size özel antrenman programınızı oluşturalım.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8 animate-on-scroll opacity-0">
              <Card className="p-6 bg-background border-2 border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">Hızlı iletişim için WhatsApp üzerinden ulaşın</p>
                    <p className="font-bold text-primary mb-3">+90 (5XX) XXX XX XX</p>
                    <Button 
                      onClick={() => window.open('https://wa.me/905xxxxxxxxx', '_blank')}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      WHATSAPP'TAN YAZ
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background border-2 border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Konum</h3>
                    <p className="text-muted-foreground mb-1">B.Y. Fight Club Academy</p>
                    <p className="text-muted-foreground mb-1">Sokak Adı, Bina No</p>
                    <p className="text-muted-foreground">İstanbul, Türkiye</p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-2 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open('https://www.linkedin.com', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-2 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open('https://www.instagram.com', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-2 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <Card className="p-8 bg-background border-2 border-border">
                <h3 className="text-2xl font-bold mb-6">HIZLI İLETİŞİM</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">ADINIZ</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">TELEFON</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">E-POSTA</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">İLGİ ALANLARINIZ</label>
                    <select className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors">
                      <option>Seçiniz...</option>
                      <option>Boks</option>
                      <option>Kickbox</option>
                      <option>Tai Box</option>
                      <option>Fitness</option>
                      <option>Kilo Verme</option>
                      <option>Grup Dersi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">MESAJINIZ</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-card border-2 border-border focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Hedeflerinizi ve beklentilerinizi paylaşın..."
                    ></textarea>
                  </div>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
                    onClick={() => alert('Form gönderimi için backend entegrasyonu gereklidir. Şimdilik WhatsApp üzerinden iletişime geçebilirsiniz.')}
                  >
                    MESAJ GÖNDER
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663350946171/ngcxJkaqTFjaQDNP.png" 
                  alt="B.Y. Fight Club Academy" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="text-lg font-bold">BAKI YILMAZ</div>
                  <div className="text-sm text-muted-foreground">B.Y. Fight Club Academy</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Profesyonel dövüş sanatları ve fitness antrenörlüğü</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">HIZLI BAĞLANTILAR</h4>
              <div className="space-y-2 text-sm">
                <a href="#hakkimda" className="text-muted-foreground hover:text-primary transition-colors">Hakkımda</a>
                <a href="#hizmetler" className="text-muted-foreground hover:text-primary transition-colors block">Hizmetler</a>
                <a href="#projeler" className="text-muted-foreground hover:text-primary transition-colors block">Projeler</a>
                <a href="#iletisim" className="text-muted-foreground hover:text-primary transition-colors block">İletişim</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">SOSYAL MEDYA</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Baki Yılmaz. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
