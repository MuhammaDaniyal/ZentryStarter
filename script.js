const next_btn = document.querySelector('.next-btn'); 
const video = document.querySelector('.hero-vid video');
const movie_list = ['hero-1.mp4', 'hero-2.mp4', 'hero-3.mp4', 'hero-4.mp4'];
let index = 0;

next_btn.addEventListener('click', function() {    
    index = (index + 1) % movie_list.length; 
    video.src = `videos/${movie_list[index]}`; 
    video.load(); 
    video.play(); 
});

  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.right-header').classList.toggle('active');
  });