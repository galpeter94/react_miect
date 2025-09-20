import React from 'react';
import Paragraph from './components/Paragraphs';
import Vizsla from './images/punikutya.jpg';


//Függvény, ami jsx-et ad vissza
//JSX = HTML + JAVASCRIPT
//Mivel komponens, ezért nagybetűvel kezdjük a nevét

function FoxterrierAlkalmazas() {
  return (
    <>
    <Paragraph description='Vizsla leírása' title='Vizsla'> 
      <div>
        Ez itt a gyerek elem.
      </div>
    </Paragraph>

    <Paragraph description='Labrador leírása' title='Labrador'> 
      <img src={Vizsla} alt="" />
    </Paragraph>
    <Paragraph description='Foxterrier leírása' title='Foxterrier'/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae, doloremque maxime officia, deleniti expedita et vitae nesciunt aperiam voluptates hic nisi voluptas ipsa aliquid suscipit quisquam doloribus numquam magni?</p>
    </>
    
  );
}

export default FoxterrierAlkalmazas;
