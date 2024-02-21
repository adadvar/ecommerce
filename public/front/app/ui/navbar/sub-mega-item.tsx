import React from "react";
type Props = {
    title: string;
    path: string;
};
const SubMegaItem = ({ item }: { item: Props }) => {
    return (
        <div className="border-s-4 border-red-600 ps-2 text-title text-sm font-bold cursor-pointer">
            {item.title}
        </div>
    );
};

export default SubMegaItem;
