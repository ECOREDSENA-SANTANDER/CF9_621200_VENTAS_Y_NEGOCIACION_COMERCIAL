<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 7
      h1 #[em Visual merchandising]

    p.mb-4 Es una estrategia de #[em marketing] utilizada en los establecimientos comerciales para mejorar la presentación visual del punto de venta. Su objetivo es atraer la atención del cliente, destacar los productos y generar una experiencia de compra más atractiva dentro de la tienda. A través del uso de elementos como iluminación, colores, vitrinas, señalización y organización de los productos, las empresas buscan influir en la percepción del consumidor y estimular la decisión de compra.

    .row.justify-content-center(data-aos='fade')
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t7/1.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-4.h-100.p-xl-5.p-4.d-flex.flex-column.justify-content-center
          p.mb-0 El #[em visual merchandising] se define como el conjunto de técnicas visuales utilizadas para presentar los productos de manera atractiva dentro del punto de venta. Estas técnicas incluyen el uso del color, la iluminación, el diseño del espacio, la decoración y la disposición de los productos. Su finalidad es captar la atención del cliente, facilitar la identificación de los productos y reforzar la imagen de la marca dentro del establecimiento comercial.


    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.1. Tipos de #[em visual merchandising]

    p.mb-4 El #[em visual merchandising] integra diversas estrategias orientadas a mejorar la presentación de los productos y optimizar la experiencia de compra dentro del establecimiento comercial. Su aplicación puede desarrollarse tanto en los espacios externos como internos del punto de venta, utilizando elementos de diseño, exhibición, señalización e información comercial para captar la atención del consumidor, orientar su recorrido y favorecer la decisión de compra. Dependiendo de los objetivos comerciales, las acciones de #[em visual merchandising] pueden enfocarse en atraer visitantes, destacar productos específicos o fortalecer campañas promocionales.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 10. 
          span Tipos de #[em visual merchandising]
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th Tipo de visual #[em merchandising]
                th Características principales
                th Aplicación en el punto de venta
            tbody
              tr
                td.fw-bold #[em Visual merchandising] de vitrina
                td Utiliza escaparates y exhibiciones externas para generar interés y atraer potenciales clientes.
                td Presentación de lanzamientos, colecciones de temporada o productos destacados.
              tr
                td.fw-bold #[em Visual merchandising] interior
                td Organiza estratégicamente productos, mobiliario y señalización para facilitar la circulación y la compra.
                td Distribución de categorías, zonas de exhibición y recorridos comerciales.
              tr
                td.fw-bold #[em Visual merchandising] promocional
                td Resalta productos, descuentos o campañas mediante recursos gráficos y exhibiciones especiales.
                td Islas promocionales, cabeceras de góndola y espacios temáticos de temporada.
              tr
                td.fw-bold #[em Visual merchandising] experiencial
                td Crea ambientes que estimulan los sentidos y fortalecen la interacción con la marca.
                td Espacios interactivos, demostraciones de producto y experiencias inmersivas.

</template>

<script>
export default {
  name: 'Tema7',
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
