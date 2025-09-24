document.getElementById('to-landing2').addEventListener('click', function() {
    // Tomamos los parámetros actuales de la URL
    const params = new URLSearchParams(window.location.search);
    // Redirigimos a landing2 con los mismos parámetros
    window.location.href = `Ml.html?${params.toString()}`;
});


  
document.getElementById('to-landing3').addEventListener('click', function() {
    // Tomamos los parámetros actuales de la URL
    const params = new URLSearchParams(window.location.search);
    // Redirigimos a landing2 con los mismos parámetros
    window.location.href = `C.html?${params.toString()}`;
});


document.getElementById('to-landing4').addEventListener('click', function() {
    // Tomamos los parámetros actuales de la URL
    const params = new URLSearchParams(window.location.search);
    // Redirigimos a landing2 con los mismos parámetros
    window.location.href = `B.html?${params.toString()}`;
  });

  document.getElementById('to-landing5').addEventListener('click', function() {
    const params = new URLSearchParams(window.location.search);

    const edif1 = params.get('edif1') === 'true';
    const edif2 = params.get('edif2') === 'true';
    const edif3 = params.get('edif3') === 'true';

    if (edif1 && edif2 && edif3) {
      // ✅ Todos true → ir a landing6
      window.location.href = `Qreal2.html?${params.toString()}`;
    } else {
      // ❌ Alguno false → ir a landing5
      window.location.href = `Qreal.html?${params.toString()}`;
    }
  });

