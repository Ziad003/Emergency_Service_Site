const hearts=document.getElementsByClassName('heartIcon');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const heartValue=document.getElementById('heartCount');
        heartValue.innerText=parseInt(heartValue.innerText)+1;
    })
}

let historyData=[];

let callBtns=document.getElementsByClassName('callBtn');
for(let callBtn of callBtns){

    //Alert Show
   callBtn.addEventListener('click',function(){
        let parent=callBtn.parentElement.parentElement;
        let name=parent.querySelector('p').innerText;
        let number=parent.querySelector('h1').innerText;
        
        let title=parent.querySelector('h2').innerText;
        let coin=document.getElementById("coinCount");
        if(parseInt(coin.innerText)<20){
            alert("❌ you don't have enough coins!")
            return;
        }else{
            alert(`📞 calling ${name} ${number}...`)

            //coin cut
            coin.innerText=parseInt(coin.innerText)-20;

            //Adding at history
            let data={
                name: title,
                number: number,
                time:new Date().toLocaleTimeString()

            }
            historyData.push(data);
            historyFun();

        }
   })
}



function historyFun(){
    const history=document.getElementById('historyContainer');
    history.innerText='';

    for(let data of historyData){
    const div=document.createElement('div');
    div.innerHTML=`
        <div id="histories" class="mt-2 flex justify-between items-center p-4 bg-[#fafafa] rounded-lg">
                <div id="serviceInfo">
                    <p id="serviceName" class="text-[18px] font-semibold">
                        ${data.name}
                    </p>
                    <p class="serviceNumber text-gray-600 text-[18px]">
                        ${data.number}
                    </p>
                </div>

                <div id="serviceTime">
                    <p class="text-[18px]">
                        ${data.time}
                    </p>
                </div>
            </div>
    `
    history.appendChild(div);
}
}