import { Fragment } from "react"
import { Box,Logo, LogoText, LogoTextV, MenubarBox } from "../styles/layout"

export default function Menubar(props){
    return(
        <Fragment>
            <Box>
                <Logo>
                    <LogoText>Color+ <LogoTextV>v2</LogoTextV></LogoText>
                </Logo>
                <MenubarBox>



                    
                </MenubarBox>
            </Box>
        </Fragment>
    )
}