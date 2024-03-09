import TopContent from "./ui/home/top-content";
import TopCategories from "./ui/home/top-categories";
import PichoKham from "./ui/home/picho-o-kham";

export default function Home() {
    return (
        <div className="py-5 px-4">
            <TopContent />
            <TopCategories />
            <PichoKham />
        </div>
    );
}
