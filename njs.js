function access1() {
    alert("🔒 This page is password protected!");

    let password = "";

    while (password !== "Unlimited chocolate icecream") {
        password = prompt("Enter password:");

        if (password !== "Unlimited chocolate icecream") {
            alert("❌ Wrong password! Try again.");
        }
    }

    alert("✅ Sahi password! Welcome nandu ❤️");
}window.onload = access1;
let x=document.getElementById("options");
function showfavs(){ 
    if(x.style.display=='none'){x.style.display='block';}
    else{x.style.display='none';}
}

function srchbg(){let a=document.getElementById("search").value;
    if(a=='nandu'|| a=='nandini'||a=='Nandu'||a=='Nandini'){window.location.href="images/WhatsApp Image 2026-10-02 at 5.25.39 PM.jpeg";}
    else{window.location.href="images/WhatsApp Image 2026-10-02 at 5.31.24 PM.jpeg";}
} let agg=document.getElementById("mysound2");
function giradiya(){let b=document.querySelector("#eight img");b.classList.add("click");  setTimeout(function() {
        b.src = "images/WhatsApp Image 2026-10-03 at 9.24.43 PM.jpeg";agg.play();
    }, 2000);}
   let duduimg=document.querySelector("#eight img");
    let sound = document.getElementById("mysound");

duduimg.onmouseover = function() {
    sound.play();
};
function hrt(event){let h= event.target;if(h.innerText==""){h.innerText="❤️";}else{h.innerText="";}
    if(document.getElementById("heart3").innerText=="❤️"&&document.getElementById("heart6").innerText=="❤️"&&document.getElementById("heart9").innerText=="❤️"||document.getElementById("heart1").innerText=="❤️"&&document.getElementById("heart2").innerText=="❤️"&&document.getElementById("heart3").innerText=="❤️"||document.getElementById("heart4").innerText=="❤️"&&document.getElementById("heart5").innerText=="❤️"&&document.getElementById("heart6").innerText=="❤️"||document.getElementById("heart7").innerText=="❤️"&&document.getElementById("heart8").innerText=="❤️"&&document.getElementById("heart9").innerText=="❤️"||document.getElementById("heart1").innerText=="❤️"&&document.getElementById("heart4").innerText=="❤️"&&document.getElementById("heart7").innerText=="❤️"||document.getElementById("heart2").innerText=="❤️"&&document.getElementById("heart5").innerText=="❤️"&&document.getElementById("heart8").innerText=="❤️"||document.getElementById("heart1").innerText=="❤️"&&document.getElementById("heart5").innerText=="❤️"&&document.getElementById("heart9").innerText=="❤️"||document.getElementById("heart3").innerText=="❤️"&&document.getElementById("heart5").innerText=="❤️"&&document.getElementById("heart7").innerText=="❤️")
    {document.getElementById("ten").style.display='block';}
} let num=0;
function point1(event){ let op=event.target;if(op.value=='correct'){num++;}}
function point2(event){ let op=event.target;if(op.value=='correct'){num++;}}
function point3(event){ let op=event.target;if(op.value=='correct'){num++;}}
function point4(event){ let op=event.target;if(op.value=='correct'){num++;}}
function point5(event){ let op=event.target;if(op.value=='correct'){num++;}}
function showscore(){document.getElementById("thirteen").innerText=num+document.getElementById("thirteen").innerText;document.getElementById("thirteen").style.display='block';document.getElementById("submitscore").disabled = true;}
function access(){let acs=document.getElementById("frtn").value;if(acs=='Maggi and kisses'){document.getElementById("end").style.display='block';document.getElementById("welcome").style.display='block'; document.querySelectorAll("#fifteen").forEach(function(x){
            x.style.display = 'flex';
        });}}
