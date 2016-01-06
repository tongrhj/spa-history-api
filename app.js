import Router from 'spa-quick-router'

const router = new Router([
  {
    route: 'about',
    title: 'About Us',
    element: '#about'
  },
  {
    route: '/products',
    title: 'Products',
    element: '#products'
  },
  {
    route: '/',
    title: 'The Museum of SG50 Products',
    element: '#home'
  },
  {
    route: '',
    title: '404',
    element: '#error'
  }
])

export default router

// Pre-Modularization
// This code works but we want to seperate the Router from the Routes and Views to maximise code-reuse and to enable work to be divided among team members
// Becomes the code above + index.js within my self-created soup-router module

// window.addEventListener('popstate', (event) => {
//   route()
// })
//
// Array.from(document.querySelectorAll('nav a'))
//   .forEach(anchor => {
//     anchor.addEventListener('click', event => {
//       // Ensures that only non-external links continue to open like default
//       if (event.target.href.startsWith(window.location.origin)) {
//         event.preventDefault()
//         history.pushState(null, '', anchor.attributes.href.value)
//         route()
//       }
//   })
// })
//
// const productSelect = document.querySelector('#products .products')
//
// productSelect.addEventListener('change', () => {
//   const selectedOption = productSelect.options[productSelect.selectedIndex].textContent
//   document.title = 'Products: ' + selectedOption
//   history.replaceState(null, '', '/products/' + selectedOption)
// })
//
// function route () {
//   Array.from(document.querySelectorAll('section'))
//     .forEach((section) => {
//       section.classList.remove('visible')
//     })
//   switch (window.location.pathname) {
//     case '/about':
//       document.title = 'About Us'
//       document.querySelector('#about')
//         .classList.toggle('visible')
//       break
//     case '/products':
//       document.title = 'Products'
//       document.querySelector('#products')
//         .classList.toggle('visible')
//       break
//     case '/':
//       document.title = 'The Museum of SG50 Products'
//       document.querySelector('#home')
//         .classList.toggle('visible')
//       break
//     default:
//       document.title = '404'
//       document.querySelector('#error')
//         .classList.toggle('visible')
//   }
// }
//
// // Ensures that visiting the page initiates /
// route()
