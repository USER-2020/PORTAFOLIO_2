import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import javaImg from '../../assets/img/java.png';
import angularImg from '../../assets/img/angular.png';
import nodeImg from '../../assets/img/nodejs.png';
import sprinbootImg from '../../assets/img/springboot.png';
import html5Img from '../../assets/img/html.png';
import cssImg from '../../assets/img/css.png';
import javascriptImg from '../../assets/img/javascript.png';
import reactJsImg from '../../assets/img/react.png';
import phpImg from '../../assets/img/php.png';
// Default theme
import '@splidejs/react-splide/css';
import './styleTecnologies.css';

const tecnologies = [
    {
        id: 1,
        title: "Java",
        width: 200,
        height: 200,
        src: javaImg
    },
    {
        id: 2,
        title: "SpringBoot",
        width: 200,
        height: 200,
        src: sprinbootImg
    },
    {
        id: 3,
        title: "Angular",
        width: 200,
        height: 200,
        src: angularImg
    },
    {
        id: 4,
        title: "HTML",
        width: 100,
        height: 100,
        src: html5Img
    },
    {
        id: 5,
        title: "CSS",
        width: 100,
        height: 100,
        src: cssImg
    },
    {
        id: 6,
        title: "Javascript",
        width: 100,
        height: 100,
        src: javascriptImg
    },
    {
        id: 7,
        title: "Node.js",
        width: 200,
        height: 200,
        src: nodeImg
    },
    {
        id: 8,
        title: "React",
        width: 200,
        height: 200,
        src: reactJsImg
    },

    {
        id: 9,
        title: "PHP",
        width: 200,
        height: 200,
        src: phpImg
    },
]

const options = {
    type: 'loop',
    drag: 'free',
    perPage: 5,
    arrows: false,
    pagination: false,
    autoScroll: {
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
        speed: -1
    },

};

const Tecnolgies = () => {



    return (
        <div id='client'>
            <Splide options={options} extensions={{ AutoScroll }}>
                {tecnologies.map(slide => (
                    <SplideSlide key={slide.id}>
                        {/* <img src={`/Tecnologias/logosescalasgrises/tecnologia-${slide.id}.png`} alt={slide.name} width={slide.width} height={slide.height}/> */}
                        <img src={slide.src} alt={slide.name} width={100} className='Desktop' />
                        <img src={slide.src} alt={slide.name} width={50} className='Movil' />

                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}

export default Tecnolgies
