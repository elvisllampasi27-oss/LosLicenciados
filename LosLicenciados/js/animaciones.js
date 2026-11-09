/* =============================================================
   ✨ ANIMACIONES — Los Licenciados
   1. Logo de esfera de puntos (inspirado en el panel de AcademiApp):
      <canvas class="logo-esfera" width="40" height="40"></canvas>
   2. Aparición al hacer scroll: agrega class="aparecer" a un elemento.
   3. Contadores animados: <span data-contar="128">0</span>
   Respeta "reducir movimiento" del sistema operativo.
   ============================================================= */

const Animaciones = (() => {
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- 1. Logo esfera (espiral de Fibonacci) ----------
  function esfera(canvas, { puntos = Number(canvas.dataset.puntos) || 110, color = [242, 196, 135], color2 = [217, 138, 61] } = {}) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const lado = canvas.width;
    canvas.width = canvas.height = lado * dpr;
    canvas.style.width = canvas.style.height = lado + "px";
    ctx.scale(dpr, dpr);

    // Puntos repartidos sobre una esfera con la espiral de Fibonacci
    const aureo = Math.PI * (3 - Math.sqrt(5));
    const base = Array.from({ length: puntos }, (_, i) => {
      const y = 1 - (i / (puntos - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      return [Math.cos(aureo * i) * r, y, Math.sin(aureo * i) * r];
    });

    // Tamaño del punto: proporcional al lienzo y más fino cuantos más puntos haya
    const tamPunto = lado * 0.022 * Math.sqrt(110 / puntos);
    const mezclar = (t) => color.map((c, k) => Math.round(c + (color2[k] - c) * t));

    function dibujar(angulo) {
      ctx.clearRect(0, 0, lado, lado);
      const cos = Math.cos(angulo), sin = Math.sin(angulo);
      const inclinacion = 0.35, ci = Math.cos(inclinacion), si = Math.sin(inclinacion);
      const proyectados = base.map(([x, y, z]) => {
        const x1 = x * cos + z * sin, z1 = -x * sin + z * cos;   // giro en Y
        const y2 = y * ci - z1 * si, z2 = y * si + z1 * ci;      // inclinación en X
        return [x1, y2, z2];
      }).sort((a, b) => a[2] - b[2]);

      const radio = lado * 0.42, centro = lado / 2;
      for (const [x, y, z] of proyectados) {
        const cercania = (z + 1) / 2;                            // 0 = atrás, 1 = adelante
        const [r, g, b] = mezclar(1 - cercania);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.25 + cercania * 0.75})`;
        ctx.beginPath();
        ctx.arc(centro + x * radio, centro + y * radio, (0.5 + cercania * 1.3) * tamPunto, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (sinMovimiento) return dibujar(0.6);
    const inicio = performance.now();
    (function cuadro(ahora) {
      dibujar(((ahora - inicio) / 9000) * Math.PI * 2);           // una vuelta cada 9 s
      requestAnimationFrame(cuadro);
    })(inicio);
  }

  // ---------- 2. Aparición al hacer scroll ----------
  function apariciones() {
    const elementos = document.querySelectorAll(".aparecer");
    if (sinMovimiento || !("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    elementos.forEach((el) => observador.observe(el));
  }

  // ---------- 3. Contadores animados ----------
  function contar(elemento, destino = Number(elemento.dataset.contar)) {
    if (sinMovimiento) { elemento.textContent = destino.toLocaleString("es-PE"); return; }
    const duracion = 1200, inicio = performance.now();
    (function paso(ahora) {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const suave = 1 - Math.pow(1 - t, 3);
      elemento.textContent = Math.round(destino * suave).toLocaleString("es-PE");
      if (t < 1) requestAnimationFrame(paso);
    })(inicio);
  }

  // ---------- Aviso flotante ----------
  function aviso(texto, icono = "✓") {
    let zona = document.querySelector(".toast-zona");
    if (!zona) { zona = document.createElement("div"); zona.className = "toast-zona"; zona.setAttribute("role", "status"); document.body.append(zona); }
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = `${icono}  ${texto}`;
    zona.append(t);
    setTimeout(() => t.remove(), 3000);
  }

  // Arranque automático
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("canvas.logo-esfera").forEach((c) => esfera(c));
    document.querySelectorAll("[data-contar]").forEach((el) => contar(el));
    apariciones();
  });

  return { esfera, contar, aviso, apariciones };
})();
