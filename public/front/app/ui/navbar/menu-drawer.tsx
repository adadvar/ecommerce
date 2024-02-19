"use client";

import React from "react";
import { BsList, BsHouseDoor, BsShop, BsCreditCard2Back } from "react-icons/bs";
import RegularList from "../regular-list";
import MenuItem from "./menu-item";
const size = 20;
const items = [
	{
		title: "دسته بندی محصولات",
		path: "",
		icon: <BsList size={size} />,
	},
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

const MenuDrawer = () => {
	return (
		<div className="w-full lg:hidden flex flex-col gap-3 items-start">
			<RegularList items={items} ItemComponent={MenuItem} resourceName="item" />
		</div>
	);
};

export default MenuDrawer;
