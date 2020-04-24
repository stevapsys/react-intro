import React from 'react';


var nome = "Stephanie Vapsys";
var cor = "Lilás";
var comida = "Lasanha";
var foto = "https://media-exp1.licdn.com/dms/image/C4D03AQH-20zUIjONqQ/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=ti6msyr6djiFhOp0tVJ7PF1q3vn6fz3A4q3ya6SsU84"
var github = "https://github.com/stevapsys";

class Card extends React.Component {

    render(){
        return(

            <div class="card">
            <div class="card-image">
              <img src={foto}  />
              <span class="card-title">{nome}</span>
            </div>
            <div class="card-content">
              <p><b>Cor favorita:</b> {cor}</p>
              <p><b>Comida favorita:</b> {comida}  </p>
            </div>
            <div class="card-action">
              <a href={github}>Ver github</a>
            </div>
          </div>
       
   

        );
    }
}

export default Card; 