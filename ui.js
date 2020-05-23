
class UI{

    static addFilmToUI(newFilm){
    

        //     //<tr>
        //     <td><img src="" class="img-fluid img-thumbnail"></td>
        //     <td></td>
        //     <td></td>
        //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        //   </tr> -->
        
            const filmList=document.querySelector("#films");
        
            filmList.innerHTML +=`
            
                <tr>
                    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                    <td>${newFilm.title}</td>
                    <td>${newFilm.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
            
            `;
        
            
        
        }
        
        static clearInput(titleElement,directorElement,urlElement){
            setTimeout(function(){
                titleElement.value="";
                directorElement.value="";
                urlElement.value="";
            },1000)
        }
        
        static displayMessages(message,type){
        
            const cardBody=document.querySelectorAll(".card-body")[0];
        
        
            const div=document.createElement("div");
        
            div.className=`alert alert-${type}`;
        
            div.textContent=message;
            
        
            cardBody.appendChild(div)
        
            setTimeout(function(){
                cardBody.removeChild(div)
            },1000);
            
            
        
        }
        
        static LoadAllFilms(films){
            films.forEach(element => {
                this.addFilmToUI(element)
            });
        }
        
        static deleteFilmFromUI(element){
        
            element.parentElement.parentElement.remove();
        }
        
        static deleteAllFilm(){
        
            const table=document.querySelector(".table.table-dark");
            console.log(table)
            table.innerHTML="";
        }
        
}


