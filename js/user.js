
    // Change The Content When You click on nav items //

// array of classes that We Will Change Between
var navContent =document.getElementsByClassName("user-products");

// Function to change Html between array items (Classes)
function changeNav(index){
    for (let i = 0; i < navContent.length; i++) {
        navContent[i].classList.remove("active");
    }
    navContent[index].classList.add("active")
}
// ----(-_-)----(-_-)----(-_-)----(-_-)----(-_-)----(-_-)
// Change Profile Picture

var imgDiv = document.querySelector(".res-img");
var curruntPhoto = document.querySelector("#photo");
var file = document.querySelector("#file");
var changeBtn = document.querySelector("#uploadNewImg");

file.addEventListener('change', function(){
    //this refers to file
    var choosedFile = this.files[0];
    console.log(choosedFile.name)
    localStorage.setItem('image', choosedFile.name);
    location.reload()
    // if (choosedFile) {
    //     var reader = new FileReader(); //FileReader is a predefined function of JS

    //     reader.addEventListener('load', function(){
    //         localStorage.setItem('image', reader.result);
    //         // curruntPhoto.setAttribute('src', reader.result);
    //     });

    //     curruntPhoto.src = localStorage.getItem('image');
    //     reader.readAsDataURL(localStorage.getItem('image'));
    // }
});
// ----(-_-)----(-_-)----(-_-)----(-_-)----(-_-)----(-_-)
if (localStorage.getItem('image') != undefined) {
    curruntPhoto.src = "./image/"+localStorage.getItem('image');
// console.log(565);
// location.reload()

}

