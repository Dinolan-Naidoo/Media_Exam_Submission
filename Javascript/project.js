const canvas = document.getElementById('canvas4');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

//Create particle

class Particle{

    constructor(x , y, directionX , directionY , size, color)
    {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    //Method to draw individual particles

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2 , false);
        ctx.fillStyle = '#00ccff';
        ctx.fill();
        //init();
    }

    //Check particle position, mouse position , move and draw particles

    update(){
        //Is particle within canvas

        if(this.x > canvas.width || this.x < 0)
        {
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y <0)
        {
            this.directionY = -this.directionY;
        }


        //draw particle
        this.draw() ;

    }
}

//Create particle array

function init()
{
    particlesArray = [];

    //let numberOfParticles = ((canvas.height * canvas.width)/6000);
    let numberOfParticles = (60);

    for(let i = 0 ; i< numberOfParticles ; i++)
    {
        let size = (Math.random() *5) + 1;
        let x = (Math.random() * ((innerWidth - size *1) - (size *2)) +size * 2);
        let y = (Math.random() * ((innerHeight - size *1) - (size *2)) +size * 9);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#00ccff';
        

        particlesArray.push(new Particle(x , y , directionX , directionY , size , color));
    }
}




//Animation loop

function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth, innerHeight );

    for( let i = 0 ; i < particlesArray.length ; i++)
    {
        particlesArray[i].update();
    }
    
    connect();
    
}

  

//Connection of particles
function connect()
{
    let opacityValue = 1;
    for ( let a =0; a < particlesArray.length ; a++)
    {
        for(let b = a; b < particlesArray.length ; b++)
        {
             let distance = ((particlesArray[a].x - particlesArray[b].x) 
             * (particlesArray[a].x - particlesArray[b].x)) 
             + ((particlesArray[a].y - particlesArray[b].y) 
             * (particlesArray[a].y - particlesArray[b].y));

             if(distance < (canvas.width/7) * (canvas.height/7))
             {
                 opacityValue = 1 - (distance/20000);
                 ctx.strokeStyle = 'rgba(0,204,255,' + opacityValue + ')';
                 ctx.lineWidth = 1;
                 ctx.beginPath();
                 ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                 ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                 ctx.stroke();
             }
        }
    }
}

window.addEventListener('resize',
function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.height/80));
    init();
});



init();
animate();

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  header.classList.toggle('active');
}

window.onscroll = () =>{

  menu.classList.remove('bx-x');
  header.classList.remove('active'); 
}
   
  




 