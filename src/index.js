import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.css';
import Card from './Card'; 

var nome = "Stephanie Vapsys";
var cor = "Lilás";
var comida = "Lasanha";
var foto = "https://media-exp1.licdn.com/dms/image/C4D03AQH-20zUIjONqQ/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=ti6msyr6djiFhOp0tVJ7PF1q3vn6fz3A4q3ya6SsU84"
var github = "https://github.com/stevapsys";

ReactDOM.render(
  <div>
      <nav>
        <div  className="container">
          <ul>
            <li><a href="#">Página principal</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        
        <h2>Olá mundo! </h2>

        <div className="row">
        <div className="col s4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      </div>
    </div>,
  document.getElementById('root')
);
