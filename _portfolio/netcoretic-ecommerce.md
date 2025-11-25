---
layout: case-study
title: "Netcoretic - Modern E-Ticaret Platformu"
client: "Netcoretic"
category: "E-Ticaret"
tags: [ASP.NET Core, Next.js, PostgreSQL, Redis, Elasticsearch, Clean Architecture, CQRS]
date: 2024-11-23
featured_image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop"
project_url: "https://netcoretic.vercel.app"
excerpt: "Clean Architecture prensipleriyle geliştirilmiş, mikroservis mimarisine hazır profesyonel e-ticaret platformu. Sınırsız ürün varyasyonu, Elasticsearch entegrasyonu ve ödeme gateway desteği."
results:
  - value: "Mikroservis"
    label: "Hazır Mimari"
  - value: "Elasticsearch"
    label: "Gelişmiş Arama"
  - value: "Clean Code"
    label: "Mimari Prensibi"
technologies:
  - ASP.NET Core 8.0
  - Next.js 14
  - PostgreSQL 16
  - Redis 7
  - Elasticsearch
  - Docker
  - TypeScript
  - Tailwind CSS
---

# Netcoretic - Profesyonel E-Ticaret Platformu

## Proje Özeti

Netcoretic, Clean Architecture ve CQRS pattern kullanılarak geliştirilmiş, ölçeklenebilir ve modern bir e-ticaret platformudur. Mikroservis mimarisine geçişe hazır yapısı, güçlü arama özellikleri ve esnek ürün yönetimi ile enterprise-grade bir çözüm sunar.

## Challenge (Zorluk)

### İş İhtiyaçları

Modern e-ticaret platformlarında karşılaşılan temel zorluklar:

- **Ölçeklenebilirlik**: Artan kullanıcı ve ürün sayısıyla performans kaybı
- **Karmaşık Ürün Yönetimi**: Renk, beden, hafıza gibi sınırsız varyasyon ihtiyacı
- **Hızlı Arama**: Binlerce ürün arasında anında sonuç beklentisi
- **Entegrasyon Esnekliği**: Farklı ödeme ve kargo sistemleri desteği
- **Kod Kalitesi**: Bakımı kolay, test edilebilir kod yapısı

### Teknik Gereksinimler

- **Mimari**: Temiz mimari prensipleri ve CQRS pattern
- **Performans**: Redis cache ve Elasticsearch entegrasyonu
- **Güvenlik**: JWT authentication ve input validation
- **DevOps**: Docker containerization ve CI/CD pipeline
- **Frontend**: Modern, responsive ve hızlı kullanıcı arayüzü

## Solution (Çözüm)

### Mimari Yaklaşım

**Backend Architecture:**
```
┌─────────────────────────────────────────┐
│         ASP.NET Core Web API            │
├─────────────────────────────────────────┤
│  Application Layer (CQRS + MediatR)     │
├─────────────────────────────────────────┤
│  Domain Layer (Entities & Business)     │
├─────────────────────────────────────────┤
│  Infrastructure (EF Core + Redis)       │
├─────────────────────────────────────────┤
│  PostgreSQL | Redis | Elasticsearch     │
└─────────────────────────────────────────┘
```

**Frontend Architecture:**
- Next.js 14 App Router
- Server Components için SSR
- Client Components için interaktif UI
- API Layer ile backend iletişimi
- Tailwind CSS ile responsive tasarım

### Teknoloji Stack

**Backend Technologies:**
- **ASP.NET Core 8.0**: Modern, cross-platform web API
- **Entity Framework Core**: ORM ve database migrations
- **PostgreSQL 16**: Güçlü ilişkisel veritabanı
- **Redis 7**: In-memory cache layer
- **MediatR**: CQRS pattern implementation
- **FluentValidation**: Input validation
- **Elasticsearch**: Full-text search engine

**Frontend Technologies:**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API calls
- **React Query**: Server state management

**DevOps & Tools:**
- **Docker & Docker Compose**: Containerization
- **GitHub Actions**: CI/CD pipeline
- **Kibana**: Elasticsearch monitoring
- **Vercel**: Frontend hosting

### Temel Özellikler

#### 1. Gelişmiş Ürün Yönetimi

**Sınırsız Varyasyon Sistemi:**
```csharp
public class ProductVariation
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public Dictionary<string, string> Attributes { get; set; } // Color, Size, Memory, etc.
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public string SKU { get; set; }
}
```

**Özellikler:**
- 📦 Sınırsız ürün varyasyonu (renk, beden, hafıza, vb.)
- 📊 Varyasyon bazında stok takibi
- 💰 Varyasyon bazında fiyatlandırma
- 🏷️ Otomatik SKU oluşturma
- 📸 Varyasyona özel görseller

#### 2. Elasticsearch Entegrasyonu

**Gelişmiş Arama Özellikleri:**
```typescript
// Frontend arama implementasyonu
const searchProducts = async (query: string) => {
  const results = await axios.get('/api/search', {
    params: {
      q: query,
      fuzzy: true,
      autocomplete: true
    }
  });
  return results.data;
};
```

**Arama Yetenekleri:**
- 🔍 Full-text search
- 🎯 Fuzzy matching (yazım hatalarını tolere eder)
- ⚡ Autocomplete suggestions
- 🏷️ Kategoriye göre filtreleme
- 💰 Fiyat aralığı filtreleme
- ⭐ Rating filtreleme

#### 3. CQRS Pattern

**Command ve Query Ayrımı:**
```csharp
// Command - Veri değişikliği
public class CreateProductCommand : IRequest<int>
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    // ...
}

// Query - Veri okuma
public class GetProductByIdQuery : IRequest<ProductDto>
{
    public int ProductId { get; set; }
}
```

**Faydaları:**
- ✅ Kod organizasyonu ve temizliği
- ✅ Bağımsız test edilebilirlik
- ✅ Performans optimizasyonu (read/write ayrımı)
- ✅ Ölçeklenebilir mimari

#### 4. Repository Pattern & Unit of Work

**Clean Code Implementasyonu:**
```csharp
public interface IRepository<T> where T : class
{
    Task<T> GetByIdAsync(int id);
    Task<IEnumerable<T>> GetAllAsync();
    Task AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
}

public interface IUnitOfWork
{
    IRepository<Product> Products { get; }
    IRepository<Order> Orders { get; }
    Task<int> CommitAsync();
}
```

#### 5. Ödeme & Kargo Entegrasyonu

**Payment Gateway Adapter Pattern:**
- 💳 **Iyzico**: Türkiye'nin önde gelen ödeme platformu
- 🔌 Extensible adapter pattern
- 🔒 Secure payment processing
- 📧 Transaction notifications

**Kargo Entegrasyonları:**
- 📦 **Yurtiçi Kargo**: Entegrasyon desteği
- 📦 **MNG Kargo**: Entegrasyon desteği
- 🔌 Eklenti mimarisi ile kolay genişleme

### Geliştirme Süreci

#### 1. Planlama & Mimari Tasarım (2 Hafta)
- Domain-Driven Design analizi
- Clean Architecture katmanları tasarımı
- Database schema tasarımı
- API endpoint planlaması

#### 2. Backend Geliştirme (4 Hafta)
- Domain entities oluşturma
- CQRS implementation
- Repository pattern implementasyonu
- API controllers
- Elasticsearch entegrasyonu
- Redis cache layer

#### 3. Frontend Geliştirme (3 Hafta)
- Next.js App Router kurulumu
- Component geliştirme
- API integration
- State management
- Responsive design

#### 4. DevOps & Deployment (1 Hafta)
- Docker containerization
- GitHub Actions CI/CD
- Vercel deployment
- Elasticsearch & Kibana setup

## Teknik Detaylar

### Clean Architecture Layers

**1. Domain Layer:**
```csharp
public class Product : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal BasePrice { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public ICollection<ProductVariation> Variations { get; set; }
    public ICollection<ProductImage> Images { get; set; }
}
```

**2. Application Layer (CQRS):**
```csharp
public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, int>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IValidator<CreateProductCommand> _validator;

    public async Task<int> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        var validationResult = await _validator.ValidateAsync(request);
        if (!validationResult.IsValid)
            throw new ValidationException(validationResult.Errors);

        var product = new Product
        {
            Name = request.Name,
            Description = request.Description,
            BasePrice = request.Price
        };

        await _unitOfWork.Products.AddAsync(product);
        await _unitOfWork.CommitAsync();

        return product.Id;
    }
}
```

**3. Infrastructure Layer:**
```csharp
public class ProductRepository : Repository<Product>, IProductRepository
{
    private readonly ApplicationDbContext _context;
    private readonly IDistributedCache _cache;

    public async Task<Product> GetByIdWithCacheAsync(int id)
    {
        var cacheKey = $"product:{id}";
        var cached = await _cache.GetStringAsync(cacheKey);

        if (cached != null)
            return JsonSerializer.Deserialize<Product>(cached);

        var product = await _context.Products
            .Include(p => p.Category)
            .Include(p => p.Variations)
            .Include(p => p.Images)
            .FirstOrDefaultAsync(p => p.Id == id);

        await _cache.SetStringAsync(cacheKey, JsonSerializer.Serialize(product),
            new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10) });

        return product;
    }
}
```

### Elasticsearch Implementation

**Index Mapping:**
```csharp
public class ProductDocument
{
    public int Id { get; set; }
    [Text(Analyzer = "turkish")]
    public string Name { get; set; }
    [Text(Analyzer = "turkish")]
    public string Description { get; set; }
    [Number]
    public decimal Price { get; set; }
    [Keyword]
    public string CategoryName { get; set; }
    [Number]
    public double Rating { get; set; }
}
```

**Search Query:**
```csharp
var searchResponse = await _elasticClient.SearchAsync<ProductDocument>(s => s
    .Index("products")
    .Query(q => q
        .MultiMatch(m => m
            .Query(searchTerm)
            .Fields(f => f
                .Field(p => p.Name, 2.0)
                .Field(p => p.Description)
            )
            .Fuzziness(Fuzziness.Auto)
        )
    )
    .Aggregations(a => a
        .Terms("categories", t => t.Field(f => f.CategoryName))
        .Range("price_ranges", r => r
            .Field(f => f.Price)
            .Ranges(
                new AggregationRange { To = 100 },
                new AggregationRange { From = 100, To = 500 },
                new AggregationRange { From = 500 }
            )
        )
    )
);
```

### Docker Compose Setup

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: netcoretic
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes

  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  kibana:
    image: kibana:8.11.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

  api:
    build: ./backend
    ports:
      - "5000:80"
    depends_on:
      - postgres
      - redis
      - elasticsearch
    environment:
      - ConnectionStrings__DefaultConnection=Host=postgres;Database=netcoretic;Username=admin;Password=password
      - Redis__Configuration=redis:6379
      - Elasticsearch__Uri=http://elasticsearch:9200

volumes:
  postgres_data:
  elasticsearch_data:
```

## Results (Sonuçlar)

### Performans Metrikleri

- ⚡ **API Response Time**: Ortalama 150ms (cache ile 50ms)
- 🔍 **Search Speed**: 100K+ ürün arasında <100ms
- 📈 **Ölçeklenebilirlik**: Mikroservis mimarisine hazır
- 🎯 **Code Quality**: SonarQube Grade A

### Teknik Başarılar

- ✅ Clean Architecture implementation
- ✅ CQRS pattern ile kod organizasyonu
- ✅ Repository & Unit of Work pattern
- ✅ Redis cache layer ile performance boost
- ✅ Elasticsearch ile gelişmiş arama
- ✅ Docker containerization
- ✅ CI/CD pipeline
- ✅ FluentValidation ile güvenli input handling

### İş Etkileri

- 📊 Sınırsız ürün ve varyasyon desteği
- 🚀 Yüksek performanslı arama deneyimi
- 🔌 Kolay entegrasyon (ödeme, kargo)
- 🏗️ Mikroservislere geçişe hazır altyapı
- 💻 Bakımı kolay, test edilebilir kod

## Öğrenilen Dersler

### Başarılar

1. **Clean Architecture**: Katmanlı mimari, kod organizasyonunu ve test edilebilirliği ciddi şekilde artırdı
2. **CQRS Pattern**: Read/write ayrımı, performans optimizasyonlarını kolaylaştırdı
3. **Elasticsearch**: Full-text search, kullanıcı deneyimini üst seviyeye taşıdı
4. **Docker**: Containerization, geliştirme ve deployment süreçlerini hızlandırdı

### Geliştirilecek Alanlar

1. **Mikroservis Geçişi**: Modüler yapı mikroservislere ayrılabilir
2. **Event Sourcing**: CQRS ile birlikte event sourcing implementasyonu
3. **API Gateway**: Mikroservisler için API gateway katmanı
4. **Real-time Features**: SignalR ile real-time bildirimler

## Gelecek Planları

### v2.0 Özellikleri

- 🔄 Event Sourcing implementasyonu
- 🌐 GraphQL API endpoint'leri
- 📱 React Native mobile app
- 🤖 AI-powered product recommendations
- 📊 Advanced analytics dashboard
- 🌍 Multi-language & multi-currency support
- 💬 Real-time chat support (SignalR)

### Ölçeklendirme Roadmap

- **Phase 1**: Mikroservis ayrıştırması (Products, Orders, Users)
- **Phase 2**: API Gateway implementation (Ocelot)
- **Phase 3**: Message queue integration (RabbitMQ)
- **Phase 4**: Kubernetes deployment
- **Phase 5**: Monitoring & observability (Prometheus, Grafana)

## Kullanılan Teknolojiler

### Backend
- ASP.NET Core 8.0
- Entity Framework Core
- PostgreSQL 16
- Redis 7
- MediatR
- FluentValidation
- Elasticsearch

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### DevOps
- Docker & Docker Compose
- GitHub Actions
- Kibana
- Vercel

## Proje Bağlantısı

**Live Demo**: [netcoretic.vercel.app](https://netcoretic.vercel.app)

---

## Benzer Bir Proje İçin

Modern, ölçeklenebilir ve performanslı bir e-ticaret platformu mu arıyorsunuz? Clean Architecture ve best practices ile geliştirilmiş enterprise-grade çözümler sunuyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
