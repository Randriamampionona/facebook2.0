const motionVariants = {
	slidesIn: {
		initial: {
			x: "-100vw",
		},
		animate: {
			x: 0,
			transition: {
				type: "tween",
			},
		},
		exit: {
			x: "-100vw",
		},
	},
};

export default motionVariants;
