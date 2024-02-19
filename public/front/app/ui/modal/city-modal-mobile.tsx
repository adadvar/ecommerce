"use client";
import React from "react";
import { BiMap } from "react-icons/bi";
import Search from "../search";
import { MdChevronLeft } from "react-icons/md";

const CityModalMobile = () => {
	return (
		<>
			<button
				className="flex justify-between items-center rounded-xl gap-2 h-7 text-sm"
				onClick={() => {
					// @ts-ignore
					document.getElementById("city_modalـmobile").showModal();
				}}
			>
				<div className="flex">
					<BiMap className="text-rose-600 me-3" size={20} />
					<span className="text-sub_title">
						مکان را جهت فیلتر محصولات انتخاب کنید
					</span>
				</div>
				<MdChevronLeft size={25} />
			</button>
			<hr />
			<dialog id="city_modalـmobile" className="modal">
				<div className="modal-box flex flex-col bg-bg h-full">
					<div className="flex justify-between px-4 py-2 border-b">
						<p className="text-lg font-bold text-title">فیلتر براساس شهر محصول</p>
						<button className="btn btn-sm bg-transparent hover:bg-rose-50 text-red-600 border-none">
							حذف همه
						</button>
					</div>
					<div className="w-full mt-5">
						<Search placeholder="جستجو در شهرها" />
					</div>
					<div className="flex w-full justify-between mt-auto">
						<form method="dialog" className="w-[48%]">
							<button className="btn w-full bg-transparent hover:bg-transparent hover:text-title">
								انصراف
							</button>
						</form>
						<button className="btn w-[48%] text-white bg-bgSoft border-none hover:bg-bgSoft">
							تایید
						</button>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default CityModalMobile;
