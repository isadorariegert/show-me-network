var target_date = new Date("2020, july, 08, 19:00:00")


setInterval(function () {
    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;


dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);
    if(segundos !=0 && horas != 0 && minutos != 0 && dias!= 0){

        document.getElementById('dia').innerHTML = dias;
        document.getElementById('hora').innerHTML = horas;
        document.getElementById('minuto').innerHTML = minutos;
        document.getElementById('segundo').innerHTML = segundos;

    }else{
        document.getElementById('dia').innerHTML = 0;
        document.getElementById('hora').innerHTML = 0;
        document.getElementById('minuto').innerHTML = 0;
        document.getElementById('segundo').innerHTML = 0;
    }

}, 1000);




