import React from "react";
import Link from "next/link";
import SliderPichokham from "../slider-pichokham";

const items = [
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p1.png",
        price: "5,600,000",
    },
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p2.png",
        price: "5,600,000",
    },
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p3.png",
        price: "5,600,000",
    },
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p4.png",
        price: "5,600,000",
    },
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p5.png",
        price: "5,600,000",
    },
    {
        title: "حلقه طلا سفید مدل ونوس",
        img: "p6.png",
        price: "5,600,000",
    },
];

const PichoKham = () => {
    return (
        <div className="my-20">
            <h1 className="font-bold text-head text-lg mb-5">
                پیچ و خم فلز در هنر دست
            </h1>
            <div className="flex justify-between items-center gap-10 bg-bgSoft px-5 rounded-tr-[70px] h-80">
                <div className="lg:w-1/4 lg:block hidden">
                    <div className="text-sm text-justify mb-5 text-white leading-7">
                        بستن محکم و نقش پیچ آن ماندگاری واقعی را به آن می بخشد ،
                        در حالی که تفاسیر متنوع اجازه می دهد تا احساسات منحصر به
                        فرد بیان شود. در عشق خود قفل کنید ، برای همیشه.
                    </div>
                    <Link href={"/"}>مشاهده همه محصولات</Link>
                </div>
                <div className="lg:w-3/4 w-full -mt-24" dir="ltr">
                    <SliderPichokham
                        images={items}
                        image_url="http://localhost:3000/img/"
                    />
                </div>
            </div>
        </div>
    );
};

export default PichoKham;
