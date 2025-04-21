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