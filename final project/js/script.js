  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,        
    loop: true,      
    margin: 10,     
    autoplay: true   
  });
});

//   const container = document.getElementById("scroll-container");
//   let scrollSpeed = 1; // pixels per frame
//   function autoScroll() {
//     container.scrollLeft += scrollSpeed;
//     if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//       container.scrollLeft = 0; // loop back to start
//     }
//     requestAnimationFrame(autoScroll);
//   }
//   autoScroll();

   document.querySelectorAll(".thumb").forEach(img => {
    img.addEventListener("click", function() {
      document.getElementById("mainImage").src = this.src.replace("80x100", "500x600");
    });
  });
 
  // Show button after scrolling down
  window.onscroll = function () {
    let btn = document.getElementById("backToTopBtn");
    if (document.documentElement.scrollTop > 200) {
      btn.classList.remove("d-none");
    } else {
      btn.classList.add("d-none");
    }
  };

//   Scroll smoothly to top
//   document.getElementById("backToTopBtn").addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });

    document.querySelectorAll(".thumb").forEach(img => {
    img.addEventListener("click", function() {
      document.getElementById("mainImage").src = this.src.replace("80x100", "500x600");
    });
  });


  // Category filter
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      document.querySelectorAll('.product-item').forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });