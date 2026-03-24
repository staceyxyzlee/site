document.addEventListener("DOMContentLoaded", function(){
    fetch('/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("error in response");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            const currentURL = window.location.href;
            const links = document.querySelectorAll("a");
            links.forEach(function(link){
                if (link.href === currentURL){
                    link.classList.add("active");
                }
            })
        })
        .catch(error => {
            console.error("problem fetching navbar");
        })
})