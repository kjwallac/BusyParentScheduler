const date = new Date();

//function to render the calendar
const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;
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
    "December",
  ];
  document.getElementById("monthName").innerHTML = months[date.getMonth()];

  document.getElementById("year").innerHTML = date.getFullYear();

  let days = "";

  const prevMonth = moment(date).subtract(1, "months");

  for (let x = firstDayIndex; x > 0; x--) {
    const prevDate = prevLastDay - x + 1;
    prevMonth.date(prevDate);
    const pdateKey = prevMonth.format("YYYY-MM-DD");
    const ptaskJSON = localStorage.getItem(pdateKey);
    let ptaskCount = 0;
    if (ptaskJSON) {
      ptaskCount = JSON.parse(ptaskJSON).length;
    }
    if (ptaskCount === 0) {
      days += `<button data-date='${pdateKey}' class='button date-button prev-date'>${prevDate}</button>`;
    } else {
      days += `<button data-date='${pdateKey}' class='button date-button prev-date'>${prevDate}<span class="badge alert taskCount-badge">${ptaskCount}</span></button>`;
    }
  }

  const curMonth = moment(date);
  for (let i = 1; i <= lastDay; i++) {
    curMonth.date(i);
    const dateKey = curMonth.format("YYYY-MM-DD");
    const taskJSON = localStorage.getItem(dateKey);
    let taskCount = 0;
    if (taskJSON) {
      taskCount = JSON.parse(taskJSON).length;
    }
    if (taskCount === 0) {
      days += `<button data-date='${dateKey}' class='button date-button'>${i}</button>`;
    } else {
      days += `<button data-date='${dateKey}' class='button date-button'>${i}<span class="badge alert taskCount-badge">${taskCount}</span></button>`;
    }
  }

  const nextMonth = moment(date).add(1, "months");
  for (let j = 1; j <= nextDays; j++) {
    nextMonth.date(j);
    const ndateKey = nextMonth.format("YYYY-MM-DD");
    const ntaskJSON = localStorage.getItem(ndateKey);
    let ntaskCount = 0;
    if (ntaskJSON) {
      ntaskCount = JSON.parse(ntaskJSON).length;
    }
    if(ntaskCount === 0) {
      days += `<button data-date='${ndateKey}' class ='button date-button next-date'>${j}</button>`;
    } else {
      days += `<button data-date='${ndateKey}' class ='button date-button next-date'>${j}<span class="badge alert taskCount-badge">${ntaskCount}</span></button>`;
    }
  }
  monthDays.innerHTML = days;

  for (const button of monthDays.children) {
    button.onclick = (e) => {
      location.href = `todolist.html?date=${e.target.getAttribute(
        "data-date"
      )}`;
      www;
    };
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
