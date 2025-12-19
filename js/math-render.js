(function() {
  function tryRender() {
    if (typeof renderMathInElement === 'function') {
      try {
        renderMathInElement(document.body, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ],
        });
        return true;
      } catch (e) {
        console.warn('KaTeX render failed:', e);
      }
    }
    return false;
  }

  if (!tryRender()) {
    var attempts = 0;
    var id = setInterval(function() {
      attempts += 1;
      if (tryRender() || attempts > 50) clearInterval(id);
    }, 100);
    // As a fallback, try one more time on load
    window.addEventListener('load', function() { tryRender(); });
  }
})();
