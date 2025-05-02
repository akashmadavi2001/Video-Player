let main_video = document.querySelector('.main-video');
let video = document.querySelectorAll('.video');
let closeBtn = document.querySelector('.close');
let videoFrame = document.querySelector('.videos');
let h3 = document.querySelector('.main-video h3');

video.forEach(video => {
    let video_play = main_video.querySelector('video');

    video.addEventListener('click', (e) => {

        videoFrame.classList.add('activeVideo');
        main_video.classList.add('active');
        video_play.src = e.target.querySelector('video').src;
        h3.innerHTML = e.target.querySelector('h4').innerHTML;
    });

    closeBtn.addEventListener('click', () => {
        videoFrame.classList.remove('activeVideo');
        main_video.classList.remove('active');
        video_play.src = '';
    });
});