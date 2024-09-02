import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";

interface Props{
    onSelectOrder: (sortOrder: string) => void;
    selectedOrder: string;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},
        {value: "-added", label: "Date added"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average Rating"},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === selectedOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Order by : { currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order =>
                <MenuItem key={order.value} value={order.value} onClick={() => onSelectOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>
    </Menu>
    )
}

export default SortSelector