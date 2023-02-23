let movieInfoDesc=document.querySelector("#movieInfo");

function movieDescription(movieId){

    let url=` https://www.omdbapi.com/?apikey=915cbc57&i=${movieId}`
      movieInfoDesc.innerHTML="";
   
     // let url = "https://www.omdbapi.com/?s=" +movieId+ "&apikey=915cbc57&i=";
     fetch(url).then(response=>response.json()).then((jsonData)=>{
    //    console.log(jsonData);
       let movieContainerElement=document.createElement("div");
       movieContainerElement.className="movieCardInfo";
   
       let movieInfoPoster=document.createElement("img");
       movieInfoPoster.src=jsonData.Poster;
       movieInfoPoster.className="movieInfoImage"
       
       let movieInfoTitle=document.createElement("h2")
       movieInfoTitle.innerHTML=`Title: ${jsonData.Title}`;
       movieInfoTitle.className="infoTitle";

       let movieInfoDir=document.createElement("h4")
       movieInfoDir.innerHTML=`Directed By : ${jsonData.Director}`;
       movieInfoDir.className="infoTitle"

       let movieInfoWriter=document.createElement("p")
       movieInfoWriter.innerHTML=`Writer: ${jsonData.Writer}`;
   
       
       // console.log(jsonData.Title);
       // console.log(jsonData.Director);
       movieContainerElement.appendChild(movieInfoPoster);
       movieContainerElement.appendChild(movieInfoTitle);
       movieContainerElement.appendChild(movieInfoDir);
       movieContainerElement.appendChild(movieInfoWriter);
       movieInfoDesc.appendChild(movieContainerElement);
     });
    
   
   }
   let id='tt0295297';
   movieDescription(id);