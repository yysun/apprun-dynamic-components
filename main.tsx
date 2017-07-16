import app from 'apprun';
import home from './home';

const element = document.getElementById('my-app');

new home().start(element);

app.on('//', route => {
  const menus = document.querySelectorAll('.nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const menu = document.querySelector(`[href='${route}']`);
  menu && menu.parentElement.classList.add('active');
})

app.on('#about', async () => {
  const module = await import('./about');
  new module.default().mount(element);
});

app.on('#contact', async () => {
  const module = await import('./contact');
  new module.default().mount(element);
})
