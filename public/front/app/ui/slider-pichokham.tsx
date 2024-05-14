"use client";
import React from "react";
import Image from "next/image";
import { MdStar, MdOutlineShoppingCart } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
    images: {
        title: string;
        img: string;
        price: string;
    }[];
    image_url: string;
}

const SliderPichokham = ({ images, image_url }: SliderProps) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                570: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }}
        >
            {images.map((image: any, index: any) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col gap-5 bg-bg w-full h-full p-5 rounded-lg mb-8">
                        <Image
                            src={image_url + image.img}
                            alt={`Slide ${index}`}
                            className="w-full h-full "
                            width={500}
                            height={350}
                            unoptimized={true}
                        />
                        <div className="">
                            <p className="font-bold text-sm text-end">
                                {image.title}
                            </p>
                            <div className="font-bold flex gap-2 text-xs">
                                <span>تومان</span>
                                <span>{image.price}</span>
                            </div>
                        </div>
                        <div className="border border-y border-x-0 py-2 flex items-center justify-between">
                            <span className="flex">
                                <MdStar
                                    size={20}
                                    className="text-yellow-500 cursor-pointer"
                                />
                                <span className="text-sm">0(0)</span>
                            </span>
                            <BsHeart className="cursor-pointer" />
                            <MdOutlineShoppingCart className="cursor-pointer" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderPichokham;
