import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Building2,
  ShoppingCart,
  Code2,
  User,
  Share2,
  Target,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { services } from "../data/services";

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

export function Services() {
  const webServices = services.filter((s) => s.category === "web");
  const marketingServices = services.filter((s) => s.category === "marketing");

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
            Hizmetlerimiz
          </div>
          <h1 className="mb-6">Dijital Çözümlerimiz</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Web tasarımından dijital pazarlamaya, işletmenizin dijital dönüşümü
            için ihtiyaç duyduğunuz tüm hizmetler.
          </p>
        </motion.div>
      </section>

      {/* Web & Software Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h2>Web & Yazılım Çözümleri</h2>
            </div>
            <p className="text-gray-600 max-w-3xl">
              Modern web teknolojileri ile işletmenizin dijital varlığını
              oluşturuyor ve güçlendiriyoruz.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {webServices.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.slug} variants={item}>
                  <Link to={`/hizmetler/${service.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 h-full hover:border-blue-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="mb-4 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight
                                size={16}
                                className="text-blue-600 mt-1 flex-shrink-0"
                              />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="text-purple-600" size={24} />
              </div>
              <h2>Dijital Pazarlama & Yönetim</h2>
            </div>
            <p className="text-gray-600 max-w-3xl">
              Marka bilinirliğinizi artırıyor, hedef kitlenize ulaşıyor ve
              satışlarınızı büyütüyoruz.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {marketingServices.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.slug} variants={item}>
                  <Link to={`/hizmetler/${service.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 h-full hover:border-purple-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="mb-4 group-hover:text-purple-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight
                                size={16}
                                className="text-purple-600 mt-1 flex-shrink-0"
                              />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
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
          <h2 className="text-white mb-4">
            Hangi Hizmet Size Uygun?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Emin değil misiniz? Bizimle iletişime geçin, size en uygun çözümü
            birlikte belirleyelim.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/iletisim">
              Ücretsiz Danışmanlık Al <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
