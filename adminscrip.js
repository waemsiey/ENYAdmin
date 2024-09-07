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

const isLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
    );
};
const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
}
let calendar = document.querySelector('.calendar')
const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showTime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showTime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showTime');
    dateFormate.classList.add('hideTime');
};

const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calender_header_year = document.querySelector('#year');
    let days_of_month = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    let currentDate = new Date();
    month_picker.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;
    let first_day = new Date(year, month);

    for(let i=0; i<=days_of_month[month] + first_day.getDay() -1; i++){
        let day = document.createElement('div');
        if(i >= first_day.getDay()){
            day.innerHTML = i - first_day.getDay() + 1;
            if(i - first_day.getDay() + 1 === currentDate.getData() && year === currentDate.getFullYear() && month === currentDate.getMonth()){
                day.classList.add('current-date');
            }
        }
        calendar_days.appendChild(day);
    }
};

let month_list = calendar.querySelector('.month_list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month_list.append(month);
    month.onclick = () => {
        currentMonth.value = index;
        generateCalendar(currentMonth.value, currentYear.value);
        month_list.classList.replace('show, hide');
        dayTextFormate.classList.remove('hideTime');
        dayTextFormate.classList.add('showtime');
        timeFormate.classList.remove('hideTime');
        timeFormate.classList.add('showtime');
        dateFormate.classList.remove('hideTime');
        dateFormate.classList.add('showtime');
    };
});

(function () {
    month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = {value : currentDate.getMonth()};
let currentYear = {value : currentDate.getFullYear()};
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentOption = {
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    weekday : 'long',
};

