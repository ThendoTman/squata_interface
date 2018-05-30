if(jQuery.fn.isotope) {
    $('.filter-menu').on('click', 'a', function (e) {
        e.preventDefault();
        var isotopeContainer = $(".grid_block");
        if (!isotopeContainer.length)
            return;
        isotopeContainer.isotope({
            itemSelector: '.gallerySelector'
        });
        $('.filter-menu').find('.active').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');

        isotopeContainer.isotope({filter: filterValue});
    });
}