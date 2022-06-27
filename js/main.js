document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {

    const choice = document.querySelector('input').value
    const url = 'https://mcu-api-simple.herokuapp.com/api/' + choice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(url)

        document.getElementById("city-name").innerText = data.city
        
        let appearanceUl = document.getElementById("movie-appearance")
        for (var i = 0; i < data.moviesAppear.length; i++) {
            var appearance = data.moviesAppear[i];
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(appearance));
            appearanceUl.appendChild(li);
        } // end for loop
        let mentionUl = document.getElementById("movie-mention")
        if(data.moviesMention.length == 0) {
            var p = document.createElement('li');
            p.appendChild(document.createTextNode("No mentions at this time"));
            mentionUl.appendChild(p);
        } else { 
            for (var i = 0; i < data.moviesMention.length; i++) {
                var mention = data.moviesMention[i];
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(mention));
                mentionUl.appendChild(li);
            }
        } // end else
})
        .catch(err => {
        console.log(`error ${err}`)
        });
} // endget fetch