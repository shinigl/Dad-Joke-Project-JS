const joke = document.getElementById('joke');
const jokeButton = document.getElementById('btn');
const shareTwitter = document.getElementById('share-twitter');
const shareFacebook = document.getElementById('share-facebook');
const shareWhatsApp = document.getElementById('share-whatsapp');


let API = `https://official-joke-api.appspot.com/random_joke`
async function fetchJoke(){

    try{
    let response = await fetch(API); //fetch jokes from API server
    let data = await response.json();
    console.log(data);
    const jokeText = data.setup + " " + data.punchline;
    joke.innerText = jokeText;
    
    }
    catch(error){
    console.log(error);
    }
   
}   

// Function to update share links
function updateShareLinks(jokeText) {
    // Encode the joke text for URL use
    const encodedJokeText = encodeURIComponent(jokeText);

  
    shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodedJokeText}`;

    shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedJokeText}`;

    shareWhatsApp.href = `https://wa.me/?text=${encodedJokeText}`;
}


jokeButton.addEventListener("click", fetchJoke);