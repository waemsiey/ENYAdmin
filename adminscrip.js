document.addEventListener('DOMContentLoaded', function () {
    var navPills = document.querySelector('.nav-pills');
    var content = document.querySelector('.content');
    var sidebarIcon = document.getElementById('sidebarIcon');

    // Initially hide the side menu
    navPills.classList.add('collapsed');
    content.classList.add('collapsed');
    sidebarIcon.classList.remove('bx-x');
    sidebarIcon.classList.add('bx-menu');

    // Add event listener for sidebar toggle button
    document.getElementById('sidebarToggle').addEventListener('click', function () {
        navPills.classList.toggle('collapsed');
        content.classList.toggle('collapsed');

        if (navPills.classList.contains('collapsed')) {
            sidebarIcon.classList.remove('bx-x');
            sidebarIcon.classList.add('bx-menu');
        } else {
            sidebarIcon.classList.remove('bx-menu');
            sidebarIcon.classList.add('bx-x');
        }
    });
});
