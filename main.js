

function Add(){
    let inputValue = document.getElementById("input").value;
    //axali paragrapi//
     var newParagraph = document.createElement("span");
     var nextLine = document.createElement("br");
     

   let btn = document.createElement("button");
     btn.append("X")


    //textis sheqmna //
     var textNode = document.createTextNode(inputValue); 
     newParagraph.className="List"
     //textis chacera //
     newParagraph.appendChild(textNode);
     //damateba // 
      document.getElementById("Todo").appendChild(newParagraph).append(btn);
    // delete Element //
         btn.onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      
}