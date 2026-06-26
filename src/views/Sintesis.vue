<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La síntesis aborda la gestión estratégica del espacio comercial para mejorar la experiencia de compra y apoyar los objetivos de venta. Incluye el estudio del establecimiento comercial, la organización del punto de venta, el merchandising, las técnicas de exhibición, el visual merchandising, el vitrinismo y las estrategias promocionales. 

    p Asimismo, incorpora herramientas de planificación, gestión y evaluación que permiten diseñar, implementar y medir acciones orientadas a aumentar la visibilidad de los productos, atraer clientes y fortalecer los resultados comerciales de la organización.
    
    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza los principales temas del componente, incluyendo la gestión del establecimiento comercial, el merchandising, las técnicas de exhibición, el visual merchandising, las estrategias promocionales y los métodos de evaluación. En conjunto, estos elementos permiten planificar, desarrollar y evaluar acciones orientadas a mejorar la experiencia de compra y los resultados comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
