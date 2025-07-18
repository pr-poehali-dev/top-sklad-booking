import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import BookingForm from "@/components/BookingForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Archive" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">ТопСклад</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#главная" className="text-gray-700 hover:text-red-600 transition-colors">Главная</a>
              <a href="#бронирование" className="text-gray-700 hover:text-red-600 transition-colors">Бронирование</a>
              <a href="#оплата" className="text-gray-700 hover:text-red-600 transition-colors">Оплата</a>
              <a href="#контакты" className="text-gray-700 hover:text-red-600 transition-colors">Контакты</a>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="главная" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Надежное хранение ваших вещей
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Современный склад с индивидуальными ячейками. Безопасность, удобство и доступность 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Забронировать ячейку
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-gray-900">Безопасность</CardTitle>
                <CardDescription>Система видеонаблюдения и контроля доступа</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-gray-900">24/7 Доступ</CardTitle>
                <CardDescription>Круглосуточный доступ к вашим вещам</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Thermometer" className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-gray-900">Климат-контроль</CardTitle>
                <CardDescription>Оптимальная температура и влажность</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <BookingForm />

      {/* Cell Sizes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Размеры ячеек
          </h2>
          
          <div className="flex justify-center">
            <Card className="border-red-100 hover:border-red-300 transition-colors max-w-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package2" className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle>Средняя</CardTitle>
                <CardDescription>2м² • 150×150×200см</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">3,500₽</div>
                <p className="text-sm text-gray-600">в месяц</p>
                <Badge variant="secondary" className="mt-2">Коробки, чемоданы</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="оплата" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Способы оплаты
            </h2>
            <p className="text-gray-600 mb-8">
              Мы принимаем различные способы оплаты для вашего удобства
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-red-100">
                <CardHeader className="text-center">
                  <Icon name="CreditCard" className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Банковская карта</CardTitle>
                  <CardDescription>Visa, MasterCard, МИР</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-red-100">
                <CardHeader className="text-center">
                  <Icon name="Smartphone" className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Мобильные платежи</CardTitle>
                  <CardDescription>Apple Pay, Google Pay, SberPay</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-red-100">
                <CardHeader className="text-center">
                  <Icon name="Banknote" className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>Наличные</CardTitle>
                  <CardDescription>Оплата на месте</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Контакты
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Свяжитесь с нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">+7 918 115 22 05</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">topvendingtramvainaia@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Московская область, городской округ Клин, деревня Новощапово, 16, стр. 2</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Работаем круглосуточно</span>
                  </div>
                </div>
              </div>
              
              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-600">Задать вопрос</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea 
                      id="message"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="Archive" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ТопСклад</span>
              </div>
              <p className="text-gray-400">
                Надежное хранение ваших вещей с 2020 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Аренда ячеек</li>
                <li>Климат-контроль</li>
                <li>Видеонаблюдение</li>
                <li>24/7 доступ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТопСклад. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}