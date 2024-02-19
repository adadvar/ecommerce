import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {
	title: string;
	icon: string | null;
	path: string;
};

const MenuItem = ({ item }: { item: Props }) => {
	const pathname = usePathname();
	return (
		<Link
			href={item.path}
			className={`flex items-center text-sm px-3 py-2 font-bold text-title gap-3 my-1 rounded-xl hover:bg-stone-200 lg:w-auto w-full`}
		>
			{item.icon}
			{item.title}
		</Link>
	);
};

export default MenuItem;
