import {
	ADD_INV,
	GET_INV,
	InventoryActionTypes,
} from "../types/InventoryTypes";
import { Inventory } from "../../Types";

export const getInventoryAction = (items: Inventory): InventoryActionTypes => {
	return {
		type: GET_INV,
		payload: items,
	};
};

export const addInventoryAction = (items: Inventory): InventoryActionTypes => {
	return {
		type: ADD_INV,
		payload: items,
	};
};
