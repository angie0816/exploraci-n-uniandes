document.getElementById('go-btn').addEventListener('click', function() {
    const params = new URLSearchParams({
      edif1: 'false',
      edif2: 'false',
      edif3: 'false'
    });
    window.location.href = `paginaPrincipal.html?${params.toString()}`;
  });