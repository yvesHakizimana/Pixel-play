import {Button, Text} from "@chakra-ui/react"
import {useState} from "react";

const ExpandableText = ({children}: { children : string}) => {
    const [expanded, setExpanded] = useState(false)
    const limit = 300;
    if(children.length <= limit)
        return <Text>{children}</Text>
    const summary = expanded ? children : children.substring(0, limit) + '....';
    return (
        <>
            <Text>
                {summary}
                <Button colorScheme='yellow' onClick={() => setExpanded(!expanded)} marginX={2}>{expanded ? 'Read Less' : 'Read More'}</Button>
            </Text>
        </>
    )
}

export default ExpandableText;