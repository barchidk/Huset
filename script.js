window.addEventListener("DOMContentLoaded", getData);


function getData() {
    console.log("getData")
    fetch("http://camelsaidwhat.com/T9WP/wp-json/wp/v2/huset-event/?per_page=100&_embed")
        .then(res => res.json())
        .then(handleData)
}

function handleData(myData) {
    //console.log(myData);
    myData.forEach(showPost)
}

function showPost(post) {
    if (
        //post.categories.indexOf(7) != -1 ||
        post.categories.indexOf(98) != -1
        //post.categories.indexOf(9) != -1
    ) {
        console.log(post)

        const template = document.querySelector(".postTemplate").content;
        const postCopy = template.cloneNode(true);

        const h2 = postCopy.querySelector("h2");
        h2.textContent = post.title.rendered;

        const h3 = postCopy.querySelector("h3");
        h3.innerHTML = post.event_date;
        
        const h4 = postCopy.querySelector("h4");
        h4.innerHTML = post.location;

        const p = postCopy.querySelector("p");
        p.innerHTML = post.short_description;


        const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;

        const img = postCopy.querySelector(".hero")

        img.setAttribute("src", imgPath)
        img.setAttribute("alt", "Hero" + post.title.rendered)
        
        const a = postCopy.querySelector("a");
        a.href="sub.html?id="+post.id
        const content = postCopy.querySelector("section");

        document.querySelector("#posts").appendChild(postCopy)
    }
}
