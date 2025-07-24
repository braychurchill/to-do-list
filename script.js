function updateTime() {
  const now = new Date();  
  const time = now.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);
updateTime();

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li')
  li.textContent = taskText

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function applyMode(mode) {
  const body = document.body;
  const icon = document.getElementById('modeIcon');

  if (mode === 'light') {
    body.classList.add('light-mode');
    icon.src = 'sun.png';
  } else {
    body.classList.remove('light-mode');
    icon.src = 'moon.png';
  }
}

function setupModeToggle() {
  const toggle = document.getElementById('modeToggle');

  toggle.addEventListener('change', () => {
    const newMode = toggle.checked ? 'light' : 'dark';
    applyMode(newMode);
    localStorage.setItem('theme', newMode);
  });
}

document.addEventListener('DOMContentLoaded',() => {
  const savedMode = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  const initialMode = savedMode || (systemPrefersLight ? 'light' : 'dark');

  document.getElementById('modeToggle').checked = initialMode === 'light';
  applyMode(initialMode);
  setupModeToggle();
  });
