<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 Establecimiento comercial y punto de venta
        
    .row.justify-content-center.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p El establecimiento comercial es el espacio donde las empresas realizan actividades de venta y atención al cliente, permitiendo el encuentro entre los productos o servicios ofrecidos y los consumidores. Los espacios pueden presentarse en diferentes formatos según el tipo de negocio y el canal de comercialización utilizado, constituyendo un elemento fundamental dentro de las estrategias de distribución y comercialización de las organizaciones. 
        .cajon.color-secundario.bg-color-1.p-4.mb-4
          p.mb-0 Un establecimiento comercial se define como el lugar físico o digital donde una empresa desarrolla actividades relacionadas con la venta de bienes o servicios al consumidor. En este espacio se realizan procesos como la exhibición de productos, la atención al cliente, la promoción comercial y la realización de transacciones de compra.
        p Desde el punto de vista del #[em marketing], el establecimiento comercial representa un punto de contacto directo entre la empresa y el cliente, por lo que su organización, diseño y funcionamiento influyen en la experiencia de compra y en la percepción que el consumidor tiene de la marca.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1. Tipos de establecimiento comercial

    p Los establecimientos comerciales pueden clasificarse según el tipo de productos que ofrecen, el tamaño del negocio, el formato de venta o el canal utilizado para la comercialización; con esta clasificación es posible identificar diferentes modelos de negocios utilizados por las empresas para distribuir sus productos y servicios en el mercado.

    .row.justify-content-center(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 1. 
          span Tipos de establecimiento comercial
        .tabla-a.primario
          table
            caption Nota. Adaptado de Kotler y Keller (2016).
            thead
              tr.bg-color-2
                th.w-25 Tipo de establecimiento
                th Características de establecimiento
            tbody
              tr
                td Tienda especializada
                td Comercializa un tipo específico de producto, como ropa, tecnología o calzado.
              tr
                td Supermercado
                td Ofrece una amplia variedad de productos de consumo cotidiano organizados en diferentes secciones.
              tr
                td Gran almacén
                td Establecimiento de gran tamaño que vende múltiples categorías de productos.
              tr
                td Centro comercial
                td Espacio que reúne diferentes tiendas y servicios en un mismo lugar.
              tr
                td Tienda virtual
                td Plataforma digital donde se comercializan productos a través de internet.



    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2. Concepto y promociones del punto de venta 

    p El punto de venta es el lugar donde se realiza la interacción directa entre la empresa y el consumidor durante el proceso de compra, se presentan los productos, se brinda información al cliente y se llevan a cabo las transacciones comerciales. La organización, diseño y funcionamiento del punto de venta influyen en la experiencia del consumidor y en la efectividad de las estrategias de comercialización.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/2.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 El punto de venta se refiere al espacio físico o digital donde se comercializan productos o servicios y donde el consumidor toma la decisión final de compra. En este lugar se concentran diferentes actividades comerciales como la exhibición de productos, la atención al cliente y la promoción de ofertas.

    .cajon.color-secundario.bg-color-1.p-4.mb-5
      p.mb-0 Desde la perspectiva del #[em marketing], el punto de venta constituye un elemento clave dentro del canal de distribución, ya que permite acercar el producto al consumidor y facilitar el proceso de compra.

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Promoción de ventas en el punto de venta

    p La promoción de ventas comprende las acciones temporales que utilizan los establecimientos comerciales para incentivar la compra de productos en el punto de venta. Estas acciones buscan captar la atención del cliente, destacar productos, aumentar las ventas y favorecer la rotación de inventarios mediante beneficios como descuentos, ofertas, degustaciones o programas de fidelización.
    p Dentro del punto de venta, la promoción de ventas se complementa con el #[em visual merchandising], ya que utiliza exhibiciones estratégicas, señalización y material promocional para influir en la decisión de compra del consumidor.

    .row.justify-content-center.mb-5(data-aos='fade') 
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-primario")
          .row.justify-content-center(titulo="Objetivos de la promoción de ventas")
            .col-md-11
              ul.lista-ul--color.color-adicional-2.fa-lista
                li
                  i.fas.fa-check-circle
                  span.mb-0 Incrementar las ventas en periodos específicos.  
                li
                  i.fas.fa-check-circle
                  span.mb-0 Atraer nuevos clientes al establecimiento. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Impulsar la recompra y la fidelización. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Favorecer la rotación de productos. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Dar a conocer nuevos productos o servicios. 
          .row.justify-content-center(titulo="Herramientas promocionales más utilizadas")
            .col-md-11
              ul.lista-ul--color.color-adicional-2.fa-lista
                li
                  i.fas.fa-check-circle
                  span.mb-0 Descuentos y rebajas. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Promociones 2x1 o combos. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Cupones de descuento. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Degustaciones y muestras gratuitas. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Sorteos y concursos. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Programas de puntos o recompensas.
          .row.justify-content-center(titulo="Técnicas aplicadas en el punto de venta")
            .col-md-11
              ul.lista-ul--color.color-adicional-2.fa-lista
                li
                  i.fas.fa-check-circle
                  span.mb-0 Ubicación de promociones en zonas de alta circulación. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Exhibiciones especiales o destacadas. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Señalización promocional. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Venta de productos complementarios. 
                li
                  i.fas.fa-check-circle
                  span.mb-0 Promociones cerca de las cajas de pago para estimular compras impulsivas. 


    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Recursos promocionales

    .row.justify-content-center.align-items-end
      .col-lg-9(data-aos='fade-right')
        p Son los elementos que permiten comunicar las promociones dentro del establecimiento, como carteles, etiquetas de precio, exhibidores, material #[em POP], pantallas digitales y avisos promocionales. Su función es destacar los productos y facilitar la decisión de compra del cliente.
        .cajon.color-secundario.bg-color-1.p-4.p-lg-5
          p.mb-0 De esta manera, la promoción de ventas se convierte en una herramienta fundamental del punto de venta, ya que ayuda a aumentar la visibilidad de los productos, mejorar la experiencia de compra y estimular las ventas de forma inmediata.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t1/3.png', alt='')


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3. Imagen e identidad del punto de venta

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-5.h-100.p-xl-5.p-4.d-flex.flex-column.justify-content-center
          p La imagen del punto de venta corresponde a la percepción visual que los consumidores tienen del establecimiento comercial, ya que la imagen se construye a partir de elementos como el diseño del local, la iluminación, la limpieza, la organización de los productos y la identidad visual de la marca. 
          p.mb-0 Una imagen adecuada contribuye a generar confianza en los clientes, mejorar la experiencia de compra y fortalecer el posicionamiento de la empresa en el mercado.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 2. 
          span Elementos que conforman la imagen del punto de venta
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Elemento
                th Descripción
            tbody
              tr
                td Diseño del local
                td Organización física y estética del establecimiento que facilita la circulación de los clientes y favorece una experiencia de compra agradable.
              tr
                td Iluminación
                td Elemento que mejora la visibilidad de los productos, destaca áreas estratégicas y contribuye a la creación de ambientes comerciales atractivos.
              tr
                td Identidad visual
                td Conjunto de elementos gráficos y comunicativos que permiten reconocer la marca y fortalecer su posicionamiento ante los consumidores.
              tr
                td Orden y limpieza
                td Aspecto que transmite confianza, profesionalismo y calidad, influyendo en la percepción del establecimiento.
              tr
                td Exhibición de productos
                td Disposición estratégica de los productos para captar la atención del cliente y estimular la compra.
              tr
                td Ambientación comercial
                td Integración de elementos sensoriales y decorativos que enriquecen la experiencia del consumidor dentro del punto de venta.

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Antropometría

    p Es la disciplina que estudia las dimensiones, proporciones y características físicas del cuerpo humano con el fin de aplicarlas al diseño de espacios, productos y entornos funcionales. En el contexto del punto de venta, permite adecuar el mobiliario, las estanterías, los mostradores y la disposición de los productos a las características y necesidades de los usuarios.
    p La incorporación de criterios antropométricos favorece la accesibilidad, optimiza la circulación dentro del establecimiento y facilita la interacción del cliente con los productos exhibidos. De esta manera, contribuye a mejorar la comodidad, la seguridad y la experiencia de compra, al tiempo que fortalece la eficiencia y funcionalidad del espacio comercial.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-7.deco-1.p-2.pb-3.h-100
              h4.text-center.text-white.mb-0 Aspectos de la antropometría 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-8.deco-2.p-2.pb-3.h-100
              h4.text-center.mb-0 Aspectos de la antropometría 
        .row.justify-content-center.mb-2
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-9.p-4.h-100.d-flex.flex-column.justify-content-center
              h5.mb-0.text-center Altura de exhibición 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-9.p-4.h-100
              p.mb-0 Ubicación de productos dentro del campo visual y de alcance del cliente. 
        .row.justify-content-center.mb-2
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-9.p-4.h-100.d-flex.flex-column.justify-content-center
              h5.mb-0.text-center Diseño de estanterías 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-9.p-4.h-100
              p.mb-0 Adaptación de las dimensiones del mobiliario a las características de los usuarios. 
        .row.justify-content-center.mb-2
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-9.p-4.h-100.d-flex.flex-column.justify-content-center
              h5.mb-0.text-center Ancho de pasillos 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-9.p-4.h-100
              p.mb-0 Facilita la circulación cómoda y segura de clientes y personal. 
        .row.justify-content-center.mb-2
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-9.p-4.h-100.d-flex.flex-column.justify-content-center
              h5.mb-0.text-center Mostradores y cajas 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-9.p-4.h-100
              p.mb-0 Permiten una interacción ergonómica entre clientes y colaboradores. 
        .row.justify-content-center.mb-2
          .col-lg-6.col-md-6.col-5
            .tarjeta.bg-color-9.p-4.h-100.d-flex.flex-column.justify-content-center
              h5.mb-0.text-center Accesibilidad 
          .col-lg-6.col-md-6.col-7
            .tarjeta.bg-color-9.p-4.h-100
              p.mb-0 Favorece el acceso de personas con diferentes condiciones físicas y necesidades de movilidad. 

    .bg-color-6(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/podcast.png', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-acento-botones.mb-4(
            texto="Pódcast: La importancia de la antropometría"
            :audio="require_src('@/assets/curso/temas/t1/Podcast_CF9-621200.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.mb-0 Para complementar los conocimientos abordados sobre la antropometría y su aplicación en el punto de venta, se invita a visitar el pódcast asociado a esta temática. En este recurso encontrará una explicación práctica y contextualizada sobre la importancia de adaptar los espacios comerciales a las características físicas de los usuarios, favoreciendo la accesibilidad, la comodidad y una experiencia de compra satisfactoria.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4. Zonas dentro del punto de venta

    p.mb-4 Dentro del punto de venta pueden identificarse diferentes zonas que organizan el recorrido del cliente y la ubicación de los productos; estas zonas se utilizan para facilitar la circulación, orientar al consumidor y destacar determinados artículos.

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 3. 
        span Principales zonas del punto de venta
      .tabla-a.primario
        table
          thead
            tr.bg-color-2
              th.w-15 Zona
              th Características
              th Ubicación común en la tienda
              th Estrategia recomendada
          tbody
            tr
              td.fw-bold Zona caliente
              td Espacio que concentra una alta afluencia de clientes y una mayor exposición visual de los productos.
              td Pasillos principales, áreas de mayor circulación y puntos de convergencia dentro del establecimiento.
              td Ubicar productos destacados, promociones, lanzamientos y artículos de alta rentabilidad.
            tr
              td.fw-bold Zona fría
              td Área con menor flujo de visitantes y menor nivel de atención por parte de los clientes.
              td Esquinas alejadas, pasillos secundarios o sectores poco transitados.
              td Implementar señalización atractiva, promociones especiales y estrategias de exhibición para incrementar el tráfico.
            tr
              td.fw-bold Zona de acceso
              td Primer espacio de contacto entre el cliente y el establecimiento, donde se genera la impresión inicial del punto de venta.
              td Entrada principal, vitrinas y áreas cercanas al ingreso.
              td Incorporar elementos visuales atractivos, mensajes promocionales y productos de interés para captar la atención.
            tr
              td.fw-bold Zona de circulación
              td Espacios destinados al desplazamiento de los clientes dentro del establecimiento.
              td Pasillos y corredores que conectan las diferentes secciones de la tienda.
              td Facilitar la movilidad y orientar el recorrido mediante una adecuada distribución y señalización.
            tr
              td.fw-bold Zona de cajas
              td Área destinada al pago de productos y finalización del proceso de compra.
              td Cerca de la salida o en el punto final del recorrido comercial.
              td Ubicar productos de compra impulsiva, promociones de última hora y artículos de bajo costo.

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Señalización en el punto de venta

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t1/5.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p Corresponde al conjunto de elementos visuales que orientan al cliente dentro del establecimiento comercial; estos elementos permiten identificar secciones, ubicar productos, indicar rutas de circulación y comunicar promociones o información relevante dentro del punto de venta.
        .cajon.color-secundario.bg-color-1.p-4.p-lg-5.mb-4
          p.mb-0 Una señalización adecuada facilita la circulación de los clientes, reduce el tiempo de búsqueda de los productos y contribuye a mejorar la experiencia de compra; además, permite organizar el espacio comercial de manera más eficiente, guiando al consumidor hacia las diferentes áreas del establecimiento. 
        p Las empresas utilizan diferentes tipos de señalización para orientar a los clientes y reforzar su identidad visual dentro del punto de venta.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 4. 
          span Tipos de señalización en el punto de venta
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Tipo de señalización
                th Descripción
                th Finalidad
            tbody
              tr
                td.fw-bold Señalización direccional
                td Conjunto de señales que orientan el desplazamiento de los clientes dentro del establecimiento mediante indicaciones de rutas, secciones, pasillos, cajas o salidas.
                td Facilitar la ubicación de áreas y mejorar la circulación de los usuarios.
              tr
                td.fw-bold Señalización informativa
                td Proporciona información relevante sobre productos, servicios, horarios, precios, características o condiciones de compra.
                td Apoyar la toma de decisiones y mejorar la experiencia de compra.
              tr
                td.fw-bold Señalización promocional
                td Resalta ofertas, descuentos, lanzamientos, campañas comerciales o productos destacados mediante elementos visuales atractivos.
                td Captar la atención del cliente e incentivar las ventas.
              tr
                td.fw-bold Señalización de seguridad
                td Comunica normas de seguridad, rutas de evacuación, salidas de emergencia, zonas restringidas y advertencias de riesgo.
                td Proteger a clientes y colaboradores dentro del establecimiento.
              tr
                td.fw-bold Señalización identificativa
                td Permite reconocer áreas, secciones, categorías de productos o servicios mediante nombres, símbolos o elementos gráficos.
                td Facilitar la orientación y localización de productos o espacios específicos.

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Acceso en el punto de venta

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-7.pe-lg-0
        .bg-color-5.h-100.p-xl-5.p-4.d-flex.flex-column.justify-content-center
          p El acceso es el punto de entrada al establecimiento comercial y constituye el primer contacto del cliente con el punto de venta; por ello, cumple un papel fundamental en la atracción de los consumidores, ya que influye en la decisión de ingresar o no al establecimiento.
          p.mb-0 Un acceso adecuado debe ser visible, cómodo y permitir el ingreso fácil de los clientes; además, debe estar diseñado de manera que facilite la circulación de las personas y permita una experiencia inicial positiva dentro del establecimiento. Las empresas utilizan diferentes estrategias para hacer más atractivo el acceso al punto de venta.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/6.png', alt='')      

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 5. 
          span Elementos que influyen en el acceso al punto de venta
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Elemento
                th Descripción
                th Función en el punto de venta
            tbody
              tr
                td Vitrinas
                td Espacios de exhibición ubicados en la fachada o entrada del establecimiento.
                td Captar la atención de los transeúntes, comunicar la oferta comercial e incentivar el ingreso al local.
              tr
                td Iluminación
                td Conjunto de recursos lumínicos utilizados en la entrada y áreas visibles del establecimiento.
                td Resaltar el acceso, mejorar la visibilidad y generar una percepción atractiva del espacio comercial.
              tr
                td Señalización
                td Elementos gráficos, visuales o informativos que identifican el establecimiento y orientan a los clientes.
                td Facilitar la ubicación del negocio, comunicar promociones y fortalecer la identidad comercial.
              tr
                td Diseño arquitectónico
                td Configuración física de la fachada, accesos, puertas y espacios de ingreso del establecimiento.
                td Favorecer la accesibilidad, la circulación y una experiencia de entrada cómoda y segura para los clientes.
              tr
                td Fachada comercial
                td Conjunto de elementos visibles desde el exterior, como colores, materiales, decoración y presentación general del local.
                td Generar una primera impresión positiva y diferenciar el establecimiento de la competencia.

    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Dimensiones

    p Las dimensiones del punto de venta hacen referencia al tamaño y las proporciones del espacio comercial, pues estas determinan la distribución del mobiliario, la organización de los pasillos y la capacidad de exhibición de productos dentro del establecimiento. Una adecuada planificación de las dimensiones permite optimizar el uso del espacio disponible, mejorar la circulación de los clientes y facilitar la implementación de estrategias de #[em merchandising] y exhibición.
    p La planificación de las dimensiones también contribuye a mejorar la comodidad de los consumidores, ya que permite establecer pasillos adecuados y áreas de exhibición accesibles.
    p.mb-4 Factores relacionados con las dimensiones del punto de venta:

    .row.justify-content-center(data-aos='fade')
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-primario.text-white.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')          
          h4.text-center Tamaño del local
          p.mb-0 Hace referencia al espacio total disponible dentro del establecimiento comercial. Este factor determina la cantidad de productos que pueden exhibirse, así como la posibilidad de incluir diferentes áreas como zonas de exhibición, cajas, almacenamiento o espacios de circulación para los clientes.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-primario.text-white.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')          
          h4.text-center Ancho de pasillos
          p.mb-0 Corresponde al espacio destinado para el tránsito de los clientes dentro del establecimiento. Un ancho adecuado permite que las personas se desplacen con comodidad, observen los productos y realicen su recorrido sin obstáculos, mejorando así la experiencia de compra.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-primario.text-white.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')          
          h4.text-center Distribución del mobiliario
          p.mb-0 Hace referencia a la forma de organizar las estanterías, mesas de exhibición, vitrinas y demás muebles dentro del punto de venta. Una correcta distribución permite aprovechar mejor el espacio disponible y facilita la visualización de los productos.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta.bg-color-primario.text-white.h-100.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-md-4.col-3
              img(src='@/assets/curso/temas/t1/tarj1-4.svg', alt='')          
          h4.text-center Zonas de circulación
          p.mb-0 Son los espacios diseñados para orientar el recorrido de los clientes dentro del establecimiento. Estas zonas permiten guiar el flujo de personas, mejorar la movilidad dentro del local y favorecer el acceso a las diferentes secciones de productos.
          

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5. Escenografía

    .row.justify-content-center.align-items-end.mb-4      
      .col-lg-6(data-aos='fade-right')
        p La escenografía en el punto de venta se refiere al diseño visual del espacio comercial mediante la utilización de elementos decorativos, iluminación, colores, mobiliario y materiales que crean una ambientación específica para destacar los productos exhibidos.
        .cajon.color-secundario.bg-color-1.p-4.mb-4
          p.mb-0 Esta estrategia busca generar un ambiente atractivo que capte la atención del cliente y refuerce la identidad visual del establecimiento. A través de la escenografía se pueden comunicar emociones, valores de marca y conceptos comerciales que influyen en la percepción del consumidor.
        p.mb-0 La escenografía también permite crear experiencias de compra más atractivas, ya que el entorno visual puede estimular el interés del cliente y motivar la interacción con los productos.
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left') 
        img(src='@/assets/curso/temas/t1/7.png', alt='')

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 6. 
          span Elementos de la escenografía comercial
        .tabla-a.primario
          table
            thead
              tr.bg-color-2
                th.w-25 Elemento
                th Función
            tbody
              tr
                td Iluminación
                td Destaca productos o zonas específicas del punto de venta, mejorando su visibilidad y atrayendo la atención del cliente.
              tr
                td Colores
                td Transmiten emociones, generan sensaciones y refuerzan la identidad visual de la marca dentro del establecimiento.
              tr
                td Elementos decorativos
                td Crean ambientación temática o estacional, haciendo el espacio más atractivo y alineado con campañas comerciales.
              tr
                td Materiales visuales
                td Refuerzan la comunicación comercial y promocional mediante gráficos, imágenes o mensajes que orientan al cliente.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
