

let checkBoxes = document.getElementsByClassName("checkBox");
let clearMessagesButton = document.getElementById("clear-messages")
let messages = document.getElementById("messages")


clearMessagesButton.addEventListener("click", function(event){
    let messagesContainer = document.getElementById("messages-container")
    while(messagesContainer.childElementCount > 0){
        messagesContainer.removeChild(messagesContainer.lastChild);
    }
})



for(i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener("click", function(event){
        var target = event.target
        var targetId = target.id //event.target.id

        //if the id of the target i clicked equals increase-text-size.
        //get all the elements on the webpage with the classname message.
        //then, if the target checkbox that I clicked is checked, increase all the messages font size to 25px.
        //otherwise, if it is not checked, decrease all the messages font size to 18px.
        if(targetId === "increase-text-size"){
            let messages = document.getElementsByClassName("message")
            if(target.checked){
                changeTextSize(messages, "25px")
            }else{
                changeTextSize(messages, "18px")
            }
        }else if(targetId === "dark-theme"){

        }

        


    })
}







function changeTextSize(elementsToIncreaseSize, fontSize){
    //if its an array do this.
    for(i = 0; i < elementsToIncreaseSize.length; i++){
        let currentElement = elementsToIncreaseSize[i]
        currentElement.style.fontSize = fontSize
    }

    //if its just a single element do
    
}