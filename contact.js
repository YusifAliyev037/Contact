const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const note = document.querySelector("#note");
const adress = document.querySelector("#adress");
const btn = document.querySelector("#btn");



btn.addEventListener("click", ()=>{
    const data = {fullname:`${fullName.value}`,email:`${email.value}`,phone:`${phone.value}`,note:`${note.value}`,adress:`${adress.value}`}
    email.value = '';
    phone.value = '';
    note.value = '';
    adress.value = '';
if(Object.keys(data.adress).length === 0 ){
 alert   ("Xanalari doldur!!!")
}
    
else{
   console.log(data);
}

})





