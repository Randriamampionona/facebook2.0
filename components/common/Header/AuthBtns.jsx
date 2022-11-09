import { useRouter } from "next/router";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";

const AuthBtns = ({ btnData }) => {
	const { push } = useRouter();

	return (
		<div className="flex items-center justify-end gap-x-2">
			{btnData?.map((btn) => (
				<button
					key={btn.slug}
					className={`flex items-center justify-center gap-x-2 h-10 px-7 text-textWhite text-sm font-semibold ${btn.color} rounded`}
					onClick={() => push(btn.slug)}>
					<span>{btn.text}</span>
					<span>{btn.Icon}</span>
				</button>
			))}
		</div>
	);
};

AuthBtns.defaultProps = {
	btnData: [
		{
			slug: "/",
			text: "Sign In",
			color: "bg-blueDark",
			Icon: <FaSignInAlt />,
		},

		{
			slug: "/?p=signup",
			text: "Sign Up",
			color: "bg-greenColor",
			Icon: <FaUserCircle />,
		},
	],
};

export default AuthBtns;
