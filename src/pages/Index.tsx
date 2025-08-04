import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold text-primary">
              КВИНС
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Портфолио</a>
              <a href="#team" className="text-foreground hover:text-accent transition-colors">Команда</a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-accent to-yellow-600 text-primary hover:opacity-90">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-primary mb-6 leading-tight">
                Премиальное
                <span className="block bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                  продвижение
                </span>
                брендов
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Маркетинговое агентство высокого класса. Создаем элегантные стратегии 
                для роста вашего бренда и достижения выдающихся результатов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-600 text-primary hover:opacity-90">
                  <Icon name="Rocket" className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                  <Icon name="Play" className="mr-2" />
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-yellow-600/20 rounded-lg blur-3xl"></div>
                <img 
                  src="/img/ed8b0dfb-4b24-4364-840a-d9d4841af06b.jpg" 
                  alt="Премиальное продвижение брендов"
                  className="relative w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">О компании КВИНС</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы - команда экспертов с многолетним опытом в создании премиальных маркетинговых решений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Crown", title: "Премиальность", desc: "Работаем только с проектами высокого класса" },
              { icon: "Target", title: "Результативность", desc: "Средний рост продаж клиентов составляет 340%" },
              { icon: "Users", title: "Экспертность", desc: "15+ лет опыта в маркетинге и брендинге" }
            ].map((item, i) => (
              <Card key={i} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-accent/20">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр маркетинговых услуг премиум-класса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Gem", title: "Брендинг", desc: "Создание уникальной идентичности бренда", price: "от 500,000₽" },
              { icon: "TrendingUp", title: "Digital-маркетинг", desc: "Комплексное продвижение в интернете", price: "от 300,000₽" },
              { icon: "Megaphone", title: "Реклама", desc: "Эффективные рекламные кампании", price: "от 200,000₽" },
              { icon: "BarChart", title: "Аналитика", desc: "Глубокий анализ и оптимизация", price: "от 150,000₽" },
              { icon: "Palette", title: "Креатив", desc: "Создание выдающегося контента", price: "от 250,000₽" },
              { icon: "Globe", title: "PR & SMM", desc: "Управление репутацией и соцсетями", price: "от 180,000₽" }
            ].map((service, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 group border-accent/20">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <div className="text-accent font-semibold">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши успешные проекты говорят сами за себя</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Люксовый отель", growth: "+450%", metric: "рост бронирований" },
              { title: "Премиум автосалон", growth: "+320%", metric: "увеличение продаж" },
              { title: "Ювелирный дом", growth: "+280%", metric: "рост узнаваемости" },
              { title: "Fashion бренд", growth: "+380%", metric: "рост онлайн-продаж" },
              { title: "Элитная недвижимость", growth: "+250%", metric: "увеличение лидов" },
              { title: "Премиум косметика", growth: "+410%", metric: "рост аудитории" }
            ].map((project, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 border-accent/20">
                <CardContent className="p-0">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">{project.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent mb-1">
                    {project.growth}
                  </div>
                  <p className="text-muted-foreground">{project.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Эксперты мирового уровня</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Анна Королева", role: "Креативный директор", exp: "12 лет опыта" },
              { name: "Михаил Золотов", role: "Стратег", exp: "15 лет опыта" },
              { name: "Елена Бриллиант", role: "PR-директор", exp: "10 лет опыта" },
              { name: "Дмитрий Платинум", role: "Digital-директор", exp: "8 лет опыта" }
            ].map((member, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-accent/20">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.exp}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src="/img/ee385d0e-30eb-4bc5-b672-754ecdcdeda8.jpg" 
              alt="Команда КВИНС"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="opacity-90">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-90">hello@queens-agency.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="opacity-90">Москва, Тверская ул., 15</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Начнем сотрудничество</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <textarea 
                      placeholder="Расскажите о вашем проекте"
                      rows={4}
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-accent to-yellow-600 text-primary hover:opacity-90">
                      <Icon name="Send" className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-playfair font-bold text-primary mb-4 md:mb-0">
              КВИНС
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground">
            <p>© 2024 КВИНС. Все права защищены. Премиальное маркетинговое агентство.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}