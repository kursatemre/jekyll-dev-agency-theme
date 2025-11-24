import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  ShoppingCart,
  Code2,
  User,
  Share2,
  Target,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { services } from "../data/services";
import { getLatestBlogPosts } from "../data/blogs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const iconMap: Record<string, any> = {
  Building2,
  ShoppingCart,
  Code2,
  User,
  Share2,
  Target,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Home() {
  const latestPosts = getLatestBlogPosts(3);
  const webServices = services.filter((s) => s.category === "web");
  const marketingServices = services.filter((s) => s.category === "marketing");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-32 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6"
          >
            Dijital Dönüşüm Ortağınız
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-6"
          >
            Dijital Varlığınızı İnşa Ediyor ve Büyütüyoruz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-gray-600 mb-10"
          >
            Kurumsal web tasarımından sosyal medya yönetimine kadar 360° dijital
            çözümler. İşletmenizin dijital dünyada güçlü bir şekilde var olmasını
            sağlıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" asChild>
              <Link to="/iletisim">
                Teklif Al <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolyo">Projelerimizi İncele</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "150+", label: "Proje" },
              { value: "120+", label: "Mutlu Müşteri" },
              { value: "8+", label: "Yıl Tecrübe" },
              { value: "%98", label: "Memnuniyet" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İşletmenizin dijital ihtiyaçlarına özel, kapsamlı çözümler
              sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Web & Software Solutions */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code2 className="text-blue-600" size={24} />
                </div>
                <h3>Web & Yazılım Çözümleri</h3>
              </div>
              <div className="space-y-4">
                {webServices.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <motion.div key={service.slug} variants={item}>
                      <Link to={`/hizmetler/${service.slug}`}>
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="text-white" size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-2 group-hover:text-blue-600 transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  {service.shortDescription}
                                </p>
                              </div>
                              <ArrowRight
                                className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0"
                                size={20}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-purple-600" size={24} />
                </div>
                <h3>Dijital Pazarlama & Yönetim</h3>
              </div>
              <div className="space-y-4">
                {marketingServices.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <motion.div key={service.slug} variants={item}>
                      <Link to={`/hizmetler/${service.slug}`}>
                        <Card className="group hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="text-white" size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-2 group-hover:text-purple-600 transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  {service.shortDescription}
                                </p>
                              </div>
                              <ArrowRight
                                className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0"
                                size={20}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/hizmetler">
                Tüm Hizmetleri Gör <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dijital projelerinizde güvenilir bir ortak arıyorsanız, doğru
              yerdesiniz.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Deneyimli Ekip",
                description:
                  "8 yıllık tecrübemiz ile en karmaşık projeleri bile başarıyla teslim ediyoruz.",
              },
              {
                title: "Müşteri Odaklı",
                description:
                  "Her proje için özel çözümler üretiyor, ihtiyaçlarınıza göre çalışıyoruz.",
              },
              {
                title: "Güncel Teknolojiler",
                description:
                  "En son teknolojileri kullanarak modern ve ölçeklenebilir çözümler sunuyoruz.",
              },
              {
                title: "Hızlı Teslimat",
                description:
                  "Projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz.",
              },
              {
                title: "7/24 Destek",
                description:
                  "Proje sonrası da yanınızdayız. Teknik destek ve bakım hizmeti veriyoruz.",
              },
              {
                title: "Uygun Fiyat",
                description:
                  "Kaliteli hizmeti en uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="text-blue-600" size={24} />
                    </div>
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
              Bilgi Merkezi
            </div>
            <h2 className="mb-4">Son Yazılarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dijital dünya hakkında faydalı bilgiler, ipuçları ve trendler.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {latestPosts.map((post, index) => (
              <motion.div key={post.slug} variants={item}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${
                          index === 0
                            ? "1603201667493-4c2696de0b1f"
                            : index === 1
                            ? "1539278383962-a7774385fa02"
                            : "1611162617213-7d7a39e9b1d7"
                        }?w=800&h=500&fit=crop`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <span
                          className={`px-2 py-1 rounded ${
                            post.category === "web-dunyasi"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {post.category === "web-dunyasi"
                            ? "Web Dünyası"
                            : "Dijital Büyüme"}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                        <span className="text-sm">Devamını Oku</span>
                        <ArrowRight size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                Tüm Yazıları Gör <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="mb-4">Güvenilir Markalar Bizi Tercih Ediyor</h3>
            <p className="text-gray-600">
              Farklı sektörlerden 120+ mutlu müşterimiz var.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {["ABC Tekstil", "Doğal Lezzetler", "Yılmaz Hukuk", "GlowBeauty"].map(
              (client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <span className="text-gray-400">{client}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-white mb-4">
            Projeniz İçin Hemen Başlayalım
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Dijital dönüşüm yolculuğunuzda yanınızdayız. Ücretsiz danışmanlık
            için bizimle iletişime geçin.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/iletisim">
              Ücretsiz Teklif Alın <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
