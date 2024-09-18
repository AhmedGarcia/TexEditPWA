// import { Workbox } from 'workbox-window';
// import Editor from './editor';
// import './database';
// import '../css/style.css';

// const main = document.querySelector('#main');
// main.innerHTML = '';

// const loadSpinner = () => {
//   const spinner = document.createElement('div');
//   spinner.classList.add('spinner');
//   spinner.innerHTML = `
//   <div class="loading-container">
//   <div class="loading-spinner" />
//   </div>
//   `;
//   main.appendChild(spinner);
// };

// const editor = new Editor();

// if (typeof editor === 'undefined') {
//   loadSpinner();
// }

// Check if service workers are supported
// if ('serviceWorker' in navigator) {
//   // Dynamically set service worker path based on the environment
//   const swPath = process.env.NODE_ENV === 'production' ? '/dist/src-sw.js' : '/src-sw.js';
  
//   const workboxSW = new Workbox(swPath);
//   workboxSW.register().then(() => {
//     console.log('Service worker registered successfully.');
//   }).catch(err => {
//     console.error('Service worker registration failed:', err);
//   });
// } else {
//   console.error('Service workers are not supported in this browser.');
// }

// Check if service workers are supported
// if ('serviceWorker' in navigator) {
//   const swPath = '/src-sw.js'; // Simplified to always use the same path
//   console.log('Attempting to register service worker at:', swPath);

//   const workboxSW = new Workbox(swPath);
//   workboxSW.register()
//     .then(() => {
//       console.log('Service worker registered successfully.');
//     })
//     .catch(err => {
//       console.error('Service worker registration failed:', err);
//     });
// } else {
//   console.error('Service workers are not supported in this browser.');
// }

// import { Workbox } from 'workbox-window';
// import Editor from './editor';
// import './database';
// import '../css/style.css';

// const main = document.querySelector('#main');
// main.innerHTML = ''; // Clear the main element

// const loadSpinner = () => {
//   const spinner = document.createElement('div');
//   spinner.classList.add('spinner');
//   spinner.innerHTML = `
//   <div class="loading-container">
//   <div class="loading-spinner" />
//   </div>
//   `;
//   main.appendChild(spinner);
// };

// const editor = new Editor();

// if (typeof editor === 'undefined') {
//   loadSpinner();
// }

// // Check if service workers are supported
// if ('serviceWorker' in navigator) {
//   const workboxSW = new Workbox('/src-sw.js'); // Same path in both dev and prod

//   workboxSW.register()
//     .then(() => {
//       console.log('Service worker registered successfully.');
//     })
//     .catch(err => {
//       console.error('Service worker registration failed:', err);
//     });
// } else {
//   console.error('Service workers are not supported in this browser.');
// }

import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = ''; // Clear the main element

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}


if ('serviceWorker' in navigator) {
  const swPath = `${process.env.NODE_ENV === 'production' ? '/dist/src-sw.js' : '/src-sw.js'}`;
console.log('Service worker path:', swPath);
const workboxSW = new Workbox(swPath);

  workboxSW.register()
    .then(() => {
      console.log('Service worker registered successfully.');
    })
    .catch(err => {
      console.error('Service worker registration failed:', err);
    });
} else {
  console.error('Service workers are not supported in this browser.');
}



