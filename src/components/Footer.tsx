import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">DW</span>
              </div>
              <span className="text-white">Digital Works</span>
            </div>
            <p className="text-sm mb-4">
              Dijital varlığınızı inşa ediyor ve büyütüyoruz. Kurumsal web
              tasarımından sosyal medya yönetimine kadar 360° dijital çözümler.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler"
                  className="hover:text-blue-400 transition-colors"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolyo"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolyo
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="hover:text-blue-400 transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/hizmetler/kurumsal-web"
                  className="hover:text-blue-400 transition-colors"
                >
                  Kurumsal Web Sitesi
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler/e-ticaret"
                  className="hover:text-blue-400 transition-colors"
                >
                  E-Ticaret
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler/ozel-yazilim"
                  className="hover:text-blue-400 transition-colors"
                >
                  Özel Yazılım
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler/sosyal-medya"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sosyal Medya Yönetimi
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler/reklam-yonetimi"
                  className="hover:text-blue-400 transition-colors"
                >
                  Reklam Yönetimi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@digitalworks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Digital Works. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
