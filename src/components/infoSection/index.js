import React from 'react'
import { Button } from '../Button'
import { InfoContainer , InfoWrapper , InfoRow , Col1 , Col2 , TextWrapper , TopLine , Heading , Subtitle , BtnWrapper, ImgWrap , Img } from './style'
const InfoSection = ({lightBg , img, imgStart , topLine , headline , desc , buttonLabel , id , lightText , darkText , primary , dark , dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                   <Col1>
                     <TextWrapper>
                       <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle darkText={darkText}>{desc}</Subtitle>
                             <BtnWrapper>
                                <Button to="home"
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact to="true"
                                  offset={-80}
                                  primary={primary ? 1 : 0}
                                  dark={dark ? 1 : 0}
                                  dark2={dark ? 1: 0}
                                >{buttonLabel}</Button>
                             </BtnWrapper>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                        <ImgWrap>
                        <Img src={img}/>
                        </ImgWrap>
                        </Col2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
