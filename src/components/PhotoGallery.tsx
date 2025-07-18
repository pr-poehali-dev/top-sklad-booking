import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: "https://cdn.poehali.dev/files/9ea4b284-dffe-4b7e-a4cf-bbc0a9ecbe11.jpg",
    alt: "Склад изнутри - красные ячейки"
  },
  {
    src: "https://cdn.poehali.dev/files/ee46ecef-a28b-4b75-bf6b-8ee19c9352c3.jpg",
    alt: "Коридор склада с ячейками"
  },
  {
    src: "img/5a28e427-da5f-44f0-a22f-e810faa1094c.jpg",
    alt: "Современный склад"
  },
  {
    src: "img/2b9410d4-023e-4a71-a255-5771d6eade64.jpg",
    alt: "Ячейки крупным планом"
  },
  {
    src: "img/e269df16-adb2-4755-b321-c276f11c87ca.jpg",
    alt: "Вход в склад с системой безопасности"
  },
  {
    src: "img/4dab32af-49df-4105-a68d-50ba578ca3e1.jpg",
    alt: "Зона загрузки склада"
  },
  {
    src: "img/52484832-4f81-4fcd-b1ea-817160618ba2.jpg",
    alt: "Офис и рецепция"
  },
  {
    src: "img/c0db9d99-3adc-48ee-891d-d0463763859d.jpg",
    alt: "Ячейка с вещами клиента"
  }
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Наши склады</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {photos.map((photo, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-100 hover:border-red-300 transition-colors cursor-pointer"
                onClick={() => openModal(photo)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Icon name="X" size={20} className="text-gray-700" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedPhoto.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}