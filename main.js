
const scrollToTop = () => {
  const scrollButton = document.querySelector('#scroll-top')

  scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
}

scrollToTop()

// change scroll button colors
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting

    if (intersecting) {
      document.querySelector('#scroll-top').classList.add('scroll-top-light')
    } else {
      document.querySelector('#scroll-top').classList.remove('scroll-top-light')
    }
  })
})

observer.observe(document.querySelector('footer'))