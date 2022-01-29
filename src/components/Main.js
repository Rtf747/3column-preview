import styled from 'styled-components';
import Card from './Card';
import sedansImage from '../images/icon-sedans.svg';
import suvsImage from '../images/icon-suvs.svg';
import luxuryImage from '../images/icon-luxury.svg';

const sedansParagraph =
 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.';

const suvsParagraph =
 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.';

const luxuryParagraph =
 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.';

const sedansLink = 'https://reactjs.org/';
const suvsLink = 'https://angular.io/';
const luxuryLink = 'https://vuejs.org/';

const Grid = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr 1fr;
 font-family: 'Lexend Deca', sans-serif;
 font-size: 15px;
 margin: 3rem 1rem 3rem 1rem;

 @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
 }

 @media (min-width: 1024px) {
  grid-template-columns: 300px 300px 300px;
 }
`;
const Main = () => {
 const colorSedans = 'rgb(226,133,37)';
 const colorSUVS = 'rgb(1,105,114)';
 const colorLuxury = 'rgb(0,64,63)';

 return (
  <>
   <Grid className='grid'>
    <Card
     image={sedansImage}
     title='SEDANS'
     paragraph={sedansParagraph}
     link={sedansLink}
     color={colorSedans}
    />
    <Card
     image={suvsImage}
     title='SUVS'
     paragraph={suvsParagraph}
     link={suvsLink}
     color={colorSUVS}
    />
    <Card
     image={luxuryImage}
     title='LUXURY'
     paragraph={luxuryParagraph}
     link={luxuryLink}
     color={colorLuxury}
    />
   </Grid>
  </>
 );
};

export default Main;
