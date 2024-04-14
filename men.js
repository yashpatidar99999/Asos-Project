const sale = document.getElementById('sale');

sale.style.display = 'none';

const menu_links = document.getElementsByClassName('menu_links');

menu_links[0].addEventListener('mouseover', ()=>{
    sale.style.display = 'flex';
})

sale.addEventListener('mouseleave', ()=>{
    sale.style.display = 'none';
})


// BOX 1
const items = [
    {
        img: "./men_shoes.webp",
        title: "SHOES & SNEAKS"
    },
    {
        img: "./men_hoodie.webp",
        title: "HOODIES & SWEATS"
    },
    {
        img: "./men_trouser.webp",
        title: "TROUSERS"
    },
    {
        img: "./men_tees.webp",
        title: "TEES"
    },
    {
        img: "./smart.jpg",
        title: "SMART STUFF"
    },
    {
        img: "./men_sport.webp",
        title: "SPORTS WEAR"
    },
]

const box1_container = document.getElementById("box1_container");

items.map((item) =>{
    const box1 = document.createElement("div");
    box1.className = "box1";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title
    const title = document.createElement("h3");
    title.textContent = item.title;
    box1.appendChild(img);
    box1.appendChild(title);
    box1_container.appendChild(box1)
});

// box 2

const box2_container = document.getElementById("box2_container");

const items2 = [
    {
        img: "./denim.avif",
        title: "NEW IN: DENIM",
        desc: "Ft. jeans, jorts and more"
    },
    {
        img: "./men_dress.avif",
        title: "BEST DRESSED",
        desc: "Every occasion, covered"  
    },
    {
        img: "./sneakers.webp",
        title: "Sneakers",
        desc: "Our ummer selects"
    },
    {
        img: "./men_shirt.avif",
        title: "NEW IN: SHIRTS",
        desc: "Button-down upgrades"
    },
]

items2.map((item) =>{
    const box2 = document.createElement("div");
    box2.className = "box2";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title
    const title = document.createElement("h3");
    title.textContent = item.title;
    const desc = document.createElement('p');
    desc.textContent = item.desc
    box2.appendChild(img);
    box2.appendChild(title);
    box2.appendChild(desc);
    box2_container.appendChild(box2)
});

// box 3

const box3_container = document.getElementById("box3_container");

const items3 = [
    {
        img: "./staples.webp",
        title: "OFF-DUTY STAPLES",
        desc: "Spring styles",
    },
    {
        img: "./topman.jpg",
        title: "TOPMAN",
        desc: "Smart-ish vibes",
    },
]

items3.map((item) =>{
    const box3 = document.createElement("div");
    box3.className = "box3";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title
    const title = document.createElement("h3");
    title.textContent = item.title;
    const desc = document.createElement('p');
    desc.textContent = item.desc
    const btn = document.createElement("button")
    btn.className = "shop_now"
    btn.textContent = "SHOP NOW"
    box3.appendChild(img);
    box3.appendChild(title);
    box3.appendChild(desc);
    box3.appendChild(btn);
    box3_container.appendChild(box3)
})