import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Frase from './components/Frase';

function App() {

  const [frase, setFrase] = useState({});

  useEffect(() => {
    consultarApi();
  },[])

  const consultarApi = async () =>{
    const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
    const api = await fetch(url);
    const frase = await api.json();
    setFrase(frase[0])
  }

  // const [frase, setFrase] = useState(consultarApi);


  return (
    <div>
      <Contenedor>
        <Frase frase={frase} />
        <Boton onClick={consultarApi}>
          Obtener Frase
        </Boton>
      </Contenedor>
    </div>
  );
}

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;

const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif; 
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 1px solid black;  
  transition: background-size .8s ease;
  :hover{
    cursor: pointer;
    background-size: 400px; 
  }
`;

export default App;