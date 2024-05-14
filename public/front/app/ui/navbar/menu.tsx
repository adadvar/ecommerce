"use client";

import { BsHouseDoor, BsShop, BsCreditCard2Back } from "react-icons/bs";
import RegularList from "../regular-list";
import MenuItem from "./menu-item";
import CategoryMenuItem from "./category-menu-item";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        console.log(previous && latest > previous);
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div
            variants={{
                visible: { display: "flex" },
                hidden: { display: "none" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full relative gap-3 items-start"
        >
            <CategoryMenuItem />
            <RegularList
                items={items}
                ItemComponent={MenuItem}
                resourceName="item"
            />
        </motion.div>
    );
};

export default Menu;
