import React from "react";
import RegularList from "../regular-list";
import Link from "next/link";

const Valentine = () => {
    return (
        <div className="my-20">
            <div className="flex justify-between items-center gap-10 bg-bgSoft px-5 rounded-tr-[70px] h-80">
                <div className="lg:w-1/4 lg:block hidden">
                    <div className="text-sm text-justify mb-5 text-white leading-7">
                        بستن محکم و نقش پیچ آن ماندگاری واقعی را به آن می بخشد ،
                        در حالی که تفاسیر متنوع اجازه می دهد تا احساسات منحصر به
                        فرد بیان شود. در عشق خود قفل کنید ، برای همیشه.
                    </div>
                    <Link href={"/"}>مشاهده همه محصولات</Link>
                </div>
                <div className="lg:w-3/4 w-full -mt-24" dir="ltr"></div>
            </div>
        </div>
    );
};

export default Valentine;
