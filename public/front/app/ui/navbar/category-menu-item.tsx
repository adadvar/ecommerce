"use client";
import React from "react";
import RegularList from "../regular-list";
import HR from "../HR";
import SubMegaItem from "./sub-mega-item";
import MegaItem from "./mega-item";
import { BsList } from "react-icons/bs";
import { useTmp } from "@/app/store/global-store";
const item = {
    title: "دسته بندی محصولات",
    path: "",
    icon: <BsList size={20} />,
};

const itms = [
    {
        title: "گردنبند و آویز",
        list: [
            {
                title: "مدال و پلاک",
                path: "/admin/dashboard",
            },
            {
                title: "گردنبند رولباسی",
                path: "/admin/dashboard/users",
            },
            {
                title: "طوق  و چوکر",
                path: "/admin/dashboard/adverts",
            },
            {
                title: "گردنبند با زنجیر",
                path: "/admin/dashboard/categories",
            },
        ],
    },
    {
        title: "انگشتر",
        list: [
            {
                title: "انگشتر زنانه",
                path: "/admin/dashboard/",
            },
            {
                title: "انگشتر طلای مردانه",
                path: "/admin/dashboard/",
            },
            {
                title: "حلقه ازدواج",
                path: "/admin/dashboard/",
            },
        ],
    },
    {
        title: "ست و نیم ست",
        list: [
            {
                title: "سرویس کامل",
                path: "/admin/dashboard/",
            },
            {
                title: "نیم ست",
                path: "/admin/dashboard/",
            },
        ],
    },
];
const CategoryMenuItem = () => {
    const { hoveredMenu, hoveredMegaMenu, setHoveredMenu } = useTmp();
    const isHovered = hoveredMenu == item.title;

    const subMegaMenu = hoveredMegaMenu
        ? itms.filter((h) => h.title == hoveredMegaMenu)[0].list
        : [];
    return (
        <>
            <div
                className={`flex items-center cursor-pointer text-sm px-3 py-2 font-bold text-title gap-3 my-1 rounded-xl hover:bg-stone-200 lg:w-auto w-full ${
                    isHovered ? "bg-stone-200" : ""
                }`}
                onMouseEnter={() => setHoveredMenu(item.title)}
                onClick={() => setHoveredMenu("")}
            >
                {item.icon}
                {item.title}
            </div>
            {hoveredMenu === "دسته بندی محصولات" && (
                <div className="fixed  inset-0 top-32 bg-opacity-5 bg-black ">
                    <div
                        className="fixed shadow-lg bg-bg border rounded-lg gap-4 flex p-4 inset-x-10 top-36 bottom-10"
                        onMouseLeave={() => setHoveredMenu("")}
                    >
                        <div className="flex flex-col w-1/4">
                            <RegularList
                                items={itms}
                                resourceName="item"
                                ItemComponent={MegaItem}
                            />
                        </div>
                        <HR />
                        <div className="flex flex-col gap-3 w-3/4">
                            <RegularList
                                items={subMegaMenu}
                                resourceName="item"
                                ItemComponent={SubMegaItem}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryMenuItem;
