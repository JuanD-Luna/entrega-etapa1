document.addEventListener('DOMContentLoaded', () => {
  window.scrollToSection = function(id){
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
  }

  const loadBtn = document.getElementById('loadExample');
  if (loadBtn) {
    loadBtn.addEventListener('click', async () => {
      const out = document.getElementById('exampleOutput');
      out.textContent = 'Cargando...';
      try {
        await new Promise(r => setTimeout(r, 800));
        out.textContent = 'Datos cargados: ejemplo de actualización asíncrona.';
      } catch (err) {
        out.textContent = 'Error al cargar datos.';
      }
    });
  }
});