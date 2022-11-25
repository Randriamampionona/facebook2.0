const motionVariants = {
	showsUp: {
		initial: {
			x: "23rem",
		},
		animate: {
			x: 0,
		},
		exit: {
			x: "23rem",
		},
	},

	fillsUp: {
		initial: { width: "0%" },
		animate: { width: ["0%", "99%"] },
	},
};

export default motionVariants;
