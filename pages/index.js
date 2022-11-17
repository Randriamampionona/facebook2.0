/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SigninForm, SignupForm } from "../components/authorization";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import VerifyAuth from "../utils/verifyAuth";

const AuthorizationPage = ({ langList, links, user }) => {
	const { query, replace } = useRouter();
	const [openForm, setOpenForm] = useState(false);
	const toogleHandler = (key) => setOpenForm(key);

	useEffect(() => {
		query && query.p === "signup" && toogleHandler(true);
	}, []);

	// client redirect
	useEffect(() => {
		replace("/home");
	}, [user]);

	return (
		<section className="w-full text-dark bg-whiteBg">
			<main className="flex flex-col items-center justify-evenly w-full max-w-[calc(100%-5rem)] h-[calc(100vh-12.9375rem)] mx-auto md:justify-between md:flex-row md:max-w-[calc(100%-10rem)] lg:max-w-[calc(100%-25rem)] xl:max-w-[calc(100%-40rem)] 2xl:w-[100rem]">
				{/* desc */}
				<div className="space-y-2 max-w-xs md:min-w-[50%] md:mb-24">
					<h1 className="text-blueDark text-[2.45rem] text-center leading-none font-poppins font-bold md:text-start">
						facebook
					</h1>
					<p className="text-lg text-center leading-tight font-poppins font-medium md:text-start">
						Connect with friend and the world around you on Facebook.
					</p>
				</div>

				{/* sign in form */}
				<div className="md:min-w-[50%]">
					<SigninForm toogleHandler={toogleHandler} />
				</div>

				{/* sign up form */}
				{openForm && (
					<div className="z-10 fixed inset-0 flex items-center justify-center w-screen h-screen bg-white/75">
						<SignupForm toogleHandler={toogleHandler} />
					</div>
				)}
			</main>

			<footer className="bg-white py-10 h-full min-h-[12.9375rem]">
				<main className="flex flex-col gap-y-5 w-full text-lightDark mx-auto max-w-[calc(100%-5rem)] md:max-w-[calc(100%-10rem)] lg:max-w-[calc(100%-25rem)] xl:max-w-[calc(100%-40rem)] 2xl:w-[100rem]">
					<div className="divide-y divide-lightDark/30 space-y-3">
						{/* lang */}
						<ul className="flex items-center gap-x-2 flex-wrap w-full">
							{langList?.map((lang) => (
								<li
									key={lang}
									className="text-xs hover:underline cursor-pointer">
									{lang}
								</li>
							))}
							<button className="bg-whiteBg border border-lightDark/30 px-2 py-[3px] text-[10px] rounded">
								<span>
									<FaPlus />
								</span>
							</button>
						</ul>

						{/* links */}
						<ul className="flex items-center gap-x-4 flex-wrap w-full pt-3">
							{links?.map((link) => (
								<Link key={link} href={`/${link.toLowerCase()}`}>
									<li className="text-xs hover:underline cursor-pointer">
										<a>{link}</a>
									</li>
								</Link>
							))}
						</ul>
					</div>

					<span className="text-xs">
						Meta &copy; {new Date().getFullYear()}
					</span>
				</main>
			</footer>
		</section>
	);
};

AuthorizationPage.defaultProps = {
	langList: [
		"English (US)",
		"Français (France)",
		"Malagasy",
		"Italiano",
		"Español",
		"Deutch",
		"Turçe",
		"Português (Brasile)",
	],

	links: [
		"Sign Up",
		"Log In",
		"Messenger",
		"Facebook Lite",
		"Watch",
		"Places",
		"Games",
		"Marketplace",
		"Meta Pay",
		"Oculus",
		"Portal",
		"Instagram",
		"Bulletin",
		"Local",
		"Fundraisers",
		"Services",
		"Voting Information Center",
		"Groups",
		"About",
		"Create Ad",
		"Create Page",
		"Delevopers",
		"Careers",
		"Privacy",
		"Cookies",
		"Ad choices",
		"Terms",
		"Help",
		"Contact Uploading & Non-Users",
	],
};

export default AuthorizationPage;

export const getServerSideProps = async ({ req }) => {
	return await VerifyAuth?.(req);
};
