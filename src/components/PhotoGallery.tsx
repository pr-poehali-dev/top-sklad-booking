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
    src: "img/45ff3572-76be-41e0-88cd-ccb9a06819f5.jpg",
    alt: "Ряды красных ячеек"
  },
  {
    src: "img/4bbbd0b6-9c1b-438c-988b-fae0b39078be.jpg",
    alt: "Красные ячейки с замками"
  },
  {
    src: "img/edc74a8c-be99-4a09-8006-32f7f629172d.jpg",
    alt: "Длинный коридор с красными ячейками"
  },
  {
    src: "img/12e8343f-3f1a-42a1-a17d-62c4de810d77.jpg",
    alt: "Многоуровневые красные ячейки"
  },
  {
    src: "img/f753b642-0633-4f31-8daa-30a98cc29c92.jpg",
    alt: "Открытая красная ячейка с вещами"
  },
  {
    src: "img/897abacb-e638-4382-ad95-9eb3bcfbf984.jpg",
    alt: "Общий вид склада с красными ячейками"
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