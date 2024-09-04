import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";
import useGameQueryStore from "../store.ts";

const SortSelector = () => {
    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},
        {value: "-added", label: "Date added"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average Rating"},
    ]

    const {gameQuery, setSortOrder} = useGameQueryStore();
    const currentSortOrder = sortOrders.find(order => order.value === gameQuery.sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Order by : { currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order =>
                <MenuItem key={order.value} value={order.value} onClick={() => setSortOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>
    </Menu>
    )
}

export default SortSelector