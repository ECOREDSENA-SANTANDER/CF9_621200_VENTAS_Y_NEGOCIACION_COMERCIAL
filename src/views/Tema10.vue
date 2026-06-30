<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 10
      h1 Teoría del color

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right') 
        img(src='@/assets/curso/temas/t10/1.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p En el ámbito del #[em marketing] y el #[em merchandising], el color es una herramienta estratégica clave que influye directamente en las emociones, decisiones de compra y comportamiento del consumidor. Cada color transmite sensaciones y valores distintos, lo cual permite a las marcas y establecimientos generar atmósferas específicas, reforzar su identidad visual y destacar productos o promociones.
        .cajon.color-secundario.bg-color-1.p-4
          p.mb-0 El uso adecuado del color en los espacios comerciales no solo atrae la atención del cliente, sino que también puede mejorar la experiencia de compra, incrementar el tiempo de permanencia en el punto de venta y favorecer la fidelización. Según Kotler y Armstrong (2018), el color, al igual que otros estímulos visuales, tiene un impacto significativo en la percepción del consumidor y en sus decisiones dentro del entorno de compra. 
    
    .subt.mb-4(data-aos='fade-right') 
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Clasificación en la teoría del color

    p.mb-4 A continuación, se presenta una tabla con los principales colores utilizados en #[em merchandising], su impacto psicológico, beneficios y aplicaciones más comunes.  

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 11. 
        span Uso del color en el #[em merchandising]
      .tabla-a.primario
        table
          caption Nota. Solomon, M. R., 2018.
          thead
            tr.bg-color-2
              th.w-15 Color
              th Impacto psicológico
              th Beneficios en el punto de venta
              th Ejemplos de uso común
          tbody
            tr
              td.fw-bold Rojo
              td Estimula, crea urgencia, llama la atención
              td Aumenta el deseo de compra, útil en promociones
              td Señales de descuento, ofertas, zonas de impulso
            tr
              td.fw-bold Azul
              td Transmite confianza, tranquilidad y profesionalismo
              td Genera sensación de seguridad, ideal para fidelización
              td Productos tecnológicos, marcas bancarias
            tr
              td.fw-bold Amarillo
              td Alegre, energético, estimula la atención
              td Aumenta la visibilidad y favorece la retención visual
              td Áreas infantiles, anuncios llamativos
            tr
              td.fw-bold Verde
              td Asociado con naturaleza, frescura y bienestar
              td Ideal para productos ecológicos o saludables
              td Supermercados, negocios verdes, farmacias
            tr
              td.fw-bold Naranja
              td Entusiasmo, creatividad, dinamismo
              td Estimula la acción y el consumo impulsivo
              td Tiendas deportivas, accesorios
            tr
              td.fw-bold Negro
              td Elegancia, sofisticación
              td Transmite exclusividad y lujo
              td Productos #[em premium], vitrinas de moda
            tr
              td.fw-bold Blanco
              td Limpieza, pureza, simplicidad
              td Genera sensación de orden y amplitud
              td Farmacias, tiendas de tecnología, vitrinas minimalistas
            tr
              td.fw-bold Rosa
              td Sensibilidad, ternura, feminidad
              td Crea un ambiente acogedor, usado en productos dirigidos a mujeres
              td Cosméticos, moda femenina
            tr
              td.fw-bold Morado
              td Lujo, misterio, creatividad
              td Potencia productos exclusivos o innovadores
              td Perfumería, productos de belleza


</template>

<script>
export default {
  name: 'Tema10',
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
