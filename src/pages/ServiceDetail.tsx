import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import {
  Building2,
  ShoppingCart,
  Code2,
  User,
  Share2,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getServiceBySlug } from "../data/services";
import { blogPosts } from "../data/blogs";

const iconMap: Record<string, any> = {
  Building2,
  ShoppingCart,
  Code2,
  User,
  Share2,
  Target,
};

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const Icon = iconMap[service.icon];
  const relatedBlogs = blogPosts.filter(
    (post) => post.relatedService === service.slug
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon className="text-white" size={40} />
            </motion.div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              {service.category === "web" ? "Web & Yazılım" : "Dijital Pazarlama"}
            </div>
            <h1 className="mb-6">{service.title}</h1>
            <p className="text-gray-600 text-lg">{service.description}</p>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-12 text-center">Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-4 text-center">Çalışma Sürecimiz</h2>
            <p className="text-gray-600 text-center mb-12">
              Projenizi başarıyla tamamlamak için izlediğimiz adımlar
            </p>

            <div className="space-y-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies (if available) */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="mb-4">Kullandığımız Teknolojiler</h2>
              <p className="text-gray-600 mb-12">
                Modern ve güncel teknolojilerle projenizi hayata geçiriyoruz
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {service.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-12 text-center">Sizin İçin Ne Yapabiliriz?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="text-blue-600" size={20} />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Blog Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 mb-8">
                <h3 className="mb-4">
                  {service.title} Hakkında Daha Fazla Bilgi
                </h3>
                <p className="text-gray-700 mb-6">
                  Blog yazılarımızda bu hizmet hakkında daha detaylı bilgiler ve
                  ipuçları bulabilirsiniz.
                </p>
                <div className="space-y-4">
                  {relatedBlogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      to={`/blog/${blog.slug}`}
                      className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="mb-1">{blog.title}</h4>
                          <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                        </div>
                        <ArrowRight className="text-blue-600 flex-shrink-0 ml-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-white mb-4">
            {service.title} için Teklif Alın
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Projeniz için özel fiyat teklifi almak ve detaylı bilgi için bizimle
            iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/iletisim">
                Teklif Al <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/portfolyo">Portfolyomuzu İncele</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
