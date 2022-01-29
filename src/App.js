import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

 body{
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 95%);
  background-color: rgb(242,242,242);
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
}

.grid > section:nth-child(1) {
border-top-left-radius: 10px;
border-top-right-radius: 10px;

  @media (min-width: 768px) {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
  } 
}

.grid > section:nth-child(3) {
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

  @media (min-width: 768px) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 0px;
  } 
}
`;

function App() {
 return (
  <>
   <GlobalStyle />
   <Main />
  </>
 );
}

export default App;
