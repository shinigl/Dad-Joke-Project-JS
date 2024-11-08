const joke = document.getElementById('joke');
const jokeButton = document.getElementById('btn');
const shareTwitter = document.getElementById('share-twitter');
const shareFacebook = document.getElementById('share-facebook');
const shareWhatsApp = document.getElementById('share-whatsapp');



async function fetchJoke() {
    let API = 'https://api.api-ninjas.com/v1/dadjokes'

    let header = {
        headers: { 'X-Api-Key': '9raQ+d2yDMHXn0i+c13/0A==sw0YqFrpPoVF8w5B' }
    }

    try {
        let response = await fetch(API,header); //fetch jokes from API server
        let data = await response.json();
        console.log(data);
        const jokeText = `${data[0].joke}🤣`;
        joke.innerText = jokeText;

    }
    catch (error) {
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