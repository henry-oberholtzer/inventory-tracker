import { combineReducers } from "redux";
import { getInventoryReducer } from "./InventoryReducer";

const rootReducer = combineReducers({
	items: getInventoryReducer,
});

export default rootReducer;
