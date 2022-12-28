const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
}


const result = document.getElementById('result');


function updateButton(){
    
    result.textContent = "Merci ! Votre demande sera traitée dans les prochains jours par notre équipe !";
}

function Valider(formu){

    if (confirm("Voulez vous vraiment envoyer votre demande ?")) {
        formu.form.reset();
        updateButton();
    }
    

}


function checkform(form) {

    console.log("wow");
    // get all the inputs within the submitted form
    var inputs = ['prenom','nom','exp','mail'];
    console.log(inputs)
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Remplissez tout");
                return false;
            }
        }
    }
    return true;
}