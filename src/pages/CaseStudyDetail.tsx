import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Quote, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getCaseStudyBySlug, caseStudies } from "../data/portfolio";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug || "");

  if (!study) {
    return <Navigate to="/portfolyo" replace />;
  }

  const relatedStudies = caseStudies
    .filter((s) => s.category === study.category && s.slug !== study.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <Link
              to="/portfolyo"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Portfolyo'ya Dön</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {study.category}
              </span>
            </div>

            <h1 className="mb-4">{study.title}</h1>
            <p className="text-gray-600 text-lg mb-6">
              {study.client}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={`https://images.unsplash.com/${study.image}?w=1400&h=800&fit=crop`}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-16"
            >
              <p className="text-gray-700 text-lg">{study.excerpt}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-red-900">Sorun</h3>
                    <p className="text-gray-700">{study.problem}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="h-full border-green-200 bg-green-50">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-green-900">Çözüm</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-center">Sonuçlar</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {study.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="text-blue-600" size={24} />
                        </div>
                        <div className="text-blue-600 mb-2">
                          {result.value}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {result.metric}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            {study.technologies && study.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="mb-6 text-center">Kullanılan Teknolojiler</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonial */}
            {study.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Quote className="text-blue-600" size={32} />
                      </div>
                      <blockquote className="text-gray-700 text-lg mb-6">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="text-gray-900">
                          {study.testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {study.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="mb-12 text-center">Benzer Projeler</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedStudies.map((relatedStudy) => (
                  <Link
                    key={relatedStudy.slug}
                    to={`/portfolyo/${relatedStudy.slug}`}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={`https://images.unsplash.com/${relatedStudy.image}?w=800&h=500&fit=crop`}
                          alt={relatedStudy.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-gray-500 mb-2">
                          {relatedStudy.client}
                        </div>
                        <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                          {relatedStudy.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {relatedStudy.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
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
            Benzer Sonuçlar İster misiniz?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Sizin de başarı hikayenizi yazalım. Projeniz için ücretsiz
            danışmanlık alın.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/iletisim">
              Hemen Başlayalım <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
