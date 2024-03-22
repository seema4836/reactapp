
         $('.slider').slick({
           dots: false,
           arrows: false,
           infinite: true,
           speed: 800,
           autoplay:true,
           autoplaySpeed:3800,
           slidesToShow: 1,
           slidesToScroll: 1,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 arrows: false,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
         });

         $('.responsive').slick({
           dots: true,
           infinite: true,
           arrows: false,
           speed: 300,
           slidesToShow: 3,
           slidesToScroll: 3,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 767,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
         });
