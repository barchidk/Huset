const urlParans = new URLSearchParams(window.location.search);
const id = urlParans.get("id");
console.log(id)

fetch("http://camelsaidwhat.com/T9WP/wp-json/wp/v2/huset-event/"+id)
 .then(res => res.json())
        .then(showJazz)

function showJazz(jazz) {
    console.log(jazz)
    document.querySelector("article h1").textContent=jazz.title.rendered
    
    document.querySelector("p").innerHTML=jazz.content.rendered
    
    document.querySelector("h2").textContent=jazz.price
    
    document.querySelector("h3").textContent=jazz.event_date
    
    document.querySelector("h4").textContent=jazz.location
        
    

    
    
    
    
    
}

