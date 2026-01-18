import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Фиолетовый вихрь",
    price: 2500,
    image: "https://cdn.poehali.dev/projects/3df215cf-f34c-48df-bf5e-fa040ece7549/files/783e17a6-c3af-433b-b309-0bf5c0997edc.jpg",
    colors: ["Фиолетовый", "Розовый", "Оранжевый"]
  },
  {
    id: 2,
    name: "Радужная спираль",
    price: 2700,
    image: "https://cdn.poehali.dev/projects/3df215cf-f34c-48df-bf5e-fa040ece7549/files/d0c5d705-d833-49ae-ad0a-5efcf06a6956.jpg",
    colors: ["Голубой", "Розовый", "Жёлтый"]
  },
  {
    id: 3,
    name: "Закатный градиент",
    price: 2600,
    image: "https://cdn.poehali.dev/projects/3df215cf-f34c-48df-bf5e-fa040ece7549/files/65c7b3d9-7175-4f85-b8b8-d1e029a09999.jpg",
    colors: ["Оранжевый", "Розовый", "Фиолетовый"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            TieDye Art
          </h1>
          <div className="flex gap-6 items-center">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Раскрась свой мир
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Уникальные майки тай-дай ручной работы. Каждая — произведение искусства.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <a href="#catalog">Смотреть коллекцию</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Наша коллекция
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white">
                      Ручная работа
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{product.price} ₽</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-6">О нашем творчестве</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждая майка создаётся вручную с любовью и вниманием к деталям. 
              Техника тай-дай превращает обычную хлопковую ткань в уникальное 
              произведение искусства. Нет двух одинаковых изделий — каждое неповторимо.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Palette" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">100% хлопок</h4>
              <p className="text-muted-foreground">Качественная натуральная ткань</p>
            </div>
            
            <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Ручная работа</h4>
              <p className="text-muted-foreground">Каждое изделие уникально</p>
            </div>
            
            <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Стойкие краски</h4>
              <p className="text-muted-foreground">Не выцветают при стирке</p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Доставка и оплата
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Почта России</h4>
                  <p className="text-muted-foreground">
                    Отправляем по всей России. Доставка 7-14 дней. 
                    Стоимость рассчитывается индивидуально.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Ozon</h4>
                  <p className="text-muted-foreground">
                    Быстрая доставка через пункты выдачи Ozon. 
                    Срок доставки 2-5 дней в крупные города.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-6 border-2 border-primary/20 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Info" className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Уход за изделием</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Стирка при температуре до 40°C</li>
                  <li>• Рекомендуется ручная стирка или деликатный режим</li>
                  <li>• Не использовать отбеливатель</li>
                  <li>• Гладить с изнаночной стороны</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-4xl font-bold mb-8 animate-fade-in">Свяжитесь с нами</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Готовы заказать уникальную майку или есть вопросы? Напишите нам!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать на почту
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            TieDye Art
          </h2>
          <p className="text-background/70">
            Уникальные майки ручной работы © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
