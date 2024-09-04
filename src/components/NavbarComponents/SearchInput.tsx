import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import useGameQueryStore from "../../store.ts";

const SearchInput = () => {
    const {setSearchText} = useGameQueryStore();
    const searchRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(searchRef.current)
                setSearchText(searchRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchRef} borderRadius={20} placeholder='Search game....' variant='filled' />
            </InputGroup>
        </form>

    )
}

export default SearchInput