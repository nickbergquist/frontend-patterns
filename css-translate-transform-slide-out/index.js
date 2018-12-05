(function() {

    var thing = {
        
        'init': function() {
            console.log('fwibble');
            var eleWidget = document.querySelector('.widget');
            var eleClose = document.querySelector('.widget .widget-tab');

            eleClose.addEventListener('click', function() {

                if(eleWidget.classList.contains('enter')) {
            
                    eleWidget.classList.toggle('leave');
                }
            });

            window.addEventListener('scroll', function() {

                var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
                if(scrollTop > 50) {
                
                  if(eleWidget.classList.contains('enter')) {
            
                    eleWidget.classList.add('leave');
                  }
                }
            });
        }
    }

    thing.init();
})()
