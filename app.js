const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`;

alertBanner.addEventListener('click', (e) => {
    if (e.target.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// Get the canvas element
const trafficCanvas = document.getElementById("traffic-chart");

// Define traffic data
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
             "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        tension: 0.3, // Smooth line
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 5,
    }]
};

// Define traffic chart options
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

// Create the traffic chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

const dailyCanvas = document.getElementById("daily-chart");

// Data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

// Options for daily traffic bar chart
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// Create the bar chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

    // Get the canvas element
const mobileCanvas = document.getElementById("mobile-chart");

// Doughnut chart data
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

// Doughnut chart options
const mobileOptions = {
    responsive: true, // Ensures responsiveness
    maintainAspectRatio: false, // Allows it to scale properly
    aspectRatio: 1,
    plugins: {
        legend: {
            position: 'right', // Moves the legend to the right
            labels: {
                boxWidth: 20,
                font: {
                    weight: 'bold' // Makes labels bold
                }
            }
        }
    }
};

// Create the Doughnut chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Store the form fields in variables
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// Add a click event listener on the "Send" button
send.addEventListener('click', () => {
    // Check if both fields are empty
    if (user.value === "" && message.value === "") {
        alert("Please fill out both user and message fields before sending.");
    } 
    // Check if only the user field is empty
    else if (user.value === "") {
        alert("Please fill out the user field before sending.");
    } 
    // Check if only the message field is empty
    else if (message.value === "") {
        alert("Please fill out the message field before sending.");
    } 
    // If both fields are filled
    else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");

saveButton.addEventListener('click', () => {
    alert("Settings have been saved!");
});

cancelButton.addEventListener('click', () => {
    alert("Changes have been canceled.");
});
