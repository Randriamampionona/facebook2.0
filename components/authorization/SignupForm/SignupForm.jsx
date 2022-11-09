import { useState } from "react";
import { FaQuestionCircle, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../store/contexts/AuthContext";
import { LoadingBtn } from "../../common";
import ErrorMsg from "../Errors/ErrorMsg";
import ErrorSing from "../Errors/ErrorSing";
import MessageBox from "../MessageBox/MessageBox";

const initState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	m: "Jan",
	d: "01",
	y: "1999",
	gender: "female",

	loading: false,
	message: {
		error: null,
		success: null,
	},
};

const SignupForm = ({ toogleHandler, months, days, years }) => {
	const { signupFunc } = AuthContext();
	const [states, setStates] = useState(initState);

	const changeHandler = (e) => {
		setStates((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const resetErrorHandler = (inp) => {
		setStates((prev) => ({
			...prev,
			message: {
				...prev.message,
				error: {
					...prev.message.error,
					[inp]: null,
				},
			},
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const { m, d, y, ...rest } = states;
		const birthday = new Date(`${m} ${d} ${y}`);

		signupFunc?.({ ...rest, birthday }, setStates);
	};

	return (
		<div className="flex flex-col items-center w-full mx-4 max-w-[25rem] bg-white rounded-md shadow-formShadow divide-y divide-lightDark/30">
			{/* header form */}
			<div className="relative flex items-start justify-between w-full p-3">
				<div>
					<h1 className="text-2xl font-semibold">Sign Up</h1>
					<p className="text-sm">It&apos;s quick and easy.</p>
				</div>

				<span
					className="text-lg hover:text-red-500"
					onClick={() => toogleHandler(false)}>
					<FaTimes />
				</span>
			</div>

			{/* form and inputs */}
			<form
				className="w-full max-w-full space-y-3 p-3"
				onSubmit={submitHandler}>
				{/* message box */}
				<MessageBox msg={states.message} />

				{/* first and last name */}
				<div className="flex items-start justify-between gap-3 w-full">
					<div className="flex-grow flex flex-col">
						<div
							className={`relative w-full h-10 rounded border overflow-hidden focus-within:border-blueNormal ${
								states.message.error?.firstName
									? "border-red-500"
									: " border-lightDark/30"
							}`}>
							<input
								required
								type="text"
								name="firstName"
								placeholder="First name"
								className="w-full h-full px-3 bg-[#f5f6f8] placeholder:text-sm outline-0"
								value={states.firstName}
								onChange={changeHandler}
								onFocus={() => resetErrorHandler("firstName")}
							/>
							{states.message.error?.firstName && (
								<ErrorSing msg={states.message.error?.firstName} />
							)}
						</div>
						{states.message.error?.firstName && (
							<ErrorMsg msg={states.message.error?.firstName} />
						)}
					</div>

					<div className="flex-grow flex flex-col">
						<div
							className={`relative w-full h-10 rounded border overflow-hidden focus-within:border-blueNormal ${
								states.message.error?.lastName
									? "border-red-500"
									: " border-lightDark/30"
							}`}>
							<input
								required
								type="text"
								name="lastName"
								placeholder="Last name"
								className="w-full h-full px-3 bg-[#f5f6f8] placeholder:text-sm outline-0"
								value={states.lastName}
								onChange={changeHandler}
								onFocus={() => resetErrorHandler("lastName")}
							/>
							{states.message.error?.lastName && (
								<ErrorSing msg={states.message.error?.lastName} />
							)}
						</div>
						{states.message.error?.lastName && (
							<ErrorMsg msg={states.message.error?.lastName} />
						)}
					</div>
				</div>

				{/* email */}
				<div className="flex flex-col w-full">
					<div
						className={`relative w-full h-10 rounded border overflow-hidden focus-within:border-blueNormal ${
							states.message.error?.email
								? "border-red-500"
								: " border-lightDark/30"
						}`}>
						<input
							required
							type="email"
							name="email"
							placeholder="Email address"
							className="w-full h-full px-3 bg-[#f5f6f8] placeholder:text-sm outline-0"
							value={states.email}
							onChange={changeHandler}
							onFocus={() => resetErrorHandler("email")}
						/>
						{states.message.error?.email && (
							<ErrorSing msg={states.message.error?.email} />
						)}
					</div>
					{states.message.error?.email && (
						<ErrorMsg msg={states.message.error?.email} />
					)}
				</div>

				{/* password */}
				<div className="flex flex-col w-full">
					<div
						className={`relative w-full h-10 rounded border overflow-hidden focus-within:border-blueNormal ${
							states.message.error?.password
								? "border-red-500"
								: " border-lightDark/30"
						}`}>
						<input
							required
							type="password"
							name="password"
							placeholder="Password address"
							className="w-full h-full px-3 bg-[#f5f6f8] placeholder:text-sm outline-0"
							value={states.password}
							onChange={changeHandler}
							onFocus={() => resetErrorHandler("password")}
						/>
						{states.message.error?.password && (
							<ErrorSing msg={states.message.error?.password} />
						)}
					</div>
					{states.message.error?.password && (
						<ErrorMsg msg={states.message.error?.password} />
					)}
				</div>

				{/* birthday */}
				<div className="w-full">
					<Label text={"Birthday"} />
					<div className="flex items-center justify-between gap-3 w-full">
						<div className="flex-grow h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							<select
								name="m"
								className="w-full h-full outline-0 border-0"
								value={states.m}
								onChange={changeHandler}>
								{months?.map((month) => (
									<option key={month} value={month}>
										{month.substring(0, 3)}
									</option>
								))}
							</select>
						</div>

						<div className="flex-grow h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							<select
								name="d"
								value={states.d}
								className="w-full h-full outline-0 border-0"
								onChange={changeHandler}>
								{days?.map((d) => (
									<option key={d} value={d}>
										{d}
									</option>
								))}
							</select>
						</div>

						<div className="flex-grow h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							<select
								name="y"
								value={states.y}
								className="w-full h-full outline-0 border-0"
								onChange={changeHandler}>
								{years?.map((y) => (
									<option key={y} value={y}>
										{y}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* gender */}
				<div className="w-full">
					<Label text={"Gender"} />
					<div className="flex items-center justify-between gap-3 w-full">
						<label
							htmlFor="female"
							className="flex-grow flex items-center justify-between h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							Female
							<input
								type="radio"
								name="gender"
								id="female"
								value={"female"}
								checked={states.gender === "female"}
								onChange={changeHandler}
							/>
						</label>

						<label
							htmlFor="male"
							className="flex-grow flex items-center justify-between h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							Male
							<input
								type="radio"
								name="gender"
								id="male"
								value={"male"}
								checked={states.gender === "male"}
								onChange={changeHandler}
							/>
						</label>

						<label
							htmlFor="custom"
							className="flex-grow flex items-center justify-between h-10 px-3 rounded border border-lightDark/30 overflow-hidden focus-within:border-blueNormal">
							Custom
							<input
								type="radio"
								name="gender"
								id="custom"
								value={"custom"}
								checked={states.gender === "custom"}
								onChange={changeHandler}
							/>
						</label>
					</div>
				</div>

				{/* instruction */}
				<Instruction />

				{/* submit btn */}
				<div className="flex items-center justify-center w-full">
					{states.loading ? (
						<LoadingBtn
							style={
								"w-56 h-10 px-4 text-textWhite text-sm font-semibold bg-greenColor rounded my-2"
							}
						/>
					) : (
						<button className="w-56 h-10 px-4 text-textWhite text-sm font-semibold bg-greenColor rounded my-2">
							<span>Sign Up</span>
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

SignupForm.defaultProps = {
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],

	days: Array(32)
		.fill(undefined)
		.map((_, i) => (i < 10 ? "0" + i : i))
		.filter((n) => n != "00"),

	years: Array(2023)
		.fill(undefined)
		.map((_, i) => i)
		.splice(1999),
};

export default SignupForm;

export const Label = ({ text }) => {
	return (
		<label className="flex items-center space-x-1 text-[0.8125rem]">
			<span>{text}</span>
			<span>
				<FaQuestionCircle />
			</span>
		</label>
	);
};

export const Instruction = () => {
	return (
		<div className="w-full">
			<p className="text-xs mb-4">
				People who use our service may have uploaded your contact
				information to Facebook.{" "}
				<span className="text-blueNormal hover:underline cursor-pointer">
					Learn more.
				</span>
			</p>

			<p className="text-xs">
				By clicking Sign Up, you agree to our{" "}
				<span className="text-blueNormal hover:underline cursor-pointer">
					Terms
				</span>
				,{" "}
				<span className="text-blueNormal hover:underline cursor-pointer">
					Privacy Policy{" "}
				</span>{" "}
				and{" "}
				<span className="text-blueNormal hover:underline cursor-pointer">
					Cookies Policy
				</span>
				.You may receive SMS Notification from us and can opt out any time.
			</p>
		</div>
	);
};
