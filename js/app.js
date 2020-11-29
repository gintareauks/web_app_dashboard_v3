// ALERT BANNER

const alertBanner = document.getElementById("alert");

// create the html for the banner 
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <strong><p class="alert-banner-close">&#10008;</p></strong>
    </div>
    `
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});

// CHART WIDGETS 

// line graph
const trafficCanvas = document.getElementById("traffic-chart");

// let trafficDaily = {
//     labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", 
// "4-10", "11-17", "18-24", "25-31"],
//     datasets: [{
//         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
//         backgroundColor: 'rgba(116, 119, 191, .3)',
//         borderWidth: 1,
//     }]
// };

let trafficDataWeekly = {
    labels: ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the DAILY chart
let trafficDataDaily = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [10, 40, 55, 30, 50, 20, 45, 50, 15],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the HOURLY chart
let trafficDataHourly = {
    labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    datasets: [{
        data: [100, 450, 250, 200, 600, 150, 500, 300, 250, 550, 700, 400],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the MONTHLY chart
let trafficDataMonthly = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        data: [50, 30, 35, 65, 80, 40, 70, 30, 25, 55, 70, 40, 50, 90],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5, 
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
};

function createChart(data) {
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: data,
    options: trafficOptions
});
}

// bar graph 
const dailyCanvas = document.getElementById("daily-chart");
// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], 
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes : [{
            ticks: {
                beginAtZero: true
            }
        }]
    }, 
    legend : {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar', 
    data: dailyData,
    options: dailyOptions
});

// doughnut chart
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"], 
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CD82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut', 
    data: mobileData,
    options: mobileOptions
});

// MESSAGING SECTION
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

// Bell Notifications

const bell = document.getElementsByClassName('bell-icon');
const dropdown = document.getElementById('dropdown-content');
const bellIcon = document.querySelector('.bell-icon');

bellIcon.addEventListener('click', () => {
    if (dropdown.style.display = 'none') {
        dropdown.style.display = 'block';
    }
});

dropdown.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("close")) {
        dropdown.style.display = 'none';
}
});


// Traffic Chart Change

let hourly = document.getElementById('hourly');
let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

const trafficNav = document.querySelector('.traffic-nav');

// trafficNav.addEventListener('click', e => {

// })

// Adds event listener to traffic nav and changes chart accordingly
trafficNav.addEventListener('click', (e) => {
    // Creates a function to toggle display chart and 'active' class name depending on li element clicked
    function toggleChart(listName, chartName) {
        if (e.target == listName) {
            createChart(chartName);
            listName.classList.add('active');
        } else if (e.target !== listName) {
            listName.classList.remove('active');
        }
    }
    
    // Hourly chart
    toggleChart(hourly, trafficDataHourly);
    // Daily chart
    toggleChart(daily, trafficDataDaily);
    // Weekly chart
    toggleChart(weekly, trafficDataWeekly);
    // Monthly chart
    toggleChart(monthly, trafficDataMonthly);
});

// Loads the weekly chart on page load
document.addEventListener('DOMContentLoaded', () => {
    createChart(trafficDataWeekly);
    weekly.classList.add('active');
});


/* ========================================
        LOCAL STORAGE FOR SETTINGS 
======================================== */
const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const email = document.getElementById('email');
const profile = document.getElementById('profile');
const select = document.getElementById('timezone');

// Create const for saved values
const emailPref = localStorage.getItem('emailPref');
const profilePref = localStorage.getItem('profilePref');
const timezonePref = localStorage.getItem('timezonePref');


// Test if local storage is available
function testStorage() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}


// Validates if a setting is set and then selects that setting. 
function loadSettings() {
    if (emailPref !== 'false') {
        email.checked = (emailPref === 'true');
    }
    if (profilePref !== 'false') {
        profile.checked = (emailPref === 'true');
    }
    if (timezonePref !== 'false') {
        select.value = localStorage.getItem('timezonePref');
    }
};


if (testStorage() === true) {
    // Saves settings to local storage when save button is clicked
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('emailPref', email.checked);
        localStorage.setItem('profilePref', profile.checked);
        localStorage.setItem('timezonePref', select.value);
        alert('Settings successfully saved!');
    });

    // Sets settings to deafult when cancel is clicked
    cancelBtn.addEventListener('click', () => {
        const cancel = confirm('Are you sure you want to cancel changes?');
        if (cancel) {
            localStorage.setItem('emailPref', email.checked = null);
            localStorage.setItem('profilePref', profile.checked = null);
            localStorage.setItem('timezonePref', select.selectedIndex = select.options[0].value);
        }
    });
    loadSettings();
}

// Loads saved settings
window.addEventListener('DOMContentLoaded', (event) => {
    loadSettings();
});


