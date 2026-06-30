<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 8
      h1 Vitrinismo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos='fade-right') 
        p El vitrinismo es una técnica de #[em merchandising] que consiste en diseñar y organizar vitrinas o escaparates para exhibir productos de manera atractiva desde el exterior del establecimiento. Las vitrinas funcionan como el primer contacto visual entre el consumidor y la tienda, por lo que su diseño debe resaltar los productos, utilizar elementos visuales llamativos y transmitir el concepto o identidad del negocio. 
        .cajon.color-secundario.bg-color-1.p-4
          p.mb-0 El vitrinismo se define como el conjunto de técnicas aplicadas al diseño y montaje de vitrinas o escaparates con el propósito de atraer la atención del público y promover la compra de los productos exhibidos. A través del uso de iluminación, maniquíes, colores, decoración y organización de productos, las vitrinas permiten comunicar visualmente el estilo de la marca y motivar a los consumidores a ingresar al establecimiento comercial. Su objetivo es captar la atención de los transeúntes, comunicar la imagen de la marca e incentivar la entrada de clientes al punto de venta.
      .col-lg-4.col-md-7.col-10(data-aos='fade-left')
        img(src='@/assets/curso/temas/t8/1.png', alt='')


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Tipos de vitrinas

    p Las vitrinas constituyen uno de los principales recursos de comunicación visual en los establecimientos comerciales, ya que permiten exhibir productos y captar la atención de los potenciales clientes antes de que ingresen al punto de venta. Su diseño y organización influyen en la percepción de la marca, el interés por los productos y la decisión de compra.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t8/2.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p Según su estructura y finalidad, las vitrinas pueden clasificarse en diferentes tipos. La #[strong vitrina abierta] permite una conexión directa entre el exterior y el interior del establecimiento, facilitando que los clientes perciban tanto los productos exhibidos como el ambiente comercial. Este tipo de vitrina genera sensación de amplitud y transparencia, favoreciendo la invitación al ingreso.
        p Por su parte, la #[strong vitrina cerrada] presenta los productos en un espacio independiente del interior de la tienda, utilizando elementos decorativos, iluminación y exhibición para centrar la atención exclusivamente en los artículos seleccionados. Este formato permite un mayor control de la composición visual y resalta las características de los productos expuestos.
        .cajon.color-primario.bg-color-2.p-4.p-lg-5.mb-4
          p.mb-0 La #[strong vitrina temática] se diseña alrededor de una idea específica, una temporada o una campaña comercial. Su objetivo es crear ambientes atractivos y coherentes con fechas especiales, lanzamientos de productos o eventos promocionales, fortaleciendo el impacto visual y la identidad comercial del establecimiento.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Importancia de las vitrinas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos='fade-right')
        p.mb-4 El vitrinismo cumple un papel importante dentro de las estrategias de #[em merchandising] y #[em marketing] en el punto de venta porque:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Permite atraer la atención de los clientes potenciales que pasan frente al establecimiento.
          li
            i.fas.fa-check-circle
            span.mb-0 Comunica la identidad visual y el estilo de la marca.
          li
            i.fas.fa-check-circle
            span.mb-0 Destaca productos o promociones dentro del punto de venta.
          li
            i.fas.fa-check-circle
            span.mb-0 Contribuye a incrementar el tráfico de clientes y las ventas.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t8/3.png', alt='')
    
    p Una vitrina bien diseñada puede despertar interés en los consumidores y motivarlos a ingresar al establecimiento para conocer los productos exhibidos. 


</template>

<script>
export default {
  name: 'Tema8',
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
