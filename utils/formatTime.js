import moment from "moment";

const formatTime = (publishedDate) => {
	return moment(publishedDate).fromNow();
};

export default formatTime;
