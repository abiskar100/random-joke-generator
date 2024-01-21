const container = document.getElementById('jokeContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single";

async function getjoke(){
    container.style.display = "none";
    loadingIndicator.style.display = "block";

    const response = await fetch(url);

    const data = await response.json();

    container.style.display = "flex";
    loadingIndicator.style.display = "none";
    container.innerText = `${data.joke}`;
    
}

btn.addEventListener("click" , ()=>{
    getjoke();
});