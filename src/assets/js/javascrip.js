// import $ from "jquery";
const getAllUrlParams = () => {
  console.log("lighbox");
  // this.$el.querySelector("p").style.color = "red";
  console.log(document.querySelector(".grid"));
  // console.log(document.getElementById("grid"));
  // console.log(this.$refs.grid);
  document.querySelector("p").style.backgroundColor = "red";
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demo").innerHTML = myFunction(4, 3);
  class User {
    constructor(id, username, sallery) {
      this.i = id;
      this.u = username;
      this.s = sallery;
    }
  }
  let userone = new User(100, "mohamed", 5000);
  console.log(userone.u);
  var myElement = document.getElementById("main"),
    myNote = document.getElementById("notice");
  myElement.onclick = function () {
    "use strict";
    myNote.textContent = "you clicked on myElement";
  };
};

export default getAllUrlParams;
/* import getAllUrlParams from "@/assets/js/javascrip.js"; */
/* vue template */
// created() {
//   this.urls = getAllUrlParams();
// },
// methods: {
//   myFunctionClick: function () {
//     this.$querySelector("p").style.color = "pink";
//   },
// },
