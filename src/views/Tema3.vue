<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Exhibición

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')  
      .col-lg-7
        p La exhibición es una de las principales herramientas del #[em merchandising] y consiste en la presentación estratégica de los productos dentro del punto de venta con el propósito de atraer la atención de los consumidores, facilitar la identificación de la oferta comercial e incentivar la decisión de compra. A través de una adecuada disposición de los productos, el mobiliario y los elementos visuales, la exhibición contribuye a mejorar la experiencia del cliente y a optimizar el aprovechamiento del espacio comercial.
        .cajon.color-primario.bg-color-2.p-4.mb-4
          p.mb-0 Su importancia radica en que permite destacar productos, orientar el recorrido de los consumidores dentro del establecimiento y fortalecer la imagen de la marca. Asimismo, favorece la comparación entre alternativas de compra, incrementa la visibilidad de los artículos y contribuye al cumplimiento de los objetivos comerciales de la organización.
        p La exhibición no se limita únicamente a la ubicación de los productos en estanterías o vitrinas. También involucra aspectos como la distribución del espacio, la iluminación, la señalización, el diseño de ambientes comerciales y la organización del surtido, con el fin de generar un entorno atractivo y funcional para el cliente
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t3/1.png', alt='')

    .cajon.color-primario.bg-color-5.p-4.mb-5
      p.mb-0 Para lograr una exhibición efectiva es necesario conocer las diferentes áreas del establecimiento y el comportamiento de circulación de los consumidores, ya que estos factores influyen directamente en la visibilidad y rotación de los productos. 

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Zonas de exhibición

    p Corresponden a los diferentes espacios del punto de venta donde se ubican los productos de acuerdo con el flujo de circulación y el nivel de atención que reciben por parte de los clientes. Su adecuada identificación permite optimizar la ubicación de la mercancía y aumentar las posibilidades de venta.
    p Entre las principales zonas de exhibición se encuentran:

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos='fade-right')
        TabsA.color-secundario
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="Zona Caliente")
            p Corresponde a las áreas con mayor tránsito y permanencia de clientes. Los productos ubicados en estos espacios tienen una alta probabilidad de ser observados y adquiridos.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="Zona fría")
            p Son sectores con menor circulación de consumidores y, por tanto, presentan una menor exposición de los productos. Generalmente requieren estrategias adicionales para atraer la atención del cliente.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="Zona de impulso")
            p Se localiza habitualmente cerca de las cajas registradoras o puntos de pago. En ella se exhiben productos de bajo costo o de compra rápida que motivan decisiones espontáneas de adquisición.
          .tarjeta.bg-color-3.p-4.p-xl-5(titulo="Zona promocional")
            p Es el espacio destinado a destacar ofertas, descuentos, lanzamientos o campañas especiales. Su objetivo es captar la atención del consumidor y generar un mayor interés hacia determinados productos.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t3/2.png', alt='')

    .cajon.color-secundario.bg-color-1.p-4.px-lg-5
      p.mb-0 Por ejemplo, en supermercados y grandes superficies, las áreas cercanas a las cajas suelen destinarse a productos de compra impulsiva, como dulces, bebidas, accesorios o artículos de uso cotidiano, aprovechando el tiempo de espera de los clientes para estimular compras adicionales.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Tipos de exhibición

    p La exhibición puede adoptar diferentes formas dependiendo del tipo de producto y de la estrategia comercial utilizada por la empresa. 
    p.mb-4 Entre los tipos de exhibición en el punto de venta tenemos:

    .row.bgcompl-1.align-items-center.p-3.p-md-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .tarjeta.bg-fondo-1.p-4.py-5
                LineaTiempoC.color-acento-contenido
                  .row.justify-content-center.align-items-center(titulo="Exhibición horizontal")
                    .col-lg-5.col-11
                      p Los productos se organizan a lo largo de un mismo nivel de estantería, ubicándose uno al lado del otro. Este tipo de exhibición permite comparar diferentes marcas o presentaciones de un mismo producto de manera fácil para el cliente.
                    .col-lg-5.col-11
                      .titulo-sexto.color-secundario.mb-3
                        h5 Figura 1. 
                        span Exhibición horizontal en punto de venta 
                      figure
                        img(src='@/assets/curso/temas/t3/fig1.png', alt='Exhibición horizontal en punto de venta. Estantería de supermercado con productos organizados de izquierda a derecha en un mismo nivel de góndola, permitiendo comparar fácilmente diferentes marcas o presentaciones.')
                  .row.justify-content-center.align-items-center(titulo="Exhibición vertical")
                    .col-lg-5.col-11
                      p Los productos se distribuyen en varios niveles de la estantería, desde la parte superior hasta la inferior. Esta organización facilita la visualización de los productos y permite que cada marca tenga presencia en diferentes alturas del estante.
                    .col-lg-5.col-11
                      .titulo-sexto.color-secundario.mb-3
                        h5 Figura 2. 
                        span Exhibición vertical en punto de venta
                      figure
                        img(src='@/assets/curso/temas/t3/fig2.png', alt='Exhibición vertical punto de venta. Góndola comercial con productos distribuidos desde la parte superior hasta la inferior en varios niveles de estantería para mejorar la visibilidad de las marcas dentro del punto de venta.')
                  .row.justify-content-center.align-items-center(titulo="Exhibición masiva")
                    .col-lg-5.col-11
                      p Consiste en colocar una gran cantidad de productos agrupados en un mismo espacio para generar impacto visual y transmitir sensación de abundancia. Es común en promociones o lanzamientos de productos.
                    .col-lg-5.col-11
                      .titulo-sexto.color-secundario.mb-3
                        h5 Figura 3. 
                        span Exhibición masiva punto de venta 
                      figure
                        img(src='@/assets/curso/temas/t3/fig3.png', alt='Exhibición masiva en punto de venta. Área de exhibición con gran cantidad de productos agrupados en un mismo espacio para generar impacto visual y transmitir sensación de abundancia en el punto de venta.')
                  .row.justify-content-center.align-items-center(titulo="Exhibición temática")
                    .col-lg-5.col-11
                      p Los productos se organizan según temporadas, eventos o campañas comerciales. Por ejemplo, exhibiciones especiales en Navidad, regreso a clases o promociones de temporada dentro del establecimiento comercial.
                    .col-lg-5.col-11
                      .titulo-sexto.color-secundario.mb-3
                        h5 Figura 4. 
                        span Exhibición temática en punto de venta
                      figure
                        img(src='@/assets/curso/temas/t3/fig4.png', alt='Exhibición temática en punto de venta. Exhibición de productos organizada según una campaña o temporada específica dentro del establecimiento comercial para destacar promociones o eventos especiales.')
           

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2. Niveles de exhibición

    p Los niveles de exhibición corresponden a las diferentes alturas dentro de las góndolas, estanterías o muebles comerciales donde se ubican los productos. La distribución de los artículos en cada nivel es una decisión estratégica que busca maximizar la visibilidad, facilitar el acceso del cliente y favorecer la rotación de la mercancía.
    p.mb-4 Cada nivel recibe una atención diferente por parte de los consumidores durante su recorrido por el establecimiento. Por esta razón, los productos se organizan de acuerdo con objetivos comerciales específicos, como incrementar las ventas, promover nuevas referencias o facilitar el acceso a artículos de alta demanda.

    .row.justify-content-center.mb-4(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 8. 
          span Niveles de exhibición
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Nivel
                th Características
            tbody
              tr
                td.fw-bold Nivel superior
                td Ubicado por encima de la línea visual del consumidor. Se utiliza para productos de menor rotación, referencias complementarias o artículos con menor necesidad de promoción.
              tr
                td.fw-bold Nivel de los ojos
                td Corresponde al área de mayor visibilidad. Los productos ubicados en este nivel son identificados con facilidad, por lo que suele destinarse a artículos estratégicos, marcas destacadas o productos con alto potencial de venta.
              tr
                td.fw-bold Nivel de las manos
                td Se encuentra a una altura que facilita el acceso directo del consumidor. Es adecuado para productos de compra frecuente y artículos que requieren manipulación rápida.
              tr
                td.fw-bold Nivel inferior
                td Ubicado cerca del suelo. Generalmente se utiliza para productos voluminosos, de mayor peso o artículos que el cliente está dispuesto a buscar de manera específica.

    .cajon.color-primario.bg-color-2.p-4
      p.mb-0 La adecuada distribución de los productos en estos niveles contribuye a mejorar la experiencia de compra, optimizar el espacio comercial y aumentar las posibilidades de interacción entre el consumidor y la oferta disponible.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3. Técnicas de exhibición

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos='fade-right')
        p Son estrategias utilizadas para mejorar la presentación de los productos dentro del punto de venta y captar la atención de los consumidores.
        p.mb-4 Entre las técnicas más utilizadas se encuentran:
        ul.lista-ul--color.lista-ul--separador.color-adicional-2.fa-lista.mb-4
          li
            i.fas.fa-check-circle
            span.mb-0 Organización estratégica de productos en estanterías.
          li
            i.fas.fa-check-circle
            span.mb-0 Uso de iluminación para destacar artículos específicos.
          li
            i.fas.fa-check-circle
            span.mb-0 Creación de exhibiciones promocionales.
          li
            i.fas.fa-check-circle
            span.mb-0 Ubicación de productos complementarios en un mismo espacio.
          li
            i.fas.fa-check-circle
            span.mb-0 Uso de material publicitario dentro del punto de venta.
        p Estas técnicas permiten aumentar la visibilidad de los productos y mejorar la experiencia de compra del cliente.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t3/3.png', alt='')

    


</template>

<script>
export default {
  name: 'Tema3',
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
