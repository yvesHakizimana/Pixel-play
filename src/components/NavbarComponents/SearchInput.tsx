import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input type='search' borderRadius={20} placeholder='Search game....' variant='filled' />
        </InputGroup>
    )
}

export default SearchInput