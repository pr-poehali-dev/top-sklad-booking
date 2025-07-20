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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Archive" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">ТопСклад</span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Политика конфиденциальности
            </h1>
            
            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Общие положения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Настоящая политика обработки персональных данных составлена в соответствии с требованиями 
                  Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок 
                  обработки персональных данных и меры по обеспечению безопасности персональных данных 
                  ИП Топольников Вадим Алексеевич (далее – Оператор).
                </p>
                <p className="text-gray-700">
                  Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение 
                  прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты 
                  прав на неприкосновенность частной жизни, личную и семейную тайну.
                </p>
                <p className="text-gray-700">
                  Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) 
                  применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта 
                  складских услуг ТопСклад.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Основные понятия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Автоматизированная обработка персональных данных</h4>
                    <p className="text-gray-700">обработка персональных данных с помощью средств вычислительной техники;</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Блокирование персональных данных</h4>
                    <p className="text-gray-700">временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Персональные данные</h4>
                    <p className="text-gray-700">любая информация, относящаяся прямо или косвенно к определенному или определяемому пользователю веб-сайта ТопСклад;</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Обработка персональных данных</h4>
                    <p className="text-gray-700">любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными;</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Сбор и обработка персональных данных</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Оператор собирает и обрабатывает следующие персональные данные пользователей:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Имя и фамилия</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Данные о периоде аренды складских ячеек</li>
                  <li>Данные об оплате услуг</li>
                </ul>
                <p className="text-gray-700">
                  Персональные данные обрабатываются в следующих целях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Предоставление услуг аренды складских ячеек</li>
                  <li>Связь с клиентами для уточнения деталей заказа</li>
                  <li>Обработка платежей и ведение финансовой отчетности</li>
                  <li>Информирование об изменениях в работе склада</li>
                  <li>Обеспечение безопасности и контроля доступа</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Права субъекта персональных данных</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Субъект персональных данных имеет право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>получать информацию, касающуюся обработки его персональных данных</li>
                  <li>требовать уточнения его персональных данных, их блокирования или уничтожения</li>
                  <li>отзывать согласие на обработку персональных данных</li>
                  <li>обжаловать действия или бездействие Оператора</li>
                  <li>на защиту своих прав и законных интересов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Безопасность персональных данных</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Оператор принимает необходимые правовые, организационные и технические меры для защиты 
                  персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, 
                  блокирования, копирования, предоставления, распространения персональных данных, а также 
                  от иных неправомерных действий в отношении персональных данных.
                </p>
                <p className="text-gray-700">
                  Обработка персональных данных может осуществляться только в случае наличия согласия в 
                  письменной форме субъекта персональных данных на обработку его персональных данных и/или 
                  исполнения договора, стороной которого является субъект персональных данных.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100 mb-8">
              <CardHeader>
                <CardTitle className="text-red-600">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки 
                  его персональных данных, обратившись к Оператору по следующим контактам:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">topvendingtramvainaia@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">+7 918 115 22 05</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="w-5 h-5 text-red-600 mt-1" />
                    <span className="text-gray-700">
                      Московская область, городской округ Клин, деревня Новощапово, 16, стр. 2
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-red-600">Заключительные положения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. 
                  Политика действует бессрочно до замены ее новой версией.
                </p>
                <p className="text-gray-700">
                  Актуальная версия Политики в свободном доступе расположена на данной странице.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Реквизиты оператора:</h4>
                  <p className="text-gray-700">ИП Топольников Вадим Алексеевич</p>
                  <p className="text-gray-700">ОГРНИП 309230830900063</p>
                  <p className="text-gray-700">ИНН 230811433627</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}