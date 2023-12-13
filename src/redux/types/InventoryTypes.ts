import { Inventory } from "../../Types";

export const GET_INV = "GET_INV";
export const ADD_INV = "ADD_INV";

export interface GetInventoryStateType {
	items: Inventory;
}

interface GetInventoryActionType {
	type: typeof GET_INV;
	payload: Inventory;
}

interface AddInventoryActionType {
	type: typeof ADD_INV;
	payload: Inventory;
}

export type InventoryActionTypes =
	| GetInventoryActionType
	| AddInventoryActionType;
