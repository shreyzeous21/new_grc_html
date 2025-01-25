function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

const productData = [
  {
    title: "ICEtank",
    subtitle: "Modular Liquid Immersion Cooling System",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iste, earum, nesciunt consequatur quam sed velit iure",
    imageUrl:
      "https://images.unsplash.com/photo-1735292626224-9cbee37fd0d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ICEcube",
    subtitle: "Advanced Cooling Solution",
    description:
      "Elit sequi iste, earum, nesciunt consequatur quam sed velit iure lorem ipsum dolor sit amet consectetur, adipisicing.",
    imageUrl:
      "/assets/",
  },
];

let currentIndex = 0;

function createProductElement(product, index) {
  const productElement = document.createElement("div");
  productElement.className = `w-full lg:w-1/2 lg:h-60 h-80  flex flex-row bg-[#dddddd] justify-between items-center  mx-auto transition-transform duration-500 ease-in-out absolute top-0`;
  productElement.style.transform = `translateX(${index * 100}%)`;
  productElement.innerHTML = `
          <div class="flex px-4 justify-start items-start flex-col gap-2 w-1/2">
              <h2 class="text-3xl text-slate-600 font-bold">${product.title}</h2>
              <h3 class="text-slate-600 text-sm">${product.subtitle}</h3>
              <p class="text-slate-600 text-sm">${product.description}</p>
              <button class="cursor-pointer text-green-600 hover:underline">Know More</button>
          </div>
          
          <div class="w-1/2 bg-[url('${product.imageUrl}')] bg-center bg-cover h-full">
            
          </div>
      `;
  return productElement;
}

function updateProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  container.style.height = window.innerWidth >= 1024 ? "15rem" : "20rem";

  productData.forEach((product, index) => {
    const productElement = createProductElement(product, index);
    container.appendChild(productElement);
  });

  updateDots();
  slideProducts();
}

function slideProducts() {
  const products = document.querySelectorAll("#productContainer > div");
  products.forEach((product, index) => {
    const offset =
      (index - currentIndex + productData.length) % productData.length;
    product.style.transform = `translateX(${offset * 100}%)`;
    product.style.opacity = offset === 0 || offset === 1 ? "1" : "0";
    product.style.pointerEvents =
      offset === 0 || offset === 1 ? "auto" : "none";
  });
}

function updateDots() {
  const dotContainer = document.getElementById("dotContainer");
  dotContainer.innerHTML = "";
  productData.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `w-3 h-3 rounded-full ${
      index === currentIndex ? "bg-slate-600" : "bg-slate-300"
    } transition-colors duration-300`;
    dot.addEventListener("click", () => {
      currentIndex = index;
      slideProducts();
      updateDots();
    });
    dotContainer.appendChild(dot);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + productData.length) % productData.length;
  slideProducts();
  updateDots();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % productData.length;
  slideProducts();
  updateDots();
});

updateProducts();

window.addEventListener("resize", updateProducts);



const slides = document.querySelectorAll('.slide');
    let currentIndex1 = 0;

    // Show the current slide with fade animation
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          slide.classList.remove('inactive');
        } else {
          slide.classList.remove('active');
          slide.classList.add('inactive');
        }
      });
    };

    // Move to the next slide
    const nextSlide = () => {
      currentIndex1 = (currentIndex1 + 1) % slides.length;
      showSlide(currentIndex1);
    };

    // Move to the previous slide
    const prevSlide = () => {
      currentIndex1 = (currentIndex1 - 1 + slides.length) % slides.length;
      showSlide(currentIndex1);
    };

    // Set up automatic slider
    const autoSlide = () => {
      setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    };

    // Event listeners for navigation buttons
    document.getElementById('prev').addEventListener('click', prevSlide);
    document.getElementById('next').addEventListener('click', nextSlide);

    // Start the automatic slider
    autoSlide();