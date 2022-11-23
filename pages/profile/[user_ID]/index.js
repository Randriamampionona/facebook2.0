import {
	IntroAndPhotos,
	ProfileModal,
	SettingsAndPosts,
	TopProfile,
} from "../../../components/profile";
import verifyAuth from "../../../utils/verifyAuth";
import axios from "axios";
import { GlobalContext } from "../../../store/contexts/GlobalContext";
import { UploadModal } from "../../../components/common";
import { Fragment } from "react";

const ProfilePage = ({ user }) => {
	const { modal, uploadModale } = GlobalContext();

	return (
		<Fragment>
			{user && uploadModale.open && <UploadModal />}
			<section className="mySection flex-col">
				{/* modale */}
				{modal.open && <ProfileModal form={modal.form} />}
				<TopProfile />

				<main className="flex flex-col items-start justify-between gap-y-8 py-4 w-[calc(100%-3rem)] max-w-full mx-auto sm:max-w-[80%] md:max-w-[70%] lg:flex-row lg:gap-x-4 lg:max-w-[80%] lg:px-5 xl:max-w-[70%]">
					<IntroAndPhotos />
					<SettingsAndPosts />
				</main>
			</section>
		</Fragment>
	);
};

export default ProfilePage;

export const getServerSideProps = async ({ req }) => {
	const auth = await verifyAuth?.(req);

	if (auth.redirect) {
		return {
			...auth,
		};
	}

	const URL = `/info/${auth?.props?.user?.user_ID}`;

	try {
		const fetch = await axios.get(URL, {
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
					mutateKey: URL,
					fallback: {
						[URL]: result,
					},
				},
			};
		}
	} catch (error) {
		return {
			...auth.props,
			fallback: {
				[URL]: null,
			},
		};
	}
};
