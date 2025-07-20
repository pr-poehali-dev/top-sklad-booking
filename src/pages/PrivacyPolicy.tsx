import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Archive" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">ТопСклад</span>
            </a>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Политика конфиденциальности
              </h1>
              <p className="text-gray-600">
                Услуги аренды складских ячеек ТопСклад
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Последнее обновление: 20 июля 2024 года
              </p>
            </div>
            
            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Icon name="Shield" className="w-5 h-5 mr-2" />
                  О нашей политике
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  ТопСклад серьезно относится к защите ваших персональных данных. Эта политика объясняет, 
                  как мы собираем, используем и защищаем вашу информацию при предоставлении услуг аренды 
                  складских ячеек.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Настоящая политика разработана в соответствии с Федеральным законом РФ №152-ФЗ 
                  «О персональных данных» и применяется ко всем услугам ТопСклад.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-medium">
                    💡 Используя наши услуги, вы соглашаетесь с условиями данной политики конфиденциальности.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Icon name="Database" className="w-5 h-5 mr-2" />
                  Какие данные мы собираем
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Для предоставления наших услуг мы собираем следующую информацию:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">📋 Контактная информация</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Имя и фамилия</li>
                      <li>• Номер телефона</li>
                      <li>• Адрес электронной почты</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Данные об аренде</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Период аренды складской ячейки</li>
                      <li>• Дата начала и окончания аренды</li>
                      <li>• Номер ячейки и её характеристики</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">💳 Платежная информация</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Данные о произведенных платежах</li>
                      <li>• История транзакций</li>
                      <li>• Способ оплаты (без данных карты)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-800">
                    ⚠️ Мы НЕ храним данные банковских карт. Все платежи обрабатываются через защищенные платежные системы.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    По вопросам обработки персональных данных обращайтесь:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">+7 918 115 22 05</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">topvendingtramvainaia@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Ответим в течение 24 часов</span>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Индивидуальный предприниматель</h4>
                      <p className="text-gray-700 text-sm">Топольников Вадим Алексеевич</p>
                      <p className="text-gray-700 text-sm">ОГРНИП: 309230830900063</p>
                      <p className="text-gray-700 text-sm">ИНН: 230811433627</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Icon name="CheckCircle" className="w-12 h-12 text-green-600 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ваши данные под надежной защитой
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Мы используем современные технологии для защиты ваших персональных данных и 
                    строго соблюдаем требования российского законодательства о персональных данных.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => window.location.href = '/'}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Вернуться на главную
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}