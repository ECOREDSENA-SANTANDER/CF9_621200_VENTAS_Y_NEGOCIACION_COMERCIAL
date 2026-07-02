export default {
  global: {
    Name: 'Punto de venta y <em>visual merchandising</em>',
    Description:
      'El componente formativo Punto de venta y <em>visual merchandising</em> aborda la organización y presentación de productos dentro del establecimiento comercial como estrategias para fortalecer la promoción de ventas. Analiza elementos como el punto de venta, el <em>merchandising</em>, las técnicas de exhibición, el <em>layout</em> y el <em>visual merchandising</em>, con el propósito de mejorar la experiencia del cliente y estimular la decisión de compra. ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Establecimiento comercial y punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de establecimiento comercial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto y promociones del punto de venta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Imagen e identidad del punto de venta',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Zonas dentro del punto de venta',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Escenografía',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de <em>merchandising</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de <em>merchandising</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de exhibición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Niveles de exhibición',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de exhibición',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Layout</em> (distribución en planta)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de <em>layout</em> en establecimientos comerciales',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planogramas y planimetría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '<em>Visual merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de <em>visual merchandising</em>',
            hash: 't_7_1',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Vitrinismo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: '<em>Marketing</em> sensorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Evaluación de estrategias en el punto de venta',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acceso',
      significado:
        'Espacio o punto de entrada al establecimiento comercial que permite el ingreso de los clientes y facilita la circulación dentro del punto de venta.',
    },
    {
      termino: 'Actividades promocionales',
      significado:
        'Acciones planificadas que buscan incentivar la compra de productos o servicios mediante promociones, eventos o campañas comerciales.',
    },
    {
      termino: 'Antropometría',
      significado:
        'Estudio de las medidas y dimensiones del cuerpo humano aplicado al diseño de espacios comerciales para mejorar la comodidad y accesibilidad del cliente.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Capacidad de generar ideas innovadoras y soluciones originales utilizadas en estrategias de <em>marketing</em>, promoción y exhibición de productos.',
    },
    {
      termino: 'Dimensiones',
      significado:
        'Medidas físicas del espacio comercial que influyen en la organización del establecimiento y en la distribución del mobiliario y los productos.',
    },
    {
      termino: 'Escenografía comercial',
      significado:
        'Diseño visual del espacio de exhibición que utiliza elementos decorativos, iluminación y ambientación para destacar productos.',
    },
    {
      termino: 'Establecimiento comercial',
      significado:
        'Espacio físico o digital donde una empresa ofrece productos o servicios al consumidor final.',
    },
    {
      termino: 'Estrategias de exhibición',
      significado:
        'Conjunto de técnicas utilizadas para presentar productos de forma atractiva dentro del punto de venta con el fin de estimular la compra.',
    },
    {
      termino: 'Exhibición',
      significado:
        'Forma en que los productos son presentados y organizados dentro del establecimiento para atraer la atención del cliente.',
    },
    {
      termino: 'Imagen del punto de venta',
      significado:
        'Percepción visual y estética que transmite el establecimiento comercial a los consumidores.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro y control de la cantidad de productos disponibles en un establecimiento comercial.',
    },
    {
      termino: 'Layout',
      significado:
        'Distribución del espacio dentro del punto de venta que organiza pasillos, mobiliario y zonas de exhibición para facilitar la circulación del cliente.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'Estrategia que utiliza estímulos como colores, aromas, sonidos o texturas para influir en la experiencia de compra del consumidor.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas de presentación y promoción utilizadas en el punto de venta para aumentar la rotación de productos y estimular las ventas.',
    },
    {
      termino: 'Mobiliario comercial',
      significado:
        'Conjunto de muebles y estructuras utilizadas para exhibir y organizar productos dentro del establecimiento.',
    },
    {
      termino: 'Planogramas',
      significado:
        'Representaciones gráficas que indican la ubicación estratégica de los productos en estanterías o espacios de exhibición.',
    },
    {
      termino: 'Planimetría',
      significado:
        'Representación gráfica de la distribución del espacio dentro del establecimiento comercial.',
    },
    {
      termino: 'Promoción de ventas',
      significado:
        'Estrategia de <em>marketing</em> que utiliza incentivos temporales como descuentos, cupones o concursos para aumentar las ventas.',
    },
    {
      termino: 'Punto de venta',
      significado:
        'Lugar donde se realiza la comercialización directa de productos o servicios entre la empresa y el consumidor.',
    },
    {
      termino: 'Recursos promocionales',
      significado:
        'Materiales utilizados para apoyar campañas de promoción, como afiches, carteles, folletos o <em>displays</em>.',
    },
    {
      termino: 'Señalización',
      significado:
        'Elementos visuales que orientan al cliente dentro del establecimiento y comunican información sobre productos o promociones.',
    },
    {
      termino: 'Software de gestión comercial',
      significado:
        'Herramientas tecnológicas utilizadas para administrar ventas, inventarios y operaciones del punto de venta.',
    },
    {
      termino: 'Teoría del color',
      significado:
        'Estudio de los colores y su influencia en la percepción y emociones del consumidor dentro del entorno comercial.',
    },
    {
      termino: '<em>Visual merchandising</em>',
      significado:
        'Estrategia que utiliza elementos visuales para mejorar la presentación del punto de venta y atraer clientes.',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'Técnica de exhibición de productos en vitrinas para captar la atención del público y promover la entrada al establecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A. (2014). Construir marcas fuertes. Editorial Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Editorial GG. (2016). Visual merchandising. Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Martínez, D. (2017). Merchandising. Fundación Universitaria del Área Andina.',
      link: '',
    },
    {
      referencia:
        'Martínez Cruz, H. (2018). El arte de seducir: Merchandising. ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'Ríos Quiñónez, M. B. (2024). Análisis del merchandising visual como estrategia de diseño y disposición de productos en farmacias independientes del DMQ. Res Non Verba Revista Científica, 14(1), 1-17.',
      link: '',
    },
    {
      referencia:
        'Rivera Camino, J., Arellano Cueva, R., & Molero Ayala, V. (2013). Conducta del consumidor: Estrategias y políticas aplicadas al marketing. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2020). El plan de marketing en la práctica (23.ª ed.). ESIC Editorial.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera ',
          cargo: 'Centro de Comercio y Servicios - Regional Atlántico',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
