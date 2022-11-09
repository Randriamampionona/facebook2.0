import { Fragment, useState } from "react";
import { AuthContext } from "../../../store/contexts/AuthContext";
import { LoadingBtn } from "../../common";
import ErrorMsg from "../Errors/ErrorMsg";
import ErrorSing from "../Errors/ErrorSing";
import MessageBox from "../MessageBox/MessageBox";

const initState = {
	email: "",
	password: "",

	loading: false,
	message: {
		error: null,
		success: null,
	},
};

const SigninForm = ({ toogleHandler }) => {
	const { signinFunc } = AuthContext();
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
		signinFunc?.(states, setStates);
	};

	return (
		<div className="flex flex-col items-center gap-y-4">
			<form
				className="flex flex-col items-center gap-y-3 w-[19rem] bg-white p-3 rounded-md shadow-formShadow divide-y divide-lightDark/30"
				onSubmit={submitHandler}>
				<div className="flex flex-col items-center gap-y-3 w-full">
					{/* message box */}
					<MessageBox msg={states.message} />

					{/* email address */}
					<div className="flex flex-col w-full">
						<div
							className={`relative w-full h-10 rounded border overflow-hidden focus-within:border-blueNormal ${
								states?.message.error?.email
									? "border-red-500"
									: " border-lightDark/30"
							}`}>
							<input
								required
								type="email"
								name="email"
								placeholder="Email address"
								className="w-full h-full px-3 placeholder:text-sm outline-0"
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
								states?.message.error?.password
									? "border-red-500"
									: " border-lightDark/30"
							}`}>
							<input
								required
								type="password"
								name="password"
								placeholder="Password"
								className="w-full h-full px-3 placeholder:text-sm outline-0"
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

					{/* submit */}
					<Fragment>
						{states.loading ? (
							<LoadingBtn
								style={
									"w-full h-10 text-textWhite text-sm font-semibold bg-blueDark rounded"
								}
							/>
						) : (
							<button className="w-full h-10 text-textWhite text-sm font-semibold bg-blueDark rounded">
								<span>Log In</span>
							</button>
						)}
					</Fragment>

					{/* req new pass */}
					<p className="text-blueDark text-xs text-center font-semibold hover:underline cursor-pointer">
						Forgot password?
					</p>
				</div>

				{/* create account */}
				<div className="flex items-center justify-center w-full">
					<button
						type="button"
						className="h-10 px-4 text-textWhite text-sm font-semibold bg-greenColor rounded mb-2 mt-4"
						onClick={() => toogleHandler(true)}>
						<span>Create new account</span>
					</button>
				</div>
			</form>

			<p className="text-xs font-semibold">
				Create a Page for a celebrity, brand or business.
			</p>
		</div>
	);
};

export default SigninForm;
