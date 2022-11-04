document.querySelectorAll('.drum').forEach(item => {
    item.addEventListener('click', handleClick);
});

function handleClick() {
  console.log('click');
}