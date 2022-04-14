import { Fragment } from "react"
import { Box,Container,Light_line,Logo, LogoText, LogoTextV, Menu, MenubarBox, Menubar_list } from "./styled"
import { useRouter } from "next/router"

export default function Menubar(props){
    const router = useRouter()
    return(
        <Container>
            <Box>
                <Logo>
                    <LogoText href="/">Color+ <LogoTextV>v2</LogoTextV></LogoText>
                </Logo>
                <MenubarBox>
                    <Menubar_list>
                       <Menu href="/" pathname={router.pathname}>Home</Menu>
                       <Menu href="/combination" pathname={router.pathname}>Combination</Menu>
                       <Menu href="/extraction" pathname={router.pathname}>Extraction</Menu>
                       <Menu href="" >Add..</Menu>


                    </Menubar_list>
                </MenubarBox>
            </Box>
            <Light_line/>
        </Container>
    )
}