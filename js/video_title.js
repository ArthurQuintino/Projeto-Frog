const uri = new URL(window.location.href);
const videoId = uri.searchParams.get("id");
const video = VIDEO_LIST[
    Number.parseInt(videoId, 10)
];

if (!video) {
    // TO DO //
} else {
    window.document.querySelector(".js-video-title").innerHTML = video.title
    window.document.querySelector(".js-video-synopsis").innerHTML = video.synopsis

}

