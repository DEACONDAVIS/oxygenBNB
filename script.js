function searchfunction(){
    const fork = document.getElementById("searchB").value
    const newURL = "searchRES.html?query=" + encodeURIComponent(fork);

    if(window.location.pathname.includes("searchRES.html")){
        window.location.href = newURL;
    } else{
        window.location.href = newURL;
    }
}
function printQuery(){
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    document.getElementById("query").textContent = "Search Results for: " + '"' + query + '"';
}
window.onload = printQuery;

function submitMessage(){
    const mess = document.getElementById("message").value;
    const address = document.getElementById("senderEmail").value;
    emailjs.send("service_iehs18n", "template_bob5tkv", {
        from_email: address,
        message: mess
    })
    .then((response) => {
        alert("Your message has been sent successfully")
    })
    .catch((error) => {
        alert("There was an error in sending your message")
    });
}
function printSecret(){
    const name = document.getElementById("secretInput").value;
    document.getElementById("secret").innerHTML = name;
}

function generateSnack(){
    function getRandomindex(arr){
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    const food1 = new Array("Mashed Potatoes", "Toast", "Cinnamon Toast Crunch", "Pineapple", "Potato Chips", "Kool Aid", "Chicken Strips", "Pizza", "Pickles");
    const food2 = new Array("Nacho Cheese", "M&Ms", "Egg Salad", "Relish", "Nutella", "Maple Syrup", "Sprinkles", "Jalapenos", "Whipped cream", "Cream Cheese");
    const combo = getRandomindex(food1) + " with " + getRandomindex(food2);
    alert(combo);
}