const date = new Date();



const monthDays = document.getElementById('days');

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

console.log(lastDayIndex);

const renderCalendar = () => {
  const months = [
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
  document.getElementById('monthName').innerHTML = months[date.getMonth()];

  document.getElementById('year').innerHTML = date.getFullYear();

  let days = '';

  for(let x = firstDayIndex; x > 0; x--){
      days += `<span class='prev-date'>${prevLastDay - x + 1}</span>`;
  }

  for (let i = 1;i <= lastDay; i++) {
      days += `<span>${i}</span>`;
      monthDays.innerHTML = days;
   }
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
