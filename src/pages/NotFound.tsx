import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-9xl text-blue-600 mb-4">404</div>
        </motion.div>

        <h1 className="mb-4">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönebilir veya menüden istediğiniz sayfaya gidebilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="mr-2" size={20} />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/hizmetler">
              <Search className="mr-2" size={20} />
              Hizmetleri Keşfet
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
