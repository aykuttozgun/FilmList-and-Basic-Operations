class Storage{


    static addFilmsToStorage(newFilm){
        let films=this.getFilmsToStorage();
        
        films.push(newFilm);
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static getFilmsToStorage(){
    
        let films;
    
        if(localStorage.getItem("films")===null){
            films=[];
        }
        else{
            films=JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    }
    
    static LoadFilmsFromStorage(){
        let films=JSON.parse(localStorage.getItem("films"));
    
        return films;
    }
    
    static deleteFilmFromStorage(element){
        let filmName=element.parentElement.previousElementSibling.previousElementSibling.textContent;
    
        let films=this.getFilmsToStorage();
        films.forEach((element,index) => {
            if(element.title === filmName){
    
                 films.splice(index,1);
            }
            
        });
        
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static deleteAllFilmFromStorage(){
    
        localStorage.removeItem("films");
    }
}


