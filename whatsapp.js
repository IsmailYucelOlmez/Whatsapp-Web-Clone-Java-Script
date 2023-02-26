var chatProfile=document.querySelector("#chat-profile");
var chatPanel=document.querySelector(".container-right-content");
var chatPersonName=document.querySelector("#person-name");
var person1=document.querySelector("#p-1");
var person2=document.querySelector("#p-2");
var person3=document.querySelector("#p-3");
var person4=document.querySelector("#p-4");
var person5=document.querySelector("#p-5");
var person6=document.querySelector("#p-6");
var personSection1=document.querySelector("#ps-1");
var personSection2=document.querySelector("#ps-2");
var personSection3=document.querySelector("#ps-3");
var personSection4=document.querySelector("#ps-4");
var personSection5=document.querySelector("#ps-5");
var personSection6=document.querySelector("#ps-6");
var inputLeft=document.querySelector("#input-left");
var searchIcon=document.querySelector(".search-icon");
var persons=document.querySelector(".persons"); 
var containerLeft=document.querySelector(".container-left");            
var chatBox=document.querySelector(".chat-box");
var messageInput=document.querySelector("#enter-text");
var personSearchIcon=document.querySelector("#person-search");
var containerRight=document.querySelector(".container-right");
var containerLeft=document.querySelector(".container-left");
var container=document.querySelector(".container");
var searchSide=document.querySelector(".search-side");
var closeIcon=document.querySelector("#x-icon");
var leftSıde=document.querySelector(".container-left-side");
var profileIcon=document.querySelector("#show-profil-info");
var backButton=document.querySelector("#back-button");




 function showChat(){
    chatPanel.classList.remove("hide");
    chatProfile.classList.remove("hide");
    isClick(personSection1,person1);
    isClick(personSection2,person2);
    isClick(personSection3,person3);
    isClick(personSection4,person4);
    isClick(personSection5,person5);
    isClick(personSection6,person6);
    

 }  
    

function isClick(personSection,person){
    personSection.addEventListener("click",function(){
        chatPersonName.textContent=person.textContent;
    })
}
function changeIcon(){
  searchIcon.classList.toggle("fa-magnifying-glass");  
  searchIcon.classList.toggle("fa-arrow-left"); 
     
}
function filter(){
     persons.classList.toggle("hide");
     createAfterFilter();
}


function createAfterFilter(){

    createAfterFilter=function(){};
          
    const afterFilter=document.createElement("div");
    const afterFilterInner=document.createElement("div");
    const resultText=document.createElement("p");
    const resultCon=document.createElement("a");
    afterFilter.style.height="560px";
    afterFilter.style.display="flex";
    afterFilter.style.justifyContent="center";
    afterFilter.style.alignItems="center";
    resultCon.innerText="clear filter";
    resultCon.style.color="blue";
    resultCon.addEventListener("click",filter);
    resultCon.style.cursor="pointer";
    resultText.innerText="No unread chats";
    resultText.style.marginBottom="10px";
    resultText.style.color="#fff";
        
    
    afterFilterInner.appendChild(resultText);
    afterFilterInner.appendChild(resultCon);
    afterFilter.appendChild(afterFilterInner)
    containerLeft.appendChild(afterFilter);
    
}
messageInput.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        sendMessage();
    }
})

const timer=new Date();
var hour=timer.getHours();
if(hour<10){
  hour="0"+hour;
}
var minute=timer.getMinutes();
if(minute<10){
    minute="0"+minute;
}

function sendMessage(){
    const messageBox=document.createElement("div");
    messageBox.classList.add("my-message");
    const messageText=document.createElement("p");
    messageText.classList.add("message-text");
    messageText.textContent=messageInput.value;
   
    const messageTime=document.createElement("p");
    messageTime.classList.add("date");
    messageTime.textContent=hour+":"+minute;
    
    
    messageBox.appendChild(messageText);
    messageBox.appendChild(messageTime)
    chatBox.appendChild(messageBox);
    messageInput.value="";


}

personSearchIcon.addEventListener("click",function(){
    showSearchSide();
});

function showSearchSide(){
    containerRight.style.width="35%";
    searchSide.classList.remove("hide");

}
closeIcon.addEventListener("click",function(){
    closeSearchSide();
})
function closeSearchSide(){
    searchSide.classList.add("hide");
    containerRight.style.width="70%";
    
}
profileIcon.addEventListener("click",function(){
    showhideLeftSıde();
});
backButton.addEventListener("click",function(){
   showhideLeftSıde();
});

function showhideLeftSıde(){
    containerLeft.classList.toggle("hide");
    leftSıde.classList.toggle("hide")
}
