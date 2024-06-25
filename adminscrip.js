document.addEventListener('DOMContentLoaded', function () {
    var sideToggle = document.getElementById('sidebarToggle') //side
    var navPills = document.querySelector('.nav-pills');
    var content = document.querySelector('.content');
    var sidebarIcon = document.getElementById('sidebarIcon');
    var productsButton = document.getElementById('v-pills-products-tab'); //collapse menu
    var productIcon = document.getElementById('collapseMenu');
    var productsCollapse = document.getElementById('v-products-collapse');
    var dropdownItems = document.querySelectorAll('.dropdown-item'); //table selections
    var dropdownToggle = document.querySelector('.dropdown-toggle');

    // Hide the slide menu
    navPills.classList.add('collapsed');
    content.classList.add('collapsed');
    sidebarIcon.classList.remove('bx-x');
    sidebarIcon.classList.add('bx-menu');

    // Event listener for sidebar toggle button
    sideToggle.addEventListener('click', function () {
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
    
    // Event listnerfor product tggleicon
    productsButton.addEventListener('click', function(){
        
        if(productsCollapse.classList.contains('show')){
            productIcon.classList.remove('bx-chevron-up');
            productIcon.classList.add('bx-chevron-down');
        }else{
            productIcon.classList.remove('bx-chevron-down');
            productIcon.classList.add('bx-chevron-up');
        }
    });

    //Event listner for the dropdown menu
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownToggle.textContent = this.textContent;
        });
    });
});