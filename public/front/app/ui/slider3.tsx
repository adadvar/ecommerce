"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SliderProps {
    images: any;
    image_url: string;
}

const Slider3 = ({ images, image_url }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    if (!images) return null;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="flex items-center">
                <button className="text-3xl" onClick={prevSlide}>{`<`}</button>
                <div className="flex-1 overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${currentSlide * 50}%)`,
                            transition: "transform 0.5s ease",
                            width: `${images.length * 50}%`,
                        }}
                    >
                        {images.map((image: any, index: any) => (
                            <div key={index} className="w-1/2">
                                <div className="h-64 bg-gray-200 m-2 flex items-center justify-center">
                                    <Image
                                        src={image_url + image.img}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full"
                                        width={500}
                                        height={350}
                                        unoptimized={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="text-3xl" onClick={nextSlide}>{`>`}</button>
            </div>
            <div className="text-center mt-4">
                {images.map((image: any, index: any) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`inline-block w-3 h-3 rounded-full mx-1 ${
                            currentSlide === index
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider3;
