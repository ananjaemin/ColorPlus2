import { Fragment } from "react"
import { Box,Container,Light_line,Logo, LogoText, LogoTextV, Menu, MenubarBox, Menubar_list } from "./styled"

export default function Menubar(props){
    return(
        <Container>
            <Box>
                <Logo>
                    <LogoText href="">Color+ <LogoTextV>v2</LogoTextV></LogoText>
                </Logo>
                <MenubarBox>
                    <Menubar_list>
                       <Menu href="" >Home</Menu>
                       <Menu href="" >Combination</Menu>
                       <Menu href="" >Extraction</Menu>
                       <Menu href="" >Add..</Menu>

                    </Menubar_list>
                </MenubarBox>
            </Box>
            <Light_line/>
        </Container>
    )
}