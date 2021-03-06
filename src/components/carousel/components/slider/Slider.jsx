import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  align-self: flex-start;
  margin: 0;
  padding: 0;
  
  .slick-prev, .slick-next {
    bottom: 0;
    height: 30px;
    margin: auto;
    transform: initial;
    top: 0;
    width: 30px;
    z-index: 50;
    
    &:before {
      font-size: 2.25rem;
      color: ${({ backgroundArrows }) => backgroundArrows};
    }
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    height: 197px;
    margin: 16px;
    object-fit: cover;
    width: 298px;
  }
`;

const Slider = ({ backgroundArrows, children }) => (
  <Container backgroundArrows={backgroundArrows}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
