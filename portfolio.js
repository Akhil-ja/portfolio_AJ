// for side menu

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

//form validation

 const scriptURL ="https://script.google.com/macros/s/AKfycbyR517pA2cFeB1SIKiCq8hxBFspN49JCvf1Ju7jlwkAkA6K2R2HmU6iC3WnK8hVSgta/exec";
 const form = document.forms["submit-to-google-sheet"];

 form.addEventListener("submit", (e) => {e.preventDefault();
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
     .then((response) => {
       msg.innerHTML = "Information Succesfullly Sent!!";
       setTimeout(function () {
         msg.innerHTML = "";
       }, 3000);
       form.reset();
     })
     .catch((error) => console.error("Error!", error.message));
 });