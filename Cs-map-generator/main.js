
console.log("Welcome in LOGS")
const btn = document.getElementById("btn");
btn.addEventListener("click", (event)=>{

    let mir = document.querySelectorAll('input[name="mirage"]:checked');
    let inf = document.querySelectorAll('input[name="inferno"]:checked');
    let dus = document.querySelectorAll('input[name="dust"]:checked');
    let nuk = document.querySelectorAll('input[name="nuke"]:checked');
    let anc = document.querySelectorAll('input[name="ancient"]:checked');
    let over = document.querySelectorAll('input[name="overpass"]:checked');
    let kah = document.querySelectorAll('input[name="cache"]:checked');
    let cob = document.querySelectorAll('input[name="cobblestone"]:checked');
    let ver = document.querySelectorAll('input[name="vertigo"]:checked');
    let tra = document.querySelectorAll('input[name="train"]:checked');


    let maps = [];


    if(mir){
        mir.forEach((checkbox) => {
            maps.push(" mirage");
        });
    }
    if(inf){
        inf.forEach((checkbox) => {
            maps.push(" inferno");
        });
    }
    if(dus){
        dus.forEach((checkbox) => {
            maps.push(" dust");
        });
    }
    if(nuk){
        nuk.forEach((checkbox) => {
            maps.push(" nuke");
        });
    }
    if(anc){
        anc.forEach((checkbox) => {
            maps.push(" ancient");
        });
    }
    if(over){
        over.forEach((checkbox) => {
            maps.push(" overpass");
        });
    }
    if(kah){
        kah.forEach((checkbox) => {
            maps.push(" cache");
        });
    }
    if(cob){
        cob.forEach((checkbox) => {
            maps.push(" cooblestone");
        });
    }
    if(ver){
        ver.forEach((checkbox) => {
            maps.push(" vertigo");
        });
    }
    if(tra){
        tra.forEach((checkbox) => {
            maps.push(" train");
        });
    }

    const random = Math.floor(Math.random() * maps.length);
     console.log(random, maps[random]);

    document.getElementById("result").innerHTML =(random, maps[random]);

}
);









    //
    // const random = Math.floor(Math.random() * maps.length);
    //
    //
    // console.log(random, maps[random]);
    //
    //
    //
    // const element= document.getElementById("result");
    // setInterval(function() {element.innerHTML  =(random, maps[random])}, 1000);
    // return 0;






//https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
