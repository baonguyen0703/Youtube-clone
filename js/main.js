import { videoList } from "./video-data.js";

const mainElement = document.getElementById("main");

videoList.map((video) => {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");
  videoCard.innerHTML = `
    <a class="thumbnail-container" href="${video.link}">
    <img class="thumbnail" src="${video.thumbnail}" alt="">
    <div class="video-duration">${video.duration}</div>
    </a>
    <div class="description-container">
        <a class="avatar-link" href="">
            <img class="channel-avatar" src="${video.channel_avatar}"></img>
        </a>
        <div class="video-info">
            <a class="video-title" href="${video.link}">${video.name}</a>
            <div class="channel-container">
                <div class="channel-name">${video.channel}</div>
                ${
                video.verified
                    ? `<div class="channel-badge">
                    <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                </div>`
                    : ""
                }
            </div>
            <div class="video-metadata">${video.views} • ${video.date}</div>
        </div>
        <div class="video-menu">
            <svg class="video-menu-icon" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
        </div>
    </div>
    `;
  mainElement.appendChild(videoCard);
});
