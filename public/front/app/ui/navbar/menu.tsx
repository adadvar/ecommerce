import React from "react";
import { BsList, BsHouseDoor, BsShop, BsCreditCard2Back } from "react-icons/bs";
import RegularList from "../regular-list";
import MenuItem from "./menu-item";
import CategoryMenuItem from "./category-menu-item";
const size = 20;
const items = [
    {
        title: "صفحه اصلی",
        path: "/",
        icon: <BsHouseDoor size={size} />,
    },
    {
        title: "فروشگاه",
        path: "/shop",
        icon: <BsShop size={size} />,
    },
    {
        title: "پرداخت",
        path: "/checkout",
        icon: <BsCreditCard2Back size={size} />,
    },
];

const Menu = () => {
    return (
        <div className="w-full relative flex gap-3 items-start">
            <CategoryMenuItem />
            <RegularList
                items={items}
                ItemComponent={MenuItem}
                resourceName="item"
            />
        </div>
    );
};

export default Menu;
