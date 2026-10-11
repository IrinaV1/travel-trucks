'use client';

import { Swiper, SwiperSlide } from 'swiper/react';


import css from './SwiperCamper.module.css'
import type { Swiper as SwiperType } from 'swiper';


import { FreeMode, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { CamperImage } from '@/types/camper';


type SwiperCamperProps = {
  images?: CamperImage[];
};

export default function SwiperCamper({ images = [],
 }: SwiperCamperProps) {
 const [thumbsSwiper, setThumbsSwiper] =
  useState<SwiperType | null>(null);

   if (images.length === 0) {
    return null;
  }
    const sortedImages = [...images].sort((a, b) => a.order - b.order);


    return (
       <div className={css.gallery}>
      
      <Swiper
        loop={sortedImages.length > 1}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,}}
        modules={[FreeMode, Thumbs]}
        className={css.mainSwiper}
      >
        {sortedImages.map((image, index) => (
        <SwiperSlide key={image.id}>
              <div className={css.mainImage}>
          <Image 
          src={image.original} 
           alt={`Camper photo ${index + 1}`}
                fill
                sizes="(max-width: 638px) 100vw, 638px"
                 loading={index === 0 ? "eager" : "lazy"}
                 preload={index === 0}
                className={css.image}
          />
        </div>
        </SwiperSlide>
         ))}
    
      </Swiper>


       {sortedImages.length > 1 && (
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className={css.thumbsSwiper}
      >
        {sortedImages.map((image, index) => (
        <SwiperSlide key={image.id}>
             <div className={css.thumbImage}>
          <Image 
          src={image.thumb}
          alt={`Camper thumbnail ${index + 1}`}
          fill
           sizes="(max-width: 543px) calc((100vw) / 4), 136px"
            loading={index === 0 ? "eager" : "lazy"}
                  preload={index === 0}
                  className={css.image}
                  />
                  </div>
        </SwiperSlide>
        ))}
      </Swiper>
       )}
    </div>
  );
}
