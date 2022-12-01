console.log("hey");
let movies=[
    {
        name:"Falcon and the Winter Soldier",
        des:
        "lorem Ipsum and others are true and accurate enough to produce a product",
        image:"images/slider 2.PNG"
    },
    {
        name:"Loki",
        des:
        "lorem Ipsum and others are true and accurate enough to produce a product",
        image:"images/slider 1.PNG"
    },
    {
        name:"Wanda Vision",
        des:
        "lorem Ipsum and others are true and accurate enough to produce a product",
        image:"images/slider 3.PNG"
    },
    {
        name:"Raya and the last dragon",
        des:
        "lorem Ipsum and others are true and accurate enough to produce a product",
        image:"images/slider 4.PNG"
    },
    {
        name:"Luca",
        des:
        "lorem Ipsum and others are true and accurate enough to produce a product",
        image:"images/slider 5.PNG"
    }
];

let carousel = document.querySelector('.carousel');
let sliders=[];
let slideIndex=0; // track the current slide

let createSlide=()=>{
    if(slideIndex>=movies.length)
     slideIndex=0;


// Create DOM ELEMENTS
let slide= document.createElement('div');
let imgElement=document.createElement('img');
let content=document.createElement('div');
let h1=document.createElement('h1');
let p= document.createElement('p');

// attaching all the elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
carousel.appendChild(slide);

//SETTING IMAGES 
imgElement.src=movies[slideIndex].image;
slideIndex++;

// setting element classname
slide.className='slider';
content.className='slide-content';
h1.className='movie-title';
p.className='movie-content';  // this classname helps to put the applied CSS

sliders.push(slide);

// sliding effct
if(sliders.length)
{
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
}
}

for(let i=0;i<3;i++)
{
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

// video cards
let videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(element=>{
    element.addEventListener('mouseover',()=>{
        let video=element.children[1];
        video.play();
    })

    element.addEventListener('mouseleave',()=>{
        let video=element.children[1];
        video.pause();
    })
    
})
// cards

let cardContainer = document.querySelectorAll('.card-container')
let prebtns = document.querySelectorAll('.pre-btn')
let nxtbtns = document.querySelectorAll('.nxt-btn')

cardContainer.forEach((element,i) => {
  let containerWidth = element.getBoundingClientRect().width;

  nxtbtns[i].addEventListener("click", () => {
    element.scrollLeft += containerWidth - 200
  })

  prebtns[i].addEventListener("click", () => {
    element.scrollLeft -= containerWidth + 200
  })
})

