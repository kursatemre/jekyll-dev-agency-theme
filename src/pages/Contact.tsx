import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            İletişim
          </div>
          <h1 className="mb-6">Hadi Konuşalım</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projeniz için ücretsiz danışmanlık alın. Bizimle iletişime geçin,
            hedeflerinize birlikte ulaşalım.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <h4 className="mb-2">Telefon</h4>
                <a
                  href="tel:+902121234567"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +90 (212) 123 45 67
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <h4 className="mb-2">E-posta</h4>
                <a
                  href="mailto:info@digitalworks.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@digitalworks.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <h4 className="mb-2">Adres</h4>
                <p className="text-gray-600">İstanbul, Türkiye</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3"
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="mb-6">Teklif Talep Formu</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-2">
                            Adınız Soyadınız *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ahmet Yılmaz"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            E-posta Adresiniz *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ahmet@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm mb-2">
                          Telefon Numaranız
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+90 (5XX) XXX XX XX"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-2">
                            Hizmet Türü
                          </label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              setFormData({ ...formData, service: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kurumsal-web">
                                Kurumsal Web Sitesi
                              </SelectItem>
                              <SelectItem value="e-ticaret">
                                E-Ticaret
                              </SelectItem>
                              <SelectItem value="ozel-yazilim">
                                Özel Yazılım
                              </SelectItem>
                              <SelectItem value="kisisel-site">
                                Kişisel Web Sitesi
                              </SelectItem>
                              <SelectItem value="sosyal-medya">
                                Sosyal Medya Yönetimi
                              </SelectItem>
                              <SelectItem value="reklam">
                                Reklam Yönetimi
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm mb-2">Bütçe</label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              setFormData({ ...formData, budget: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10k-25k">
                                10.000 - 25.000 TL
                              </SelectItem>
                              <SelectItem value="25k-50k">
                                25.000 - 50.000 TL
                              </SelectItem>
                              <SelectItem value="50k-100k">
                                50.000 - 100.000 TL
                              </SelectItem>
                              <SelectItem value="100k+">
                                100.000 TL+
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm mb-2">
                          Proje Detayları *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Projeniz hakkında bilgi verin..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2" size={20} />
                        Teklif Al
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Working Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="text-blue-600" size={20} />
                      </div>
                      <h4>Çalışma Saatleri</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Pazartesi - Cuma</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cumartesi</span>
                        <span>10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pazar</span>
                        <span>Kapalı</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Response */}
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-6">
                    <h4 className="mb-3">Hızlı Yanıt Garantisi</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Tüm teklif taleplerine 24 saat içinde dönüş yapıyoruz.
                      Acil durumlar için WhatsApp hattımızdan bize ulaşabilirsiniz.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://wa.me/902121234567"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp ile İletişim
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-4">Sık Sorulan Sorular</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-gray-900 mb-1">
                          Proje süresi ne kadar?
                        </p>
                        <p className="text-gray-600">
                          Proje tipine göre 2-8 hafta arası değişmektedir.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">
                          Ödeme nasıl yapılır?
                        </p>
                        <p className="text-gray-600">
                          Genellikle %50 peşin, %50 teslimat sonrası alınır.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">
                          Bakım hizmeti var mı?
                        </p>
                        <p className="text-gray-600">
                          Evet, tüm projelerimize 1 yıl ücretsiz bakım dahildir.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">İstanbul, Türkiye</p>
          </div>
        </div>
      </section>
    </div>
  );
}
