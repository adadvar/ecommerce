"use client";

import { useTmp } from "@/app/store/global-store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RegularList from "../regular-list";
import HR from "../HR";
import MegaItem from "./mega-item";
import SubMegaItem from "./sub-mega-item";
type Props = {
    title: string;
    icon: string | null;
    path: string;
};

const MenuItem = ({ item }: { item: Props }) => {
    const pathname = usePathname();
    const { hoveredMenu, hoveredMegaMenu, setHoveredMenu, setHoveredMegaMenu } =
        useTmp();
    const isHovered = hoveredMenu == item.title;

    return (
        <>
            <Link
                href={item.path}
                className={`flex items-center cursor-pointer text-sm px-3 py-2 font-bold text-title gap-3 my-1 rounded-xl hover:bg-stone-200 lg:w-auto w-full ${
                    isHovered ? "bg-stone-200" : ""
                }`}
                onMouseEnter={() => setHoveredMenu(item.title)}
            >
                {item.icon}
                {item.title}
            </Link>
        </>
    );
};

export default MenuItem;

const CategoryItem = () => {};
