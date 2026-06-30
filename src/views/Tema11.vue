<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 11
      h1 Evaluación de estrategias en el punto de venta

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')  
      .col-lg-7
        p La evaluación de estrategias en el punto de venta consiste en medir los resultados obtenidos mediante las acciones de #[em visual merchandising], exhibición de productos y promoción de ventas. Su propósito es determinar si las estrategias implementadas contribuyen a atraer clientes, mejorar la experiencia de compra y aumentar las ventas.
        .cajon.color-primario.bg-color-2.p-4.mb-4
          p.mb-0 Para realizar esta evaluación, los establecimientos utilizan herramientas como reportes de ventas, sistemas de punto de venta (#[em POS]), encuestas de satisfacción y análisis del comportamiento del consumidor. A partir de la información recopilada, es posible medir aspectos como el volumen de ventas, la cantidad de clientes atendidos, la rotación de productos y el #[em ticket] promedio de compra.
        p Los resultados obtenidos permiten identificar fortalezas, oportunidades de mejora y tomar decisiones orientadas a optimizar la distribución del espacio comercial, la exhibición de productos y las actividades promocionales.
        p El estudio del punto de venta y el #[em visual merchandising] permite comprender cómo la organización del espacio comercial, la presentación de los productos, las estrategias promocionales y la experiencia del cliente influyen en la decisión de compra. Asimismo, la evaluación de estas estrategias proporciona información para mejorar continuamente el desempeño comercial del establecimiento. En conjunto, estos elementos contribuyen a crear espacios de venta más atractivos, funcionales y orientados al logro de los objetivos comerciales de la organización.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t11/1.png', alt='')



</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
