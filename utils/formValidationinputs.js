const formValidationinputs = (type, data) => {
	switch (type) {
		case "email":
			const checkEmail = !data.includes("@gmail.com");

			if (checkEmail) {
				return {
					error: true,
					message: "Email must be a valide email",
				};
			}

			return {
				error: false,
			};

		case "password":
			const checkPass = data.length < 6;

			if (checkPass) {
				return {
					error: true,
					message: "Password must contains at least 6 caracters",
				};
			}

			return {
				error: false,
			};

		case "firstName":
			const firstName = data.length < 4;

			if (firstName) {
				return {
					error: true,
					message: "First name must contains at least 4 caracters",
				};
			}

			return {
				error: false,
			};

		case "lastName":
			const lastName = data.length < 2;

			if (lastName) {
				return {
					error: true,
					message: "Last name must contains at least 2 caracters",
				};
			}

			return {
				error: false,
			};

		default:
			return;
	}
};

export default formValidationinputs;
