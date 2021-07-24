import './Components.less'

  document.getElementById("darktoggle").addEventListener("click", function() {
      if (document.getElementById('body').classList.contains('dark')) {
          document.getElementById('body').classList.remove('dark');
      } else {
        document.getElementById('body').classList.add('dark');
      }
    
  });