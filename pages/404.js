import { useRouter } from "next/router";
import { AuthContext } from "../store/contexts/AuthContext";

const NotFoundPage = () => {
	const { replace } = useRouter();
	const { user } = AuthContext();

	const backHandler = () => replace("/home");

	return (
		<section
			className={`grid items-center justify-center w-full ${
				user ? "h-[calc(100vh-3.1875rem)]" : "h-screen"
			}`}>
			<div className="flex flex-col items-center max-w-md mx-2">
				<h1 className="font-semibold text-center text-xl mb-1">
					This Page Isn&apos;t Available Right Now
				</h1>
				<p className="leading-none text-textLight text-center">
					This may be because of a technical error that we&apos;re working
					to get fixed. Try reloading this page.
				</p>

				<button
					className="bg-blueNormal text-sm text-textWhite font-semibold rounded w-28 h-10 mt-6"
					onClick={backHandler}>
					<span>Back Home</span>
				</button>
			</div>
		</section>
	);
};

export default NotFoundPage;
