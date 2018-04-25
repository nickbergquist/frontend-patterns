document.documentElement.className += ' js';

$(function () {

    // viewport size dependent function calls: ranges used should match those in the CSS media queries..
    enquire.register('screen and (max-width: 767px)', {
        match: function () {
            
            tablesResponsive.compress();
        }
    }).register('screen and (min-width: 768px)', {
        match: function () {
            
            tablesResponsive.expand();
        }
    }).listen(50); // milliseconds
});

    // METHODS

// reconfigure how standard HTML tables are rendered using CSS without altering the basic markup.
var tablesResponsive = {
    compress: function() {

        $('table').each(function() {
            var headertext = [];

            $(this).addClass('table-compact');

            $(this).find('th').each(function() {
                var current = $(this).text();
                headertext.push(current);
            });

            $(this).find('thead').addClass('off-screen')        

            $(this).find('tbody tr').each(function() {
                $(this).find('td').each(function(i) {
                    $(this).attr('data-th', headertext[i]);
                });
            });
        });
    },
    expand: function() {
        
        $('table').each(function() {
            $(this).removeClass('table-compact').find('thead').removeClass('off-screen');
        });
    }
};
