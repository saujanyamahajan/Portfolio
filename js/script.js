let input = document.querySelector("#inp")
let ul = document.querySelector("#list")

input.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        let task = e.currentTarget.value;
        let li = document.createElement("li");
        li.innerText = task;


        li.addEventListener("dblclick", function (e) {
            e.currentTarget.remove();
        });


        ul.append(li);
        e.currentTarget.value = "";
    }
})


 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
