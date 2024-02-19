import { MdOutlineShoppingCart, MdOutlinePerson } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import RegisterLoginModal from "../modal/register-login-modal";
import Link from "next/link";
import CityModal from "../modal/city-modal";
import Search from "../search";
import Image from "next/image";
import Menu from "./menu";
import CityModalMobile from "../modal/city-modal-mobile";
import HomeDrawer from "../drawer/home-drawer";

const Navbar = () => {
	return (
		<div className="lg:h-32 lg:shadow-md text-sub_title px-4">
			<div className="lg:flex hidden justify-between lg:gap-16 gap-10 py-4">
				<Right />
				<Left />
			</div>
			<div className="lg:hidden flex flex-col gap-2 p-4">
				<Top />
				<Center />
				<hr />
				<Bottom />
			</div>
			<Menu />
		</div>
	);
};

export default Navbar;

const Right = () => {
	return (
		<div className="flex relative items-center w-3/4 gap-8">
			<Link href={"/"}>
				<Image src={"/img/logo.png"} width={135} height={0} alt="" />
			</Link>
			<Search placeholder="جستجو در هزاران محصول ..." />
			<CityModal />
		</div>
	);
};

const Left = () => {
	return (
		<div className="flex w-1/4 justify-end items-center">
			<Link href={"/about"}>
				<BsQuestionCircle size={25} />
			</Link>
			<i className="flex  bg-gray-300 h-7  w-[1px] mx-3"></i>
			<RegisterLoginModal />
			<i className="flex bg-gray-300 h-7 w-[1px] mx-3"></i>
			<MdOutlineShoppingCart size={25} />
		</div>
	);
};

const Top = () => {
	return (
		<div className="flex w-full justify-between items-center">
			<HomeDrawer />
			<Link href={"/"}>
				<Image src={"/img/logo.png"} width={135} height={0} alt="" />
			</Link>
			<Link href={"/about"}>
				<BsQuestionCircle size={25} />
			</Link>
		</div>
	);
};

const Center = () => {
	return (
		<div className="flex w-full justify-between items-center">
			<div className="w-3/4">
				<Search placeholder="جستجو در هزاران محصول ..." />
			</div>
			<div className="flex justify-end gap-3 w-1/4">
				<MdOutlinePerson size={25} />
				<MdOutlineShoppingCart size={25} />
			</div>
		</div>
	);
};

const Bottom = () => {
	return <CityModalMobile />;
};
