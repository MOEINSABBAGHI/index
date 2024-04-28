const menuItems = document.querySelectorAll('.B');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    menuItems.forEach(item => {
      item.classList.add('active');
    });
  });

  item.addEventListener('mouseleave', function() {
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
  });
});
