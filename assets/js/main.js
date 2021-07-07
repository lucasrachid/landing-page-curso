/* SCROLL REVEAL - MOSTRAR ELEMENTOS AO SCROLLAR A PAGE*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .home-text-content, #home .home-img, #history .history-content, #work h2, #work p, #work grid, #gallery, #work-2, #pricing, #contact
    `,
  { interval: 100 }
);
