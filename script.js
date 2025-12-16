  document.getElementById('menu-btn').addEventListener('click', toggleMenu);
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.querySelector('#menu-btn i');

      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');

      if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      }
    }