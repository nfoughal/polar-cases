"use client";

import { useEffect, useRef, useState } from 'react';

const PHONES = [
  '/cases/1.jpg',
  '/cases/2.webp',
  '/cases/3.webp',
  '/cases/4.webp',
  '/cases/5.webp',
  '/cases/6.jpg',
];

function SimpleReviewColumn({ images }: { images: string[] }) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const msPerPixel = 10;
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className="animate-marquee space-y-8 py-4"
      style={{ '--marquee-duration': duration } as React.CSSProperties}>
      {images.concat(images).map((imgSrc, index) => (
        <div key={index} className="rounded bg-white p-0 shadow-xl ">
          <img src={imgSrc} alt={`Review ${index + 1}`} className="rounded h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function SimpleReviews() {
  const column1 = PHONES.slice(0, 2); // First 2 images
  const column2 = PHONES.slice(2, 4); // Next 2 images
  const column3 = PHONES.slice(4, 6); // Last 2 images

  return (
    <div className="relative w-full mx-auto mt-16 overflow-hidden px-4 md:px-12 lg:px-28 bg-slate-50 h-[450px] lg:h-[650px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SimpleReviewColumn images={column1} />
        <SimpleReviewColumn images={column2} />
        <SimpleReviewColumn images={column3} />
      </div>
      <img 
          src="what-people-are-buying.png"
          className="absolute hidden lg:block left-0 top-1/4 w-20 h-20 lg:w-28 lg:h-28"
      />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-16 lg:h-32 bg-gradient-to-b from-slate-50' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 lg:h-32 bg-gradient-to-t from-slate-50' />
    </div>
  );
}
