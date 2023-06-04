
//isim bilgisi:

let id=prompt("Lütfen kullanici id'nizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${id}`;

function time(){
    
    const date=new Date;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    
    let day =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let dayName = day[date.getDay()]
    
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`;
}

setInterval(time,1000);