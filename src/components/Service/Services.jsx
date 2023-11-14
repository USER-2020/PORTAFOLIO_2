import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mis <span className="green">servicios</span>
        </h4>
        <h1>Lo que hago</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Diseño UX"}
            disc={`Creando experiencias digitales intuitivas y atractivas para mejorar la usabilidad y satisfacción del usuario.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Desarrollador backend"}
            disc={`Transformando lógica y datos en soluciones robustas. Apasionado por la eficiencia, la escalabilidad y la excelencia en el backend de aplicaciones`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Desarrollador frontend"}
            disc={`Creando interfaces dinámicas y amigables a partir de conceptos creativos. Apasionado por la estética y la usabilidad en el diseño web.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
