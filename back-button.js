(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.version-back {',
    '  position: fixed;',
    '  bottom: 1.5rem;',
    '  left: 1.5rem;',
    '  z-index: 9999;',
    '  display: flex;',
    '  align-items: center;',
    '  text-decoration: none;',
    '  cursor: pointer;',
    '}',

    '.version-back-shape {',
    '  width: 65px;',
    '  height: auto;',
    '  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4));',
    '  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);',
    '}',

    '.version-back:hover .version-back-shape {',
    '  transform: scale(1.08);',
    '}',

    '.version-back-label {',
    '  font-family: Inter, system-ui, -apple-system, sans-serif;',
    '  font-size: 0.82rem;',
    '  font-weight: 600;',
    '  color: #f1f5f9;',
    '  background: rgba(17,24,39,0.92);',
    '  backdrop-filter: blur(12px);',
    '  -webkit-backdrop-filter: blur(12px);',
    '  padding: 0.45rem 0.85rem;',
    '  border-radius: 8px;',
    '  border: 1px solid rgba(148,163,184,0.15);',
    '  white-space: nowrap;',
    '  opacity: 0;',
    '  transform: translateX(-6px);',
    '  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1);',
    '  pointer-events: none;',
    '  margin-left: 0.6rem;',
    '}',

    '.version-back:hover .version-back-label {',
    '  opacity: 1;',
    '  transform: translateX(0);',
    '}',

    '@media (max-width: 600px) {',
    '  .version-back {',
    '    bottom: 1rem;',
    '    left: 1rem;',
    '  }',
    '  .version-back-shape {',
    '    width: 50px;',
    '  }',
    '  .version-back-label {',
    '    display: none;',
    '  }',
    '}',

    '@media (max-width: 400px) {',
    '  .version-back {',
    '    bottom: 0.75rem;',
    '    left: 0.75rem;',
    '  }',
    '  .version-back-shape {',
    '    width: 42px;',
    '  }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var link = document.createElement('a');
  link.href = '../index.html';
  link.className = 'version-back';
  link.title = 'Choose Version';
  link.innerHTML =
    '<svg class="version-back-shape" viewBox="0 0 100 170" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="leb-flag" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#dc2626"/>' +
          '<stop offset="30%" stop-color="#dc2626"/>' +
          '<stop offset="33%" stop-color="#ffffff"/>' +
          '<stop offset="63%" stop-color="#ffffff"/>' +
          '<stop offset="66%" stop-color="#16a34a"/>' +
          '<stop offset="100%" stop-color="#16a34a"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M 25 5 Q 50 0, 78 18 C 82 22, 80 40, 82 55 C 84 70, 78 85, 80 100 C 82 115, 72 128, 60 140 Q 40 158, 20 165 Q 14 158, 15 140 C 16 120, 18 95, 19 75 C 21 50, 22 25, 25 5 Z" ' +
        'fill="url(#leb-flag)" stroke="rgba(241,245,249,0.5)" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<polyline points="55,76 38,85 55,94" fill="none" stroke="rgba(17,24,39,0.75)" ' +
        'stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>' +
    '<span class="version-back-label">Choose Version</span>';

  document.body.appendChild(link);
})();
