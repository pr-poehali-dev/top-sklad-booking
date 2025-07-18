import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  period: string;
  isNewUser: boolean;
  password?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    period: '',
    isNewUser: true,
    password: ''
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = (months: number) => {
    return 3500 * months;
  };

  const handlePeriodChange = (value: string) => {
    setFormData({ ...formData, period: value });
    setTotalPrice(calculatePrice(parseInt(value)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.period) {
      toast.error('Заполните все поля');
      return;
    }

    try {
      // Simulate SMS sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // SMS to admin
      console.log(`SMS to +7 918 115 22 05: Новое бронирование от ${formData.name} (${formData.phone}) на ${formData.period} мес.`);
      
      // SMS to user (if new registration)
      if (formData.isNewUser) {
        console.log(`SMS to ${formData.phone}: Добро пожаловать! Ваш аккаунт создан. Бронирование ячейки на ${formData.period} мес.`);
      }
      
      toast.success('Бронирование оформлено! SMS-уведомления отправлены.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        period: '',
        isNewUser: true,
        password: ''
      });
      setTotalPrice(0);
    } catch (error) {
      toast.error('Ошибка при оформлении бронирования');
    }
  };

  return (
    <section id="бронирование" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Бронирование ячейки
          </h2>
          
          <Card className="border-red-100">
            <CardHeader>
              <CardTitle className="text-red-600">Бронирование ячейки</CardTitle>
              <CardDescription>Ячейка среднего размера (2м²) - 3,500₽ в месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="new" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="new" onClick={() => setFormData({...formData, isNewUser: true})}>
                    Новый пользователь
                  </TabsTrigger>
                  <TabsTrigger value="existing" onClick={() => setFormData({...formData, isNewUser: false})}>
                    Есть аккаунт
                  </TabsTrigger>
                </TabsList>
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="period">Срок аренды</Label>
                    <Select value={formData.period} onValueChange={handlePeriodChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срок" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 месяц</SelectItem>
                        <SelectItem value="3">3 месяца</SelectItem>
                        <SelectItem value="6">6 месяцев</SelectItem>
                        <SelectItem value="12">1 год</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <TabsContent value="new" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Ваше имя"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        placeholder="Придумайте пароль"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="existing" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-login">Email</Label>
                      <Input
                        id="email-login"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password-login">Пароль</Label>
                      <Input
                        id="password-login"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        placeholder="Ваш пароль"
                      />
                    </div>
                  </TabsContent>
                  
                  {totalPrice > 0 && (
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Общая стоимость:</span>
                        <span className="text-2xl font-bold text-red-600">{totalPrice.toLocaleString()}₽</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        За {formData.period} {parseInt(formData.period) === 1 ? 'месяц' : 'месяцев'}
                      </p>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    {formData.isNewUser ? 'Создать аккаунт и забронировать' : 'Забронировать ячейку'}
                  </Button>
                </form>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}