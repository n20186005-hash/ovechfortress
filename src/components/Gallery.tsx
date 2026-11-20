'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { ATTRACTION } from '@/data/attraction';

const photos = [
  { src: '/gallery/fortress-ovech%20(1).jpg' },
  { src: '/gallery/fortress-ovech%20(1).png' },
  { src: '/gallery/fortress-ovech%20(10).jpg' },
  { src: '/gallery/fortress-ovech%20(11).jpg' },
  { src: '/gallery/fortress-ovech%20(13).jpg' },
  { src: '/gallery/fortress-ovech%20(14).jpg' },
  { src: '/gallery/fortress-ovech%20(17).jpg' },
  { src: '/gallery/fortress-ovech%20(18).jpg' },
  { src: '/gallery/fortress-ovech%20(19).jpg' },
  { src: '/gallery/fortress-ovech%20(2).jpg' },
  { src: '/gallery/fortress-ovech%20(21).jpg' },
  { src: '/gallery/fortress-ovech%20(22).jpg' },
  { src: '/gallery/fortress-ovech%20(23).jpg' },
  { src: '/gallery/fortress-ovech%20(3).jpg' },
  { src: '/gallery/fortress-ovech%20(5).jpg' },
  { src: '/gallery/fortress-ovech%20(6).jpg' },
  { src: '/gallery/fortress-ovech%20(7).jpg' },
  { src: '/gallery/fortress-ovech%20(8).jpg' },
  { src: '/gallery/fortress-ovech%20(9).jpg' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const captions = t.raw('captions') as string[];
  const galleryPhotos = photos.map((photo, index) => ({
    ...photo,
    alt: captions[index] || t('photoLabel', {number: index + 1}),
  }));

  function changePhoto(offset: number) {
    setCurrentIndex((index) => (index + offset + photos.length) % photos.length);
  }

  function openPhoto(index: number) {
    setCurrentIndex(index);
    dialog.current?.showModal();
  }

  function closePhoto() {
    dialog.current?.close();
  }

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {galleryPhotos.map((photo, i) => (
                <button
                  type="button"
                  key={photo.src}
                  className={`gallery-item relative group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => openPhoto(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ aspectRatio: '4 / 3' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                      {photo.alt}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-4 items-center">
              <a
                href={ATTRACTION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={dialog}
        aria-label={t('title')}
        className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none bg-black/95 p-0 backdrop:bg-black"
        onClick={(event) => {
          if (event.target === event.currentTarget) closePhoto();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') changePhoto(-1);
          if (event.key === 'ArrowRight') changePhoto(1);
        }}
      >
        <div className="pointer-events-none flex h-full items-center justify-center">
          <button
            onClick={closePhoto}
            autoFocus
            className="pointer-events-auto absolute z-10 top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t('closePhoto')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={() => changePhoto(-1)}
            className="pointer-events-auto absolute z-10 left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t('previousPhoto')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={galleryPhotos[currentIndex].src}
            alt={galleryPhotos[currentIndex].alt}
            className="pointer-events-auto max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          <button
            onClick={() => changePhoto(1)}
            className="pointer-events-auto absolute z-10 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={t('nextPhoto')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div aria-live="polite" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      </dialog>
    </>
  );
}
