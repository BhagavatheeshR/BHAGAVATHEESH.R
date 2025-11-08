(function () {
  const svg = document.getElementById('connect-svg');
  const projectsSection = document.getElementById('projects');
  if (!svg || !projectsSection) return;

  let observer;
  let isVisible = false;

  function collectPairs() {
    const thumbs = Array.from(document.querySelectorAll('.thumb[data-connect]'));
    const pairs = [];
    thumbs.forEach(t => {
      const id = t.getAttribute('data-connect');
      const card = document.querySelector(`.card[data-connect="${id}"]`);
      if (card) pairs.push({ thumb: t, card });
    });
    return pairs;
  }

  function anchorPoint(el, which = 'right-middle') {
    const r = el.getBoundingClientRect();
    switch (which) {
      case 'right-middle': return { x: r.right + 5, y: r.top + r.height / 2 };
      case 'left-middle':  return { x: r.left - 5,  y: r.top + r.height / 2 };
      default: return { x: r.left, y: r.top };
    }
  }

  function buildPath(p1, p2) {
    const midX = (p1.x + p2.x) / 2;
    const cp1 = { x: midX, y: p1.y };
    const cp2 = { x: midX, y: p2.y };
    return `M ${p1.x},${p1.y} C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${p2.x},${p2.y}`;
  }

  function drawConnectors() {
    if (!isVisible) return;
    
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const pairs = collectPairs();
    if (!pairs.length) return;

    pairs.forEach((pair, i) => {
      const start = anchorPoint(pair.thumb, 'right-middle');
      const end = anchorPoint(pair.card, 'left-middle');

      const d = buildPath(start, end);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.classList.add('connector');

      svg.appendChild(path);
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.transition = 'none';

      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 800ms ease';
        path.style.strokeDashoffset = 0;
      }, 200 * i);
    });
  }

  function syncSVGSize() {
    const rect = projectsSection.getBoundingClientRect();
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
  }

  function refresh() {
    syncSVGSize();
    drawConnectors();
  }

  function initIntersectionObserver() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          refresh();
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(projectsSection);
  }

  window.addEventListener('load', () => {
    syncSVGSize();
    initIntersectionObserver();
  });
  
  window.addEventListener('resize', () => {
    clearTimeout(window._connectResize);
    window._connectResize = setTimeout(refresh, 120);
  });
})();