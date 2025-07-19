import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', `
❓ ВОПРОС ОТ КЛИЕНТА ❓

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message}

📍 Склад: Московская область, городской округ Клин, деревня Новощапово, 16, стр. 2
🕐 Время отправки: ${new Date().toLocaleString('ru-RU')}
      `);

      // Send to Formspree (which forwards to email and telegram)
      const response = await fetch('https://formspree.io/f/mnnznkww', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Сообщение отправлено!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Имя</Label>
        <Input 
          id="contact-name" 
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Телефон</Label>
        <Input 
          id="contact-phone" 
          type="tel" 
          placeholder="+7 xxx xxx-xx-xx"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Сообщение</Label>
        <textarea 
          id="contact-message"
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Ваш вопрос..."
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-red-600 hover:bg-red-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправляем...' : 'Отправить вопрос'}
      </Button>
    </form>
  );
};

export default ContactForm;