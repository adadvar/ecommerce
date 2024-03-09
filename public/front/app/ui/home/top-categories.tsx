import React from "react";
import RegularList from "../regular-list";
import Image from "next/image";
import Link from "next/link";

const items = [
    "clock_cat.webp",
    "anklet_cat.webp",
    "bracelet_cat.webp",
    "gift_cat.webp",
    "service_cat.webp",
    "necklaces_cat.webp",
    "ring_cat.webp",
    "earrings_cat.webp",
];
const TopCategories = () => {
    return (
        <div className="my-10">
            <h1 className="font-bold">دسته های برتر</h1>
            <div className="flex items-center justify-between gap-2">
                {items.map((item, index) => (
                    <Link href={"/"} className="" key={index}>
                        <Image
                            src={`http://localhost:3000/img/${item}`}
                            alt=""
                            width={166}
                            height={166}
                            unoptimized={true}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
