import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Hero({ slides }) {

    const [current, setCurrent] = useState(0)
    const len = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === len - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [len, current])

    const nextSlide = () => {
        setCurrent(current === len - 1 ? 0 : current + 1)
    }

    const pervSlide = () => {
        setCurrent(current === 0 ? len - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider key={index}>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent >
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path} primary='true'>
                                            {slide.lable}
                                            <ArrowRightAltIcon />
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )}

                        </HeroSlide>
                    )
                })}
                <ArrowContainer>
                    <ArrowBackIosIcon className='arrowBtn' onClick={pervSlide} />
                    <ArrowForwardIosIcon className='arrowBtn' onClick={nextSlide} />
                </ArrowContainer>
            </HeroWrapper>
        </HeroSection>
    )
}
const HeroSection = styled.section`
    height:100vh;
    max-height:1100px;
    position: relative;
    overflow:hidden;
`

const HeroWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeroSlide = styled.div`
    z-index:1;
    width:100%;
    height:100%;
    
    
    `

const HeroSlider = styled.div`
    position: absolute;
    top:0; 
    left: 0;
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    &::before{
        content: '';
        position: absolute;
        left:0;
        bottom: 0;
        width:100%;
        height:100vh;
        background-color:rgba( 0,0,0,0.3 );
        z-index:2;
    }
`


const HeroImage = styled.img`
    width:100vw;
    height:100vh;
    object-fit:cover;
    position: absolute;
    top: 0;
    left: 0;
    
`
const HeroContent = styled.div`
    position:relative;
    z-index:10;
    display:flex;
    flex-direction:column;
    max-width:1400px;
    width:calc(100% - 100px);
    color:#fff;
    h1{
        font-size:clamp(1rem, 8vw, 4rem);
        font-weight:400;
        text-transform:uppercase;
        text-shadow:0 0 20px rgba(0 ,0,0,.7);
        text-align:left;
        margin-bottom:0.8rem;
    }
    p{
        margin-bottom:.5rem;
        text-shadow:0 0 20px rgba(0 ,0,0,.7);
    }
`
const ArrowContainer = styled.div`
    position: absolute;
    bottom:50px;
    right:50px;
    z-index:10;
    .arrowBtn{
        /* font-size:2rem; */
        padding:10px;
        margin-right:10px;
        text-align:center;
        height:50px;
        width:50px;
        color: #fff;
        cursor: pointer;
        background-color:#000d1a;
        border-radius:50px;
        transition: .3s;
        user-select:none;
        &:hover{
            background:#cd853f;
            transform:scale(1.04)
        }

    }
`


export default Hero
