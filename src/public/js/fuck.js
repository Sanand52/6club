
        //Function to move the last item to the beginning of the list
        
        function moveLastItemToBeginning() {
            var container = $('#main_container');
            var lastItem = container.find('.p3_winner-wrapper__item:last');


            var clonedItem = lastItem.clone();

            // container.prepend(clonedItem);

            lastItem.fadeOut(300, function() {
                // Remove last item from the container after fade out is complete
                lastItem.remove();
            });
        }

        var CloseDialog = (id) => {

            if(id == 'deposit_bonus'){
                $('.van-overlay').remove()
            }
            $('#'+id).remove()
        }
        // setInterval(moveLastItemToBeginning, 2000);
        function moveLastItemToBeginningAndScroll() {
            var container = $('#main_container');
            var lastItem = container.find('.p3_winner-wrapper__item:last');
            var clonedItem = lastItem.clone();
            clonedItem.hide()

            lastItem.remove();
            container.prepend(clonedItem);
            clonedItem.slideDown(300);

        }

        // Call the function every 1 second
        setInterval(moveLastItemToBeginningAndScroll, 2000);

        $(document).ready(function() {
            

            setTimeout(() => {
                $('#preloader-overlay').fadeOut(300)
            }, 500);

            // $('.other_img').click(function (e) { 
            //     console.log(e);
            //     // showAlert()
            // });


        });

        var showAlert = () => {
            $('.comming_soon').fadeIn(300)
            $('.comming_soon').css('display', 'flex')
            setTimeout(() => {
                $('.comming_soon').fadeOut(500)
            }, 2000);
        }
  
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 5500); // Change image every 5 seconds
    }
            
            