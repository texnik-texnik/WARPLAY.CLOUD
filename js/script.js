const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menuBtnBody');
const bgMain = document.querySelector('.section-first');
const closeMenuBtn = document.querySelector('.bi-chevron-left');
const submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener('click', () => {
   window.location.href = 'pages/validate.html';
   return false;
})

menuBtn.addEventListener('click', (evt)=> {
   header.classList.toggle('headerTr');
   menuBtn.classList.toggle('menuBtnTr');
   evt.preventDefault();

});
closeMenuBtn.addEventListener('click', (evt)=> {
   header.classList.toggle('headerTr');
   menuBtn.classList.toggle('menuBtnTr');
   evt.preventDefault();

});

window.onload = setInterval(() => {
   let bgOne = setTimeout(() => {
      bgMain.style.background = `radial-gradient(49.95% 96.01% at 50.05% 49.91%, rgba(82, 125, 139, 0) 0%, rgba(82, 125, 139, 0.5) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--urlBg2) center center`;
      bgMain.style.backgroundSize = `cover`;
   }, 20000);
   let bgTwo = setTimeout(() => {
      bgMain.style.background = `radial-gradient(49.95% 96.01% at 50.05% 49.91%, rgba(82, 125, 139, 0) 0%, rgba(82, 125, 139, 0.5) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--urlBg3) center center`;
      bgMain.style.backgroundSize = `cover`;
   }, 40000);
   let bgThree = setTimeout(() => {
      bgMain.style.background = `radial-gradient(49.95% 96.01% at 50.05% 49.91%, rgba(82, 125, 139, 0) 0%, rgba(82, 125, 139, 0.5) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--urlBg4) center center`;
      bgMain.style.backgroundSize = `cover`;
   }, 60000);
   let bgFour = setTimeout(() => {
      bgMain.style.background = `radial-gradient(49.95% 96.01% at 50.05% 49.91%, rgba(82, 125, 139, 0) 0%, rgba(82, 125, 139, 0.5) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--urlBg1) center center`;
      bgMain.style.backgroundSize = `cover`;
   }, 120000);
}, 30000);




