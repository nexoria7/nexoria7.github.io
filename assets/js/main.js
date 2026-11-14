(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const header = $(".header"), progress = $("#scrollProgress"), nav = $("#nav"), menu = $("#menuToggle");
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
    if (header) header.classList.toggle("scrolled", scrollY > 24);
  };
  addEventListener("scroll", updateScroll, { passive: true }); updateScroll();
  menu?.addEventListener("click", () => {
    const opened = nav?.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(Boolean(opened)));
  });
  $$("#nav a").forEach(link => link.addEventListener("click", () => {
    nav?.classList.remove("open"); menu?.setAttribute("aria-expanded", "false");
  }));
  const targets = $$(".section-index, .section-heading, .profile-layout, .expertise-card, .project-row, .principle, .contact-panel");
  targets.forEach((node, index) => {
    node.classList.add("reveal");
    if (node.classList.contains("expertise-card")) node.style.transitionDelay = ((index % 3) * 75) + "ms";
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach(node => observer.observe(node));
  } else targets.forEach(node => node.classList.add("visible"));
  const canvas = $("#particles"), ctx = canvas?.getContext("2d");
  if (canvas && ctx && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let width = 0, height = 0, particles = [], raf = 0;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      width = innerWidth; height = innerHeight; canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: Math.min(65, Math.floor(width / 19)) }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.3 + .35
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(126,190,226,.48)"; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j], distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 115) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(105,164,219," + (.11 * (1 - distance / 115)) + ")";
            ctx.lineWidth = .6; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    const start = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    const stop = () => cancelAnimationFrame(raf);
    resize(); start(); addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  }
})();