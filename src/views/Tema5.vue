<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 5
      h1 Planogramas y planimetría 

    p.mb-4 En el contexto del #[em merchandising], los planogramas ayudan a definir la posición exacta de los productos en los diferentes niveles de exhibición, mientras que la planimetría permite diseñar la distribución general del establecimiento, incluyendo pasillos, zonas de circulación, áreas de exhibición y puntos de pago. Su correcta aplicación contribuye a mejorar la visibilidad de los productos, facilitar el trabajo del personal y fortalecer las estrategias comerciales dentro del punto de venta.

    .row.justify-content-center.mb-4(data-aos='fade-down')
      .col-lg-6.col-md-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 5. 
          span Ecosistema de planograma y planimetría  
        figure 
          img(src='@/assets/curso/temas/t5/fig5.svg', alt='Representación esquemática de un establecimiento comercial donde se integran la distribución física de las secciones, la ubicación de los productos y las áreas de circulación de los clientes. Se destacan diferentes categorías de venta, espacios de servicio y recorridos internos que facilitan la organización del surtido, la orientación del consumidor y la planificación estratégica del punto de venta.')

    .cajon.color-secundario.bg-color-1.p-4.mb-4
      p.mb-0 El planograma es una representación gráfica que muestra la ubicación específica de los productos dentro de estanterías, góndolas o espacios de exhibición en el punto de venta. A través de esta herramienta se define el orden, la cantidad y la posición de los productos con el fin de optimizar la presentación y facilitar la decisión de compra del consumidor.

    p.mb-5 Por su parte, la planimetría corresponde a la representación gráfica de la distribución del espacio dentro del establecimiento comercial, permitiendo visualizar la ubicación de pasillos, mobiliario, áreas de exhibición y zonas de circulación.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Beneficios de planograma y planimetría

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-9.mb-3.mb-lg-0(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t5/1.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p.mb-4 El uso de planogramas y planimetría ofrece diferentes beneficios para la gestión del punto de venta y la organización de los productos. Entre los principales beneficios se encuentran:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Mejora la organización y presentación de los productos.
          li
            i.fas.fa-check-circle
            span.mb-0 Permite optimizar el uso del espacio comercial.
          li
            i.fas.fa-check-circle
            span.mb-0 Facilita la reposición de mercancía por parte del personal.
          li
            i.fas.fa-check-circle
            span.mb-0 Aumenta la visibilidad de productos para los clientes.
          li
            i.fas.fa-check-circle
            span.mb-0 Favorece la implementación de estrategias de #[em merchandising].
          li
            i.fas.fa-check-circle
            span.mb-0 Contribuye a incrementar las ventas dentro del establecimiento.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Usos de planograma y planimetría

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p Los planogramas y la planimetría se utilizan en diferentes tipos de establecimientos comerciales como supermercados, tiendas de ropa, farmacias y grandes superficies. 
        p.mb-4 Entre sus principales usos se encuentran: 
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Planificar la ubicación de productos en estanterías o góndolas.
          li
            i.fas.fa-check-circle
            span.mb-0 Diseñar la distribución del espacio dentro del establecimiento.
          li
            i.fas.fa-check-circle
            span.mb-0 Organizar promociones y exhibiciones especiales.
          li
            i.fas.fa-check-circle
            span.mb-0 Facilitar la gestión del inventario y la reposición de productos.
          li
            i.fas.fa-check-circle
            span.mb-0 Mejorar la experiencia de compra del cliente dentro del punto de venta.
      .col-lg-5.col-md-8.col-10(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t5/2.png', alt='')




</template>

<script>
export default {
  name: 'Tema5',
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
