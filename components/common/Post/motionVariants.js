const motionVariants = {
	fadesDown: {
		initial: {
			y: "3rem",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
		exit: {
			y: "3rem",
			opacity: 0,
			transition: {
				duration: 1.2,
			},
		},
	},
};

export default motionVariants;
