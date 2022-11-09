const Details = ({
	cityList,
	countryList,
	cituationList,
	values,
	changeValHandler,
}) => {
	const changeHandler = (e) => {
		changeValHandler([e.target.name], e.target.value);
	};

	return (
		<div className="w-full p-4 space-y-3 border-b border-lightDark">
			{/* city */}
			<div className="w-full">
				<Label htmlFor={"city"} text={"Select your city"} />
				<div className="flex-grow h-10 px-3 rounded bg-lightDark overflow-hidden focus-within:border-blueNormal">
					<select
						name="city"
						id="city"
						className="w-full h-full outline-0 border-0 bg-transparent"
						defaultValue={values.city}
						onChange={changeHandler}>
						{cityList?.map((city) => (
							<option key={city.id} className="bg-dark">
								{city.cityName}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* country */}
			<div className="w-full">
				<Label htmlFor={"country"} text={"Select your country"} />
				<div className="flex-grow h-10 px-3 rounded bg-lightDark overflow-hidden focus-within:border-blueNormal">
					<select
						name="country"
						id="country"
						className="w-full h-full outline-0 border-0 bg-transparent"
						defaultValue={values.country}
						onChange={changeHandler}>
						{countryList?.map((country) => (
							<option key={country.id} className="bg-dark">
								{country.countryName}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* cituation */}
			<div className="w-full">
				<Label htmlFor={"cituation"} text={"Love cituation"} />
				<div className="flex-grow h-10 px-3 rounded bg-lightDark overflow-hidden focus-within:border-blueNormal">
					<select
						name="loveCituation"
						id="cituation"
						className="w-full h-full outline-0 border-0 bg-transparent"
						defaultValue={values.loveCituation}
						onChange={changeHandler}>
						{cituationList?.map((cituation) => (
							<option key={cituation.id} className="bg-dark">
								{cituation.cituation}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

Details.defaultProps = {
	cityList: [
		{
			id: "default",
			cityName: "Antananarivo, Madagascar",
		},
		{
			id: 0,
			cityName: "Antananarivo",
		},
		{
			id: 1,
			cityName: "Antsiranana",
		},
		{
			id: 2,
			cityName: "Mahajanga",
		},
		{
			id: 3,
			cityName: "Toamasina",
		},
		{
			id: 4,
			cityName: "Fianarantsoa",
		},
		{
			id: 5,
			cityName: "Toliara",
		},
	],

	countryList: [
		{
			id: "default",
			countryName: "Antananarivo, Madagascar",
		},
		{
			id: 1,
			countryName: "Madagascar",
		},
		{
			id: 2,
			countryName: "United Stats US",
		},
	],

	cituationList: [
		{
			id: "default",
			cituation: "In couple",
		},
		{
			id: 1,
			cituation: "It's complicated",
		},
		{
			id: 2,
			cituation: "Married",
		},
		{
			id: 3,
			cituation: "Taken",
		},
		{
			id: 4,
			cituation: "Divorced",
		},
	],
};

export default Details;

export const Label = ({ htmlFor, text }) => {
	return (
		<label
			htmlFor={htmlFor}
			className="flex items-center space-x-1 text-[0.8125rem]">
			<span className="text-textLight">
				{text} <small className="text-red-500">*</small>
			</span>
		</label>
	);
};
