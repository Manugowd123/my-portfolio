function goHome(){
    window.location.href = "home.html";
}
function saveRecruiter(e){
    e.preventDefault();

    let name = document.getElementById("rname").value;
    let contact = document.getElementById("rcontact").value;

    localStorage.setItem("recruiterName", name);
    localStorage.setItem("recruiterContact", contact);

    window.location.href = "home.html";
}
