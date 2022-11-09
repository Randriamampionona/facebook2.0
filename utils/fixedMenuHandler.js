const fixedMenuHandler = (num) => {
	window &&
		window.addEventListener("scroll", () => {
			return window.scrollY >= num;
		});
};

export default fixedMenuHandler;
