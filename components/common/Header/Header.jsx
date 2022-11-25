import { GlobalContext } from "../../../store/contexts/GlobalContext";
import Left from "./Left";
import Middle from "./Middle";
import ProfileMenu from "./ProfileMenu";
import Right from "./Right";
import { AnimatePresence } from "framer-motion";
import { AuthContext } from "../../../store/contexts/AuthContext";
import Loading from "./Loading";

const Header = () => {
	const { isLoading, isProfileMenuOpen } = GlobalContext();
	const { user } = AuthContext();

	return (
		<header className="z-[60] sticky top-0 left-0 border-b bg-semiDark border-hoverDark w-full">
			{isLoading && <Loading />}
			<nav className="flex items-center justify-between w-full h-[3.125rem] 2xl:w-[100rem] 2xl:mx-auto">
				<Left user={user} />
				{user && <Middle />}
				<Right />
				<AnimatePresence exitBeforeEnter>
					{user && isProfileMenuOpen && <ProfileMenu />}
				</AnimatePresence>
			</nav>
		</header>
	);
};

export default Header;
