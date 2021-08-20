import { CHANGE_TEXT } from "../constants/types";
const intialState = {
	text: []
};

const textReducer = (state = intialState, { type, payload }) => {
	switch (type) {
		case CHANGE_TEXT:
			return { ...state, text: payload };
		default:
			return state;
	}
};
export default textReducer;
// export const selectedProductsReducer = (state = {}, { type, payload }) => {
// 	console.log(type);
// 	switch (type) {
// 		case ActionTypes.SELECTED_PRODUCT:
// 			return { ...state, ...payload };
// 		case ActionTypes.REMOVE_SELECTED_PRODUCT:
// 			return {};
// 		default:
// 			return state;
// 	}
// };
