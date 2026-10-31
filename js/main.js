

function getApi(){
    
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status== 200){
            var result =this.responseText;
            var ali = JSON.parse(result);
            var basket ="";
            for(var i = 0; i< ali.length; i++){ 
                
            var cartoona=  `<div class="col-md-4 test  text-center">
                                <img src="${ali[i].url}"class= "w-100">
                                <h4>${ali[i].title}</h4>
                                <h6>${ali[i].id}</h6>

                            </div>

                            `;
             basket = basket + cartoona;

            }

          document.querySelector(".text").innerHTML = basket;        


        }
    };

    xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos ',true);
    xhttp.send();
}


getApi();
