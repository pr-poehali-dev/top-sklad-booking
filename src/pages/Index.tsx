import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import BookingForm from "@/components/BookingForm";
import PhotoGallery from "@/components/PhotoGallery";
import ContactForm from "@/components/ContactForm";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

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
              <button onClick={() => scrollToSection('главная')} className="text-gray-700 hover:text-red-600 transition-colors">Главная</button>
              <button onClick={() => scrollToSection('бронирование')} className="text-gray-700 hover:text-red-600 transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('оплата')} className="text-gray-700 hover:text-red-600 transition-colors">Оплата</button>
              <button onClick={() => scrollToSection('контакты')} className="text-gray-700 hover:text-red-600 transition-colors">Контакты</button>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100 pt-4">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('главная')} className="text-left py-2 text-gray-700 hover:text-red-600 transition-colors">Главная</button>
                <button onClick={() => scrollToSection('бронирование')} className="text-left py-2 text-gray-700 hover:text-red-600 transition-colors">Бронирование</button>
                <button onClick={() => scrollToSection('оплата')} className="text-left py-2 text-gray-700 hover:text-red-600 transition-colors">Оплата</button>
                <button onClick={() => scrollToSection('контакты')} className="text-left py-2 text-gray-700 hover:text-red-600 transition-colors">Контакты</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="главная" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Надежное хранение ваших вещей
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Современный склад с индивидуальными ячейками. Безопасность, удобство и доступность 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={() => scrollToSection('бронирование')}>
                Забронировать ячейку
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50" onClick={() => scrollToSection('контакты')}>
                Узнать больше
              </Button>
            </div>
          </div>
          
          <PhotoGallery />
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

      {/* Cell Sizes / Tariffs */}
      <section id="тарифы" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Тарифы
          </h2>
          
          <div className="flex justify-center">
            <Card className="border-red-100 hover:border-red-300 transition-colors max-w-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package2" className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle>Средняя</CardTitle>
                <CardDescription>1м³ • 100×100×100см</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">990₽</div>
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

      {/* Security */}
      <section id="безопасность" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Безопасность
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Видеонаблюдение</h3>
              <p className="text-gray-600">Круглосуточное видеонаблюдение во всех зонах склада</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Замки</h3>
              <p className="text-gray-600">Надежные замки на каждой ячейке</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Контроль доступа</h3>
              <p className="text-gray-600">Доступ только по личному коду клиента</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="как-работает" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Как это работает
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Выберите срок бронирования</h3>
              <p className="text-gray-600 text-sm">Определите подходящий период аренды ячейки</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Оформите бронирование</h3>
              <p className="text-gray-600 text-sm">Заполните форму и произведите оплату</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Задайте свой код доступа к ячейке</h3>
              <p className="text-gray-600 text-sm">Получите персональный код для входа в ячейку</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Пользуйтесь</h3>
              <p className="text-gray-600 text-sm">Круглосуточный доступ к вашим вещам</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="о-нас" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              О нас
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ТопСклад — современный складской комплекс, работающий с 2022 года. 
              Мы предоставляем надежные и безопасные услуги хранения для частных лиц.
            </p>
            <p className="text-gray-600 mb-8">
              Наш склад оборудован системами видеонаблюдения, контроля доступа и обеспечивает 
              круглосуточную доступность к вашим вещам. Мы гордимся высоким уровнем сервиса 
              и индивидуальным подходом к каждому клиенту.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">2022</div>
                <p className="text-gray-600">год основания</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-600">доступ к ячейкам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="отзывы" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Отзывы клиентов
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-red-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличный сервис! Удобно расположен, всегда чисто, доступ действительно круглосуточный. 
                  Храню сезонные вещи уже второй год."
                </p>
                <div className="font-semibold text-gray-900">— Анна К.</div>
              </CardContent>
            </Card>
            
            <Card className="border-red-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Надежно и безопасно. Очень удобно, что можно приехать в любое время. 
                  Персонал всегда поможет и подскажет."
                </p>
                <div className="font-semibold text-gray-900">— Михаил Р.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Address */}
      <section id="адрес" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Как нас найти
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-100">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Адрес склада</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="w-5 h-5 text-red-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Московская область</p>
                          <p className="text-gray-600">городской округ Клин, деревня Новощапово, 16, стр. 2</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Доступ: 24/7</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Car" className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Бесплатная парковка</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Как добраться</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• На автомобиле: по Ленинградскому шоссе до поворота на Клин</p>
                      <p>• На общественном транспорте: электричка до станции Клин, далее автобус</p>
                      <p>• Координаты для навигатора: укажем при бронировании</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help */}
      <section id="помощь" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Часто задаваемые вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-red-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Какие вещи можно хранить?</h3>
                <p className="text-gray-600">Любые бытовые предметы: мебель, одежда, документы, спортивный инвентарь. 
                Запрещены: продукты питания, взрывчатые и ядовитые вещества.</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Как происходит оплата?</h3>
                <p className="text-gray-600">Оплата производится при бронировании банковской картой. 
                Возможна оплата за несколько месяцев вперед со скидкой.</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Можно ли продлить аренду?</h3>
                <p className="text-gray-600">Да, аренду можно продлить в любой момент через личный кабинет 
                или связавшись с нашей службой поддержки.</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Что если я потеряю код доступа?</h3>
                <p className="text-gray-600">Обратитесь в службу поддержки по телефону +7 918 115 22 05. 
                После проверки личности мы восстановим доступ к ячейке.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-16 bg-gray-50">
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
                <CardContent>
                  <ContactForm />
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
                Надежное хранение ваших вещей с 2022 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('бронирование')} className="hover:text-white transition-colors">Аренда ячеек</button></li>
                <li><button onClick={() => scrollToSection('безопасность')} className="hover:text-white transition-colors">Безопасность</button></li>
                <li><button onClick={() => scrollToSection('как-работает')} className="hover:text-white transition-colors">Как это работает</button></li>
                <li><button onClick={() => scrollToSection('тарифы')} className="hover:text-white transition-colors">Тарифы</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('о-нас')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('отзывы')} className="hover:text-white transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('адрес')} className="hover:text-white transition-colors">Адрес</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('помощь')} className="hover:text-white transition-colors">Помощь</button></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><button onClick={() => scrollToSection('контакты')} className="hover:text-white transition-colors">Контакты</button></li>
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