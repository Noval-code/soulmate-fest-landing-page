document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector(".navbar-container");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbarContainer.style.backgroundColor = "white";
      navbarContainer.style.borderBottom = "3px solid black";
      navbarContainer.style.transitionDuration = "0.2s";
    } else {
      navbarContainer.style.backgroundColor = "transparent";
      navbarContainer.style.borderBottom = "none";
    }
  });

  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbarList = document.querySelector(".navbar-list");
  hamburgerMenu.addEventListener("click", () => {
    navbarContainer.style.borderBottom = "3px solid black";
    navbarList.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbarList.contains(e.target)) {
      navbarList.classList.remove("active");
    }
  });

  const filterBtn = document.querySelectorAll(".category-btn button");
  const guestStartList = document.querySelectorAll(".guest-star-item");
  const ourTalentList = document.querySelectorAll(".talent-item");
  function category(category) {
    guestStartList.forEach((item) => {
      const itemId = item.id;
      if (category == "all" || category == itemId) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    ourTalentList.forEach((item) => {
      const itemId = item.id;
      if (category == "all" || category == itemId) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  filterBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      let event = e.target.id;
      category(event);
    });
  });
  category("all");
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");
      let description = item.querySelector(".description");
      let icon = item.querySelector(".accordion-icon");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
      } else {
        description.style.height = "0px";
        icon.setAttribute("data-feather", "plus");
      }
      feather.replace();
      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");

        let des = item2.querySelector(".description");
        des.style.height = "0px";
        item2.querySelector(".accordion-icon").setAttribute("data-feather", "plus");
        feather.replace();
      }
    });
  }
});
