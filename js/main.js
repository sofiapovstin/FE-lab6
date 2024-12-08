const btn = document.getElementsByClassName('btn_download')[0];

async function getJson(url) {
    let res = await fetch(url)
    return await res.json();
}

btn.addEventListener("click", async () => {
    getJson("https://randomuser.me/api?results=5").then((res) => {
        setValueToHtml(res.results);
    })
});

function setValueToHtml(users){
    const divs = document.getElementsByClassName('box');

    for (let i = 0; i < users.length; i++) {
        divs[i].querySelector('img').src = users[i].picture.large;
        divs[i].querySelectorAll('p')[0].innerHTML = "City: " + users[i].location.city;
        divs[i].querySelectorAll('p')[1].innerHTML = "Postcode: " + users[i].location.postcode;
        divs[i].querySelectorAll('p')[2].innerHTML = "Cell: " + users[i].cell;
        divs[i].querySelectorAll('p')[3].innerHTML = "Name: " + users[i].name.first + " " + users[i].name.last;
    }
}