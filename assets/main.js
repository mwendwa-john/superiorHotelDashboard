document.addEventListener('DOMContentLoaded', function() {
// start: toggle sidebar
const toggler = document.getElementById("sidebarToggle");
toggler.addEventListener("click", function() {
    document.getElementById("bdSidebar").classList.toggle("collapsed");
});

// end: toggle sidebar

// start: toggle sidebar active link
const navLinkEls = document.querySelectorAll('.sidebar-menu-item');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navLinkEl.classList.add('active');
    });
});
// end: toggle sidebar active link

});