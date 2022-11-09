class User {
	#user_ID;
	#firstName;
	#lastName;
	#username;
	#email;
	#birthday;
	#profile;
	#cover;

	constructor(data) {
		this.#user_ID = data.user_ID;
		this.#firstName = data.firstName;
		this.#lastName = data.lastName;
		this.#username = data.username;
		this.#email = data.email;
		this.#birthday = data.birthday;
		this.#profile = data.profile;
		this.#cover = data.cover;
	}

	#setUser = () => {
		return {
			user_ID: this.#user_ID,
			firstName: this.#firstName,
			lastName: this.#lastName,
			username: this.#username,
			email: this.#email,
			birthday: this.#birthday,
			pictures: {
				profile: this.#profile,
				cover: this.#cover,
			},
		};
	};

	getUser = () => {
		return this.#setUser();
	};
}

export default User;
