import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import useGameQueryStore from "../../store.ts";
import {useNavigate} from "react-router-dom";

const SearchInput = () => {
    const {setSearchText} = useGameQueryStore();
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(searchRef.current) {
                setSearchText(searchRef.current.value);
                navigate('/')
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchRef} borderRadius={20} placeholder='Search game....' variant='filled' />
            </InputGroup>
        </form>

    )
}

export default SearchInput