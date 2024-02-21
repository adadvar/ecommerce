import { useTmp } from "@/app/store/global-store";
import React from "react";
type Props = {
    title: string;
    path: string;
};
const MegaItem = ({ item }: { item: Props }) => {
    const { hoveredMegaMenu, setHoveredMegaMenu } = useTmp();

    return (
        <div
            className={`border-s-2 ps-2 p-4 text-sm font-bold cursor-pointer ${
                hoveredMegaMenu === item.title
                    ? "bg-rose-200 text-red-600 border-red-600"
                    : "text-title "
            }`}
            onMouseEnter={() => setHoveredMegaMenu(item.title)}
        >
            {item.title}
        </div>
    );
};

export default MegaItem;
