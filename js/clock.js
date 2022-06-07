const myName = prompt("Lütfen Adınızı Giriniz:","");
document.querySelector("#myName").innerHTML = myName;
setTimeout(showTime);
function showTime(){
    // Gunler listesi olusturduk
    const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    // Yeni bir date nesnesi olusturduk
    const date = new Date();
    // Gunler listesindem bu gunu çektik
    let day = days[date.getDay()];
    let thisDay = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${day}`;
    document.querySelector("#myClock").innerHTML = thisDay;
    setTimeout(showTime, 1000);
}