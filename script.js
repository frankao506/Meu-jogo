const células = document.querySelectorAll(".célula");
let checarTurno = true;
const jogador_x = "x";
const jogador_o = "o";

document.addEventListener("click", (Event)  => {
    if(Event.target.matches(".célula")){
       jogar(Event.target.id);
    };
});

function jogar(id) {
 const célula = document.getElementById(id);
 turno = checarTurno?  jogador_x : jogador_o;
 célula.textContent = turno;
 checarTurno = !checarTurno;
 checarVencedor(turno);
}

function checarVencedor(turno){

}