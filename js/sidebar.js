import { sections, mini_sidebar_items } from "./sidebar-items.js";

// create main component
const sidebarMain = document.getElementById("sidebar-main");

for (let key in sections) {
  const sectionComponent = document.createElement("div");
  sectionComponent.id = key;
  sectionComponent.className = "sidebar-section";
  sectionComponent.innerHTML = `
    <div class="section-title">${sections[key].title}</div>
    `;
  sidebarMain.appendChild(sectionComponent);

  sections[key].items.map((item) => {
    sectionComponent.innerHTML += `
        <a href="${item.path}" class="section-button">
            <img src="${item.icon}" alt="${item.name} icon" class="section-item-icon">
            <div class="section-item-name">${item.name}</div>
        </a>
        `;
  });
}

// mini-sidebar
const miniSidebarMain = document.getElementById("mini-sidebar-main");

mini_sidebar_items.forEach( item => {
  miniSidebarMain.innerHTML += `
  <a href="${item.path}" class="section-button">
      <img src="${item.icon}" alt="${item.name} icon" class="section-item-icon">
      <div class="section-item-name">${item.name}</div>
  </a>
  `
})