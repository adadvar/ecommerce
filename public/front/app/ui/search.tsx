"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((e: any) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", "1");
		if (e.target.value) {
			e.target.value.length > 2 && params.set("q", e.target.value);
		} else {
			params.delete("q");
		}

		replace(`${pathname}?${params}`);
	}, 300);
	return (
		<div className="flex flex-1 items-center gap-3 rounded-xl border w-full h-12">
			<MdSearch size={30} className="mx-3" />
			<input
				type="text"
				placeholder={placeholder}
				className="bg-transparent border-none outline-none text-text w-full"
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;
