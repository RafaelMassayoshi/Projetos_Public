const carousel = document.querySelector(".corrosel");
const slides = document.querySelectorAll(".imagem_propaganda");
const indicatorsContainer = document.querySelector(".indicators");

let index = 0;
let autoSlideInterval;

// ---------- Criar bolinhas ----------
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoSlide();
    });
    indicatorsContainer.appendChild(dot);
});

const dots = () => document.querySelectorAll(".indicators .dot");

// ---------- Função para mudar slide ----------
function goToSlide(newIndex) {
    if (newIndex === index) return;

    slides[index].classList.remove("active");
    slides[newIndex].classList.add("active");

    dots()[index].classList.remove("active");
    dots()[newIndex].classList.add("active");

    index = newIndex;
}

// ---------- Auto-slide ----------
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        const nextIndex = (index + 1) % slides.length;
        goToSlide(nextIndex);
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

// ---------- Swipe ----------
let startX = 0;
let isDragging = false;

// carousel.addEventListener("mousedown", e => {
//   startX = e.clientX;
//   isDragging = true;
//   clearInterval(autoSlideInterval);
// });

// carousel.addEventListener("mouseup", e => {
//   if (!isDragging) return;
//   handleSwipe(e.clientX);
//   isDragging = false;
//   startAutoSlide();
// });

// carousel.addEventListener("mouseleave", e => {
//   if (isDragging) {
//     handleSwipe(e.clientX);
//     isDragging = false;
//     startAutoSlide();
//   }
// });

// carousel.addEventListener("touchstart", e => {
//   startX = e.touches[0].clientX;
//   isDragging = true;
//   clearInterval(autoSlideInterval);
// });

// carousel.addEventListener("touchend", e => {
//   if (!isDragging) return;
//   handleSwipe(e.changedTouches[0].clientX);
//   isDragging = false;
//   startAutoSlide();
// });

// function handleSwipe(endX) {
//   const threshold = 50;
//   if (endX - startX > threshold) {
//     // swipe direita -> anterior
//     const prevIndex = (index - 1 + slides.length) % slides.length;
//     goToSlide(prevIndex);
//   } else if (startX - endX > threshold) {
//     // swipe esquerda -> próximo
//     const nextIndex = (index + 1) % slides.length;
//     goToSlide(nextIndex);
//   }
// }


const produtos = document.getElementById("opcaoProdutos");
const menuDesktop = document.getElementById("menu_desktop")

produtos.addEventListener("click", () => {
    menuDesktop.classList.toggle("menu_active")
})

const opcaoProdutosMobille = document.getElementById("opcaoProdutosMobille")
const menuMobille = document.getElementById("menu_mobille")

opcaoProdutosMobille.addEventListener("click", () => {
    menuMobille.classList.toggle("menu_active")
})

document.addEventListener("click", e => {
    // Fecha menu desktop se clicou fora do botão e do menu
    if (!menuDesktop.contains(e.target) && !produtos.contains(e.target)) {
        menuDesktop.classList.remove("menu_active");
    }

    // Fecha menu mobile se clicou fora do botão e do menu
    if (!menuMobille.contains(e.target) && !opcaoProdutosMobille.contains(e.target)) {
        menuMobille.classList.remove("menu_active");
    }
});

