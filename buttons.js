let buttonBio = document.querySelector('#buttonBio');
let msg1 = document.querySelector('#set1');

buttonBio.addEventListener('click', () => { //otan pataw to koumpi Biography
    document.querySelector('#set1').style.visibility = 'visible';   //emfanise to 1o set button sto aside menu
    document.querySelector('#set2').style.visibility = 'hidden';    //kai krupse ola ta upoloipa
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set4').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#set6').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#loginform').style.visibility = 'hidden';
})

// prwimh periodos
let button_prwimh = document.querySelector('#button_prwimh');
let msg2 = document.querySelector('#message_prwimh');

button_prwimh.addEventListener('click', () => {
    document.querySelector('#message_prwimh').style.visibility = 'visible';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
})

let button_poreia = document.querySelector('#button_poreia');
let msg3 = document.querySelector('#message_poreia');

button_poreia.addEventListener('click', () => {
    document.querySelector('#message_poreia').style.visibility = 'visible';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
})

let button_teleutaia = document.querySelector('#button_teleutaia');
let msg4 = document.querySelector('#message_teleutaia');

button_teleutaia.addEventListener('click', () => {
    document.querySelector('#message_teleutaia').style.visibility = 'visible';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonPho = document.querySelector('#buttonPho');
let msg5 = document.querySelector('#set2');

buttonPho.addEventListener('click', () => {
    document.querySelector('#set2').style.visibility = 'visible';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set4').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#set6').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#loginform').style.visibility = 'hidden';
})

let button_portr = document.querySelector('#button_portr');
let msg6 = document.querySelector('#portrait_photos');

button_portr.addEventListener('click', () => {
    document.querySelector('#portrait_photos').style.visibility = 'visible';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let button_shmeiwseis = document.querySelector('#button_shmeiwseis');
let msg16 = document.querySelector('#shmeiwseis_photos');

button_shmeiwseis.addEventListener('click', () => {
    document.querySelector('#shmeiwseis_photos').style.visibility = 'visible';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let button_pho_epoxhs = document.querySelector('#button_pho_epoxhs');
let msg17 = document.querySelector('#arxeia_epoxhs');

button_pho_epoxhs.addEventListener('click', () => {
    document.querySelector('#arxeia_epoxhs').style.visibility = 'visible';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonLit = document.querySelector('#buttonLit');
let msg7 = document.querySelector('#set3');

buttonLit.addEventListener('click', () => {
    document.querySelector('#set3').style.visibility = 'visible';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set4').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#set6').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#loginform').style.visibility = 'hidden';

})

let buttonErgo = document.querySelector('#buttonErgo');
let msg8 = document.querySelector('#mythistorhmata');

buttonErgo.addEventListener('click', () => {
    document.querySelector('#mythistorhmata').style.visibility = 'visible';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonNouv = document.querySelector('#buttonNouv');
let msg9 = document.querySelector('#nouveles');

buttonNouv.addEventListener('click', () => {
    document.querySelector('#nouveles').style.visibility = 'visible';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonDihg = document.querySelector('#buttonDihg');
let msg10 = document.querySelector('#dihghmata');

buttonDihg.addEventListener('click', () => {
    document.querySelector('#dihghmata').style.visibility = 'visible';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonPoih = document.querySelector('#buttonPoih');
let msg11 = document.querySelector('#poihmata');

buttonPoih.addEventListener('click', () => {
    document.querySelector('#poihmata').style.visibility = 'visible';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonLin = document.querySelector('#buttonLin');
let msg12 = document.querySelector('#set4');

buttonLin.addEventListener('click', () => {
    document.querySelector('#set4').style.visibility = 'visible';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#set6').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#loginform').style.visibility = 'hidden';

})

let buttonAdm = document.querySelector('#buttonAdm');
let msg13 = document.querySelector('#set5');
i = 0;
buttonAdm.addEventListener('click', () => {
    document.querySelector('#set5').style.visibility = 'visible';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set4').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
    document.querySelector('#loginform').style.visibility = 'hidden';

})

let buttonBibl = document.querySelector('#buttonBibl');
let msg25 = document.querySelector('#books');

buttonBibl.addEventListener('click', () => {
    document.querySelector('#books').style.visibility = 'visible';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonDihghnata = document.querySelector('#buttonDihghnata');
let msg24 = document.querySelector('#DihghmataLinks');

buttonDihghnata.addEventListener('click', () => {
    document.querySelector('#DihghmataLinks').style.visibility = 'visible';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#AllhlographiaLinks').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonAllhlo = document.querySelector('#buttonAllhlo');
let msg23 = document.querySelector('#AllhlographiaLinks');

buttonAllhlo.addEventListener('click', () => {
    document.querySelector('#AllhlographiaLinks').style.visibility = 'visible';
    document.querySelector('#books').style.visibility = 'hidden';
    document.querySelector('#DihghmataLinks').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set5').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#shmeiwseis_photos').style.visibility = 'hidden';
    document.querySelector('#arxeia_epoxhs').style.visibility = 'hidden';
    document.querySelector('#message_teleutaia').style.visibility = 'hidden';
    document.querySelector('#message_prwimh').style.visibility = 'hidden';
    document.querySelector('#message_poreia').style.visibility = 'hidden';
})

let buttonlogin = document.querySelector('#buttonlogin');
let msg14 = document.querySelector('#loginform');

buttonlogin.addEventListener('click', () => {
    document.querySelector('#loginform').style.visibility = 'visible';
    document.querySelector('#set1').style.visibility = 'hidden';
    document.querySelector('#set2').style.visibility = 'hidden';
    document.querySelector('#set3').style.visibility = 'hidden';
    document.querySelector('#set4').style.visibility = 'hidden';
    document.querySelector('#portrait_photos').style.visibility = 'hidden';
    document.querySelector('#nouveles').style.visibility = 'hidden';
    document.querySelector('#poihmata').style.visibility = 'hidden';
    document.querySelector('#dihghmata').style.visibility = 'hidden';
    document.querySelector('#mythistorhmata').style.visibility = 'hidden';
})