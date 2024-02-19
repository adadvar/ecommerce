import { MdFormatAlignRight } from "react-icons/md";
import MenuDrawer from "../navbar/menu-drawer";
const HomeDrawer = () => {
	return (
		<div className="drawer drawer-start w-auto">
			<input id="home_drawer" type="checkbox" className="drawer-toggle " />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					htmlFor="home_drawer"
					className="drawer-button btn bg-transparent border-none hover:bg-transparent text-sub_title"
				>
					<MdFormatAlignRight size={25} />
					<span>منو</span>
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="home_drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					<MenuDrawer />
				</div>
			</div>
		</div>
	);
};

export default HomeDrawer;
