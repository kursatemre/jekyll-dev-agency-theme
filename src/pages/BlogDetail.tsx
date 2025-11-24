import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getBlogPostBySlug, blogPosts } from "../data/blogs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Blog'a Dön</span>
            </Link>

            <div className="mb-6">
              <span
                className={`inline-block px-3 py-1 rounded ${
                  post.category === "web-dunyasi"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {post.category === "web-dunyasi"
                  ? "Web Dünyası"
                  : "Dijital Büyüme"}
              </span>
            </div>

            <h1 className="mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
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
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={`https://images.unsplash.com/${post.image}?w=1200&h=675&fit=crop`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div
                    className="mt-8"
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="mb-4">Etiketler</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-6">
                  {/* CTA Card */}
                  {post.relatedService && (
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                      <CardContent className="p-6">
                        <h4 className="mb-3">
                          İlginizi mi Çekti?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Sizin de profesyonel bir {post.relatedService} hizmetine mi ihtiyacınız var?
                        </p>
                        <Button asChild className="w-full">
                          <Link to={`/hizmetler/${post.relatedService}`}>
                            Hizmetlerimizi İncele
                            <ArrowRight className="ml-2" size={16} />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}

                  {/* Quick Contact */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-3">Ücretsiz Teklif</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Projeniz için özel fiyat teklifi alın.
                      </p>
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/iletisim">İletişime Geç</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Newsletter */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-3">Bülten</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Yeni blog yazılarından haberdar olun.
                      </p>
                      <Button variant="outline" className="w-full">
                        Abone Ol
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="mb-12 text-center">İlgili Yazılar</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={`https://images.unsplash.com/${relatedPost.image}?w=600&h=400&fit=crop`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                          <span
                            className={`px-2 py-1 rounded ${
                              relatedPost.category === "web-dunyasi"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {relatedPost.category === "web-dunyasi"
                              ? "Web Dünyası"
                              : "Dijital Büyüme"}
                          </span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h4 className="mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
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
    </div>
  );
}
