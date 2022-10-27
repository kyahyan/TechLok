const nextBtn = document.querySelectorAll('#next-step');
      nextBtn.forEach(function(item,index){
        item.addEventListener('click',function(){
          let id = index + 1;
          let tabElement = document.querySelectorAll(".nav-tabs li button")[id];
          var lastTab = new bootstrap.Tab(tabElement);
          lastTab.show();
        });

      });