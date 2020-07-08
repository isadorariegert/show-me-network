
let cont =  true

document.addEventListener('mouseleave', function (){

    if(cont){
        const modal =document.getElementById('myModal')
        modal.style.display = "block";
        cont= false;
        console.log(cont)
    }


})
function fechar(){

    const modal =document.getElementById('myModal')
    modal.style.display = "none"
    console.log(cont)

}
