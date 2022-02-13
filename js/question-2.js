// Question 2

// API Key:     fc28d25bb9a8458487040dc95d300dff

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fc28d25bb9a8458487040dc95d300dff";

const html = document.querySelector(".API");

async function getGames() {

    try {
        const apiCall = await fetch(url);
    const callResult = await apiCall.json();
    const games = callResult.results;
    html.innerHTML = "";
    for(let i = 0; i < 8; i++) {
        console.log(games[i].name);
        html.innerHTML += "<ul>" + "<li>" + "Name: " + games[i].name + "<li>" + "Rating: " + games[i].rating + "<li>" + "Amount of Tags: " + games[i].tags.length;
        }
    } catch(error) {
        console.log("An error has occured");
        html.innerHTML = dispatchError("Oh no, bad code :(");
    }
}
getGames();