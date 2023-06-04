let menubtn=document.getElementById('menu-btn');
let navbar=document.querySelector('.navbar-container');

menubtn.onclick=()=>{
    navbar.classList.toggle('open-menu');
}

let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";
});

nextbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 417;
});

backbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 417;
});

let contactbtn1=document.getElementById('contact-btn-1');
let contactbtn2=document.getElementById('contact-btn-2');
let closebtn=document.getElementById('close-form');

contactbtn1.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
contactbtn2.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
}
closebtn.onclick=()=>{
    document.getElementById('form-popup').style.display="none";
}

let contactform=document.getElementById('form-popup');
let name1=document.getElementById('name1');
let email1=document.getElementById('email1');
let mobile1=document.getElementById('mobile1');
let comment1=document.getElementById('comment1');
window.onclick = function(event){
    if (event.target == contactform)
    {
        contactform.style.display = "none";
        name1.value='';
        email1.value='';
        mobile1.value='';
        comment1.value='';
    }
}

var submitbtn=document.getElementById('submitbtn');
  var submitbtnForm=document.getElementById('formid');
  submitbtn.addEventListener('click',function(e) {
    e.preventDefault();
    var senderName=document.getElementById('name').value;
    var senderEmail=document.getElementById('email').value;
    var senderMobile=document.getElementById('mobile').value;
    var senderComment=document.getElementById('comment').value;
    var body= 'Name: '+ senderName + '<br>Mail Id: ' + senderEmail + '<br>Number: ' + senderMobile + '<br>Message: '+ senderComment;
    if(senderName!='' && senderEmail!=''  &&senderMobile!='' && senderComment!=''){
    Email.send({
        SecureToken : "909a4ac7-785c-41be-abe5-1c1e983c5022",
        To : 'sravya6051@gmail.com',
        From : "saviandemo@gmail.com",
        Subject : "Enquiry Request - Grandthum",
        Body : body
    }).then(
        Swal.fire({
              title: 'Success',
              text: 'Your Enquiry is Successful',
              confirmButtonColor: '#3085d6',
              icon: 'success',
              allowOutsideClick:false,
              allowEscapeKey:false
              }).then((result) => {
              if (result.isConfirmed) {
                 submitbtnForm.submit();
                 window.location.href="index.html";
              }
              })  
    );}
  });

  var submitbtn1=document.getElementById('submitbtn1');
  var submitbtn1Form=document.getElementById('formid1');
  submitbtn1.addEventListener('click',function(e) {
    e.preventDefault();
    var senderName1=document.getElementById('name1').value;
    var senderEmail1=document.getElementById('email1').value;
    var senderMobile1=document.getElementById('mobile1').value;
    var senderComment1=document.getElementById('comment1').value;
    var body1= 'Name: '+ senderName1 + '<br>Mail Id: ' + senderEmail1 + '<br>Number: ' + senderMobile1 + '<br>Message: '+ senderComment1;
    if(senderName1!='' && senderEmail1!=''  &&senderMobile1!='' && senderComment1!=''){
    Email.send({
        SecureToken : "909a4ac7-785c-41be-abe5-1c1e983c5022",
        To : 'sravya6051@gmail.com',
        From : "saviandemo@gmail.com",
        Subject : "Enquiry Request - Grandthum",
        Body : body1
    }).then(
        Swal.fire({
              title: 'Success',
              text: 'Your Enquiry is Successful',
              confirmButtonColor: '#3085d6',
              icon: 'success',
              allowOutsideClick:false,
              allowEscapeKey:false
              }).then((result) => {
              if (result.isConfirmed) {
                 submitbtn1Form.submit();
                 window.location.href="index.html";
              }
              })  
    );}
  });

  var submitbtn2=document.getElementById('submitbtn2');
  var submitbtn2Form=document.getElementById('formid2');
  submitbtn2.addEventListener('click',function(e) {
    e.preventDefault();
    var senderName2=document.getElementById('name2').value;
    var senderEmail2=document.getElementById('email2').value;
    var senderMobile2=document.getElementById('mobile2').value;
    var senderComment2=document.getElementById('comment2').value;
    var body2= 'Name: '+ senderName2 + '<br>Mail Id: ' + senderEmail2 + '<br>Number: ' + senderMobile2 + '<br>Message: '+ senderComment2;
    if(senderName2!='' && senderEmail2!=''  &&senderMobile2!='' && senderComment2!=''){
    Email.send({
        SecureToken : "909a4ac7-785c-41be-abe5-1c1e983c5022",
        To : 'sravya6051@gmail.com',
        From : "saviandemo@gmail.com",
        Subject : "Enquiry Request - Grandthum",
        Body : body2
    }).then(
        Swal.fire({
              title: 'Success',
              text: 'Your Enquiry is Successful',
              confirmButtonColor: '#3085d6',
              icon: 'success',
              allowOutsideClick:false,
              allowEscapeKey:false
              }).then((result) => {
              if (result.isConfirmed) {
                 submitbtn2Form.submit();
                 window.location.href="index.html";
              }
              })  
    );}
  });
//   contact@savianmoney.com