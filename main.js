menuListArray = ["Pizza Vegetariana", "Pizza De Frango", "Pizza Portugesa", "Pizza Quatro Queijos", "Pizza De Calabresa"];

function getMenu(){
    var htmldata = "";  
    menuListArray.sort();
    for(var i=0;i<menuListArray.lenght;i++){
        htmldata=htmldata+menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML=htmldata;
}
function addItem(){
    var htmldata;
    varimgtags = '<img id = "img1" src = "images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldat=""
    for(var i=0;i<menuListArray.lenght;i++) {
     htmldata=htmldata+menuListArray[i] + '<br>' 
    }
    document.getElementById("displayAddedMenu").innerHTML=htmldata;
}
function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}