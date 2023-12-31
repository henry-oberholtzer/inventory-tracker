import { useState, useEffect } from "react";
import { inventoryItem } from "../../Types";
import savedInventory from "../../data/savedInventory";

const useInventory = () => {
	const [inventory, setInventory] = useState<inventoryItem[]>(savedInventory);
	const [editItem, setEditItem] = useState<inventoryItem["key"]>();

	useEffect(() => {
		const json = localStorage.getItem("userInventory");
		if (json) {
			return setInventory(JSON.parse(json));
		}
	}, []);

	const getItemFromInventory = (searchKey: inventoryItem["key"]) => {
		return inventory.filter((el) => el.key === searchKey)[0];
	};

	const itemAdjust = (item: inventoryItem) => {
		if (item.toDelete === true) {
			setInventory(inventory.filter((el) => el.key !== item.key));
		} else if (getItemFromInventory(item.key)) {
			setInventory(inventory.map((i) => (i.key === item.key ? item : i)));
		} else {
			setInventory([...inventory, item]);
		}
	};

	useEffect(() => {
		localStorage.setItem("userInventory", JSON.stringify(inventory));
	}, [inventory]);

	return {
		inventory,
		setInventory,
		editItem,
		setEditItem,
		getItemFromInventory,
		itemAdjust,
	};
};

export default useInventory;
