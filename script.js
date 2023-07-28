// document.addEventListener("DOMContentLoaded", function () {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const cardContainer = document.getElementById("cardContainer");
//       const customScrollbar = document.getElementById("customScrollbar");
//       const scrollbarThumb = document.querySelector(".custom-scrollbar-thumb");

//       data.forEach((cardData) => {
//         const card = createCard(cardData);
//         cardContainer.appendChild(card);
//       });

//       customScrollbar.addEventListener("mousedown", (e) =>
//         handleScrollbarMouseDown(e, cardContainer, customScrollbar, scrollbarThumb)
//       );
//       document.addEventListener("mouseup", () => handleScrollbarMouseUp());
//       document.addEventListener("mousemove", (e) =>
//         handleScrollbarMouseMove(e, cardContainer, customScrollbar, scrollbarThumb)
//       );
//       cardContainer.addEventListener("scroll", () =>
//         updateCustomScrollbar(cardContainer, scrollbarThumb)
//       );
//       updateCustomScrollbar(cardContainer, scrollbarThumb);


//       const customPopular = document.querySelector(".custom-scrollbar-popular");
//       customPopular.innerHTML = data
//         .map((item) => {
//           return `<div class="popularity-block" style="height: ${item.popularity}px">${item.popularity}%</div>`;
//         })
//         .join("");



//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });

//   function createCard(cardData) {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const title = document.createElement("h2");
//     title.textContent = cardData.title;
//     card.appendChild(title);

//     const text = document.createElement("p");
//     text.textContent = cardData.text;
//     card.appendChild(text);

//     return card;
//   }

//   function updateCustomScrollbar(cardContainer, scrollbarThumb) {
//     const totalWidth = cardContainer.scrollWidth;
//     const scrollLeft = cardContainer.scrollLeft;
//     const thumbWidth = (cardContainer.clientWidth / cardContainer.scrollWidth) * 100;
//     const thumbPosition = (scrollLeft / totalWidth) * 100;

//     scrollbarThumb.style.width = `${thumbWidth}%`;
//     scrollbarThumb.style.left = `${thumbPosition}%`;
//   }

//   let isDragging = false;
//   let startClientX = 0;
//   let startScrollLeft = 0;

//   function handleScrollbarMouseDown(event, cardContainer, customScrollbar, scrollbarThumb) {
//     isDragging = true;
//     startClientX = event.clientX;
//     startScrollLeft = cardContainer.scrollLeft;
//     scrollbarThumb.style.cursor = "grabbing"; /* Set cursor to indicate grabbing */
//   }



  

//   function handleScrollbarMouseUp() {
//     isDragging = false;
//     scrollbarThumb.style.cursor = "grab"; /* Set cursor to indicate grab */
//   }

//   function handleScrollbarMouseMove(event, cardContainer, customScrollbar, scrollbarThumb) {
//     if (!isDragging) return;
//     const diffX = event.clientX - startClientX;
//     const scrollWidth = cardContainer.scrollWidth - cardContainer.clientWidth;
//     cardContainer.scrollLeft =
//       startScrollLeft + (diffX / customScrollbar.clientWidth) * scrollWidth;
//     updateCustomScrollbar(cardContainer, scrollbarThumb);
//   }

// });


document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const cardContainer = document.getElementById("cardContainer");
        const customScrollbar = document.getElementById("customScrollbar");
        const scrollbarThumb = document.querySelector(".custom-scrollbar-thumb");
  
        data.forEach((cardData) => {
          const card = createCard(cardData);
          cardContainer.appendChild(card);
        });
  
        customScrollbar.addEventListener("mousedown", (e) =>
          handleScrollbarMouseDown(e, cardContainer, customScrollbar, scrollbarThumb)
        );
        document.addEventListener("mouseup", () => handleScrollbarMouseUp());
        document.addEventListener("mousemove", (e) =>
          handleScrollbarMouseMove(e, cardContainer, customScrollbar, scrollbarThumb)
        );
  
        cardContainer.addEventListener("scroll", () =>
          updateCustomScrollbar(cardContainer, scrollbarThumb)
        );
        updateCustomScrollbar(cardContainer, scrollbarThumb);
  
        const customPopular = document.querySelector(".custom-scrollbar-popular");
        customPopular.innerHTML = data
          .map((item) => {
            return `<div class="popularity-block" style="height: ${item.popularity}px">${item.popularity}%</div>`;
          })
          .join("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  
    // Add the wheel event listener for scrolling with the mouse wheel anywhere on the page
    window.addEventListener("wheel", (e) => handleScrollWithMouseWheel(e, cardContainer));
  
    function createCard(cardData) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.textContent = cardData.title;
      card.appendChild(title);
  
      const text = document.createElement("p");
      text.textContent = cardData.text;
      card.appendChild(text);
  
      return card;
    }
  
    function updateCustomScrollbar(cardContainer, scrollbarThumb) {
      const totalWidth = cardContainer.scrollWidth;
      const scrollLeft = cardContainer.scrollLeft;
      const thumbWidth = (cardContainer.clientWidth / cardContainer.scrollWidth) * 100;
      const thumbPosition = (scrollLeft / totalWidth) * 100;
  
      scrollbarThumb.style.width = `${thumbWidth}%`;
      scrollbarThumb.style.left = `${thumbPosition}%`;
    }
  
    let isDragging = false;
    let startClientX = 0;
    let startScrollLeft = 0;
  
    function handleScrollbarMouseDown(event, cardContainer, customScrollbar, scrollbarThumb) {
      isDragging = true;
      startClientX = event.clientX;
      startScrollLeft = cardContainer.scrollLeft;
      scrollbarThumb.style.cursor = "grabbing";
    }
  
    function handleScrollbarMouseUp() {
      isDragging = false;
      scrollbarThumb.style.cursor = "grab";
    }
  
    function handleScrollbarMouseMove(event, cardContainer, customScrollbar, scrollbarThumb) {
      if (!isDragging) return;
      const diffX = event.clientX - startClientX;
      const scrollWidth = cardContainer.scrollWidth - cardContainer.clientWidth;
      cardContainer.scrollLeft =
        startScrollLeft + (diffX / customScrollbar.clientWidth) * scrollWidth;
      updateCustomScrollbar(cardContainer, scrollbarThumb);
    }
  
    function handleScrollWithMouseWheel(event, cardContainer) {
      const delta = Math.sign(event.deltaY);
      cardContainer.scrollLeft += delta * 100;
      event.preventDefault();
    }
  
  });
  