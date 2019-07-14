$(document).ready(function () {

    /**
     * SECTION Constants
     */

    const $document = $(this);
    const $body = $('body');
    const $nav = $body.find('nav.navbar');

    /**
     * SECTION Functions
     */

    /** NOTE appearNavbar(scrollHeight)
     * Show | Hide -> Navbar based on page scrollTop
     * @param {int} scrollHeight
     */
    const appearNavbar = (scrollHeight) => {
        if (scrollHeight >= 120) {
            $nav.addClass('appear');
            $nav.css('margin-top', '100px');
        } else {
            $nav.attr('style', false);
            $nav.removeClass('appear');
        }
    }

    /**
     * SECTION Listeners
     */

    /** NOTE Event listener
     * Listen for @scroll event and fire: 
     * @function appearNavbar(<int>scrollHeight)
     */
    $document.on('scroll', function () {
        const $this = $(this);
        let navScrollTop = $this.scrollTop();
        appearNavbar(navScrollTop);
    });

    const $ulNav = $('ul.nav');

    scrollSpy($ulNav, 100);

});

const scrollSpy = ($target, offset = 0) => {
    let lastElemId = '';
    $('[scrollspy]').each(function () {
        const $elem = $(this);
        const top = $elem.offset().top;
        const bottom = top + $elem.height();
        $(document).on('scroll', function () {
            let pageScroll = $(this).scrollTop();
            let elemId = $elem.attr('id');
            if (pageScroll >= top - offset && pageScroll <= bottom - offset && lastElemId != elemId) {
                lastElemId = elemId;
                // Scroll is here
                $target.find('a').removeClass('active');
                $target.find(`[href="#${elemId}"]`).addClass('active');
            }
        });
    });
}
