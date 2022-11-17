export const emojiPickerShortcut = (callback) => {
	if (typeof window !== "undefined") {
		window.addEventListener("keydown", (e) => {
			if (e.key === "b" && e.ctrlKey) {
				e.stopPropagation();
				callback((prev) => !prev);
			}
		});
	}

	return null;
};
