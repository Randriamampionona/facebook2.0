import axios from "axios";
import { UploadModal } from "../../components/common";
import {
	IntroAndPhotos,
	ProfileModal,
	SettingsAndPosts,
	TopProfile,
} from "../../components/profile";
import { AuthContext } from "../../store/contexts/AuthContext";
import { GlobalContext } from "../../store/contexts/GlobalContext";
import { LocalProvider } from "../../store/contexts/LocalContext";
import apiEndpoint from "../../utils/apiEndpoint";
import VerifyAuth from "../../utils/verifyAuth";

const ProfilePage = ({ DATA }) => {
	const { modal, uploadModale } = GlobalContext();
	const { user } = AuthContext();

	return (
		<LocalProvider DATA={DATA}>
			{user && uploadModale.open && <UploadModal />}
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
		</LocalProvider>
	);
};

export default ProfilePage;

export const getServerSideProps = async ({ req }) => {
	const auth = await VerifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	try {
		const url = apiEndpoint?.(`/info/${auth.props.user.user_ID}`);
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
			DATA: null,
		};
	}
};
