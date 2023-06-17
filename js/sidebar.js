import { sections } from "./sidebar-sections.js";

// create header component
const sidebarHeader = document.getElementById("sidebar-header");
const headerComponent = document.getElementById("header-start");
sidebarHeader.innerHTML = headerComponent.innerHTML;

// get sidebar sections
const { section_main } = { ...sections };

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
