function horloge(){
let date=new Date();
let heure=date.getHours();
let seconde=date.getSeconds();
let minutte=date.getMinutes();

if(seconde<10){seconde='0'+seconde;}
if(minutte<10){minutte='0'+minutte;}
if(heure<10){heure='0'+heure;}
afficher= heure +':'+ minutte +':'+ seconde;

document.getElementById('heuree').innerHTML=afficher;
}


window.setInterval(horloge,1000);   