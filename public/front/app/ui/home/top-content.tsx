import React from "react";
import Slider from "../slider";
import Image from "next/image";
import SliderTopContent from "../slider-top-content";
const images = ["slider1.webp", "slider2.webp"];

const TopContent = () => {
    return (
        <div className="flex justify-between items-center gap-10 px-3">
            <div className="w-[70%] h-full">
                <SliderTopContent
                    images={images}
                    image_url="http://localhost:3000/img/"
                />
            </div>
            <div className="w-[30%] h-full">
                <Image
                    src={"http://localhost:3000/img/subslider.webp"}
                    alt=""
                    className="w-full h-full"
                    width={500}
                    height={500}
                    unoptimized={true}
                />
            </div>
        </div>
    );
};

export default TopContent;
