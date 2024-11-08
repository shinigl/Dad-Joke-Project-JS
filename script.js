const joke = document.getElementById('joke');
const jokeButton = document.getElementById('btn');
jokeButton.addEventListener("click", fetchJoke);
let API = `https://official-joke-api.appspot.com/random_joke`
async function fetchJoke(){

    try{
    let response = await fetch(API); //fetch jokes from API server
    let data = await response.json();
    console.log(data);
    joke.textContent = data.setup + " " + data.punchline;
    }
    catch(error){
    console.log(error);
    }
   
}   

// Function to update share links
function updateShareLinks(jokeText) {
    // Encode the joke text for URL use
    const encodedJokeText = encodeURIComponent(jokeText);

    // Update Twitter share URL
    shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodedJokeText}`;

    // Update Facebook share URL
    shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedJokeText}`;

    // Update WhatsApp share URL
    shareWhatsApp.href = `https://wa.me/?text=${encodedJokeText}`;
}