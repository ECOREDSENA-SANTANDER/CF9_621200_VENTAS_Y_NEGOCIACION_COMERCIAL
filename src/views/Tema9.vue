<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 9
      h1 #[em Marketing] sensorial

    p El #[em marketing] sensorial es una estrategia utilizada por las empresas para influir en la percepción y comportamiento del consumidor a través de estímulos dirigidos a los sentidos. En los establecimientos comerciales, esta técnica busca generar experiencias de compra agradables mediante el uso de elementos como música, aromas, iluminación, texturas y diseño del espacio. 

    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-10
        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 El #[em marketing] sensorial se define como el conjunto de estrategias que utilizan estímulos sensoriales para influir en las emociones, percepciones y comportamiento de los consumidores dentro del establecimiento comercial. Estas estrategias buscan conectar al cliente con la marca a través de experiencias sensoriales que involucran la vista, el oído, el olfato, el gusto y el tacto, generando ambientes que favorecen la permanencia en el establecimiento y la compra de productos.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Tipos de #[em marketing] sensorial

    p El #[em marketing] sensorial es una estrategia que busca influir en las percepciones, emociones y comportamientos de los consumidores mediante la estimulación de los sentidos. Su propósito es crear experiencias memorables dentro del punto de venta, fortalecer la identidad de la marca y generar una conexión más cercana con los clientes. Para ello, las empresas diseñan ambientes comerciales que integran estímulos visuales, auditivos, olfativos, táctiles y gustativos.

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos='fade-right')
        TabsA.color-secundario
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="<em>Marketing</em> visual")
            p Se enfoca en captar la atención a través de elementos como la iluminación, la distribución del espacio, la señalización, los colores y la exhibición de productos. Su objetivo es facilitar la identificación de los artículos y mejorar la experiencia de compra.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="<em>Marketing</em> auditivo")
            p Utiliza música, sonidos ambientales o mensajes de audio para crear una atmósfera acorde con la identidad del establecimiento. Estos estímulos pueden influir en el estado de ánimo del consumidor y en el tiempo que permanece dentro del punto de venta.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="<em>Marketing</em> olfativo")
            p Emplea aromas específicos para generar sensaciones agradables y fortalecer el recuerdo de la marca. Los olores pueden asociarse con experiencias positivas y contribuir a diferenciar un establecimiento de sus competidores.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="<em>Marketing</em> táctil")
            p Permite la interacción física con los productos, favoreciendo que los consumidores evalúen características como textura, tamaño, peso o calidad. Esta experiencia suele incrementar la confianza en la decisión de compra.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="<em>Marketing</em> gustativo")
            p Se utiliza principalmente en establecimientos relacionados con alimentos y bebidas, mediante degustaciones o muestras que permiten a los clientes conocer directamente las características y el sabor de los productos antes de adquirirlos.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t9/1.png', alt='')

    .cajon.color-secundario.bg-color-1.p-4.px-lg-5.mb-5(data-aos='fade')
      p.mb-0 La integración adecuada de estos estímulos sensoriales contribuye a crear experiencias de compra más atractivas, aumentar la satisfacción del cliente y fortalecer la relación entre el consumidor y la marca.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Funciones del #[em marketing] sensorial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t9/2.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p El #[em marketing] sensorial cumple diversas funciones dentro del punto de venta:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Crear ambientes atractivos que generen una experiencia de compra agradable.
          li
            i.fas.fa-check-circle
            span.mb-0 Fortalecer la identidad y recordación de la marca en los consumidores.
          li
            i.fas.fa-check-circle
            span.mb-0 Influir en las emociones y percepciones del cliente dentro del establecimiento.
          li
            i.fas.fa-check-circle
            span.mb-0 Incrementar el tiempo de permanencia del consumidor en la tienda.
          li
            i.fas.fa-check-circle
            span.mb-0 Estimular la decisión de compra de productos.


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Beneficios del #[em marketing] sensorial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p La aplicación del #[em marketing] sensorial en los establecimientos comerciales ofrece diferentes beneficios para las empresas:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista
          li
            i.fas.fa-check-circle
            span.mb-0 Mejora la experiencia de compra del cliente.
          li
            i.fas.fa-check-circle
            span.mb-0 Fortalece la relación entre el consumidor y la marca.
          li
            i.fas.fa-check-circle
            span.mb-0 Diferencia el establecimiento frente a la competencia.
          li
            i.fas.fa-check-circle
            span.mb-0 Genera mayor recordación de marca.
          li
            i.fas.fa-check-circle
            span.mb-0 Puede contribuir a incrementar las ventas dentro del punto de venta.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t9/3.png', alt='')

</template>

<script>
export default {
  name: 'Tema9',
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
