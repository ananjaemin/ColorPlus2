import { Fragment } from "react"
import styled from "styled-components"
import { BoxHeader, ColorBoxContainer,MoreButton,MoreButtonBox,Title,EeventBox2, GradientsContainer } from "./styled/home";
import Colorbox from "../component/Colorbox";
import { Container } from "../styles/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Gradientsbox from "../component/Gradientsbox";

export default function Home(){
  const [paletteisMore, palettesetIsMore] = useState(false);
  const [gradientisMore, gradientsetIsMore] = useState(false);

  const paletteMore = (e) => {
    palettesetIsMore(!paletteisMore)
  };

  const gradientMore = (e) =>{
    gradientsetIsMore(!gradientisMore)
  };
  

  return (
    <Container>
      <EeventBox2 top height={paletteisMore ? "auto" : "391px"} MorePading={paletteisMore ? "35px":"0px"}>
        <BoxHeader>
          <Title>
            COLOUR PALETTE CONDENSED__ 
          </Title>
          
        </BoxHeader>
        <ColorBoxContainer>
          <Colorbox bgcolor={'--ambrosia'} title={"ambrosia"} hex={"#FCDBBA"}></Colorbox>
          <Colorbox bgcolor={'--apricot'} title={"apricot"} hex={"#FF8652"}></Colorbox>
          <Colorbox bgcolor={'--aubergine'} title={"aubergine"} hex={"#6A2352"}></Colorbox>
          <Colorbox bgcolor={'--auburn'} title={"auburn"} hex={"#A12F2F"}></Colorbox>
          <Colorbox bgcolor={'--banana'} title={"banana"} hex={"#FEE694"}></Colorbox>
          <Colorbox bgcolor={'--beetroot'} title={"beetroot"} hex={"#7F0421"}></Colorbox>
          <Colorbox bgcolor={'--berry'} title={"berry"} hex={"#461234"}></Colorbox>
          <Colorbox bgcolor={'--blue-tack'} title={"blue tack"} hex={"#82BFE0"}></Colorbox>
          <Colorbox bgcolor={'--blue-gray'} title={"blue gray"} hex={"#91A2C2"}></Colorbox>
          <Colorbox bgcolor={'--blush'} title={"blush"} hex={"#D67B71"}></Colorbox>
          <Colorbox bgcolor={'--bronze'} title={"bronze"} hex={"#C27940"}></Colorbox>
          <Colorbox bgcolor={'--bud'} title={"bud"} hex={"#94C15C"}></Colorbox>
          <Colorbox bgcolor={'--burnt-orange'} title={"burnt orange"} hex={"#FF5F00"}></Colorbox>
          <Colorbox bgcolor={'--butter'} title={"butter"} hex={"#F2C94C"}></Colorbox>
          <Colorbox bgcolor={'--camo'} title={"camo"} hex={"#AAA843"}></Colorbox>
          <Colorbox bgcolor={'--cappuccino'} title={"cappuccino"} hex={"#C9B092"}></Colorbox>
          <Colorbox bgcolor={'--carmine'} title={"carmine"} hex={"#9A133E"}></Colorbox>
          <Colorbox bgcolor={'--cerise'} title={"cerise"} hex={"#FF0F63"}></Colorbox>
          <Colorbox bgcolor={'--champagne'} title={"champagne"} hex={"#FCEBD5"}></Colorbox>
          <Colorbox bgcolor={'--charcoal'} title={"charcoal"} hex={"#4F4450"}></Colorbox>
          <Colorbox bgcolor={'--chestnut'} title={"chestnut"} hex={"#81291F"}></Colorbox>
          <Colorbox bgcolor={'--chocolate'} title={"chocolate"} hex={"#8F5D38"}></Colorbox>
          <Colorbox bgcolor={'--clay'} title={"clay"} hex={"#7D6050"}></Colorbox>
          <Colorbox bgcolor={'--cloud'} title={"cloud"} hex={"#F2EFE3"}></Colorbox>
          <Colorbox bgcolor={'--coffee'} title={"coffee"} hex={"#624739"}></Colorbox>
          <Colorbox bgcolor={'--conker'} title={"conker"} hex={"#6F3131"}></Colorbox>
          <Colorbox bgcolor={'--coral'} title={"coral"} hex={"#EB4444"}></Colorbox>
          <Colorbox bgcolor={'--dove'} title={"dove"} hex={"#C9C5CB"}></Colorbox>
          <Colorbox bgcolor={'--dusty-purple'} title={"dusty purple"} hex={"#7D6391"}></Colorbox>
          <Colorbox bgcolor={'--dusty-pink'} title={"dusty pink"} hex={"#E4ADAD"}></Colorbox>
          <Colorbox bgcolor={'--emerald'} title={"emerald"} hex={"#55B95F"}></Colorbox>
          <Colorbox bgcolor={'--eucalyptus'} title={"eucalyptus"} hex={"#688461"}></Colorbox>
          <Colorbox bgcolor={'--fern'} title={"fern"} hex={"#4F8D08"}></Colorbox>
          <Colorbox bgcolor={'--forest'} title={"forest"} hex={"#2E644A"}></Colorbox>
          <Colorbox bgcolor={'--forget-me-not'} title={"forget me not"} hex={"#91A7FA"}></Colorbox>
          <Colorbox bgcolor={'--fudge'} title={"fudge"} hex={"#C28742"}></Colorbox>
          <Colorbox bgcolor={'--grassy'} title={"grassy"} hex={"#A8D363"}></Colorbox>
          <Colorbox bgcolor={'--gray'} title={"gray"} hex={"#98919F"}></Colorbox>
          <Colorbox bgcolor={'--green'} title={"green"} hex={"#62B90A"}></Colorbox>
          <Colorbox bgcolor={'--hazelnut'} title={"hazelnut"} hex={"#D08E5A"}></Colorbox>
          <Colorbox bgcolor={'--hot-pink'} title={"hot pink"} hex={"#FF3263"}></Colorbox>
          <Colorbox bgcolor={'--ice'} title={"ice"} hex={"#E1EFF8"}></Colorbox>
          <Colorbox bgcolor={'--ink'} title={"ink"} hex={"#292C31"}></Colorbox>
          <Colorbox bgcolor={'--iron'} title={"iron"} hex={"#6B5C6C"}></Colorbox>
          <Colorbox bgcolor={'--lapis'} title={"lapis"} hex={"#2B4D8D"}></Colorbox>
          <Colorbox bgcolor={'--latte'} title={"latte"} hex={"#A38468"}></Colorbox>
          <Colorbox bgcolor={'--leafy'} title={"leafy"} hex={"#318553"}></Colorbox>
          <Colorbox bgcolor={'--lemon'} title={"lemon"} hex={"#EAFC7E"}></Colorbox>
          <Colorbox bgcolor={'--lilac'} title={"lilac"} hex={"#8E8ADE"}></Colorbox>
          <Colorbox bgcolor={'--lime'} title={"lime"} hex={"#73D645"}></Colorbox>
          <Colorbox bgcolor={'--limestone'} title={"limestone"} hex={"#C9C5B5"}></Colorbox>
          <Colorbox bgcolor={'--magenta'} title={"magenta"} hex={"#BC2767"}></Colorbox>
          <Colorbox bgcolor={'--meadow'} title={"meadow"} hex={"#7A9A3E"}></Colorbox>
          <Colorbox bgcolor={'--midnight'} title={"midnight"} hex={"#1B3955"}></Colorbox>
          <Colorbox bgcolor={'--mink'} title={"mink"} hex={"#1B3955"}></Colorbox>
          <Colorbox bgcolor={'--mint'} title={"mint"} hex={"#C4EA70"}></Colorbox>
          <Colorbox bgcolor={'--moss'} title={"moss"} hex={"#83A944"}></Colorbox>
          <Colorbox bgcolor={'--mushroom'} title={"mushroom"} hex={"#EDE8D5"}></Colorbox>
          <Colorbox bgcolor={'--navy'} title={"navy"} hex={"#363A57"}></Colorbox>
          <Colorbox bgcolor={'--ocean'} title={"ocean"} hex={"#206777"}></Colorbox>
          <Colorbox bgcolor={'--orange'} title={"orange"} hex={"#FD8A04"}></Colorbox>
          <Colorbox bgcolor={'--orchid'} title={"orchid"} hex={"#7945BF"}></Colorbox>
          <Colorbox bgcolor={'--pale-lemon'} title={"pale lemon"} hex={"#F4FFDC"}></Colorbox>
          <Colorbox bgcolor={'--peach'} title={"peach"} hex={"#FFB190"}></Colorbox>
          <Colorbox bgcolor={'--pebble'} title={"pebble"} hex={"#B8B4BE"}></Colorbox>
          <Colorbox bgcolor={'--petal'} title={"petal"} hex={"#F4E9F3"}></Colorbox>
          <Colorbox bgcolor={'--pink'} title={"pink"} hex={"#FFC9D8"}></Colorbox>
          <Colorbox bgcolor={'--pond-bottom'} title={"pond bottom"} hex={"#264A46"}></Colorbox>
          <Colorbox bgcolor={'--posy'} title={"posy"} hex={"#DED7EC"}></Colorbox>
          <Colorbox bgcolor={'--powder-blue'} title={"powder blue"} hex={"#B5D0E0"}></Colorbox>
          <Colorbox bgcolor={'--powder-pink'} title={"powder pink"} hex={"#FBD1D1"}></Colorbox>
          <Colorbox bgcolor={'--primrose'} title={"primrose"} hex={"#E1F7B0"}></Colorbox>
          <Colorbox bgcolor={'--punch'} title={"punch"} hex={"#FF5563"}></Colorbox>
          <Colorbox bgcolor={'--purple'} title={"purple"} hex={"#A95AF3"}></Colorbox>
          <Colorbox bgcolor={'--purple-slate'} title={"purple slate"} hex={"#545375"}></Colorbox>
          <Colorbox bgcolor={'--rainforest'} title={"rainforest"} hex={"#25422E"}></Colorbox>
          <Colorbox bgcolor={'--raspberry-jam'} title={"raspberry jam"} hex={"#3C0D2B"}></Colorbox>
          <Colorbox bgcolor={'--robins-egg'} title={"robins egg"} hex={"#B8DEE0"}></Colorbox>
          <Colorbox bgcolor={'--rouge'} title={"rouge"} hex={"#CC3737"}></Colorbox>
          <Colorbox bgcolor={'--royal'} title={"royal"} hex={"#4169E1"}></Colorbox>
          <Colorbox bgcolor={'--ruby'} title={"ruby"} hex={"#D1314B"}></Colorbox>
          <Colorbox bgcolor={'--sage'} title={"sage"} hex={"#87A376"}></Colorbox>
          <Colorbox bgcolor={'--sakura'} title={"sakura"} hex={"#FFE4E4"}></Colorbox>
          <Colorbox bgcolor={'--salmon'} title={"salmon"} hex={"#FF7863"}></Colorbox>
          <Colorbox bgcolor={'--sand'} title={"sand"} hex={"#E1BE7C"}></Colorbox>
          <Colorbox bgcolor={'--squash'} title={"squash"} hex={"#E96310"}></Colorbox>
          <Colorbox bgcolor={'--spice'} title={"spice"} hex={"#B54E16"}></Colorbox>
          <Colorbox bgcolor={'--spring'} title={"spring"} hex={"#5ACB65"}></Colorbox>
          <Colorbox bgcolor={'--sun'} title={"sun"} hex={"#FEC305"}></Colorbox>
          <Colorbox bgcolor={'--teal'} title={"teal"} hex={"#29879C"}></Colorbox>
          <Colorbox bgcolor={'--terracotta'} title={"terracotta"} hex={"#B76A61"}></Colorbox>
          <Colorbox bgcolor={'--twilight'} title={"twilight"} hex={"#203763"}></Colorbox>
          <Colorbox bgcolor={'--vavavoom'} title={"vavavoom"} hex={"#BF0D0D"}></Colorbox>
          <Colorbox bgcolor={'--walnut'} title={"walnut"} hex={"#381F19"}></Colorbox>
          <Colorbox bgcolor={'--white'} title={"white"} hex={"#FFFFFF"}></Colorbox>
          <Colorbox bgcolor={'--yellow'} title={"yellow"} hex={"#FFE03D"}></Colorbox>
        </ColorBoxContainer>
      </EeventBox2>
      <MoreButtonBox>
        {paletteisMore ? <MoreButton onClick={paletteMore}>Close</MoreButton> : <MoreButton onClick={paletteMore} >Read More...</MoreButton>}
      </MoreButtonBox>

      <EeventBox2 height={gradientisMore ? "auto":"400px"} MorePading={gradientisMore  ? "35px":"0px"}>
        <BoxHeader>
          <Title>
            GRADIENTS COLLECTION PREVIEW__
          </Title>
        </BoxHeader>
        <GradientsContainer>
          <Gradientsbox startcolor={'#6DE195'} endcolor={'#C4E759'}></Gradientsbox>
          <Gradientsbox startcolor={'#41C7AF'} endcolor={'#54E38E'}></Gradientsbox>
          <Gradientsbox startcolor={'#99E5A2'} endcolor={'#D4FC78'}></Gradientsbox>
          <Gradientsbox startcolor={'#ABC7FF'} endcolor={'#C1E3FF'}></Gradientsbox>
          <Gradientsbox startcolor={'#6CACFF'} endcolor={'#8DEBFF'}></Gradientsbox>
          <Gradientsbox startcolor={'#5583EE'} endcolor={'#41D8DD'}></Gradientsbox>
          <Gradientsbox startcolor={'#A16BFE'} endcolor={'#DEB0DF'}></Gradientsbox>
          <Gradientsbox startcolor={'#D279EE'} endcolor={'#F8C390'}></Gradientsbox>
          <Gradientsbox startcolor={'#F78FAD'} endcolor={'#FDEB82'}></Gradientsbox>
          <Gradientsbox startcolor={'#BC3D2F'} endcolor={'#A16BFE'}></Gradientsbox>
          <Gradientsbox startcolor={'#A43AB2'} endcolor={'#E13680'}></Gradientsbox>
          <Gradientsbox startcolor={'#9D2E7D'} endcolor={'#E16E93'}></Gradientsbox>
          <Gradientsbox startcolor={'#F5CCF6'} endcolor={'#F1EEF9'}></Gradientsbox>
          <Gradientsbox startcolor={'#F0EFF0'} endcolor={'#FAF8F9'}></Gradientsbox>
          <Gradientsbox startcolor={'#121317'} endcolor={'#323B42'}></Gradientsbox>


          <Gradientsbox startcolor={'#fc8a15'} endcolor={'#fff6a2'}></Gradientsbox>
          <Gradientsbox startcolor={'#f9d00f'} endcolor={'#fbff64'}></Gradientsbox>
          <Gradientsbox startcolor={'#ff0592'} endcolor={'#ffbee3'}></Gradientsbox>
          <Gradientsbox startcolor={'#295e6a'} endcolor={'#4797b1'}></Gradientsbox>
        </GradientsContainer>
      </EeventBox2>
      <MoreButtonBox>
        {gradientisMore ? <MoreButton onClick={gradientMore}>Close</MoreButton>:<MoreButton onClick={gradientMore}>Read More...</MoreButton>}
      </MoreButtonBox>


  
    </Container>
  )
}


