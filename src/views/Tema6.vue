<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 6
      h1 Inventarios

    p.mb-4 La gestión de inventarios es un proceso fundamental dentro del punto de venta, ya que permite controlar la cantidad de productos disponibles para la venta y garantizar su correcta reposición en las áreas de exhibición. Un adecuado manejo del inventario facilita la organización de los productos, evita faltantes o exceso de mercancía y contribuye a mantener una oferta constante para los clientes dentro del establecimiento comercial. Además, el control de inventarios permite apoyar las estrategias de #[em merchandising] y mejorar la eficiencia operativa del negocio.

    img.mb-4(src='@/assets/curso/temas/t6/1.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-6.mb-3.mb-lg-0(data-aos='fade-right')
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-1.svg' alt='')
          .tarjeta.color-acento-contenido.w-100
            .p-4.pt-2
              p El inventario se refiere al conjunto de productos o mercancías que una empresa posee disponibles para la venta dentro del establecimiento comercial. Este registro permite conocer la cantidad de artículos existentes, su ubicación y su disponibilidad en el punto de venta.
      .col-lg-5.col-md-6.mb-3.mb-lg-0(data-aos='fade-left')
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-2.svg' alt='')
          .tarjeta.color-acento-contenido.w-100
            .p-4.pt-2
              p En el contexto del #[em merchandising] y la gestión del punto de venta, el inventario permite asegurar que los productos estén disponibles en las estanterías o áreas de exhibición cuando los clientes los demanden, evitando pérdidas de ventas por falta de #[em stock].


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Métodos para el manejo de inventarios

    p Los métodos de inventario son procedimientos utilizados por las empresas para registrar y controlar la entrada, salida y disponibilidad de los productos dentro del establecimiento comercial. Entre los métodos más utilizados se encuentran:

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-1.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-6.col-4
              img(src='@/assets/curso/temas/t6/tarj2-1.svg', alt='')
          .w-fit.bg-color-secundario.text-center.mx-auto.py-1.px-4.px-lg-5.mb-3
            h4.mb-0 Inventario permanente
          p Permite registrar de forma continua las entradas y salidas de productos, manteniendo actualizado el stock disponible en todo momento.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-1.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-md-7.col-5
              img(src='@/assets/curso/temas/t6/tarj2-2.svg', alt='')
          .w-fit.bg-color-secundario.text-center.mx-auto.py-1.px-4.px-lg-5.mb-3
            h4.mb-0 Inventario periódico
          p Se realiza en intervalos de tiempo determinados, donde se verifica físicamente la cantidad de productos disponibles.
      .col-lg-4.col-md-6
        .tarjeta.bg-color-1.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-5.col-4
              img(src='@/assets/curso/temas/t6/tarj2-3.svg', alt='')
          .w-fit.bg-color-secundario.text-center.mx-auto.py-1.px-4.px-lg-5.mb-3
            h4.mb-0 Inventario físico
          p Consiste en el conteo directo de los productos existentes en el establecimiento para verificar su cantidad real.
  
    p.mb-5 Estos métodos ayudan a las empresas a mantener un control adecuado de la mercancía y a planificar la reposición de productos en el punto de venta.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Técnicas de inventarios

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t6/2.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p.mb-4 Las técnicas de inventario corresponden a las prácticas utilizadas para organizar, controlar y supervisar los productos dentro del establecimiento comercial. Entre las técnicas más utilizadas se encuentran:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Conteo de mercancía: revisión física de los productos disponibles en el inventario.
          li
            i.fas.fa-check-circle
            span.mb-0 Clasificación de productos: organización de los artículos según categorías o rotación.
          li
            i.fas.fa-check-circle
            span.mb-0 Control de entradas y salidas: registro de productos que ingresan o salen del establecimiento.
          li
            i.fas.fa-check-circle
            span.mb-0 Rotación de productos: organización de los artículos para evitar vencimientos o deterioro de mercancía.
          li
            i.fas.fa-check-circle
            span.mb-0 Uso de sistemas de gestión: aplicación de #[em software] o herramientas tecnológicas para controlar inventarios en tiempo real.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos='fade')     
        .cajon.color-primario.bg-color-2.p-4.mb-4
          p.mb-0 Estas técnicas permiten mejorar la organización del punto de venta, facilitar la reposición de productos y garantizar la disponibilidad de mercancía para los clientes.
  

</template>

<script>
export default {
  name: 'Tema6',
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
