$(function () {
  $(".multiple-items").not(".slick-initialized").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
// function displaySearch() {
//   let type = $("#searchInput").data("type");
//   if (type == "active") {
//     $("#searchInput").data("type", "inactive");
//     $("#searchInput").hide(500);
//   } else {
//     $("#searchInput").data("type", "active");
//     $("#searchInput").show(500);
//   }
// }
// $(document).on("click", "#btnSearch", function () {
//   displaySearch();
// });
// window.onload = function () {
//   $("#searchInput").data("type", "inactive");
//   $("#searchInput").hide();
// };
// var users =
//   localStorage.getItem("users") == null
//     ? []
//     : JSON.parse(localStorage.getItem("users"));
// function checkLogin() {
//   let username = $("#username").val();
//   let password = $("#password").val();
//   let checklst = [];
//   for (let item of users) {
//     if (item.username === username && item.password === password) {
//       checklst.push(item);
//       break;
//     }
//   }
//   if (checklst.length == 0) {
//     if (
//       confirm("username or password not valid? do you wanna login instead?") ==
//       true
//     ) {
//       $("#LoginModal").modal("hide");
//       $("#SignUpModal").modal("show");
//     } else {
//       return;
//     }
//   }
// }
// function signUp() {
//   if ($("#signup-username").val() == "") {
//     alert("invalid username!");
//     return;
//   }
//   if ($("#signup-password").val() == "") {
//     alert("invalid password!");
//     return;
//   }
//   if ($("#confirm-signup-password").val() == "") {
//     alert("unmatched password!");
//     return;
//   }
//   let user = {
//     username: $("#signup-username").val(),
//     password: $("#signup-password").val(),
//   };
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));
//   if (confirm("sign up completed! do you wanna login?") == true) {
//     $("#SignUpModal").modal("hide");
//     $("#LoginModal").modal("show");
//   }
// }
$(document).on("click", "#btnLogin", function () {
  checkLogin();
});
$(document).on("click", "#btnSignup", function () {
  signUp();
});
