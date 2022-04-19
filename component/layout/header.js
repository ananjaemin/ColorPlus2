import { useRouter } from "next/router";
import { Container, HeaderBox, LogoText, LogoTextV } from "./styledhead";

export default function Header(props){
    const router = useRouter()

    return(
        <Container>
            <HeaderBox>
                <LogoText>
                    Color<LogoTextV>v2</LogoTextV>
                </LogoText>

                
            </HeaderBox>
        </Container>
    )

}