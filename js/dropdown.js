
function drop_adaptiv(){
    document.querySelector(".drop_adaptiv").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function inputPrice(){
    let a = document.querySelector(".value_calck_price");
    let b = document.querySelector(".slider_2");
    a.textContent = b.value * 200000;
    if(b.value ==0){
        a.textContent = 50000
    }
}
function inputSrok(){
    let a = document.querySelector(".value_calk_srok");
    let b = document.querySelector(".slider_1");
    a.textContent = b.value;
    if(b.value < 6){
        a.textContent = 6
    }
}