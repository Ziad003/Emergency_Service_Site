const hearts=document.getElementsByClassName('heartIcon');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const heartValue=document.getElementById('heartCount');
        heartValue.innerText=parseInt(heartValue.innerText)+1;
    })
}

let callBtns=document.getElementsByClassName('callBtn');
for(let callBtn of callBtns){
   callBtn.addEventListener('click',function(){
        let parent=callBtn.parentElement.parentElement;
        let name=parent.querySelector('p').innerText;
        let number=parent.querySelector('h1').innerText;
        alert(`📞 calling ${name} ${number}...`)
   })
}