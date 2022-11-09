import { useEffect, useState, useTransition } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import hobbiesList from "../hobbiesList";

const Hobbies = ({ values, changeValHandler }) => {
	const [isPending, startTransition] = useTransition();
	const [search, setSearch] = useState("");
	const [searchRes, setSearchRes] = useState(hobbiesList);

	useEffect(() => {
		startTransition(() =>
			setSearchRes(
				hobbiesList.filter((h) =>
					h.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
				)
			)
		);
	}, [search]);

	const addHobbieHandler = (ref) => {
		!values.hobbies.includes(ref) &&
			values.hobbies.length <= 7 &&
			changeValHandler("hobbies", [...values.hobbies, ref]);
	};

	const removeHobbieHandler = (ref) => {
		changeValHandler(
			"hobbies",
			values.hobbies.filter((hobbie) => hobbie !== ref)
		);
	};

	return (
		<div className="w-full p-4 border-b border-lightDark">
			{/* search box */}
			<div className="flex items-center w-full px-2 py-[0.45rem] mb-2 rounded-full bg-lightDark">
				<span className="text-textLight">
					<FaSearch />
				</span>
				<input
					type="search"
					name="search"
					placeholder="What do you for fun?"
					className="flex-grow px-2 placeholder:text-textLight placeholder:text-sm border-0 outline-0 bg-transparent"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{/* selected hobbies */}
			{!!values.hobbies.length && (
				<div className="flex flex-wrap gap-2 w-full h-auto p-2 mb-2 rounded border border-lightDark">
					{values.hobbies?.map((hobbie) => (
						<p
							key={hobbie}
							className="flex items-center justify-center gap-x-3 text-blueDark text-sm font-semibold px-3 py-2 rounded-full cursor-default bg-blueDark/40 select-none">
							<span className="cursor-default">
								{hobbiesList.find((h) => h.ref === hobbie)?.text}
							</span>
							<span
								className="cursor-pointer"
								onClick={(e) => removeHobbieHandler(hobbie)}>
								<FaTimes />
							</span>
						</p>
					))}
				</div>
			)}

			{/* hobbies lists */}
			<div className="flex-wrap gap-2 w-full h-auto max-h-60 mt-4 overflow-y-auto">
				{isPending && <p>Searching...</p>}
				<ul className="flex items-center flex-wrap gap-2">
					{searchRes?.map((hobbie) => (
						<li
							key={hobbie.ref}
							className={`text-sm font-semibold px-3 py-2 text-textLight border border-lightDark rounded-full  hover:bg-lightDark select-none ${
								values.hobbies.includes(hobbie.ref)
									? "bg-lightDark cursor-not-allowed"
									: "cursor-pointer"
							}`}
							onClick={(e) => addHobbieHandler(hobbie.ref)}>
							{hobbie.text}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Hobbies;
