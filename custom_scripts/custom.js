/* Below code needs to be added for Menu on mobile
on mobile website to be appear correctly.

Add this code to Appearance -> Mantra Settings -> Miscellaneous Settings -> Custom JavaScript
*/

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('access');
    if (!nav) return;

    // Create the button
    var btn = document.createElement('button');
    btn.innerHTML = '&#9776; MENU';
    btn.className = 'custom-mobile-btn';

    // Insert it before the menu
    nav.parentNode.insertBefore(btn, nav);

    // Toggle function
    btn.onclick = function () {
        if (nav.className.indexOf('open-mobile') === -1) {
            nav.className += ' open-mobile';
        } else {
            nav.className = nav.className.replace(' open-mobile', '');
        }
    };
});