import {
	GET_INV,
	GetInventoryStateType,
	InventoryActionTypes,
} from "../types/InventoryTypes";

const initialStateGetItems: GetInventoryStateType = {
	items: {},
};

export const getInventoryReducer = (
	state = initialStateGetItems,
	action: InventoryActionTypes
): GetInventoryStateType => {
	switch (action.type) {
		case GET_INV:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
};
