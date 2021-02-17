document.querySelectorAll(".prevent-default").forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
  })
})