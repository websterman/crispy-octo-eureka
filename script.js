$(document).ready(function () {
    // Vi ger hamburgaren ett click-event som togglar classen open.
    $('#hamburger').on('click', function () {
        if ($('#PageNavigation').hasClass('open')) {
            $('#PageNavigation').removeClass('open');
        }
        else {
            $('#PageNavigation').addClass('open');
        }
    })
    // Vi loopar igenom alla objekt med klassen remove-cart-item och ger dem ett click-event.
    // Vi använder e (event) för att hindra att klicken fungerar
    $('.remove-cart-item').on('click', function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });
    // Vid klick på copy address loopar vi igenom alla inputs i billing, hittar motsvarande 
    // input it shipping och ersätter värdet.
    $('#copy_address').on('click', function () {
        $('#billing > input').each(function () {
            let value = $(this).val();
            let targetID = '#' + $(this).attr('id').replace('billing', 'shipping');
            $(targetID).val(value);
        });
    })
});