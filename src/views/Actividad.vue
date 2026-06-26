<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Punto de venta y <em>visual merchandising',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar la importancia de estas estrategias en el punto de venta.  ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por establecimiento comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El área destinada exclusivamente al almacenamiento de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El espacio donde se realizan únicamente actividades administrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El lugar físico o digital donde una empresa comercializa bienes o servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El sistema utilizado para controlar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó que el establecimiento comercial es el espacio donde se desarrollan actividades de venta de bienes o servicios.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el concepto de establecimiento comercial.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes corresponde a un tipo de establecimiento comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tienda virtual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organigrama funcional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Canal promocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmento estratégico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que una tienda virtual es un establecimiento comercial que opera mediante internet.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise la clasificación de los establecimientos comerciales.',
        },
        {
          id: 3,
          texto: '¿Cuál es la función principal del punto de venta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar la nómina empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar presupuestos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar la interacción entre la empresa y el consumidor durante la compra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó la función principal del punto de venta dentro del proceso comercial.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido relacionado con el punto de venta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento influye directamente en la imagen del punto de venta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Iluminación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estructura salarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flujo de caja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que la iluminación contribuye a la percepción visual del establecimiento.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los elementos que conforman la imagen del punto de venta.',
        },
        {
          id: 5,
          texto: '¿Qué estudia la antropometría aplicada al punto de venta?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos de exhibición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los procesos financieros del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las medidas y dimensiones del cuerpo humano para adaptar espacios comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los niveles de inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó que la antropometría busca adaptar espacios y mobiliario a las características físicas de los usuarios.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise el concepto de antropometría y su aplicación comercial.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica de una zona caliente dentro del punto de venta?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presenta alta circulación y visibilidad de productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tiene poca afluencia de clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Está destinada exclusivamente al almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se utiliza únicamente para actividades administrativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que las zonas calientes tienen mayor tránsito de clientes y potencial de compra.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise las zonas del punto de venta y sus características.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de señalización destaca ofertas y descuentos dentro del establecimiento?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Señalización direccional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Señalización de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Señalización informativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Señalización promocional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó la función de la señalización promocional dentro del punto de venta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los tipos de señalización utilizados en establecimientos comerciales.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo principal de la escenografía comercial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear ambientes atractivos que destaquen productos y refuercen la identidad visual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar organigramas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted comprendió la finalidad de la escenografía dentro de la experiencia de compra.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise el tema relacionado con la escenografía comercial.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento puede utilizarse para atraer clientes al acceso de un establecimiento?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manual de calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vitrinas llamativas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reglamento interno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó que las vitrinas ayudan a captar la atención de los consumidores desde la entrada.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los elementos que influyen en el acceso al punto de venta.',
        },
        {
          id: 10,
          texto:
            '¿Qué factor relacionado con las dimensiones del punto de venta facilita el desplazamiento de los clientes?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ancho de pasillos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presupuesto comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estructura jerárquica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual de procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que el ancho de los pasillos influye en la comodidad y circulación de los clientes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los factores relacionados con las dimensiones del punto de venta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal del <em>merchandising</em> en el punto de venta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la visibilidad y rotación de los productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar estructuras organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar contratos laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó que el <em>merchandising</em> busca destacar los productos y estimular la compra.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el tema relacionado con <em>merchandising</em>.',
        },
        {
          id: 12,
          texto: '¿Qué es un planograma?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un informe financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una representación gráfica de la ubicación de productos en exhibición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un documento contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que el planograma organiza la disposición estratégica de los productos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise el concepto y utilidad de los planogramas.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una ventaja de utilizar planogramas en establecimientos comerciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la iluminación del local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la señalización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la organización y presentación de los productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó uno de los beneficios principales del uso de planogramas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente las ventajas de los planogramas.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes elementos corresponde al mobiliario comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Góndola.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que las góndolas forman parte del mobiliario utilizado para exhibir productos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los tipos de mobiliario comercial estudiados.',
        },
        {
          id: 15,
          texto:
            '¿Qué función cumple el inventario dentro de la gestión del punto de venta?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar y controlar la disponibilidad de productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar contratos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar la nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó la importancia del inventario para garantizar la disponibilidad de mercancías.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el tema de inventarios.',
        },
        {
          id: 16,
          texto: '¿Qué busca una estrategia de exhibición comercial?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el espacio de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Destacar productos para atraer la atención del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar categorías de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que las exhibiciones buscan influir positivamente en la decisión de compra.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise las estrategias de exhibición comercial.',
        },
        {
          id: 17,
          texto: '¿Qué caracteriza al <em>visual merchandising</em>?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El análisis financiero de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La gestión de talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El uso de elementos visuales para mejorar la experiencia de compra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El control contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó la finalidad del <em>visual merchandising</em> dentro de los espacios comerciales.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el concepto de <em>visual merchandising</em>.',
        },
        {
          id: 18,
          texto: '¿Cuál es el objetivo principal del vitrinismo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Atraer clientes mediante exhibiciones visuales estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar estructuras organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que el vitrinismo busca captar la atención y generar interés en los productos exhibidos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el tema relacionado con vitrinismo.',
        },
        {
          id: 19,
          texto:
            '¿Qué sentido es estimulado mediante el <em>marketing</em> sensorial a través de fragancias en el punto de venta?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Oído.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Olfato.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted identificó que las fragancias estimulan el sentido del olfato para mejorar la experiencia del cliente.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise los sentidos involucrados en el <em>marketing</em> sensorial.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante evaluar una campaña promocional en el punto de venta?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para medir resultados y determinar oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para eliminar productos del inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para modificar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para sustituir el servicio al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Usted reconoció que la evaluación permite determinar la efectividad de las acciones promocionales implementadas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente la importancia de evaluar las campañas promocionales.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
