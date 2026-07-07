// Data model configuration for  20 items
const articlesData = [
  // 1. Cucito & Filato Section (Cards 1-4)
  { id: 1, category: "cucito", img: "./images/card1.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Felt bunnies and Easter eggs" },
  { id: 2, category: "cucito", img: "./images/card2.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Felt bunnies and Easter eggs" },
  { id: 3, category: "cucito", img: "./images/card3.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Felt bunnies and Easter eggs" },
  { id: 4, category: "cucito", img: "./images/card4.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Felt bunnies and Easter eggs" },

  // 2. Carta Scrap & Colore Section (Cards 5-8)
  { id: 5, category: "carta", img: "./images/card5.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Paper crafts setup" },
  { id: 6, category: "carta", img: "./images/card6.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Paper crafts setup" },
  { id: 7, category: "carta", img: "./images/card7.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Paper crafts setup" },
  { id: 8, category: "carta", img: "./images/card8.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Paper crafts setup" },

  // 3. Ricamo & Tradizione Section (Cards 9-12)
  { id: 9, category: "ricamo", img: "./images/card9.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Embroidery hoop details" },
  { id: 10, category: "ricamo", img: "./images/card10.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Embroidery hoop details" },
  { id: 11, category: "ricamo", img: "./images/card11.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Embroidery hoop details" },
  { id: 12, category: "ricamo", img: "./images/card12.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Embroidery hoop details" },

  // 4. Decorazione Section (Cards 13-16)
  { id: 13, category: "decorazione", img: "./images/card13.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Home decor items" },
  { id: 14, category: "decorazione", img: "./images/card14.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Home decor items" },
  { id: 15, category: "decorazione", img: "./images/card15.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Home decor items" },
  { id: 16, category: "decorazione", img: "./images/card16.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Home decor items" },

  // 5. Bijoux & Accessori Section (Cards 17-20)
  { id: 17, category: "bijoux", img: "./images/card17.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Bijoux and accessories" },
  { id: 18, category: "bijoux", img: "./images/card18.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Bijoux and accessories" },
  { id: 19, category: "bijoux", img: "./images/card19.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Bijoux and accessories" },
  { id: 20, category: "bijoux", img: "./images/card20.jpg", date: "1 giugno 2022", title: "Lorem ipsum dolor sit, consectetur adipisci", author: "Angelica Foschi", alt: "Bijoux and accessories" }
];

function renderCards() {
  articlesData.forEach(article => {
    
    const targetContainer = document.getElementById(`${article.category}-container`);

    if (targetContainer) {
      const cardHTML = `
        <div class="card">
          <div class="card-image">
            <img src="${article.img}" alt="${article.alt}" />
          </div>
          <div class="card-content">
            <span class="card-date">${article.date}</span>
            <h2 class="card-title">${article.title}</h2>
            <p class="card-author">di <span class="author-name">${article.author}</span></p>
            <a href="#" class="card-button">Guarda</a>
          </div>
        </div>
      `;

      targetContainer.innerHTML += cardHTML;
    }
  });
};

renderCards();
