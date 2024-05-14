"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
    images: string[];
    image_url: string;
}

const SliderTopContent = ({ images, image_url }: SliderProps) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        >
            {images.map((image: any, index: any) => (
                <SwiperSlide key={index}>
                    <div className="">
                        <Image
                            src={image_url + image}
                            alt={`Slide ${index}`}
                            className="w-full h-full "
                            width={500}
                            height={350}
                            unoptimized={true}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderTopContent;
