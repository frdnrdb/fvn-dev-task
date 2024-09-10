import './style.css'

const factBoxListener = () => {
  for (const fact of document.querySelectorAll('.fact')) {
    fact.onclick = () => fact.classList.toggle('expanded');
  }
};

// burn after reading
const presentation = () => {
  const root = document.getElementById('root'); // 🙃
  root.innerHTML = 'Element som presenterer data om dysleksi basert på <a href="https://dysleksinorge.no/statistikk-laerevansker/">statistikk for lærevansker</a>';
  root.style.background = 'gold';
  root.style.padding = '2em';
  console.log('...');
};

factBoxListener();
presentation();
