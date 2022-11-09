import { toast } from "react-toastify";

const toastHandler = (type, content) => {
	toast?.[type](content);
};

export default toastHandler;
