"use client";
import React from "react";
import { BiMap } from "react-icons/bi";
import Search from "../search";

const CityModal = () => {
	return (
		<>
			<button
				className="flex items-center border p-1 rounded-xl hover:shadow-md gap-2 h-12 font-bold text-xs"
				onClick={() => {
					// @ts-ignore
					document.getElementById("city_modal").showModal();
				}}
			>
				<BiMap className="" size={20} />
				<div className="flex flex-col">
					<span>انتخاب مکان</span>
					<span className="text-blue-700">فیلتر شهر</span>
				</div>
			</button>
			<dialog id="city_modal" className="modal">
				<div className="modal-box bg-bg">
					<div className="flex justify-between px-4 py-2 border-b">
						<p className="text-lg font-bold text-title">فیلتر براساس شهر محصول</p>
						<button className="btn btn-sm bg-transparent hover:bg-rose-50 text-red-600 border-none">
							حذف همه
						</button>
					</div>
					<div className="flex flex-col items-center justify-center p-4">
						<div className="w-full h-5">
							<Search placeholder="جستجو در شهرها" />
						</div>
						<div className="flex w-full justify-between mt-16">
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
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default CityModal;
