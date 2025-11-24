import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { blogPosts } from "../data/blogs";
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

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            Bilgi Merkezi
          </div>
          <h1 className="mb-6">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Dijital dünya hakkında faydalı bilgiler, ipuçları ve trendler.
            İşletmenizi büyütmek için ihtiyacınız olan her şey burada.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              Tüm Yazılar
            </Button>
            <Button
              variant={
                selectedCategory === "web-dunyasi" ? "default" : "outline"
              }
              onClick={() => setSelectedCategory("web-dunyasi")}
            >
              Web Dünyası
            </Button>
            <Button
              variant={
                selectedCategory === "dijital-buyume" ? "default" : "outline"
              }
              onClick={() => setSelectedCategory("dijital-buyume")}
            >
              Dijital Büyüme
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600">
                Aradığınız kriterlere uygun blog yazısı bulunamadı.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.slug} variants={item}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={`https://images.unsplash.com/${post.image}?w=800&h=500&fit=crop`}
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
                        <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-gray-500">
                            {post.author}
                          </span>
                          <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                            <span className="text-sm">Oku</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-white mb-4">Yeni Yazılardan Haberdar Olun</h2>
          <p className="max-w-2xl mx-auto mb-8 text-purple-100">
            Blog yazılarımızı e-posta ile alın. Dijital dünyada bir adım önde
            olun.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="flex-shrink-0">
              Abone Ol
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
