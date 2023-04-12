const btn = document.querySelector('.j-btn-test');
const chart = document.querySelector('.j-chart');

btn.addEventListener('click', () => {
  chart.innerHTML = `
  <div class="land">
  <div class="land__flag">
  <h3>Флаг России</h3>
  <svg width="180" height="120">
      <polygon points="0,0 0,40 180,40 180,0" fill="white"/>
      <polygon points="0,40 0,80 180,80 180,40" fill="blue"/>
      <polygon points="0,80 0,120 180,120 180,80" fill="red"/>
  </svg>
  </div>
  <div class="land__flag">
  <h3>Флаг Франции</h3>
  <svg width="180" height="120">
      <polygon points="0,0 60,0 60,120 0,120" fill="blue"/>
      <polygon points="60,0 120,0 120,120 60,120" fill="white"/>
      <polygon points="120,0 180,0 180,120 120,120" fill="red"/>
  </svg>
  </div>
  <div class="land__flag">
  <h3>Флаг Финляндии</h3>
  <svg width="180" height="120">
      <polygon points="0,0 0,120 180,120 180,0" fill="white"/>
      <polygon points="0,45 180,45 180,75 0,75" fill="blue"/>
      <polygon points="50,0 80,0 80,120 50,120" fill="blue"/>
  </svg>
  </div>
  <div class="land__flag">
  <h3>Флаг Швейцарии</h3>
  <svg width="180" height="120">
      <polygon points="0,0 0,120 180,120 180,0" fill="red"/>
      <polygon points="40,45 140,45 140,75 40,75" fill="white"/>
      <polygon points="75,10 105,10 105,110 75,110" fill="white"/>
  </svg>
  </div>
  <div class="land__flag">
  <h3>Флаг Японии</h3>
  <svg width="180" height="120">
      <polygon points="0,0 0,120 180,120 180,0" fill="white"/>
      <circle cx="90" cy="60" r="36" fill="red"/>
  </svg>
  </div>
</div>
  `;
});