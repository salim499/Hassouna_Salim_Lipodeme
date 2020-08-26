import {ListGroup,ButtonGroup, Card} from 'react-bootstrap'
import React from 'react';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components'

function App() {
  const [compteur, setCompteur]=useState(0)
  const [affichage, setAffichage]=useState(true)
  const [state1, setState1]=useState(["neutre","false"])
  const [state2, setState2]=useState(["neutre","false"])
  const [state3, setState3]=useState(["neutre","false"])
  const [state4, setState4]=useState(["neutre","false"])
  const [state5, setState5]=useState(["neutre","false"])
  const [state6, setState6]=useState(["neutre","false"])
  const [state7, setState7]=useState(["neutre","false"])

  function fonctionRefaireTest(){
    setCompteur(0)
    setAffichage(true)
    setState1(["neutre","false"])
    setState2(["neutre","false"])
    setState3(["neutre","false"])
    setState4(["neutre","false"])
    setState5(["neutre","false"])
    setState6(["neutre","false"])
    setState7(["neutre","false"])
  }

  function response1(e){
  if(state1[1]==="false"){
    if(e.target.value==="oui"){
        setState1(["oui","true"])
        setCompteur(compteur+1)
      }else{
        setState1(["non","true"])
      }
    }
  }

  function response2(e){
    if(state2[1]==="false"){
      if(e.target.value==="oui"){
          setState2(["oui","true"])
          setCompteur(compteur+1)
        }else{
          setState2(["non","true"])
      }
    }
  }
  function response3(e){
    if(state3[1]==="false"){
      if(e.target.value==="fréquent"){
          setState3(["fréquent","true"])
        }else{
          setState3(["non","true"])
          setCompteur(compteur+1)
      }
    }
  }
  function response4(e){
    if(state4[1]==="false"){
      if(e.target.value==="oui"){
          setState4(["oui","true"])
        }else{
          setState4(["non","true"])
          setCompteur(compteur+1)
      }
    }
  }
  function response5(e){
    if(state5[1]==="false"){
      if(e.target.value==="symétrique"){
          setState5(["symétrique","true"])
          setCompteur(compteur+1)
        }else{
          setState5(["asymétrique","true"])
      }
    }
  }
  function response6(e){
    if(state6[1]==="false"){
      if(e.target.value==="oui"){
          setState6(["oui","true"])
          setCompteur(compteur+1)
        }else{
          setState6(["non","true"])         
      }
    }
  }
  function response7(e){
    if(state7[1]==="false"){
      if(e.target.value==="oui"){
          setState7(["oui","true"])
          setCompteur(compteur+1)
        }else{
          setState7(["non","true"])         
      }
    }
  }
  function fonctionResultat(e){
      setAffichage(false)
  }
  return (
    <FooterContainer>
      {affichage?
      <header className="App-header">
      <Card style={{ width: '48rem', height: '55rem' }} className="footer-middle">
      <Card.Header className="header">signes cliniques du lipœdème</Card.Header><br/>
        <ListGroup.Item>
        <label>Sensation de pression douloureuse ?</label>
        <ButtonGroup aria-label="Basic example">
         {state1[0]==="neutre" || state1[0]==="oui" ?<button className="question" value="oui" onClick={response1}>oui</button>:""}
         {state1[0]==="neutre" || state1[0]==="non" ?<button className="question" value="non" onClick={response1}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>

        <label>Tâches bleues (hématomes) ?</label>
        <ButtonGroup aria-label="Basic example">
        {state2[0]==="neutre" || state2[0]==="oui" ?<button className="question" value="oui" onClick={response2}>oui</button>:""}
         {state2[0]==="neutre" || state2[0]==="non" ?<button className="question" value="non" onClick={response2}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <label>Érysipèle ?</label>
        <ButtonGroup aria-label="Basic example">
        {state3[0]==="neutre" || state3[0]==="fréquent" ?<button className="question" value="fréquent" onClick={response3}>fréquent</button>:""}
         {state3[0]==="neutre" || state3[0]==="non" ?<button className="question" value="non" onClick={response3}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <label>Gonflement présent sur le dessus du pied et/ou de la main ?</label>
        <ButtonGroup aria-label="Basic example">
        {state4[0]==="neutre" || state4[0]==="oui" ?<button className="question" value="oui" onClick={response4}>oui</button>:""}
         {state4[0]==="neutre" || state4[0]==="non" ?<button className="question" value="non" onClick={response4}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <label>Apparition de l'œdème ?</label>
        <ButtonGroup aria-label="Basic example">
        {state5[0]==="neutre" || state5[0]==="symétrique" ?<button className="question" value="symétrique" onClick={response5}>symétrique</button>:""}
         {state5[0]==="neutre" || state5[0]==="asymétrique" ?<button className="question" value="asymétrique" onClick={response5}>asymétrique</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <label>Douleurs à la pression et au toucher ?</label>
        <ButtonGroup aria-label="Basic example">
        {state6[0]==="neutre" || state6[0]==="oui" ?<button className="question" value="oui" onClick={response6}>oui</button>:""}
         {state6[0]==="neutre" || state6[0]==="non" ?<button className="question" value="non" onClick={response6}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <label>Douleur d’éclatement ?</label>
        <ButtonGroup aria-label="Basic example">
        {state7[0]==="neutre" || state7[0]==="oui" ?<button className="question" value="oui" onClick={response7}>oui</button>:""}
         {state7[0]==="neutre" || state7[0]==="non" ?<button className="question" value="non" onClick={response7}>non</button>:""}
        </ButtonGroup>
        </ListGroup.Item>
        <button className="playBtn" onClick={fonctionResultat}>Voir résultats</button>
      </Card>
      </header>
    :<Card style={{ width: '43rem', height: '42rem' }} className="footer-middle">
    <Card.Header className="header">Résultats</Card.Header><br/>
    <p className="feu">Vous avez les signes cliniques du lipœdème à :<br/><br/> {((compteur*100)/7).toFixed(2)+" %"}</p><br/>
    <button className="refaire" onClick={fonctionRefaireTest}>Refaire le test</button>
    </Card>}
    </FooterContainer>
  );
}

export default App;

const FooterContainer = styled.footer`
.App-header {
  background: radial-gradient(#fecba, #ffffff); 
}
.question {
  position: relative;
  padding: 9px;
  background-color: rgb(250, 151, 37);
  display: inline-block;
  margin: 9px;
  outline: none;
  border: none;
  font-size: 0.9em;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border-radius: 3.6px;
  cursor: pointer;
}
.question:hover {
   color:#ffffff;
   background-color:#aaaaaa;
}
.footer-middle {
  background: #ffffff;
  padding-top: 0.8rem;
  position: absolute;
  left: 370px;
  top: 10px;
  padding: 80px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
* {
  font-family: "Raleway", sans-serif;
}
label {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
  color: black
}
.playBtn {
  position: absolute;
  font-size: 0.97em;
  padding: 4px;
  top: 50rem;
  background-color: #123456;
  color: #ffffff;
  width: 150px;
  left: 588px;
  margin: auto;
  outline: none;
  cursor: pointer;
}
.playBtn:hover {
   color:#000000;
   background-color:#abeeef
}
.header {
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  color: rgb(255, 255, 255);
  padding: 10px;
  font-size: 1.2em;
  border-radius: 5px;
  text-align: center;
}
.feu {
  font: bold 3em Impact, sans-serif;
  text-align: center;
  letter-spacing: 2px
  color: white;
  text-shadow: 0    0   2px #fefcc9,
               1px -1px 3px #feec85,
              -2px -2px 4px #ffae34,
               2px -4px 5px #ec760c,
              -2px -6px 6px #cd4606,
               0   -8px 7px #973716,
               1px -9px 8px #451b0e;
}
.refaire {
   display:inline-block;
   padding:1.5em 3.6em;
   margin:0 0.8em 0.8em 0;
   border-radius:3em;
   box-sizing: border-box;
   text-decoration:none;
   font-family:'Roboto',sans-serif;
   font-weight:400;
   color:#FFFFFF;
   background-color:#4eb5f1;
   text-align:center;
   transition: all 0.3s;
   position: absolute;
   left: 250px;
}
.refaire:hover {
   background-color:#4095c6;
}
@media all and (max-width:30em){
   .refaire {
    display:block;
    margin:0.2em auto;
   }
  }
`
