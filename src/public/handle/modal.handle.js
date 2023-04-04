/* lấy phần tử modal */
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
/* thiết lập nút mở modal */
 var loginBtn = document.querySelector(".loginBtn");
 var registerBtn = document.querySelector(".registerBtn");
/* thiết lập nút đóng modal */
 var closeBtn = document.querySelectorAll('.close');
 console.log(loginModal,registerModal,loginBtn,registerBtn,closeBtn);
/* Sẽ hiển thị modal khi người dùng click vào */
loginBtn.onclick = function() {
    loginModal.style.display = "block";
 }
 registerBtn.onclick = function() {
    registerModal.style.display = "block";
 }
/* Sẽ đóng modal khi nhấn dấu x */
closeBtn[0].onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
 }
 closeBtn[1].onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
 }
/*Sẽ đóng modal khi nhấp ra ngoài màn hình*/
 window.onclick = function(event) {
   if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
   }
 }

//  Chuyen doi giua dang ky, dang nhap
// Lay nut switch
var switchLoginBtn = document.querySelector(".modal__switchLogin");
var switchRegisterBtn = document.querySelector(".modal__switchRegister");
//Xu ly khi nhan
switchLoginBtn.onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "block";
}
switchRegisterBtn.onclick = function() {
    loginModal.style.display = "block";
    registerModal.style.display = "none";
}

