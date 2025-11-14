const hearts=document.getElementsByClassName('heartIcon');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const heartValue=document.getElementById('heartCount');
        heartValue.innerText=parseInt(heartValue.innerText)+1;
    })
}

let callBtns=document.getElementsByClassName('callBtn');
for(let callBtn of callBtns){

    //Alert Show
   callBtn.addEventListener('click',function(){
        let parent=callBtn.parentElement.parentElement;
        let name=parent.querySelector('p').innerText;
        let number=parent.querySelector('h1').innerText;
        
        let coin=document.getElementById("coinCount");
        if(parseInt(coin.innerText)<20){
            alert("❌ you don't have enough coin!")
            return;
        }else{
            alert(`📞 calling ${name} ${number}...`)

            //coin cut
            coin.innerText=parseInt(coin.innerText)-20;
        }

   })
}