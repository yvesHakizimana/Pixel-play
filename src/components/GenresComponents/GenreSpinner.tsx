import {HStack, List, ListItem, Skeleton, SkeletonText} from "@chakra-ui/react";

const GenreSpinner = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <List>
            {skeletons.map(skeleton => (
                <ListItem key={skeleton} paddingY={2}>
                    <HStack spacing={4}>
                        <Skeleton width="32px" height="32px" borderRadius={4} />
                        <SkeletonText noOfLines={1} width="150px" height='15px' />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreSpinner;