import {
	IntroAndPhotos,
	ProfileModal,
	SettingsAndPosts,
	TopProfile,
} from "../../../components/profile";
import apiEndpoint from "../../../utils/apiEndpoint";
import verifyAuth from "../../../utils/verifyAuth";
import axios from "axios";
import { ProfileProviderLocal } from "../../../store/contexts/locales/ProfileContext.local";
import { GlobalContext } from "../../../store/contexts/GlobalContext";

const ProfilePage = ({ DATA }) => {
	const { modal } = GlobalContext();

	return (
		<ProfileProviderLocal DATA={DATA}>
			<section className="mySection flex-col">
				{/* modale */}
				{modal.open && DATA.currentUser.isMine && (
					<ProfileModal form={modal.form} />
				)}
				<TopProfile />

				<main className="flex flex-col items-start justify-between gap-y-8 py-4 w-[calc(100%-3rem)] max-w-full mx-auto sm:max-w-[80%] md:max-w-[70%] lg:flex-row lg:gap-x-4 lg:max-w-[80%] lg:px-5 xl:max-w-[70%]">
					<IntroAndPhotos />
					<SettingsAndPosts />
				</main>
			</section>
		</ProfileProviderLocal>
	);
};

export default ProfilePage;

export const getServerSideProps = async ({ req, params }) => {
	const { user_ID } = params;
	const auth = await verifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	try {
		const url = apiEndpoint?.(`/info/${user_ID}`);
		const fetch = await axios.get(url, {
			withCredentials: true,
			headers: {
				user_id: auth?.props?.user?.user_ID,
			},
		});
		const result = fetch.data;

		if (result.success) {
			return {
				props: {
					...auth.props,
					DATA: result.payload,
				},
			};
		}
	} catch (error) {
		console.log({ error });
		return {
			DATA: {},
		};
	}
};