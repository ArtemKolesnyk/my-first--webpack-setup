
class CountdownTimer {
  constructor({targetDate}) {
    this.refs = {
      day: document.querySelector('[data-value="days"]'),
      hour: document.querySelector('[data-value="hours"]'),
      min: document.querySelector('[data-value="mins"]'),
      sec: document.querySelector('[data-value="secs"]')
    }
    this.targetDate = targetDate.getTime();
    this.isActive = false;
  }
    
    start() {
      if (this.isActive) return;
      this.isActive = true;
      this.id = setInterval(() => {
        const currentTime = Date.now();
        const gapTime = this.targetDate - currentTime;
        const timeComponents = getTimeComponents(gapTime);
        this.updateTimerFace(timeComponents);
      }, 1000);
    }
  updateTimerFace({ days, hours, mins, secs }) {
  this.refs.day.textContent = `${days}`;
  this.refs.hour.textContent = `${hours}`;
  this.refs.min.textContent = `${mins}`;
  this.refs.sec.textContent = `${secs}`; 
}
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}


new CountdownTimer({
  targetDate: new Date('Jan 1, 2023'),
}).start();
