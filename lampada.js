const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function naoEstaQuebrada() { // UM FUNÇÃO QUE INDICA QUE  NAO ESTA QUEBRADA!!
     lamp.src.indexOf()<-1
}

function lampOn () {         // UM FUNÇÃO QUE INDICA QUE A LAMPADA ESTA ON!!
    
        lamp.src = './ligada.jpg';
    }


function lampOff () {        // UM FUNÇÃO QUE INDICA QUE  A LAMPADA ESTA OFF!!
    
        lamp.src = './desligada.jpg';
        turnOnOff.textContent = 'Ligar';
}

function lampQuebrada () {       // UM FUNÇÃO QUE INDICA QUE A LAMPADA ESTA QUEBRADA!!
     lamp.src = './quebrada.jpg';
}

function lampOnOff () {       // UM FUNÇÃO QUE LIGA E DESLIGA O BOTAO !!!
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

//lamp.addEventListener ( 'dblclick', lampQuebrada );//CLICK DUPLO
//lamp.addEventListener ( 'mouseover', lampOn ); //MOUSE SOBRE
//lamp.addEventListener ( 'mouseleave', lampOff );//MOUSE FORA