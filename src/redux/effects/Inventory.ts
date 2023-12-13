import { getInventoryAction } from "../actions/InventoryActions";
import { Dispatch } from "redux";
import { InventoryActionTypes } from "../types/InventoryTypes";
import { savedInventory } from "../../data/savedInventory";
export const getInventory = () => {
	return function (dispatch: Dispatch<InventoryActionTypes>) {
		// this would be a whole API call here
		dispatch(getInventoryAction(savedInventory));
		return savedInventory;
	};
};
