const POP_UP = document.getElementById('popUp');
let biblioteka = [];

document.getElementById('pievienotPieIepirkumuSaraksta').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('pievienotListam').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let produkts = {nosaukums: nosaukums.value, daudzums: daudzums.value};

    nosaukums.value = "";
    daudzums.value = "";

    biblioteka.push(produkts);

    console.log(biblioteka);

})


function render() {
    let plaukts = document.getElementById('plaukts');
    
}