import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { caseStudies } from "../data/portfolio";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(caseStudies.map((c) => c.category)))];

  const filteredStudies =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            Portfolyo
          </div>
          <h1 className="mb-6">Başarı Hikayelerimiz</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Farklı sektörlerden müşterilerimiz için gerçekleştirdiğimiz projeler
            ve elde ettiğimiz sonuçlar.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "150+", label: "Tamamlanan Proje" },
              { value: "120+", label: "Mutlu Müşteri" },
              { value: "%98", label: "Memnuniyet Oranı" },
              { value: "8+", label: "Yıllık Deneyim" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              Tümü
            </Button>
            {categories.slice(1).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study) => (
              <motion.div key={study.slug} variants={item}>
                <Link to={`/portfolyo/${study.slug}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden relative">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/${study.image}?w=800&h=500&fit=crop`}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white rounded-full text-sm shadow-md">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {study.client}
                      </div>
                      <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">
                        {study.excerpt}
                      </p>

                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-blue-600 mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                        <span className="text-sm">Detayları Gör</span>
                        <ArrowRight size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h2 className="mb-4">Sonuç Odaklı Çalışıyoruz</h2>
            <p className="text-gray-600 mb-8">
              Her projede müşterilerimizin işletmelerini büyütmek için ölçülebilir
              sonuçlar elde ediyoruz. Sadece güzel görünen değil, gerçekten işe
              yarayan çözümler üretiyoruz.
            </p>
            <Button size="lg" asChild>
              <Link to="/iletisim">
                Projeniz İçin Görüşelim
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-white mb-4">Bir Sonraki Başarı Hikayesi Sizin Olsun</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Projeniz için ücretsiz danışmanlık alın. Hedeflerinize birlikte
            ulaşalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/iletisim">
                Teklif Al <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/hizmetler">Hizmetlerimizi Keşfet</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
