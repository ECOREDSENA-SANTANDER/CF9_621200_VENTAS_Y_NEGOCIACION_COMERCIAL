<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 #[em Layout] (distribución en planta)

    img.mb-4(src='@/assets/curso/temas/t4/1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p El #[em layout] o distribución en planta hace referencia a la forma en que se organizan los espacios, muebles, pasillos y zonas de exhibición dentro de un establecimiento comercial. Su objetivo es facilitar la circulación de los clientes, mejorar la visualización de los productos y optimizar el uso del espacio disponible en el punto de venta.
        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 Una adecuada distribución del espacio permite orientar el recorrido del consumidor dentro del establecimiento, mejorar la experiencia de compra y aumentar la exposición de los productos. Por esta razón, el diseño del #[em layout] es una herramienta estratégica dentro del #[em merchandising] y la gestión del punto de venta.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/2.png', alt='')

    .row.justify-content-center(data-aos='fade')
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-4.h-100.p-xl-5.p-4.d-flex.flex-column.justify-content-center
          p El #[em layout] comercial es la planificación y organización del espacio físico dentro de un establecimiento con el propósito de distribuir adecuadamente el mobiliario, los pasillos, las áreas de exhibición y las zonas de circulación.
          p Su finalidad es optimizar el espacio disponible, facilitar el acceso a los productos y mejorar la experiencia de compra del consumidor dentro del punto de venta. 
          p.mb-0 Un #[em layout] bien diseñado permite guiar al cliente a través del establecimiento, aumentando la visibilidad de los productos y favoreciendo las ventas.



    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1. Tipos de #[em layout] en establecimientos comerciales

    p.mb-4 El #[em layout] corresponde a la distribución física de los espacios, mobiliario, productos y zonas de circulación dentro de un establecimiento comercial; su diseño influye directamente en la experiencia de compra, la comodidad del cliente, el aprovechamiento del espacio y la visibilidad de los productos. Una adecuada planificación del #[em layout] permite optimizar el recorrido de los consumidores, facilitar la localización de los productos y favorecer el cumplimiento de los objetivos comerciales del negocio.

    .row.justify-content-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 9. 
          span Tipos de #[em layout] en establecimientos comerciales
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Tipo de #[em layout]
                th Descripción
            tbody
              tr
                td.fw-bold #[em Layout] en cuadrícula
                td Organiza el espacio mediante pasillos rectos y paralelos que facilitan la circulación y la ubicación de los productos. Es común en supermercados, farmacias y tiendas de autoservicio debido a su eficiencia en el aprovechamiento del espacio.
              tr
                td.fw-bold #[em Layout] en circuito
                td Diseña un recorrido definido que invita al cliente a transitar por diferentes secciones antes de llegar a la salida. Favorece la exposición de una mayor cantidad de productos y estimula las compras por descubrimiento.
              tr
                td.fw-bold #[em Layout] libre
                td Presenta una distribución flexible y menos estructurada, permitiendo una circulación más espontánea. Se utiliza frecuentemente en tiendas de moda, tecnología y decoración, donde se busca generar una experiencia de compra más dinámica.
              tr
                td.fw-bold #[em Layout] en espina de pescado
                td Combina un pasillo principal con pasillos secundarios ubicados en ángulo, facilitando el acceso a diferentes áreas del establecimiento y mejorando la orientación del cliente dentro del espacio comercial.

    .cajon.color-secundario.bg-color-1.p-4.px-lg-5.mb-5
      p.mb-0 La selección del tipo de #[em layout] depende de factores como el tamaño del establecimiento, la naturaleza de los productos comercializados, el perfil de los consumidores y los objetivos de venta. Un diseño adecuado contribuye a mejorar la experiencia del cliente, optimizar la circulación y aumentar la eficiencia de las operaciones comerciales.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Función del #[em layout]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t4/4.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p La función principal del #[em layout] es organizar el espacio del establecimiento de manera eficiente para facilitar la circulación de los clientes y mejorar la exposición de los productos. Un diseño adecuado permite optimizar el uso del espacio, aumentar la visibilidad de los artículos y orientar el recorrido del consumidor dentro del punto de venta.
        p.mb-0 Además, el #[em layout] contribuye a mejorar la experiencia de compra, ya que permite que los clientes encuentren los productos de manera más rápida y cómoda. También ayuda a destacar promociones, organizar las áreas de exhibición y mejorar la eficiencia operativa del establecimiento comercial.


</template>

<script>
export default {
  name: 'Tema4',
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
