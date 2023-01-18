let x=0;
let y=0;
let mx=0;
let my=0;
let logoEl=document.getElementById('logo');

let score=0;
let time=0;
let dead=false;

let dx=0;
let dy=0;

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}

window.onmousemove=(ev)=>{
    mx=ev.clientX-40;
    my=ev.clientY-20;
}

function game() {
    if (score) return;
    logoEl.style.position='fixed';
    document.getElementById('score').style.display="inline"
    setInterval(()=>{
        time++;

        if (!dead) {
            x+=(mx-x)*(score/10000);
            y+=(my-y)*(score/10000);
    
            let slope=(my-y)/(mx-x);
            logoEl.style.transform=`rotate(${Math.atan(slope)/Math.PI*180}deg) scaleX(${(mx-x<0?-1:1)})`
            score++;

        } else {
            y=dy+Math.sin(time/10)*15;
            logoEl.style.transform=`rotate(0deg) scaleX(2) scaleY(2)`
            // x=dx+Math.sin(time/1000)*20;
        }

        logoEl.style.left=`${x}px`;
        logoEl.style.top=`${y}px`;

        document.getElementById('score').innerText=`Score: ${score}`;
    

        if (mx+10>x && mx-40<x && my+20>y && my-20<y && score>60 && !dead) {
            dx=x;
            dy=y;
            dead=true;
            document.getElementById('dead').style.display="block";
        }

    },1000/60)
}