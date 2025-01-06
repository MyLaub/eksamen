document.getElementById('popupMenu').style.display = 'none';
  
  document.getElementById('burgerMenu').onclick = function() {
      var popupMenu = document.getElementById('popupMenu');
      
    
      if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
          popupMenu.style.display = 'flex';
      } else {
          popupMenu.style.display = 'none'; 
      }
  };
  
 
  document.querySelector('.close-btn').onclick = function() {
      document.getElementById('popupMenu').style.display = 'none';
  };
  

  window.onclick = function(event) {
      var popupMenu = document.getElementById('popupMenu');
      if (!event.target.matches('#burgerMenu') && !event.target.closest('.popup-menu')) {
          if (popupMenu.style.display === 'flex') {
              popupMenu.style.display = 'none';
          }
      }
  };
