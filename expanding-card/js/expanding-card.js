const images = document.querySelectorAll('.img-panel');

images.forEach((image) => {
  image.addEventListener('click', () => {
    images.forEach((el) => {
      el.classList.remove('active');
    });
    image.classList.add('active');
  });
});
