document.addEventListener('DOMContentLoaded', function() {
// start: toggle sidebar
const toggler = document.getElementById("sidebarToggle");
toggler.addEventListener("click", function() {
    document.getElementById("bdSidebar").classList.toggle("collapsed");
});

// end: toggle sidebar

});