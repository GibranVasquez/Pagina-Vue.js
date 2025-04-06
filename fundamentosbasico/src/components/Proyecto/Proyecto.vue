<template>
    <div class="container my-5">
      <div class="row">
        <!-- NAVEGACIÓN LATERAL CON LOS ICONOS SOLICITADOS -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm sticky-top" style="top: 20px;">
            <div class="card-header bg-danger text-white">
              <h5 class="mb-0">Filtrar por Producto</h5>
            </div>
            <div class="card-body">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <button 
                    class="nav-link text-start btn btn-link p-2"
                    :class="{ 'active text-danger fw-bold': filtroActivo === 'saw' }"
                    @click="filtrarPorTipo('saw')"
                  >
                    <i class="bi bi-emoji-dizzy me-2"></i> Psychotic SAW
                  </button>
                </li>
                <li class="nav-item">
                  <button 
                    class="nav-link text-start btn btn-link p-2"
                    :class="{ 'active text-danger fw-bold': filtroActivo === 'roja' }"
                    @click="filtrarPorTipo('roja')"
                  >
                    <i class="bi bi-fire me-2" style="color: red;"></i> Tapa Roja
                  </button>
                </li>
                <li class="nav-item">
                  <button 
                    class="nav-link text-start btn btn-link p-2"
                    :class="{ 'active text-danger fw-bold': filtroActivo === 'dorada' }"
                    @click="filtrarPorTipo('dorada')"
                  >
                    <i class="bi bi-gem me-2" style="color: gold;"></i> Tapa Dorada
                  </button>
                </li>
                <li class="nav-item">
                  <button 
                    class="nav-link text-start btn btn-link p-2"
                    :class="{ 'active text-danger fw-bold': filtroActivo === 'todos' }"
                    @click="filtrarPorTipo('todos')"
                  >
                    <i class="bi bi-grid-fill me-2"></i> Todos los Productos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- CONTENIDO PRINCIPAL (MANTENIDO IGUAL) -->
        <div class="col-md-9">
          <!-- BUSCADOR MEJORADO -->
          <div class="mb-4 position-relative">
            <div class="input-group">
              <span class="input-group-text bg-danger text-white">
                <i class="bi bi-search"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Buscar promociones..."
                v-model="busqueda"
                @input="mostrarSugerencias = true"
                @focus="mostrarSugerencias = true"
                @blur="ocultarSugerencias"
              />
            </div>
            
            <!-- SUGERENCIAS DE BÚSQUEDA -->
            <div 
              class="dropdown-menu w-100 shadow-lg"
              :class="{ 'show': mostrarSugerencias && sugerencias.length > 0 }"
              style="z-index: 1000;"
            >
              <button
                v-for="(sugerencia, index) in sugerencias"
                :key="index"
                class="dropdown-item"
                @click="seleccionarSugerencia(sugerencia)"
              >
                {{ sugerencia }}
              </button>
            </div>
          </div>
  
          <!-- PRODUCTO PRINCIPAL -->
          <div class="card shadow-lg mb-4">
            <div class="row g-0">
              <!-- Imagen -->
              <div class="col-md-5 text-center p-4">
                <img :src="productoActual.imagen" :alt="productoActual.nombre" class="img-fluid" />
                <span v-if="productoActual.oferta" class="badge bg-danger mt-3">OFERTA</span>
              </div>
  
              <!-- Información -->
              <div class="col-md-7 p-4">
                <h3 class="fw-bold text-danger">{{ productoActual.nombre }}</h3>
                <p class="mb-1 text-muted">Marca: <strong>{{ productoActual.marca }}</strong></p>
                <div class="mb-2">
                  <span class="text-decoration-line-through text-muted" v-if="productoActual.precioOriginal">
                    ${{ productoActual.precioOriginal }}
                  </span>
                  <span class="fs-4 text-success fw-bold ms-2">${{ productoActual.precio }}</span>
                </div>
                <p><i class="bi bi-check-circle-fill text-success"></i> En Inventario</p>
  
                <div class="row mb-3">
                  <div class="col">
                    <label class="form-label">Cantidad:</label>
                    <input type="number" class="form-control" v-model.number="cantidad" min="1" />
                  </div>
                  <div class="col">
                    <label class="form-label">Sabor:</label>
                    <select class="form-select" v-model="sabor">
                      <option disabled value="">Elegir una opción...</option>
                      <option v-for="sabor in saboresDisponibles" :key="sabor" :value="sabor">
                        {{ sabor }}
                      </option>
                    </select>
                  </div>
                </div>
  
                <button class="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 shadow-lg" @click="comprar">
                  <i class="bi bi-cart-check-fill fs-5"></i> Comprar Ahora
                </button>
              </div>
            </div>
          </div>
  
          <!-- Descripción -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title text-danger">Descripción Detallada</h5>
              <p class="card-text">
                <strong>Acerca de este producto:</strong> {{ productoActual.descripcion }}
              </p>
              <div class="row mt-3">
                <div class="col-md-4">
                  <h6><i class="bi bi-lightning-charge-fill text-warning"></i> Efectos Principales:</h6>
                  <p>{{ productoActual.efectos }}</p>
                </div>
                <div class="col-md-4">
                  <h6><i class="bi bi-speedometer2 text-primary"></i> Nivel de Estimulación:</h6>
                  <p>{{ productoActual.estimulacion }}</p>
                </div>
                <div class="col-md-4">
                  <h6><i class="bi bi-award-fill text-success"></i> Beneficios Clave:</h6>
                  <p>{{ productoActual.beneficios }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Promociones -->
          <div>
            <h5 class="text-primary mb-3">Otras Variantes Disponibles</h5>
            <div v-if="promocionesFiltradas.length > 0" class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
              <div class="col" v-for="promo in promocionesFiltradas" :key="promo.nombre">
                <div
                  class="card h-100"
                  style="cursor: pointer;"
                  @click="seleccionarProducto(promo)"
                  :class="{ 'border-danger': productoActual.nombre === promo.nombre }"
                >
                  <img :src="promo.imagen" class="card-img-top p-3" :alt="promo.nombre" style="height: 180px; object-fit: contain;" />
                  <div class="card-body text-center">
                    <h6 class="card-title">{{ promo.nombre }}</h6>
                    <span class="text-success fw-bold">${{ promo.precio }}</span>
                  </div>
                  <div class="card-footer bg-transparent">
                    <small class="text-muted">{{ promo.marca }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-warning">
              No se encontraron productos que coincidan con tu búsqueda.
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cantidad: 1,
        sabor: '',
        busqueda: '',
        mostrarSugerencias: false,
        filtroActivo: 'todos',
        productoActual: {
          nombre: "Psychotic SAW",
          marca: "Insane Labz",
          precio: 530,
          precioOriginal: 600,
          oferta: true,
          imagen: "https://d2srhjppof4f8s.cloudfront.net/11160-large_default/psychotic-saw-insane-labz.jpg",
          descripcion: "PSYCHOTIC SAW es el pre-entreno más potente de Insane Labz, diseñado para atletas avanzados que buscan un rendimiento extremo. Contiene una dosis masiva de 350mg de cafeína anhidra junto con otros poderosos estimulantes que proporcionan una energía explosiva desde los primeros 15 minutos. Los usuarios reportan un enfoque mental tipo 'túnel' que bloquea todas las distracciones, aumento de la resistencia en un 40-50% y una sensación de 'pump' vascular extremo que dura hasta 4 horas. Nivel de estimulación: 9.5/10 - Solo para usuarios con alta tolerancia a estimulantes. Advertencia: Puede causar hormigueo facial temporal debido a la beta-alanina.",
          tipo: 'saw',
          efectos: "Energía extrema, enfoque tipo túnel, pump vascular intenso",
          estimulacion: "9.5/10",
          beneficios: "Aumento de fuerza, resistencia extrema, mayor congestión muscular",
          sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry']
        },
        promociones: [
          // SAW
          {
            nombre: "Psychotic SAW - Fruit Punch",
            marca: "Insane Labz",
            precio: 530,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_654094-MLU74342621104_022024-O.webp",
            descripcion: "La versión SAW con sabor Fruit Punch ofrece una explosión de energía en 10-15 minutos gracias a su mezcla de 350mg de cafeína, DMHA y extracto de nuez de cola. Los usuarios reportan aumento de fuerza inmediato (hasta 2-3 repeticiones extra por serie), resistencia cardiovascular mejorada y un 'pump' que hace que los músculos se sientan inflados. Efectos secundarios comunes incluyen ligero hormigueo en la piel (por la beta-alanina) y aumento de la temperatura corporal. Nivel de estimulación: 9/10. Ideal para sesiones de entrenamiento extremo o competiciones.",
            tipo: 'saw',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía explosiva, pump vascular, aumento de fuerza",
            estimulacion: "9/10",
            beneficios: "Rendimiento extremo, resistencia mejorada, enfoque láser"
          },
          {
            nombre: "Psychotic SAW - Hawaiian Orange",
            marca: "Insane Labz",
            precio: 530,
            imagen: "https://www.suplementosgym.com.mx/media/imageupload/InsaneLabz/InsaneLabzPsychoticSAW/psychotic-saw-bote.jpg",
            descripcion: "El sabor Hawaiian Orange del Psychotic SAW combina la potencia extrema de la fórmula SAW con un refrescante sabor tropical. Contiene una mezcla sinérgica de estimulantes que proporcionan energía sostenida por 3-4 horas sin crash. Usuarios avanzados reportan aumento del 15-20% en el rendimiento, capacidad para entrenar más tiempo bajo carga y una motivación inusual para superar límites. La presencia de L-Citrulina y Agmatina produce un pump vascular que hace visible cada detalle muscular. Nivel de estimulación: 9.5/10. No recomendado para personas sensibles a la cafeína.",
            tipo: 'saw',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía sostenida, motivación extrema, pump visible",
            estimulacion: "9.5/10",
            beneficios: "Rendimiento mejorado, resistencia prolongada, vascularidad extrema"
          },
          {
            nombre: "Psychotic SAW - Blue Raspberry",
            marca: "Insane Labz",
            precio: 530,
            imagen: "https://cdn.27.ua/sc--media--prod/default/40/13/bf/4013bfa7-e2e0-4682-acef-c7d9e35fa488.jpg",
            descripcion: "La versión Blue Raspberry del Psychotic SAW es famosa por su potente efecto energético y sabor refrescante. La fórmula incluye 350mg de cafeína + 200mg de Teacrina para evitar el crash posterior. Usuarios reportan: - Aumento del 30% en la resistencia - Sensación de 'pump' desde el primer ejercicio - Enfoque mental intenso que bloquea distracciones - Efectos que duran hasta 5 horas. Contiene Noopept para mejorar la conexión mente-músculo. Nivel de estimulación: 10/10 - Solo para atletas experimentados con alta tolerancia.",
            tipo: 'saw',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía extrema, conexión mente-músculo, pump instantáneo",
            estimulacion: "10/10",
            beneficios: "Máximo rendimiento, resistencia sobrehumana, enfoque absoluto"
          },
  
          // TAPA ROJA
          {
            nombre: "Psychotic Tapa Roja - Fruit Punch",
            marca: "Insane Labz",
            precio: 580,
            imagen: "https://www.sportkart.in/wp-content/uploads/2021/01/Insane-Labz-Psychotic-216g.jpg",
            descripcion: "El Psychotic de Tapa Roja es la versión más equilibrada, con 300mg de cafeína y una mezcla de nootrópicos para enfoque mental. El sabor Fruit Punch ofrece energía limpia sin nerviosismo, ideal para entrenamientos largos. Efectos notables: - Energía gradual que dura 4-5 horas - Mejoría en la claridad mental y toma de decisiones - Pump vascular moderado pero sostenido - Sin crash posterior. Contiene Alpha-GPC y L-Tirosina para mejorar la función cognitiva. Nivel de estimulación: 7.5/10 - Perfecto para usuarios intermedios.",
            tipo: 'roja',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía limpia, enfoque mental, pump sostenido",
            estimulacion: "7.5/10",
            beneficios: "Rendimiento consistente, claridad mental, sin crash"
          },
          {
            nombre: "Psychotic Tapa Roja - Hawaiian Orange",
            marca: "Insane Labz",
            precio: 580,
            imagen: "https://www.a1supplements.com/cdn/shop/files/12354_source_1626695557.png?v=1718653604&width=1445",
            descripcion: "La Tapa Roja con sabor Hawaiian Orange ofrece una experiencia energética más suave pero prolongada (5-6 horas). Contiene 250mg de cafeína + Teacrina para evitar tolerancia. Beneficios clave: - Aumento del 20% en repeticiones - Mejor bombeo sanguíneo - Enfoque mental tipo 'flow state' - Mejor recuperación entre series. La fórmula incluye electrolitos para evitar calambres. Usuarios reportan mejor desempeño en entrenamientos de alta volumen. Nivel de estimulación: 7/10 - Ideal para sesiones largas o dobles sesiones.",
            tipo: 'roja',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía prolongada, estado de flow, recuperación mejorada",
            estimulacion: "7/10",
            beneficios: "Duración extendida, prevención de calambres, rendimiento sostenido"
          },
          {
            nombre: "Psychotic Tapa Roja - Blue Raspberry",
            marca: "Insane Labz",
            precio: 580,
            imagen: "https://fitper4mance.com.mx/cdn/shop/files/PreEntrenoInsaneLabzPsychotic35BlueRaspberry220g.jpg?v=1696380016",
            descripcion: "El Psychotic Tapa Roja Blue Raspberry combina 275mg de cafeína con ingredientes vasodilatadores para un efecto energético y de pump equilibrado. Efectos característicos: - Energía que se siente en 10 minutos - Pump vascular desde el calentamiento - Enfoque mental mejorado sin sobreestimulación - Sin nerviosismo o ansiedad. La fórmula incluye Citrulina Malato (8g por servicio) para óxido nítrico máximo. Usuarios reportan mejor desempeño en ejercicios de 12+ repeticiones. Nivel de estimulación: 8/10 - Perfecto para entrenamientos de hipertrofia.",
            tipo: 'roja',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía rápida, pump vascular, enfoque limpio",
            estimulacion: "8/10",
            beneficios: "Hipertrofia mejorada, bombeo máximo, energía sin nerviosismo"
          },
  
          // TAPA DORADA
          {
            nombre: "Psychotic Tapa Dorada - Fruit Punch",
            marca: "Insane Labz",
            precio: 550,
            imagen: "https://i5.walmartimages.com/asr/9b2a39c2-d0d0-4b30-9f15-9d4f84b07232_1.835faf02fcf5073392d24091e72aadce.png?odnBg=ffffff&odnHeight=1000&odnWidth=1000",
            descripcion: "La edición Tapa Dorada es un balance perfecto entre energía y pump, con sabor Fruit Punch. Contiene 325mg de cafeína + Dynamine para evitar tolerancia. Efectos únicos: - Energía que dura exactamente el tiempo de tu entrenamiento - Pump vascular que hace que los músculos 'se sientan' más grandes - Mejor conexión mente-músculo - Sin crash posterior. La fórmula incluye 6g de Citrulina + Glicerol para máxima hidratación intramuscular. Usuarios reportan mejoras en definición muscular y resistencia anaeróbica. Nivel de estimulación: 8.5/10 - El favorito de los competidores.",
            tipo: 'dorada',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía inteligente, pump hidratante, definición muscular",
            estimulacion: "8.5/10",
            beneficios: "Definición mejorada, hidratación intramuscular, energía medida"
          },
          {
            nombre: "Psychotic Tapa Dorada - Hawaiian Orange",
            marca: "Insane Labz",
            precio: 550,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_890901-MLM46160985235_052021-O.webp",
            descripcion: "El Psychotic Tapa Dorada Hawaiian Orange es la versión más avanzada, con 300mg de cafeína + nootrópicos para enfoque mental. Efectos reportados: - Energía gradual que alcanza su pico en 20 minutos - Enfoque mental similar al 'modo zombie' (concentración absoluta) - Pump vascular que aumenta con cada serie - Mejoría en la congestión muscular post-entreno. Contiene 3.2g de Beta-Alanina para retardar la fatiga. Usuarios avanzados reportan poder entrenar al 100% incluso en días de fatiga. Nivel de estimulación: 8/10 - La mejor opción para entrenamientos técnicos.",
            tipo: 'dorada',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía gradual, concentración absoluta, pump progresivo",
            estimulacion: "8/10",
            beneficios: "Entrenamientos técnicos, congestión mejorada, retraso de fatiga"
          },
          {
            nombre: "Psychotic Tapa Dorada - Blue Raspberry",
            marca: "Insane Labz",
            precio: 550,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_934776-MLM73950494143_012024-O.webp",
            descripcion: "La Tapa Dorada Blue Raspberry es famosa por su equilibrio perfecto entre energía y pump. Contiene 280mg de cafeína + L-Teanina para evitar nerviosismo. Beneficios clave: - Energía limpia que dura 3-4 horas - Pump vascular desde el primer ejercicio - Mejoría en la vascularidad - Sin efectos secundarios desagradables. La fórmula incluye 5g de Creatina Monohidratada para aumento de fuerza. Usuarios reportan mejor desempeño en ejercicios compuestos como sentadillas y peso muerto. Nivel de estimulación: 7.5/10 - Ideal para entrenamientos de fuerza.",
            tipo: 'dorada',
            sabores: ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'],
            efectos: "Energía limpia, pump inmediato, fuerza mejorada",
            estimulacion: "7.5/10",
            beneficios: "Aumento de fuerza, vascularidad mejorada, energía sin nerviosismo"
          }
        ],
        terminosBusqueda: [
          'Psychotic SAW',
          'Tapa Roja',
          'Tapa Dorada',
          'Fruit Punch',
          'Hawaiian Orange',
          'Blue Raspberry',
          'Insane Labz',
          'Pre-entreno',
          'Energía extrema',
          'Pump vascular',
          'Enfoque mental'
        ]
      };
    },
    computed: {
      promocionesFiltradas() {
        let filtradas = this.promociones;
        
        if (this.filtroActivo !== 'todos') {
          filtradas = filtradas.filter(promo => promo.tipo === this.filtroActivo);
        }
        
        if (this.busqueda) {
          const busquedaLower = this.busqueda.toLowerCase();
          filtradas = filtradas.filter(promo =>
            promo.nombre.toLowerCase().includes(busquedaLower) ||
            promo.marca.toLowerCase().includes(busquedaLower) ||
            promo.descripcion.toLowerCase().includes(busquedaLower)
          );
        }
        
        return filtradas;
      },
      sugerencias() {
        if (!this.busqueda) return [];
        const busquedaLower = this.busqueda.toLowerCase();
        return this.terminosBusqueda.filter(termino =>
          termino.toLowerCase().includes(busquedaLower)
        ).slice(0, 5);
      },
      saboresDisponibles() {
        return this.productoActual.sabores || ['Hawaiian Orange', 'Fruit Punch', 'Blue Raspberry'];
      }
    },
    methods: {
      comprar() {
        if (this.sabor === '') {
          alert('Por favor selecciona un sabor');
          return;
        }
        alert(`Agregado al carrito\nProducto: ${this.productoActual.nombre}\nCantidad: ${this.cantidad}\nSabor: ${this.sabor}`);
      },
      seleccionarProducto(producto) {
        this.productoActual = { ...producto };
        this.cantidad = 1;
        this.sabor = '';
        this.busqueda = '';
        this.mostrarSugerencias = false;
      },
      seleccionarSugerencia(sugerencia) {
        this.busqueda = sugerencia;
        this.mostrarSugerencias = false;
      },
      filtrarPorTipo(tipo) {
        this.filtroActivo = tipo;
        this.busqueda = '';
        
        if (tipo !== 'todos') {
          const primerProducto = this.promociones.find(p => p.tipo === tipo);
          if (primerProducto) {
            this.seleccionarProducto(primerProducto);
          }
        }
      },
      ocultarSugerencias() {
        setTimeout(() => {
          this.mostrarSugerencias = false;
        }, 200);
      }
    }
  };
  </script>
  
  <style scoped>
  img {
    max-height: 250px;
    object-fit: contain;
  }
  
  .card:hover {
    transform: scale(1.03);
    transition: 0.2s;
  }
  
  .dropdown-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
  }
  
  .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
  }
  
  .nav-link.active {
    background-color: rgba(220, 53, 69, 0.1);
    border-left: 3px solid #dc3545;
  }
  
  .sticky-top {
    position: sticky;
    z-index: 10;
  }
  
  .card {
    transition: all 0.3s ease;
  }
  
  .border-danger {
    border: 2px solid #dc3545 !important;
  }
  
  .bi {
    font-size: 1.1rem;
  }
  </style>