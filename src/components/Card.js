import styled from 'styled-components';
/* thats stranges styles is for the border of each corner */
const Container = styled.section`
 display: flex;
 flex-direction: column;
 background-color: ${({ color }) => color};
`;

const Image = styled.img`
 max-width: 20%;
 max-height: auto;
 width: auto;
 height: auto;
 margin-top: 2.5rem;
 margin-left: 15%;
`;

const Title = styled.h1`
 width: 50%;
 margin-top: 2rem;
 font-size: 2.5rem;
 margin-left: 15%;
 font-family: 'Big Shoulders Display', cursive;
 font-weight: 700;
`;

const Paragraph = styled.p`
 margin: 1.5rem 2.5rem 1.5rem 15%;
 line-height: 1.5rem;
 color: hsla(0, 0%, 100%, 0.75);

 @media (min-width: 768px) {
  margin-bottom: 30%;
 }
`;

const Anchor = styled.a`
 border-radius: 1.5rem;
 padding: 0.8rem 0.5rem 0.8rem 0.5rem;
 width: 8rem;
 text-align: center;
 margin-left: 15%;
 margin-bottom: 3.125rem;
 text-decoration: none;
 color: ${({ color }) => color};
 background-color: white;

 &:hover {
  background-color: ${({ color }) => color};
  color: white;
 }

 @media (max-width: 768px) {
  margin-top: auto;
 }
`;

const Card = ({
 image,
 title,
 paragraph,
 link,
 color,
 borderTopLeft,
 borderBottomLeft,
 borderTopRight,
 borderBottomRight,
}) => {
 return (
  <Container
   color={color}
   borderTopLeft={borderTopLeft}
   borderBottomLeft={borderBottomLeft}
   borderTopRight={borderTopRight}
   borderBottomRight={borderBottomRight}>
   <Image src={image} alt='vehicleIcon' />
   <Title>{title}</Title>
   <Paragraph>{paragraph}</Paragraph>
   <Anchor color={color} href={link}>
    Learn More
   </Anchor>
  </Container>
 );
};

export default Card;
