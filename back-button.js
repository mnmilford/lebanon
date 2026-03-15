(function () {
  var style = document.createElement('style');
  style.textContent = [
    '@property --angle {',
    '  syntax: "<angle>";',
    '  initial-value: 0deg;',
    '  inherits: false;',
    '}',

    '.version-back {',
    '  position: fixed;',
    '  bottom: 1.5rem;',
    '  left: 1.5rem;',
    '  z-index: 9999;',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 0.5rem;',
    '  padding: 0.65rem 1.3rem;',
    '  font-family: Inter, system-ui, -apple-system, sans-serif;',
    '  font-size: 0.85rem;',
    '  font-weight: 600;',
    '  color: #f1f5f9;',
    '  text-decoration: none;',
    '  background: #111827;',
    '  border-radius: 100px;',
    '  cursor: pointer;',
    '  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;',
    '  isolation: isolate;',
    '  animation: back-btn-enter 0.6s 0.5s cubic-bezier(0.16,1,0.3,1) both;',
    '}',

    '.version-back::before,',
    '.version-back::after {',
    '  content: "";',
    '  position: absolute;',
    '  inset: -2px;',
    '  border-radius: inherit;',
    '  background: conic-gradient(',
    '    from var(--angle),',
    '    #dc2626, #dc2626 30%,',
    '    #ffffff 33%, #ffffff 63%,',
    '    #16a34a 66%, #16a34a 96%,',
    '    #dc2626',
    '  );',
    '  animation: spin-border 3s linear infinite;',
    '}',

    '.version-back::before { z-index: -1; }',

    '.version-back::after {',
    '  z-index: -2;',
    '  filter: blur(14px);',
    '  opacity: 0.55;',
    '}',

    '.version-back:hover {',
    '  transform: translateY(-3px) scale(1.05);',
    '}',

    '.version-back .back-arrow {',
    '  display: inline-block;',
    '  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);',
    '}',

    '.version-back:hover .back-arrow {',
    '  transform: translateX(-3px);',
    '}',

    '@keyframes spin-border {',
    '  to { --angle: 360deg; }',
    '}',

    '@keyframes back-btn-enter {',
    '  from { opacity: 0; transform: translateY(1rem) scale(0.9); }',
    '  to   { opacity: 1; transform: translateY(0) scale(1); }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var link = document.createElement('a');
  link.href = '../index.html';
  link.className = 'version-back';
  link.innerHTML = '<span class="back-arrow">\u2190</span> Choose Version';
  document.body.appendChild(link);
})();
