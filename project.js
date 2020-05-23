
const form=document.querySelector("#film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const filmTable=document.querySelectorAll(".card-body")[1];
const clearButton=document.querySelector("#clear-films");



//All Event Load

eventListeners();


function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",LoadFilmsFromStorage);
    filmTable.addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);

}

function LoadFilmsFromStorage(e){
    // storage.loadFilmStorage();
    const films=Storage.LoadFilmsFromStorage();
    UI.LoadAllFilms(films);
}

function addFilm(e){

    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        UI.displayMessages("Tüm alanları doldurun..","danger");
    }
    else{
        const newFilm= new Film(title,director,url);
        
        UI.addFilmToUI(newFilm);
        Storage.addFilmsToStorage(newFilm);
        UI.displayMessages("Kayıt Başarılı","success");
        
    }
   
    UI.clearInput(titleElement,directorElement,urlElement);

    e.preventDefault();

}

function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target);
        UI.displayMessages("Silme işlemi başarılı","success")
    }
   
}

function clearAllFilms(e){
    
        UI.deleteAllFilm();
        Storage.deleteAllFilmFromStorage();
    
}