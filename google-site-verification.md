# Google Search Console Kurulum Rehberi

## Adım 1: Google Search Console'a Kayıt

1. https://search.google.com/search-console adresine gidin
2. Google hesabınızla giriş yapın
3. "Özellik Ekle" butonuna tıklayın
4. "URL öneki" seçeneğini seçin
5. Sitenizin URL'ini girin: https://orionsoft.dev
6. "Devam Et" butonuna tıklayın

## Adım 2: Site Sahipliğini Doğrulama

Google size birkaç doğrulama yöntemi sunacak. En kolay yöntem HTML tag'i:

### HTML Tag Yöntemi:
1. Google'dan aldığınız meta tag'i kopyalayın
2. `_includes/head.html` dosyasına ekleyin (eğer yoksa `_layouts/default.html` içindeki <head> bölümüne)

Örnek tag:
```html
<meta name="google-site-verification" content="BURAYA_GOOGLE_KODU_GELECEK" />
```

### Alternatif: HTML Dosyası Yöntemi:
Google size bir HTML dosyası verecek, bunu sitenizin root dizinine yükleyin.

## Adım 3: Sitemap Gönderimi

Site haritanızı Google'a gönderin:

1. Google Search Console'da sol menüden "Sitemap" seçeneğine tıklayın
2. Sitemap URL'inizi girin: `sitemap.xml`
3. "Gönder" butonuna tıklayın

## Adım 4: URL İnceleme

Hemen indekslenmesini istediğiniz sayfalar için:

1. Sol menüden "URL İnceleme" seçin
2. Sayfanızın URL'ini girin
3. "İndekslemeyi İste" butonuna tıklayın

## Önemli Sayfalar İçin URL İnceleme:
- https://orionsoft.dev/
- https://orionsoft.dev/hizmetler/
- https://orionsoft.dev/portfolyo/
- https://orionsoft.dev/blog/
- https://orionsoft.dev/iletisim/
- https://orionsoft.dev/hizmetler/e-ticaret/

## Sonraki Adımlar

- İlk 48-72 saat içinde Google sitenizi taramaya başlayacak
- 1-2 hafta içinde aramada görünmeye başlayabilir
- Düzenli olarak Search Console'u kontrol edin
- Hataları takip edin ve düzeltin
