// vòng 1 *******************************************
class ProgressRing extends HTMLElement {
  constructor() {
    super();
    const stroke = this.getAttribute('stroke');
    const radius = this.getAttribute('radius');
    const normalizedRadius = radius - stroke * 2;
    this._circumference = normalizedRadius * 2 * Math.PI;

    this._root = this.attachShadow({ mode: 'open' });
    this._root.innerHTML = `
                              <svg
                                  height="${radius * 2}"
                                  width="${radius * 2}"
                              >
                                  <circle
                                  stroke="brown"
                                  stroke-dasharray="${this._circumference} ${this._circumference}"
                                  style="stroke-dashoffset:${this._circumference}"
                                  stroke-width="${stroke}"
                                  fill="bisque"
                                  r="${normalizedRadius}"
                                  cx="${radius}"
                                  cy="${radius}"
                                  />
                              </svg>

                              <style>
                                  circle {
                                  transition: stroke-dashoffset 0.35s;
                                  transform: rotate(-90deg);
                                  transform-origin: 50% 50%;
                                  }
                              </style>
                              `;
  } // end constructor

  setProgress(percent) {
    const offset = this._circumference - (percent / 100 * this._circumference);
    const circle = this._root.querySelector('circle');
    circle.style.strokeDashoffset = offset;
  }



  static get observedAttributes() {
    return ['progress'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'progress') {
      this.setProgress(newValue);
    }
  }
}

window.customElements.define('progress-ring', ProgressRing);

let progress = 100;
const el = document.querySelector('#progressRing');

el.setAttribute('progress', progress);
const interval = setInterval(() => {
  if (progress <= 0) {
    progress = 0;
    alert("Thú cưng của bạn đã chết, hãy bắt đầu lại!!");
  } else {
    progress -= 10;
  }
  if (progress < 0) {
    return;
  }
  console.log(progress);
  el.setAttribute('progress', progress);
}, 7000);

const eatOne = document.querySelector('#eat-one');
eatOne.addEventListener('click', e => {
  if (progress < 100) {
    progress += 20;
  } else {
    return
  }
  if (progress > 100) progress = 100;
  console.log(progress);
  el.setAttribute('progress', progress);
})

const eatXuong = document.querySelector('#eat-xuong');
eatXuong.addEventListener('click', e => {
  if (progress < 100) {
    progress += 30;
  } else {
    return
  }
  if (progress > 100) progress = 100;
  console.log(progress);
  el.setAttribute('progress', progress);
})

const drinkMill = document.querySelector('#drink-mill');
drinkMill.addEventListener('click', e => {
  if (progress < 100) {
    progress += 10;
  } else {
    return
  }
  if (progress > 100) progress = 100;
  console.log(progress);
  el.setAttribute('progress', progress);
})

// vong 2 ************************************************************

class ProgressRing2 extends HTMLElement {
  constructor() {
    super();
    const stroke2 = this.getAttribute('stroke');
    const radius2 = this.getAttribute('radius');
    const normalizedRadius2 = radius2 - stroke2 * 2;
    this._circumference = normalizedRadius2 * 2 * Math.PI;

    this._root = this.attachShadow({ mode: 'open' });
    this._root.innerHTML = `
                                <svg
                                    height="${radius2 * 2}"
                                    width="${radius2 * 2}"
                                >
                                    <circle
                                    id ="circle-two"
                                    stroke="brown"
                                    stroke-dasharray="${this._circumference} ${this._circumference}"
                                    style="stroke-dashoffset:${this._circumference}"
                                    stroke-width="${stroke2}"
                                    fill="bisque"
                                    r="${normalizedRadius2}"
                                    cx="${radius2}"
                                    cy="${radius2}"
                                    />
                                </svg>

                                <style>
                                    circle {
                                    transition: stroke-dashoffset 0.35s;
                                    transform: rotate(-90deg);
                                    transform-origin: 50% 50%;
                                    }
                                </style>
                                `;
  } // end constructor

  setProgress2(percent2) {
    const offset2 = this._circumference - (percent2 / 100 * this._circumference);
    const circle2 = this._root.querySelector('#circle-two');
    circle2.style.strokeDashoffset = offset2;
  }



  static get observedAttributes() {
    return ['progress2'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'progress2') {
      this.setProgress2(newValue);
    }
  }
}

window.customElements.define('progress-ring2', ProgressRing2);

// emulate progress attribute change
let progress2 = 100;
const el2 = document.querySelector('#progressRing2');

el2.setAttribute('progress2', progress2);
const interval2 = setInterval(() => {
  if (progress2 <= 0) {
    progress2 = 0;
  } else {
    progress2 -= 10;
  }
  if (progress2 < 0) return;
  el2.setAttribute('progress2', progress2);
}, 5000);

const ball = document.querySelector('#ball');
ball.addEventListener('click', e => {
  if (progress2 < 100) {
    progress2 += 30;
  } else {
    return
  }
  if (progress2 > 100) progress2 = 100;
  console.log(progress2);
  el2.setAttribute('progress2', progress2);
})

const bear = document.querySelector('#bear');
bear.addEventListener('click', e => {
  if (progress2 < 100) {
    progress2 += 10;
  } else {
    return
  }
  if (progress2 > 100) progress2 = 100;
  console.log(progress2);
  el2.setAttribute('progress2', progress2);
})


  // vong 3 ************************************************************
  class ProgressRing3 extends HTMLElement {
    constructor() {
        super();
        const stroke3 = this.getAttribute('stroke');
        const radius3 = this.getAttribute('radius');
        const normalizedRadius3 = radius3 - stroke3 * 2;
        this._circumference = normalizedRadius3 * 2 * Math.PI;

        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `
                                <svg
                                    height="${radius3 * 2}"
                                    width="${radius3 * 2}"
                                >
                                    <circle
                                    id ="circle-three"
                                    stroke="brown"
                                    stroke-dasharray="${this._circumference} ${this._circumference}"
                                    style="stroke-dashoffset:${this._circumference}"
                                    stroke-width="${stroke3}"
                                    fill="bisque"
                                    r="${normalizedRadius3}"
                                    cx="${radius3}"
                                    cy="${radius3}"
                                    />
                                </svg>

                                <style>
                                    circle {
                                    transition: stroke-dashoffset 0.35s;
                                    transform: rotate(-90deg);
                                    transform-origin: 50% 50%;
                                    }
                                </style>
                                `;
    } // end constructor

    setProgress3(percent3) {
        const offset3 = this._circumference - (percent3 / 100 * this._circumference);
        const circle3 = this._root.querySelector('#circle-three');
        circle3.style.strokeDashoffset = offset3;
    }



    static get observedAttributes() {
        return ['progress3'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress3') {
            this.setProgress3(newValue);
        }
    }
}

window.customElements.define('progress-ring3', ProgressRing3);

// emulate progress attribute change
let progress3 = 100;
const el3 = document.querySelector('#progressRing3');

el3.setAttribute('progress3', progress3);
const interval3 = setInterval(() => {
    if (progress3 <= 0) {
        progress3 = 0;
    } else {
        progress3 -= 10;
    }
    if (progress3 < 0) return;
    el3.setAttribute('progress3', progress3);
}, 9000);

const clearBody = document.querySelector('#clear-body');
clearBody.addEventListener('click', e => {
    if (progress3 < 100) {
      progress3 += 30;
    } else {
      return
    }
    if (progress3 > 100) progress3 = 100;
    el3.setAttribute('progress3', progress3);
})