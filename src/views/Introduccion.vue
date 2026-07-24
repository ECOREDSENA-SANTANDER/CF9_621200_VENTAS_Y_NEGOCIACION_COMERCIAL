<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p El componente formativo #[b Punto de venta y #[em visual merchandising]] permite comprender la importancia del espacio comercial como un factor estratégico para el fortalecimiento de las ventas y la construcción de experiencias de compra memorables. En un entorno cada vez más competitivo, el punto de venta representa el escenario donde se genera la interacción directa entre los productos, las marcas y los consumidores, convirtiéndose en un elemento fundamental para influir en las decisiones de compra y favorecer la fidelización de los clientes.
        .cajon.color-secundario.bg-color-1.p-4.mb-4
          p.mb-0 Durante el desarrollo de este componente se estudian los principios, técnicas y herramientas que permiten diseñar, organizar y gestionar espacios comerciales de manera efectiva. Se abordan conceptos relacionados con el establecimiento comercial, el #[em merchandising], las estrategias de exhibición, la distribución del espacio mediante #[em layouts] y planogramas, así como el uso adecuado del mobiliario comercial para maximizar la visibilidad y accesibilidad de los productos.
        p Asimismo, se profundiza en aspectos fundamentales relacionados con #[em visual merchandising], el vitrinismo, el #[em marketing] sensorial, la teoría del color y las estrategias de promoción de ventas, elementos que contribuyen a fortalecer la identidad de marca y a generar ambientes atractivos que mejoren la experiencia del consumidor. A través de ejemplos prácticos y aplicaciones reales, los participantes desarrollarán competencias para analizar, diseñar e implementar estrategias comerciales orientadas a optimizar el desempeño de los puntos de venta y contribuir al crecimiento y competitividad de las organizaciones.
      .col-lg-4.d-none.d-lg-block
        img(src="../assets/curso/temas/intro/1.png" alt="")


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/tkNbzFSeriA?si=BJF75sVuJhSe8Rti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Punto de venta y visual merchandising



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
