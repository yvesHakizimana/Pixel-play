import {HStack, Icon} from "@chakra-ui/react";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";
import {Platform} from "../../entities/Platform.ts";

interface Props {
    platforms: Platform[]
}

const PlatformIconList  =  ({ platforms } : Props) => {
    const iconsMap : { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={2}>
            {platforms.map(platform =>
            <Icon key={platform.id} as={iconsMap[platform.slug]} color='gray.500'/>)}
        </HStack>
    )
}

export default PlatformIconList