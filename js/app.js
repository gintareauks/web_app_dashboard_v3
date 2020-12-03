/* ========================================
                BELL NOTIFICATIONS  
======================================== */
const bell = document.getElementsByClassName('bell-icon');
const dropdown = document.getElementById('dropdown-content');
const bellIcon = document.querySelector('.bell-icon');


// Displays notifications when bell is clicked
bellIcon.addEventListener('click', () => {
    if (dropdown.style.display = 'none') {
        dropdown.style.display = 'block';
    }
});


// Notifications close when cross is clicked
dropdown.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("close")) {
        dropdown.style.display = 'none';
}
});


/* ========================================
                ALERT BANNER 
======================================== */
const alertBanner = document.getElementById("alert");


// Creates html for the banner 
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <strong><p class="alert-banner-close">&#10008;</p></strong>
    </div>
    `

    
// Closes alert banner
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});


/* ========================================
                CHART WIDGETS 
======================================== */
// LINE GRAPH
const trafficCanvas = document.getElementById("traffic-chart");


// Hourly line chart
let trafficDataHourly = {
    labels: ['7am', '10am', '13pm', '16pm', '19pm', '22pm', '1am'],
    datasets: [{
        data: [20, 50, 80, 50, 90, 40, 20],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Daily line chart
let trafficDataDaily = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        data: [100, 250, 450, 200, 500, 450, 300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Weekly line chart
let trafficDataWeekly = {
    labels: ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Monthly line chart
let trafficDataMonthly = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [100, 400, 300, 500, 400, 300, 250, 350, 400, 500, 300, 250, 400, 500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Sets the options
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


// Creates the chart itself
function createChart(data) {
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: data,
    options: trafficOptions
});
}


// LINE CHART CHANGE
let hourly = document.getElementById('hourly');
let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
const trafficNav = document.querySelector('.traffic-nav');


// Chart changes as different option is chosen
trafficNav.addEventListener('click', (e) => {
    // Adds special CSS to nav option chosen
    function chartSwitch(li, chartName) {
        if (e.target == li) {
            createChart(chartName);
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    }
    
    // Hourly chart is called
    chartSwitch(hourly, trafficDataHourly);
    // Daily chart is called
    chartSwitch(daily, trafficDataDaily);
    // Weekly chart is called
    chartSwitch(weekly, trafficDataWeekly);
    // Monthly chart is called
    chartSwitch(monthly, trafficDataMonthly);
});


// Weekly chart is shown when page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    createChart(trafficDataWeekly);
    weekly.classList.add('active');
});


// BAR GRAPH 
const dailyCanvas = document.getElementById("daily-chart");


// Daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], 
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};


// Sets the options
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


// Creates the chart itself
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar', 
    data: dailyData,
    options: dailyOptions
});


// DOUGHNUT CHART
const mobileCanvas = document.getElementById("mobile-chart");


// Daily traffic bar chart
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


// Sets the options
const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};


// Creates the chart itself
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut', 
    data: mobileData,
    options: mobileOptions
});


/* ========================================
                MESSAGE  
======================================== */
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
