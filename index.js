const hearts=document.getElementsByClassName('heartIcon');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const heartValue=document.getElementById('heartCount');
        heartValue.innerText=parseInt(heartValue.innerText)+1;
    })
}