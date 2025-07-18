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
    src: "img/c16757fd-e6e8-4fcb-8e84-aaf42af94d80.jpg",
    alt: "Красные металлические ячейки с роллетными дверями"
  },
  {
    src: "img/bb8b9bb9-05b2-4085-bd32-057f5eca3555.jpg",
    alt: "Коридор с красными ячейками по обеим сторонам"
  },
  {
    src: "img/0b15fb74-053a-4827-915d-41590defb909.jpg",
    alt: "Открытые ячейки с вещами клиентов"
  },
  {
    src: "img/9c1547ed-2fbb-4f2d-a2da-6a4955db6afe.jpg",
    alt: "Общий вид склада с рядами красных ячеек"
  },
  {
    src: "img/15ae57bf-7297-4fd2-8968-04f74f51f849.jpg",
    alt: "Крупный план нумерованных ячеек"
  },
  {
    src: "img/23b03d34-e1c9-420d-bdce-72e478955dc9.jpg",
    alt: "Многоуровневые ячейки в коридоре склада"
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