const elDesc = document.querySelector('.js-desc');
const elTime = document.querySelector('.js-time');

function showDate(element_desc, element_time) {
    const date_obj = new Date();

    const months = [
    "January", 
    "February",
    "March", 
    "April",
    "May", 
    "June",
    "July",
    "August",
    "September",
    "October", 
    "November",
    "December"
    ];

    let day = date_obj.getDate();
    let month = months[date_obj.getMonth()];
    let year = date_obj.getFullYear();
    let hours = String(date_obj.getHours()).padStart(2, "0");
    let minutes = String(date_obj.getMinutes()).padStart(2, "0");
    let seconds = String(date_obj.getSeconds()).padStart(2, "0");
    console.log(hours, minutes, seconds);

    element_desc.textContent = `${day} ${month}, ${year}`;
    element_time.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    showDate(elDesc, elTime);
}, 1000);