const btn1 = document.getElementById("btn");

// get reference to button element


const joke1 = document.getElementById("joke")

const apikey = "i9l/7QMHWCWWzAqHP1TPJg==wWuwXsOrzBLzhpie"; // API key
const option = {
    method: "GET",
    headers:{
        "X-Api-Key": apikey,
    },
}; // HTTP request options, including API key in headers
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"; // API endpoint

async function getjoke(){
    try {
        joke1.innerText = "update the joke wait a second"
    btn1.Disabled = true;
    btn1.innerText = "loading...."

    const response = await fetch(apiURL, option); // send HTTP request to API endpoint
    const data = await response.json(); // parse response as JSON
    joke1.innerText = data[0].joke;
    btn1.Disabled = false;
    btn1.innerText = "tell me a joke"
        
    } catch (error) {
        joke1.innerText = "try again later";
        btn1.Disabled = false;
        btn1.innerText = "tell me a joke"
        console.log(error)
        
    }
}

btn1.addEventListener("click", getjoke); // add event listener to button



//https://github.com/SANZU0007/API-REPO--NURKIES.git
//https://wonderful-conkies-14779d.netlify.app





