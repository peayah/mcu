document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {

    const choice = document.querySelector('input').value
    const url = 'https://mcu-api-simple.herokuapp.com/api/' + choice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(url)
       
        document.getElementById("city-name").innerText = data.city
        })
        .catch(err => {
        console.log(`error ${err}`)
        });
}