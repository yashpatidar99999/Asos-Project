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
        img: "./shoes.webp",
        title: "SHOES + SNEAKS"
    },
    {
        img: "./dress.jpg",
        title: "DRESSES"
    },
    {
        img: "./top.webp",
        title: "TOPS"
    },
    {
        img: "./skirt.webp",
        title: "SKIRTS"
    },
    {
        img: "./sporty.webp",
        title: "SPORTY STUFF"
    },
    {
        img: "./asos.webp",
        title: "ASOS BRANDS"
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
        img: "./best_dressed.webp",
        title: "Best Dressed",
        desc: "Whatevet the occasion"
    },
    {
        img: "./spring.avif",
        title: "Spring Accessories",
        desc: "Ft. totes, sunnies and more!"
    },
    {
        img: "./sneakers.avif",
        title: "Sneakers",
        desc: "Summer-ready selects"
    },
    {
        img: "./nyx.webp",
        title: "NYX Exclusive",
        desc: "Buttermelts Bronzers are here"
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
        img: "./topshop.webp",
        title: "TOPSHOP",
        desc: "Understated statements",
    },
    {
        img: "./asos_edition.webp",
        title: "ASOS EDITION",
        desc: "RSVP-ready",
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