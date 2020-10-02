var score=0;
let pokemon=document.getElementById('pokemon');
let pokeball=document.getElementById('pokeball');
let canvas=document.getElementById('myCanvas');
let canvasRect=canvas.getBoundingClientRect();
console.log(canvasRect);
var arr=[15];
window.addEventListener('keydown', function () {
    let pokemonSpeed = 10;
    let pokemonRect = pokemon.getBoundingClientRect();
    let pokeballRect=pokeball.getBoundingClientRect();
    if (event.keyCode == "39" && ((pokemonRect.x + pokemonRect.width) < window.innerWidth)) {
        pokemon.style.left = (pokemonRect.x) + pokemonSpeed + 'px';  
        check(pokemon.getBoundingClientRect());
    } 
    else if (event.keyCode == "37" && (pokemonRect.x > 0)) {
        pokemon.style.left = (pokemonRect.x) - pokemonSpeed + 'px';
        check(pokemon.getBoundingClientRect());
    }
    else if(event.keyCode == "38" && (pokemonRect.y > 0)){
        pokemon.style.top = (pokemonRect.y) - pokemonSpeed + 'px';
        check(pokemon.getBoundingClientRect());
    }
    else if(event.keyCode == "40" && ((pokemonRect.y + pokemonRect.height)<window.innerHeight)){
        pokemon.style.top = (pokemonRect.y)+ pokemonSpeed + 'px'; 
        check(pokemon.getBoundingClientRect());
    }
});
function check(pokemonPos)
{
    for(let i=0;i<arr.length;i++)
    {
        if(Math.abs(Math.floor(pokemonPos.x)-arr[i].x)<=25&&Math.abs(Math.floor(pokemonPos.y)-arr[i].y)<=25)
        {
            score+=1;
            let board=document.getElementById('score');
            board.innerHTML=score;
            let pokeballs=document.getElementsByClassName('pokeballs');
            canvas.removeChild(pokeballs[i]);
            arr.splice(i,1);
        }
    }
}
function startgame(){
    let startbtn=document.getElementById('start-btn');
    startbtn.style.display='none';
        var i=15;
        var j=0;
        while(i>1)
        {
            debugger;
            let newpokeball=pokeball.cloneNode();
            canvas.appendChild(newpokeball);
            newpokeball.classList.add("pokeballs");
            newpokeball.style.left=Math.abs(Math.floor(Math.random()* canvasRect.width-(i*i)))+'px';
            newpokeball.style.top=Math.abs(Math.floor(Math.random()* canvasRect.height-(i*i)))+70 +'px';
            newpokeball.style.margin=Math.floor(Math.random()*100)+'px';
            arr[j]=newpokeball.getBoundingClientRect();
            
            j++;
            i--;
        }
            setInterval(function(){
                let newpokeball=pokeball.cloneNode();
                canvas.appendChild(newpokeball);
                newpokeball.classList.add("pokeballs");
                newpokeball.style.left=Math.abs(Math.floor(Math.random()* canvasRect.width-(i*i)))+'px';
                newpokeball.style.top=Math.abs(Math.floor(Math.random()* canvasRect.height-(i*i)))+'px';
                newpokeball.style.margin=Math.floor(Math.random()*100)+'px';
                arr.push(newpokeball.getBoundingClientRect());
                console.log(arr);
            },2000);
           
}