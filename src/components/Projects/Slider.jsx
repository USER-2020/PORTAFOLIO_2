import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import attiendaProject from '../../assets/img/images/attienda.png';
import metalformProject from '../../assets/img/images/metalform.png';
import bookFriendlyProject from '../../assets/img/images/bookfriendly.png';
import atraverssiamoProject from '../../assets/img/images/cambiarNombre.png';

let data = [
  {
    img: attiendaProject,
    disc: "Permite hacer compras en el comercio electrónico ATTIENDA con su respectiva pasarela de pagos y su admin panel para el manejo amigable de tus productos y clientes, actualmente es un comercio 100% Colombiano.",
    proyecto_url_web: "https://attienda.com.co",
  },
  {
    img: metalformProject,
    disc: "Desarrollamos una Landing Page que conecta a los pioneros en el manejo del metal en la ciudad de Manizales, ampliando su identidad digital, atrayendo a más clientes y destacando sus servicios.",
    proyecto_url_web: "https://metalform.netlify.app",
  },
  {
    img: atraverssiamoProject,
    disc: "Atraverssiamo es más que un simple destino; es un desarrollo web cuidadosamente diseñado para ofrecerte una experiencia única en medio de la naturaleza colombiana. Captura la identidad digital del glamping en el Eje Cafetero.",
    proyecto_url_web: "https://attraversiamoglamping.netlify.app",
  },
  {
    img: bookFriendlyProject,
    disc: "Un álbum descriptivo en el que los nombres, las fechas de cumpleaños y las canciones favoritas de un grupo de amigos se entrelazan en una crónica emocional. Esta obra captura los momentos inolvidables, revela las conexiones especiales y celebra la singularidad de cada individuo en este círculo de amistad.",
    proyecto_url_web: "https://friendssforever.netlify.app"
  },

];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`