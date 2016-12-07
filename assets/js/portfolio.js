/**
 * Created by vpd on 12/7/16.
 */

$(function () {
    // Do JQuery stuff
    var $portfolio = $( '.portfolio' ).isotope({
        itemSelector: '.item-box'
    });

    $( '.filter' ).on( 'click', function() {

        // Wrap in conditional to prevent slight grid animation on clicking an already active menu item
        if ( ! $(this).hasClass( 'active' ) ) {
            // Get currently active menu item and remove its '.active' class
            var $currentActiveItem = $( 'ul#filters > li.active' );
            $currentActiveItem.removeClass( 'active ');

            // Then make current clicked menu item active
            $(this).addClass( 'active' );

            // Filter
            var filterValue = $(this).attr( 'data-filter' );
            $portfolio.isotope({ filter: filterValue });
        }
    });
});