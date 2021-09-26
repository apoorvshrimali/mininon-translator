var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textIP");
var outputDiv = document.querySelector("#textOP");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/transalte/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTraslationURL(input){
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! Try again after some time")
    }

    function clickHandler(){
        var inputText = txtInput.value;
         fetch(getTraslationURL(inputText))
         .then(res =>res.json())
         .then(json=>{
             var translateText = json.contents.translated;
             outputDiv.innerText = translateText;

         })
         .catch(errorHandler)
    };

    btnTranslate.addEventListener("click", clickHandler)