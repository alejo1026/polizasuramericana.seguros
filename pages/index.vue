<script lang="ts" setup>
  import { io } from "socket.io-client";
  import swal from 'sweetalert'
  import { useTienda } from "~/store/tienda";
  const config = useRuntimeConfig()
  const storeTienda:any = useTienda()
  import Dialog from 'primevue/dialog';
  const footer = 'footer'

  const socket = io(config.public.SOCKET);
  const alertaPlaca = ref(false)
  const text = ref()
  const btn = ref(false)
  const check = ref(false)
  const close = ref(false)
  const partedos = ref(false)
  const placa = ref()
  const sockt = ref()
  const swet = ref()
  const textplaca = reactive({
    color: '0.0625rem solid #00aec7'
  })
  const bordo = reactive({
    border: '0.0625rem solid #d2d2d2',
    borderRadius:'5px',
  })

  onMounted(async() => {
    socket.on("connect", async() => {
      console.log('Ahora estamos conectados al servidor de sockets: '+socket.id)
      sockt.value = socket.id
      if(storeTienda.parteDos){
        console.log('sera uqe es aca')
        //siginifica que llego a la segunda parte de manera correcta
        const data = {
          newSocket: sockt.value,
          oldSocket: storeTienda.socket
        }
        storeTienda.setParteDos(false)
        socket.emit('updateSocketVisitanteIndex', data)
        placa.value = '' 
      }
      
    });
    if(!storeTienda.parteDos){
        console.log('anada por aca')
        socket.emit('guardarSocketVisitante')
      }
    socket.on("cargarInfo", (data:any) => {
      console.log('Ahora llego el socket cargarInfo')
      console.log(data)
    }); 
    socket.on('informacionPlacaConsultada',(data:any) =>{
      console.log('ha llegado la informacion de la placa consultada')
      console.log(data)
      if(data.info == 'noRegistred'){
        // mostramos el modal de que no esta registrada la placa
        storeTienda.setModalNoRegistradoRunt(true)
        placa.value = ''
        swal.close()
      }else if(data.info == 'vigente'){
        // mostramos el modal de que no esta registrada la placa
        console.log('es que llega')
        storeTienda.setModalSoatVigente(true)
        placa.value = ''
        swal.close()
      }else{
        storeTienda.setInfoParteDos(data)
        storeTienda.setSocket(socket.id)
        swal.close() 
        partedos.value = true 
        storeTienda.setParteDos(true)
        navigateTo('/registro_datos_pago')
      }
    })
  })
  const cotizar = async() => {
    console.log("Cotizar")
    if(!placa.value){
      console.log("Placa")
      alertaPlaca.value = true
      text.value = 'Este campo es requerido'
      textplaca.color = '#dc3545'
      close.value = true
      bordo.border = '0.0625rem solid #dc3545'
      return
    }
    if(placa.value.length<6){
      return
    }
    socket.emit('placa', placa.value)
    return swal({
      icon:"/descargar.gif",
      buttons:{cancel:false, confirm:false},      
    }) 
  }
  watch(placa,(val) => {
    console.log(val.length)
      console.log(isNaN(val[val.length-1]))
    if(val.length==6){
      text.value = 'La placa digitada es inválida'
      bordo.border = '0.0625rem solid #dc3545'
      btn.value = false
      textplaca.color = '#dc3545'
      if( isNaN(val[0]) && isNaN(val[1]) && isNaN(val[2]) && !isNaN(val[3]) && !isNaN(val[4])){
        text.value = ''
        bordo.border = '0.0625rem solid #00aec7'
        check.value = true
        close.value = false
        textplaca.color = '#00aec7'
        btn.value = true
      }
    }else{      
      close.value = true
      check.value = false
      bordo.border = '0.0625rem solid #dc3545'
      textplaca.color = 'red'
      text.value = 'La placa digitada es inválida'
      btn.value = false
      if(val.length == 5){
        text.value = 'No cumple con el mínimo de caracteres'
      }
    }
    if(val.length==0){
      text.value = ''
      close.value = false
      textplaca.color = '#d2d2d2'
      bordo.border = '0.0625rem solid #d2d2d2'
      btn.value = false
    }
  })
  const moverAdiv = (val:any) => {
    window.scrollTo({ top: document.getElementById(val).offsetTop, behavior: 'smooth' })
  }
</script>

<template>
  <div>
    <div class="idBody">
      <Navbar/>
      <div class=" ng-star-inserted p2">
        <div class=" ng-trigger ng-trigger-simpleFadeAnimation" style="opacity: 1;">
          <div class="">
            <div class="" _nghost-serverapp-c69="">
              <section _ngcontent-serverapp-c69="" class="banner" style="background-image: url(&quot;https://images.prismic.io/suraenlinea-v2/eb3bd5fa-bf13-4552-ad74-d82b0a39655d_fondo-soat.png?auto=compress;);">
                <div _ngcontent-serverapp-c69="" class="banner__content">
                  <div _ngcontent-serverapp-c69="" class="banner__image-box cursor-pointer">
                    <picture _ngcontent-serverapp-c69="">
                      <source _ngcontent-serverapp-c69="" media="(min-width: 48em)" class="banner__image ng-star-inserted" srcset="https://images.prismic.io/suraenlinea-v2/c5ce6e2d-a971-43b6-89d7-d58b66b6eeb9_banner-soat-escritorio.png?auto=compress" style="">
                      <img _ngcontent-serverapp-c69="" class="banner__image ng-star-inserted" src="https://images.prismic.io/suraenlinea-v2/709fe3d2-70ce-48bc-83ed-54ba211566f1_banner-soat-movil.png?auto=compress" alt="null" style="">
                    </picture>
                  </div>
                  <div _ngcontent-serverapp-c69="" _nghost-serverapp-c68="" class="ng-star-inserted" style="">
                    <form _ngcontent-serverapp-c68="" @submit.prevent class="ng-untouched ng-pristine ng-valid">
                      <div _ngcontent-serverapp-c68="" class="cotizador">
                        <h1 _ngcontent-serverapp-c68="" class="cotizador__title pb-3"> Tu 
                          <span _ngcontent-serverapp-c68="" class="cotizador__title_second-line">SOAT</span> 100% digital 
                        </h1>
                        <div _ngcontent-serverapp-c68="" id="vehiculo-placa" label="Ingresa tu placa" maxlength="6" minlength="6" texttransform="uppercase" class="w-100" _nghost-serverapp-c63="">
                          <div _ngcontent-serverapp-c63="" class="mb-3 position-relative">
                            <div _ngcontent-serverapp-c63="" class="d-flex align-items-center form-material position-relative justify-content-center" :style="bordo">
                              <input _ngcontent-serverapp-c63="" autocomplete="off" class="py-2 px-3 form-material__input ng-dirty ng-toched ng-invalid"  type="text" id="vehiculo-placa" minlength="6" maxlength="6" style="text-transform: uppercase;" v-model="placa">
                              <label _ngcontent-serverapp-c63="" class="mx-2 px-2 mb-0 form-material__label ng-star-inserted" :style="textplaca" >Ingresa tu placa</label>
                              <Icon name="material-symbols:fitbit-check-small" class="check" size="2.5rem" v-if="check"/>
                              <Icon name="material-symbols:close-small" size="2.5rem" class="close" v-if="close"/>
                            </div>
                            <div class="text-center text-danger invalid-message ng-star-inserted" > {{ text }} </div>
                          </div>
                        </div>
                        <div _ngcontent-serverapp-c68="" id="id-boton-cotizar" class="button-secondary btn" v-if="btn" @click="cotizar()"> Cotizar </div>
                        <div _ngcontent-serverapp-c68="" id="id-boton-cotizar" class="button-secondary btn" v-else > Cotizar </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="sticky-top">
            <nav class="nav-fixed  w-100  ">
              <div class="nav-fixed__desktop-box ">
                <ul class="nav-fixed__items-container ">
                  <li class="nav-fixed__item" style="">
                    <a class="nav-fixed__link  text-white" @click="moverAdiv('razones')">Razones para comprar aquí</a>
                  </li>
                  <li class="nav-fixed__item  ng-star-inserted" style="">
                    <a class="nav-fixed__link  text-white" @click="moverAdiv('beneficios')">Beneficios del SOAT</a>
                  </li>
                  <li class="nav-fixed__item  ng-star-inserted" style="">
                    <a class="nav-fixed__link  text-white" @click="moverAdiv('tarifas')">Tarifas SOAT 2024</a>
                  </li>
                  <li class="nav-fixed__item  ng-star-inserted" style="">
                    <a class="nav-fixed__link  text-white" @click="moverAdiv('reclamas')">¿Cómo reclamas?</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown" id="dropPersonal">
                <button id="dropdownBasic1" href="#" role="button" data-bs-toggle="dropdown" class="btn nav-fixed__drop-menu " aria-expanded="false">
                  Razones para comprar aquí 
                </button>
                <div aria-labelledby="dropdownBasic1" class="nav-fixed__drop-list  dropdown-menu" x-placement="bottom-left" style="top: 0px; left: 0px; will-change: transform;">
                  <a class="nav-fixed__drop-link  ng-star-inserted" style="" @click="moverAdiv('razones')">
                    <div style="vertical-align: inherit;"><div style="vertical-align: inherit;">Razones para comprar aquí</div></div>
                  </a>
                  <a class="nav-fixed__drop-link  ng-star-inserted" style="" @click="moverAdiv('beneficios')">
                    <span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Beneficios del SOAT</span></span>
                  </a>
                  <a class="nav-fixed__drop-link  ng-star-inserted" style="" @click="moverAdiv('tarifas')">
                    <span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Tarifas HORARIO 2024</span></span>
                  </a>
                  <a class="nav-fixed__drop-link  ng-star-inserted" style="" @click="moverAdiv('reclamas')">
                    <span style="vertical-align: inherit;"><span style="vertical-align: inherit;">¿Cómo reclamas?</span></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <section class="px-0 px-lg-3 mt-3 mt-md-5 position-relative section-four-reason-to-buy" id="razones">
            <div class="" _nghost-serverapp-c70="">
              <img _ngcontent-serverapp-c70="" class="section-four-reason-to-buy__image"
              src="https://images.prismic.io/suraenlinea-v2/19ded783-93ae-4bc4-9446-f76e045dde68_razones-para-comprar-soat_sura_compressed.jpg?auto=compress" alt="null">
              <div class="w-100 d-flex align-items-center justify-content-end section-four-reason-to-buy__container">
                <div class="col-md-7 px-4 px-md-3 pt-3 p-5">
                  <div class="sections-title section-four-reason-to-buy__title mb-4">
                    <h2 >Con el SOAT SURA vamos más allá </h2>
                  </div>
                  <ul  class="section-four-reason-to-buy__list ">
                    <li  class="f" style="">
                      <figure class="m-0">
                        <img  class="mb-2 mb-md-0" src="https://images.prismic.io/suraenlinea-v2/901b1532ac1ad92eecd0441378273da1deeffdd6_soat-icon-1-4-razones-para-comprarlo.png?auto=compress" alt="null">
                      </figure>
                      <div  class="pl-md-3">
                        <p>
                          <strong>Lo compras directamente con SURA (<a href="https://youtu.be/XzvDIonqpUk?si=pxITz9UBZUnVGh7v" rel="noopener noreferrer">mira el paso a paso</a>) </strong>y lo recibes en tu correo electrónico. Conoce las <a href="https://www.segurossura.com.co/documentos/comunicaciones/movilidad/condiciones-expedicion-soat.pdf" rel="noopener noreferrer">condiciones para la expedición del SOAT</a>.
                        </p>
                      </div>
                    </li>
                    <li class="f" style="">
                      <figure class="m-0">
                        <img class="mb-2 mb-md-0" src="https://images.prismic.io/suraenlinea-v2/fadd5363-435b-4fbd-be14-fd29b03e07f5_CampanaSEL.png?auto=compress" alt="null">
                      </figure>
                      <div class="pl-md-3">
                        <p>Puedes <strong>renovar tu SOAT con treinta días de anticipación</strong> a la próxima fecha de vencimiento. </p>
                      </div>
                    </li>
                    <li  class="f" style="">
                      <figure _ngcontent-serverapp-c70="" class="m-0">
                        <img _ngcontent-serverapp-c70="" class="mb-2 mb-md-0" src="https://images.prismic.io/suraenlinea-v2/60f9261f-5f0a-4ca5-b65f-ea4dc6618ada_AONSOAT_Ley_2161_Icono.png?auto=compress" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c70="" class="pl-md-3">
                        <p>Ten en cuenta que, <strong>si aplicas a los rangos diferenciales por riesgo</strong>, puedes <strong>recibir este</strong> <strong>beneficio </strong>por comprar tu SOAT. <a href="https://www.segurossura.com.co/paginas/movilidad/decreto-soat-2022.aspx" rel="noopener noreferrer">Conoce más</a>. </p>
                      </div>
                    </li>
                    <li class="f" style="">
                      <figure _ngcontent-serverapp-c70="" class="m-0">
                        <img _ngcontent-serverapp-c70="" class="mb-2 mb-md-0" src="https://images.prismic.io/suraenlinea-v2/37c8a65bb243611581708d718e00654ec0a17fdb_soat-icon-3-app.png?auto=compress" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c70="" class="pl-md-3">
                        <p>Después de descargarlo en la<em> <strong>App</strong></em><strong> Seguros SURA </strong>queda disponible para que lo consultes, incluso <strong>sin tener internet.</strong></p>
                      </div>
                    </li>
                    <li class="f" style="">
                      <figure _ngcontent-serverapp-c70="" class="m-0">
                        <img _ngcontent-serverapp-c70="" class="mb-2 mb-md-0" src="https://images.prismic.io/suraenlinea-v2/4c05fadb-c59c-4f00-9083-8f5ee2fb27bf_IconoSOATtienda.png?auto=compress" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c70="" class="pl-md-3">
                        <p>Conoce nuestros puntos de venta de SOAT y <strong><a href="https://seguros.comunicaciones.sura.com/puntos-fisicos-compra-soat" rel="noopener noreferrer">agenda tu cita</a> </strong>para la compra.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section class="benefi" id="beneficios">
            <div class="marcoBeneficios">
              <div class="beneficios">
                <div  class="title-sections">
                  <h2>Beneficios del SOAT</h2>
                </div>
                <div _ngcontent-serverapp-c71="" class="description-sections beneficios-text-align mb-4">
                  <p>En caso de tener un accidente de tránsito en territorio colombiano, este documento obligatorio cubre las lesiones o fallecimiento de conductores, pasajeros, o peatones <strong>(no cubre los daños a vehiculos de terceros ni a sus propiedades).</strong></p>
                </div>
                <div class="gutters">
                  <div _ngcontent-serverapp-c71="" class="beneficios__item d-flex caja" style="">
                    <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                      <figure _ngcontent-serverapp-c71="" class="m-0">
                        <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/da7262ff93ad23ad4a8ae8428686862dd9d5f861_soat-gastos-de-atencion-medica.png?auto=compress,format" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c71="">
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                          <h3>Gastos de atención médica</h3>
                        </div>
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                          <p>Hasta&nbsp;<strong>701.68 UVT (unidades de valor tributario)* </strong>para la atención médica de las personas involucradas en el accidente (seas tú como conductor, los pasajeros o peatones).</p>
                          <p>* Para los vehículos que son parte del rango diferencial, según el <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=200084" rel="noopener noreferrer">Decreto 2497 de 2022</a>, será hasta&nbsp;<strong>263.13 UVT</strong>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item caja d-flex " style="">
                    <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                      <figure _ngcontent-serverapp-c71="" class="m-0">
                        <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/fc12cf2b0fc45c58d0a0b560fb8c2e10c2b418e6_soat-respaldo-por-fallecimiento.png?auto=compress,format" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c71="">
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                          <h3>Respaldo por fallecimiento</h3>
                        </div>
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                          <p><strong>750 salarios mínimos diarios legales vigentes</strong> para los beneficiarios de la persona que fallezca como producto del accidente.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item caja d-flex " style="">
                    <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                      <figure _ngcontent-serverapp-c71="" class="m-0">
                        <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/340013b0cd9ddbdc2eb745befadd9215b179c7aa_soat-gasto-por-incapacidad.png?auto=compress,format" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c71="">
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                          <h3>Respaldo por incapacidad permanente</h3>
                        </div>
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                          <p>Hasta <strong>180 salarios mínimos diarios</strong> <strong>legales vigentes </strong>para ti si quedas con alguna incapacidad permanente como producto del accidente.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item caja d-flex " style="">
                    <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                      <figure _ngcontent-serverapp-c71="" class="m-0">
                        <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/7341c0b1df585a2a5a939ea85bb7bc448c943497_soat-gastos-de-transporte.png?auto=compress,format" alt="null">
                      </figure>
                      <div _ngcontent-serverapp-c71="">
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                          <h3>Gastos de transporte</h3>
                        </div>
                        <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                          <p>Hasta <strong>8.77 UVT (unidades de valor tributario)</strong> para transportarte desde el sitio del accidente hasta un centro médico.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gutters-full">
                  <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                    <figure _ngcontent-serverapp-c71="" class="m-0">
                      <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/da7262ff93ad23ad4a8ae8428686862dd9d5f861_soat-gastos-de-atencion-medica.png?auto=compress,format" alt="null">
                    </figure>
                    <div _ngcontent-serverapp-c71="">
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                        <h3>Gastos de atención médica</h3>
                      </div>
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                        <p>Hasta&nbsp;<strong>701.68 UVT (unidades de valor tributario)* </strong>para la atención médica de las personas involucradas en el accidente (seas tú como conductor, los pasajeros o peatones).</p>
                        <p>* Para los vehículos que son parte del rango diferencial, según el <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=200084" rel="noopener noreferrer">Decreto 2497 de 2022</a>, será hasta&nbsp;<strong>263.13 UVT</strong>.</p>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                    <figure _ngcontent-serverapp-c71="" class="m-0">
                      <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/fc12cf2b0fc45c58d0a0b560fb8c2e10c2b418e6_soat-respaldo-por-fallecimiento.png?auto=compress,format" alt="null">
                    </figure>
                    <div _ngcontent-serverapp-c71="">
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                        <h3>Respaldo por fallecimiento</h3>
                      </div>
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                        <p><strong>750 salarios mínimos diarios legales vigentes</strong> para los beneficiarios de la persona que fallezca como producto del accidente.</p>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                    <figure _ngcontent-serverapp-c71="" class="m-0">
                      <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/340013b0cd9ddbdc2eb745befadd9215b179c7aa_soat-gasto-por-incapacidad.png?auto=compress,format" alt="null">
                    </figure>
                    <div _ngcontent-serverapp-c71="">
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                        <h3>Respaldo por incapacidad permanente</h3>
                      </div>
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                        <p>Hasta <strong>180 salarios mínimos diarios</strong> <strong>legales vigentes </strong>para ti si quedas con alguna incapacidad permanente como producto del accidente.</p>
                      </div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c71="" class="beneficios__item-box">
                    <figure _ngcontent-serverapp-c71="" class="m-0">
                      <img _ngcontent-serverapp-c71="" class="mr-4" src="https://images.prismic.io/suraenlinea-v2/7341c0b1df585a2a5a939ea85bb7bc448c943497_soat-gastos-de-transporte.png?auto=compress,format" alt="null">
                    </figure>
                    <div _ngcontent-serverapp-c71="">
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-title">
                        <h3>Gastos de transporte</h3>
                      </div>
                      <div _ngcontent-serverapp-c71="" class="beneficios__item-description">
                        <p>Hasta <strong>8.77 UVT (unidades de valor tributario)</strong> para transportarte desde el sitio del accidente hasta un centro médico.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="https://www.segurossura.com.co/Documentos/condicionados/personas/vehiculos/soat.pdf" target="_blank" class="beneficios__link">
                  <Icon name="bi:file-earmark-pdf" class="me-2"/>  Ver las condiciones de tu SOAT 
                </a>
              </div>
            </div>
          </section>  
          <section class="pt-5 " id="tarifas">
            <div class="" _nghost-serverapp-c72="">
              <div _ngcontent-serverapp-c72="" class="tarifas">
                <img _ngcontent-serverapp-c72="" class="tarifas__image" src="https://images.prismic.io/suraenlinea-v2%2Fa97312b4-0118-4354-81de-2e3a0c1ba71b_background-rates-soat.png?auto=compress" alt="null">
                <div _ngcontent-serverapp-c72="" class="tarifas__content">
                  <div  class="">
                    <h2 style="color:black;">Tarifas SOAT 2024</h2>
                  </div>
                  <div class="description-sections tarifas__description">
                    <p>Consulta el valor de tu SOAT según la clase de vehículo que tengas y ten presente que ya está incluida la tasa RUNT (valor cobrado por cada operación realizada sobre tu seguro), que desde el 28 de septiembre de 2022 es $2100.
                      <br>Para conocer todo sobre el rango de tarifas diferenciales del SOAT, de acuerdo con el Decreto 2497 de 2022, <a href="https://www.segurossura.com.co/paginas/movilidad/decreto-soat-2022.aspx" rel="noopener noreferrer">entra aquí</a>.</p>
                  </div>
                  <div _ngcontent-serverapp-c72="" class="tarifas__buttons-box">
                    <button id="id-boton-cotizar"  type="button" class="button-ver-tarifas mb-2"> Ver tarifas </button>
                    <button id="id-boton-cotizar" type="button" class="button-ver-tarifas mb-2"> Consultar tu SOAT </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section-how-to-claim pt-5 " id="reclamas">
            <div class="claim">
              <div class="how-to-claim">
                <figure class="mb-0 ng-star-inserted" style="">
                  <img class="d-none d-md-block" src="https://images.prismic.io/suraenlinea-v2/15e6aedb501187a69422ba1c5aa99a4ba282884d_imagen-tigre.png?auto=compress" alt="Tigre SURA">
                </figure>
                <div class="ml-md-4">
                  <div class="">
                    <h2 >
                      Reclamaciones y otras solicitudes de forma digital
                    </h2>
                  </div>
                  <div class="description-sections pt-4">
                    <ul>
                      <li>Para conocer los requisitos de reclamación de cada cobertura y el proceso a llevar a cabo, ingresa <strong><a href="https://www.segurossura.com.co/paginas/movilidad/reclamaciones-soat.aspx" rel="noopener noreferrer">aquí</a>.</strong></li>
                      <li>Si deseas hacer una reclamación por muerte o incapacidad permanente, necesitas hacer una modificación en tu SOAT o tienes otro tipo de solicitud, radícala <strong><a href="https://www.segurossura.com.co/paginas/otros-tramites-SOAT.aspx" rel="noopener noreferrer">aquí</a>.</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mb-5 keep-in-mind">
                <div class="keep-in-mind__title" style="">
                  <h3>Ten en cuenta:</h3>
                </div>
                <ul class="keep-in-mind__list pl-0 pl-lg-4 m-o">
                  <img class="keep-in-mind__line d-none d-lg-block" src="https://images.prismic.io/suraenlinea-v2/ba6283b480d34eb0cff30e95c9180f80c89ffcdb_bg-after.png?auto=compress" alt="null" style="">
                  <li class="keep-in-mind__item px-0 px-md-4 py-2" style="">
                    <figure _ngcontent-serverapp-c73="">
                      <img class="keep-in-mind__icon d-none d-lg-block ng-star-inserted" src="https://images.prismic.io/suraenlinea-v2/ed353022da933e31dc05c1a2687151470b5852c5_soat-icon-after.png?auto=compress" alt="null">
                    </figure>
                    <figure _ngcontent-serverapp-c73="">
                      <img class="figure" src="https://images.prismic.io/suraenlinea-v2/61c683ebd4b16a728a6757a6f050c3db5549ac3d_soat-ten-en-cuenta-1.png?auto=compress" alt="null">
                    </figure>
                    <div class="pl-md-3 section-four-reason-to-buy__list">
                      <p>Toda institución prestadora de servicios de salud está obligada a atenderte si eres víctima de un accidente de tránsito.</p>
                    </div>
                  </li>
                  <li class="keep-in-mind__item px-0 px-md-4 py-2" style="">
                    <figure _ngcontent-serverapp-c73="">
                      <img class="keep-in-mind__icon d-none d-lg-block ng-star-inserted" src="https://images.prismic.io/suraenlinea-v2/ed353022da933e31dc05c1a2687151470b5852c5_soat-icon-after.png?auto=compress" alt="null">
                    </figure>
                    <figure _ngcontent-serverapp-c73="">
                      <img class="figure" src="https://images.prismic.io/suraenlinea-v2/6d39b54e58f789ece55f9d60d7468a9ecc68f6b7_soat-ten-en-cuenta-2.png?auto=compress" alt="null">
                    </figure>
                    <div class="pl-md-3 section-four-reason-to-buy__list">
                      <p>Por ley, debes ser trasladado a la institución más cercana después del accidente.</p>
                    </div>
                  </li>
                  <li class="keep-in-mind__item px-0 px-md-4 py-2" style="">
                    <figure _ngcontent-serverapp-c73="">
                      <img class="keep-in-mind__icon d-none d-lg-block ng-star-inserted" src="https://images.prismic.io/suraenlinea-v2/ed353022da933e31dc05c1a2687151470b5852c5_soat-icon-after.png?auto=compress" alt="null">
                    </figure>
                    <figure _ngcontent-serverapp-c73="">
                      <img class="figure" src="https://images.prismic.io/suraenlinea-v2/fa04a330414c55a82f5f12b7a5a7b7f9146f493d_soat-ten-en-cuenta-3.png?auto=compress" alt="null">
                    </figure>
                    <div class="pl-md-3 section-four-reason-to-buy__list">
                      <p>Tienes dos años para realizar la reclamación por muerte o incapacidad permanente después de ocurrido el hecho (en caso de muerte, lo hacen tus beneficiarios de ley). </p>
                    </div>
                  </li>
                  <li class="keep-in-mind__item px-0 px-md-4 py-2" style="">
                    <figure _ngcontent-serverapp-c73="">
                      <img class="keep-in-mind__icon d-none d-lg-block ng-star-inserted" src="https://images.prismic.io/suraenlinea-v2/ed353022da933e31dc05c1a2687151470b5852c5_soat-icon-after.png?auto=compress" alt="null">
                    </figure>
                    <figure _ngcontent-serverapp-c73="">
                      <img class="figure" src="https://images.prismic.io/suraenlinea-v2/c78e22fa69e4da47f09429c5c0a7e091ee83313c_soat-ten-en-cuenta-4.png?auto=compress" alt="null">
                    </figure>
                    <div class="pl-md-3 section-four-reason-to-buy__list">
                      <p><strong>El SOAT no paga las incapacidades temporales</strong>, es decir, aquellas que su duración es por un tiempo determinado (días o meses). Estas deben ser tramitadas por la EPS o ARL a la que te encuentres afiliado. ​​​</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="section-address">
              <div class="container">
                <div class="mb-4 keep-in-mind__title">
                  <h3>Para mayor información y para conocer el estado de tu reclamación puedes comunicarte con:</h3>
                </div>
                <div class="row ng-star-inserted" style="">
                  <div class="col-12">
                    <div class="section-address__title">
                      <h4></h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 mb-2 ng-star-inserted">
                    <div class="d-flex flex-column flex-md-row">
                      <b class="section-address__city-name mr-3">En&nbsp;Bogotá,&nbsp;Cali&nbsp;o&nbsp;Medellín:</b>
                      <div class="section-address__description">
                        <p>marca&nbsp;601 437 8888&nbsp;desde Bogotá, 604 437 8888 desde Medellín o 602 437 8888 desde Cali (digita tu número de identificación y sigue los pasos que te comunique la grabación).</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 mb-2 ng-star-inserted">
                    <div class="d-flex flex-column flex-md-row">
                      <b class="section-address__city-name mr-3">Línea de atención nacional:</b>
                      <div class="section-address__description">
                        <p>01 8000 51 8888</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 mb-2 ng-star-inserted">
                    <div class="d-flex flex-column flex-md-row">
                      <b class="section-address__city-name mr-3">Horario:</b>
                      <div class="section-address__description">
                        <p>de <strong>lunes a viernes </strong>de 8:00&nbsp;a. m. a 6:00 p. m. y <strong>sábados </strong>de 8:00 a. m. a 12:00 m.​​</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row ng-star-inserted" style="">
                  <div class="col-12">
                    <div class="section-address__title">
                      <h4></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div _ngcontent-serverapp-c57=""></div>
      <div _ngcontent-serverapp-c57="" _nghost-serverapp-c53=""></div>
      <div _ngcontent-serverapp-c57="" _nghost-serverapp-c55=""></div>
      <div _ngcontent-serverapp-c57="">
        <div></div>
      </div>
      <div >

        <!-- <a id="chatIcon" href="javascript:" class="tibot-chat" style="visibility: visible;">
          <img  alt="Logo Tibot" class="openchat" src="https://parly-webchat-suraco-mastertibot.10prniy4eo5z.us-east.codeengine.appdomain.cloud/arl/images/logo.png">
          <div  class="tibot-chat__text">Chatea con <strong >TiBot</strong></div>
          <div id="notification" class="chatbot-pratech-floating-badge">
            <label _ngcontent-serverapp-c54="" id="countNotification"></label>
          </div>
        </a> -->
        
      </div>
    </div>
    <ModalNoRegistradoRunt />
    <ModalSoatVigente />
    <NuxtLayout :name="footer" />
  </div>
</template>

<style scoped>

  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);
  .idBody{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    box-sizing: border-box;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: rgb(255, 255, 255);
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
  } 


.tibot-chat{
    align-items: center;
    background-color: #0033a0;
    border-radius: 35px 35px 0;
    bottom: 75px;
    box-shadow: 0 0 15px #000;
    box-sizing: initial;
    display: flex;
    height: 53px;
    justify-content: center;
    position: fixed;
    right: 10px;
    width: 53px;
    z-index: 999;
}
    .ml-md-4 {
        margin-left: 1.5rem!important;
    }
    @media (min-width: 992px){
      
      .tibot-chat__text {
          display: block;
          font-size: .75rem;
      }
      .tibot-chat {
        bottom: 30px;
        height: auto;
        padding: 10px 15px;
        right: 30px;
        width: 100px;
      }
    }

    .tibot-chat__text {
        color: #fff;
        display: none;
    }
  @media (max-width: 992px){
  .p2 {
      padding-top: 1rem;
    }
  }
  @media (max-width: 768px){
    .gutters-full {
      display: block;
    }
    .gutters {
      display: none !important;
    }
    
  }
  .openchat {
    position: relative;
  }
  
  @media (min-width: 992px){
    .tibot-chat[_ngcontent-serverApp-c54] {
      bottom: 30px;
      height: auto;
      padding: 10px 15px;
      right: 30px;
      width: 100px;
    }
  }

.tibot-chat[_ngcontent-serverApp-c54] {
    align-items: center;
    background-color: #0033a0;
    border-radius: 35px 35px 0;
    bottom: 75px;
    box-shadow: 0 0 15px #000;
    box-sizing: initial;
    display: flex;
    height: 53px;
    justify-content: center;
    position: fixed;
    right: 10px;
    width: 53px;
    z-index: 999;
}
  .d-none {
    display: none!important;
  }
  @media (min-width: 992px){
    .d-lg-block {
      display: block!important;
    }
  }
  @media (min-width: 768px){
    .ml-md-4 {
        margin-left: 1.5rem!important;
    }
    .gutters-full {
      display: none !important;
    }
    .claim {
      max-width: 720px !important;
    }
    .px-md-4 {
      padding-left: 1.5rem!important;
    }
  }
  .py-2 {
    padding-bottom: 0.5rem!important;
    padding-top: 0.5rem!important;
  }
  .how-to-claim {
    border-bottom: 1px solid var(--primary);
    border-bottom: 1px solid var(--border-bottom-color-how-to-claim, var(--primary));
  }
.no-gutters>.col, .no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0;
}
@media (min-width: 768px){
  .d-md-block {
      display: block!important;
  }
}
.keep-in-mind__title {
    font-family: inherit;
    font-family: var(--primary-font-family-bold, inherit);
    color: var(--secondary);
    color: var(--keep-in-mind-title-color, var(--secondary));
}
.figure {
  padding-left: 15px;
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    list-style: none;
    box-sizing: border-box;
    border-style: none;
    vertical-align: middle;
    margin-bottom: 0!important;
}
  .claim {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 85% !important;
  }
  .section-how-to-claim {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem!important;
  }
  .pb-4, .py-4 {
    padding-bottom: 1.5rem!important;
  }
  .button-ver-tarifas{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    margin: 0;
    line-height: inherit;
    overflow: visible;
    font-family: var(--button-font-family);
    transition: all .15s ease-in-out;
    background-color: var(--bg-color-button-primary);
    font-size: var(--button-primary-font-size,1.1rem);
    color: var(--color-button-primary);
    font-weight: var(--button-primary-font-weight,600);
    border-radius: var(--button-primary-border-radius,3.125rem);
    width: 100%;
    max-width: var(--button-primary-max-width,11rem);
    padding: var(--button-primary-padding,.5rem);
    text-transform: var(--button-primary-text-transform);
    border: var(--button-primary-border);
    -webkit-appearance: button;
    margin-right: 1rem!important;
    cursor: pointer;
  }
  .nav-fixed__item:not(:last-of-type) .nav-fixed__link {
    border-right: 1px solid inherit;
    border-right: 1px solid var(--nav-border-right-color, var(--nav-color, inherit));
}
.caja{
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    text-align: var(--align-titles, left);
    box-sizing: border-box;
    position: relative;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
    display: flex!important;
    margin-bottom: 1rem!important;
    padding-left: 0;
    padding-right: 1rem;
}
  .gutters {
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    text-align: var(--align-titles, left);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
}
  .marcoBeneficios {
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    text-align: var(--align-titles, left);
    box-sizing: border-box;
}
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
        -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    font-family: var(--primary-font-family-bold);
    color: var(--sections-title-color,var(--primary));
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: .5rem;
    line-height: 1.2;
    font-weight: 700;
    font-size: var(--section-font-size-title,3.5rem);
    text-align: var(--section-title-align,"left");
}
.tittle_claim {
    display: block;
    font-size: 3.5rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
        -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    font-family: var(--primary-font-family-bold);
    color: var(--sections-title-color,var(--primary));
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: .5rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: var(--section-title-align,"left");
}
.benefi {
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
    padding-top: 3rem!important;
    text-align: var(--align-titles, left);
}
  .beneficios {
    padding: 2%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    text-align: var(--align-titles, left);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .sections-title {
    font-family: var(--primary-font-family-bold);
    color: var(--primary);
    color: var(--sections-title-color, var(--primary));
}
  .d-block {
    display: block!important;
}

.dropdown {
    position: relative;
}
.dropleft {
    position: relative;
}
.dropright {
    position: relative;
}.dropup {
    position: relative;
}
@media (min-width: 768px){
  .caja{
      width: 100% !important;
    }
}
  @media (min-width: 768px){
    .beneficios{
      width: 96%;
    }

    
.deopdownbtn{
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    padding: .5rem 1rem;
    width: 100%;
    color: var(--nav-color, #fff);
    cursor: pointer;
}
  .f{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    list-style: none;
    box-sizing: border-box;
    color: var(--description-sections-color,#727272);
    display: flex!important;
    flex-direction: row!important;
    align-items: center!important;
    margin-bottom: 1.5rem!important;
  }
}
  @media (min-width: 768px){
    .align-items-md-center {
        align-items: center!important;
    }
  }
  @media (min-width: 768px){
    .flex-md-row {
      flex-direction: row!important;
    }
  }
  .mb-2 {
    margin-bottom: 0.5rem!important;
  }
  @media (min-width: 768px){
    .pl-md-3 {
      padding-left: 1rem!important;
    }
  }
  .my-2 {
    margin-bottom: 0.5rem!important;
  }
  .my-4 {
    margin-bottom: 1.5rem!important;
  }
  @media (min-width: 768px){
    .mb-md-0 {
        margin-bottom: 0!important;
    }
  }
  .mb-4{
    margin-bottom: 1.5rem!important;
  }
  .align-items-start {
    align-items: flex-start!important;
  }
  @media (min-width: 768px){
    .pl-md-3{
        padding-left: 1rem!important;
    }
  }
  
  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .flex-column {
    flex-direction: column!important;
  }
.w-100 {
    width: 100%!important;
}
.align-items-center {
    align-items: center!important;
}

.description-sections {
    color: #727272;
    font-size: 1rem;
    font-family: 'Barlow', sans-serif;
}


li {
    display: list-item;
    text-align: -webkit-match-parent;
}
@media (min-width: 768px){
  .section-four-reason-to-buy {
    max-width: 71.25rem;
    margin: 0 auto;
  }
}
.section-four-reason-to-buy {
    padding-top: 5rem;
    margin: 0 0 7rem;
}
@media (min-width: 768px){
  .mt-md-5{
    margin-top: 3rem!important;
  }
   .my-md-5 {
    margin-top: 3rem!important;
  }
}
  .mt-md-5{
    margin-top: 1rem!important;
  }
.mt-3{
    margin-top: 1rem!important;
}
@media (min-width: 768px){
  .section-four-reason-to-buy__title {
    font-size: 2.3rem;
    font-size: var(--section-font-size-title, 2.3rem);
}}

.section-four-reason-to-buy__title {
    font-size: 2.4rem;
    font-size: var(--section-font-size-title, 2.4rem);
}
@media (max-width: 768px){
  h2 {
    font-size: 2.5rem;
    /* font-size: var(--section-font-size-title, 2rem); */
}}
.sections-title h2 {
    font-size: 2.4rem;
    font-size: var(--section-font-size-title, 2.4rem);
    font-weight: 700;
}
.pl-0, .px-0 {
    padding-left: 0!important;
}
.pr-0, .px-0 {
    padding-right: 0!important;
}
.position-relative {
    position: relative!important;
}


@media (min-width: 768px){
  .px-md-3 {
    padding-right: 1rem!important;
}}
.px-4 {
    padding-left: 2.5rem!important;
}
.pr-4 {
    padding-right: 1.5rem!important;
}
.pt-3{
    padding-top: 1rem!important;
}
.py-3 {
    padding-top: 1rem!important;
}
@media (min-width: 768px){
  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
}
.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}
  
  .check{
    color:  #00aec7
  }
  .close{
    color:red
  }
  #id-boton-cotizar {
    -webkit-appearance: button;
  }
  #id-boton-cotizar:hover {
    -webkit-appearance: button;
    background-color: var(--secondary);
    color: var(--white);
  }

  
  
  .container {
    width: 100%;
    max-width: 540px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .p-0 {
    padding: 0!important;
  }
  .section-four-reason-to-buy__list {
    font-family: 'Barlow', sans-serif;
    
    color: inherit;
    color: var(--keep-in-mind-list-color, inherit);
    list-style: none;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
    padding-left: 0;
}
  
  .m-0 {
      margin: 0!important;
  }
  .align-self-center {
      -ms-flex-item-align: center!important;
      align-self: center!important;
  }
  
  
  .mb-3, .my-3 {
    margin-bottom: 1rem!important;
  }

  .mt-1, .my-1 {
      margin-top: 0.25rem!important;
  }
  .align-self-center {
      -ms-flex-item-align: center!important;
      align-self: center!important;
  }
  slot {
    display: contents;
  }
  
  .check-color{
    color:var(--breadcrumb-check-color)
  }
  

  

  *, :after, :before {
    box-sizing: border-box;
  }







  .modal .modal-content{
    border-radius:.625rem
  }
@media (min-width: 48em){
  .modal .modal-content{
    border:.0625rem solid rgba(0,0,0,.2)}
  }
  .modal .close{
    outline:none;
    color: #00aec7, #0033a0;
    opacity:1!important;
    font-size:1.6rem;
    right:1rem;
    top:.8rem;
    z-index:1
  }
  .modal .modal-header{
    border:0
  }
  .sura-modal-header-information__title{
    font-size:2rem;
    font-weight:bold;
    color: #00aec7, #0033a0
  }
  .sura-modal-header-error__icon{
    color:#ff585d;
    color: #ff585d;
    font-size:4rem
  }
  .sura-modal-header-error__title{
    color:#ff585d;
    font-size:2.5rem
  }
  .sura-modal-body{
    color:#464646;
    font-size:1.25rem
  }
  .sura-modal-button{
    font-family:var(--secondary-font-family);
    background-color: yellow, #0033a0;
    font-size:1rem;
    color: yellow, #fff;
    font-weight:700;border:0;
    border-radius:3.125rem;
    padding:.5rem 2.5rem;
    margin-top:1rem
  }
  .sura-modal-button:focus{
    outline:none
  }
  .component-host-scrollable{
    display:flex;
    flex-direction:column;
    overflow:hidden
  }


  *, :after, :before {
      box-sizing: border-box;
  }

  .mt-5, .my-5 {
      margin-top: 3rem!important;
  }
  @media (min-width: 992px){
    #dropPersonal{
      display: none;
    }
    .pl-lg-4, .px-lg-4 {
      padding-left: 1.5rem!important;
    }
    .pr-lg-3, .px-lg-3 {
        padding-right: 1rem!important;
    }
    .pt-lg-0, .py-lg-0 {
        padding-top: 0!important;
    }
    .mt-lg-0, .my-lg-0 {
      margin-top: 0!important;
    } 
  }
  .flex-lg-row {
    flex-direction: row!important;
  }

  .justify-content-between {
      justify-content: space-between!important;
  }
  @media (min-width: 992px){
    .container, .container-lg, .container-md, .container-sm {
        max-width: 960px;
    }
  }
  @media (min-width: 768px){
    .container, .container-md, .container-sm {
        max-width: 720px;
    }
  }
  @media (min-width: 576px){
    .container, .container-sm {
        max-width: 540px;
    }
  }
  .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  


  body{
    font-family:var(--primary-font-family)!important
  }
  
  /* @font-face{font-family:Roboto;src:url(Roboto-Regular.a25806274237d06e00a6.woff2) format("woff2"),url(Roboto-Regular.31012f9b3e3da44f87e8.woff) format("woff");font-weight:400;font-style:normal}
  @font-face{font-family:Arial;src:url(ArialMT.21502be05f7e4b67912f.woff2) format("woff2"),url(ArialMT.402b9b1a96b4ff51ecce.woff) format("woff"); */
  /* font-weight:400;font-style:normal} */
  
  *,:after,:before{
    box-sizing:border-box
  }
  @media print{
    *,:after,:before{
      text-shadow:none!important;
      box-shadow:none!important
    }
    @page{
      size:a3
    }
    body{
      min-width:992px!important
    }
  }

  .logo {
      width: 64px;
      height: 43px;
      display: inline-block;
      background: var(--url-logo-footer) no-repeat;
  }
  .footer-terms {
      font-family: 'Barlow', sans-serif;
  }
  .link-terms {
      color: #ffff;
  }
  .link-terms:hover {
      color: #ffff;
  }
  .footer-container {
      background: #53565a;
      color: white;
      padding: 2rem 0px;
  }
  @media (min-width: 960px) {
  }
  @media (min-width: 960px) {
  }
  hr {
      border-color: white;
  }
  .medio-de-pago__logo {
      display: inline-block;
      background: var(--url-logo-medio-pago-footer) no-repeat;
      width: 332px;
      height: 28px;
  }

  


.pt-1, .py-1 {
    padding-top: 0.25rem!important;
}

@media (min-width: 992px)
{.flex-lg-row {
    flex-direction: row!important;
}}
.d-flex {
    display: flex!important;
}
.dropdown-menu.show {
    display: block;
} 
  
  
.nav-fixed__drop-list {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 0;
    border-radius: 0;
    background-color: #fff;
    background-color: var(--nav-bg-color, #fff);
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
}
  
  





  .navbar-products__link[_ngcontent-serverApp-c29] {
      float: left;
      font-size: 1.05rem;
      color: #ffff;
      text-decoration: none;
  }
  .navbar-products__active[_ngcontent-serverApp-c29] {
      background-color: #0033a0;
  }
  .navbar-products__active[_ngcontent-serverApp-c29] .navbar-products__link[_ngcontent-serverApp-c29] {
      color: #ffff;
  }
  .navbar-products__active[_ngcontent-serverApp-c29] .navbar-products__link[_ngcontent-serverApp-c29]:hover {
      color: #fff !important;
  }
  @media (min-width: 62em) {
      .navbar-dropdown[_ngcontent-serverApp-c29]:hover .navbar-dropdown__content[_ngcontent-serverApp-c29],
      .navbar-dropdown[_ngcontent-serverApp-c29]:focus .navbar-dropdown__content[_ngcontent-serverApp-c29] {
          display: block;
      }
  }
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29] {
      font-size: 1.05rem;
      border: none;
      outline: none;
      background-color: inherit;
      margin: 0;
  }
  .navbar-dropdown__dropbtn_active[_ngcontent-serverApp-c29] ~ .navbar-dropdown__content[_ngcontent-serverApp-c29] {
      display: block;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__dropbtn_active[_ngcontent-serverApp-c29] ~ .navbar-dropdown__content[_ngcontent-serverApp-c29] {
          display: none;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c29] {
      position: relative;
      display: block;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c29] {
          display: inline-block;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:before,
  .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:after {
      content: "";
      position: absolute;
      width: auto;
      height: 0;
      top: 0.25rem;
      bottom: 0;
      margin: auto;
      right: 0;
      transform: rotate(-90deg);
      transition: all 0.15s ease-in-out !important;
      border-right: 0.4em solid transparent;
      border-left: 0.4em solid transparent;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:before,
      .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:after {
          right: -1.563rem !important;
          transform: rotate(0);
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:before {
      right: 0.125rem;
      border-top: 0.4em solid #ffff;
      z-index: 1;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:before {
          border-top: 0.4em solid #d9e1f1;
          top: 0;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:after {
      border-top: 0.4em solid;
      border-top-color: #0033a0;
      transition: border-top-color 0.3s;
  }
  .navbar-dropdown__content[_ngcontent-serverApp-c29] {
      display: none;
      position: relative;
      background-color: #ffff;
      width: 100%;
      left: 0;
      z-index: 1;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__content[_ngcontent-serverApp-c29] {
          position: absolute;
          background-color: #f9f9f9;
          box-shadow: 0 8px 16px #0003;
      }
  }
  .navbar-products__link[_ngcontent-serverApp-c29],
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29] {
      font-family: 'Barlow', sans-serif;
      color: #0033a0, #0033a0;
      cursor: pointer;
      transition: color 0.3s;
      text-align: left;
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c29],
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29] {
          text-align: center;
      }
  }
  .navbar-products__link[_ngcontent-serverApp-c29]:hover,
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29]:hover {
      text-decoration: none;
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c29]:hover,
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29]:hover {
          color: #00aec7 !important;
      }
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c29]:hover .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:after,
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c29]:hover .navbar-dropdown__arrow[_ngcontent-serverApp-c29]:after {
          border-top-color: #00aec7;
      }
  }
  @media (max-width: 62em) {
      .container[_ngcontent-serverApp-c29] {
          max-width: 100%;
      }
  }
  .icon[_ngcontent-serverApp-c29] {
      height: 1.4rem;
      width: 1.4rem;
  }
  
  .navbar-products__link[_ngcontent-serverApp-c31] {
      float: left;
      font-size: 1.05rem;
      color: #ffff;
      text-decoration: none;
  }
  .navbar-products__active[_ngcontent-serverApp-c31] {
      background-color: #0033a0;
  }
  .navbar-products__active[_ngcontent-serverApp-c31] .navbar-products__link[_ngcontent-serverApp-c31] {
      color: #ffff;
  }
  .navbar-products__active[_ngcontent-serverApp-c31] .navbar-products__link[_ngcontent-serverApp-c31]:hover {
      color: #fff !important;
  }
  @media (min-width: 62em) {
      .navbar-dropdown[_ngcontent-serverApp-c31]:hover .navbar-dropdown__content[_ngcontent-serverApp-c31],
      .navbar-dropdown[_ngcontent-serverApp-c31]:focus .navbar-dropdown__content[_ngcontent-serverApp-c31] {
          display: block;
      }
  }
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31] {
      font-size: 1.05rem;
      border: none;
      outline: none;
      background-color: inherit;
      margin: 0;
  }
  .navbar-dropdown__dropbtn_active[_ngcontent-serverApp-c31] ~ .navbar-dropdown__content[_ngcontent-serverApp-c31] {
      display: block;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__dropbtn_active[_ngcontent-serverApp-c31] ~ .navbar-dropdown__content[_ngcontent-serverApp-c31] {
          display: none;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c31] {
      position: relative;
      display: block;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c31] {
          display: inline-block;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before,
  .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
      content: "";
      position: absolute;
      width: auto;
      height: 0;
      top: 0.25rem;
      bottom: 0;
      margin: auto;
      right: 0;
      transform: rotate(-90deg);
      transition: all 0.15s ease-in-out !important;
      border-right: 0.4em solid transparent;
      border-left: 0.4em solid transparent;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before,
      .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
          right: -1.563rem !important;
          transform: rotate(0);
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before {
      right: 0.125rem;
      border-top: 0.4em solid #ffff;
      z-index: 1;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before {
          border-top: 0.4em solid #d9e1f1;
          top: 0;
      }
  }
  .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
      border-top: 0.4em solid;
      border-top-color: #0033a0;
      transition: border-top-color 0.3s;
  }
  .navbar-dropdown__content[_ngcontent-serverApp-c31] {
      display: none;
      position: relative;
      background-color: #ffff;
      width: 100%;
      left: 0;
      z-index: 1;
  }
  @media (min-width: 62em) {
      .navbar-dropdown__content[_ngcontent-serverApp-c31] {
          position: absolute;
          background-color: #f9f9f9;
          box-shadow: 0 8px 16px #0003;
      }
  }
  .navbar-products__link[_ngcontent-serverApp-c31],
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31] {
      font-family: 'Barlow', sans-serif;
      color: #0033a0,#0033a0;
      cursor: pointer;
      transition: color 0.3s;
      text-align: left;
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c31],
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31] {
          text-align: center;
      }
  }
  .navbar-products__link[_ngcontent-serverApp-c31]:hover,
  .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31]:hover {
      text-decoration: none;
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c31]:hover,
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31]:hover {
          color: #00aec7 !important;
      }
  }
  @media (min-width: 62em) {
      .navbar-products__link[_ngcontent-serverApp-c31]:hover .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after,
      .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31]:hover .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
          border-top-color: #00aec7;
      }
  }
  @media (max-width: 62em) {
      .container[_ngcontent-serverApp-c31] {
          max-width: 100%;
      }
  }
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__content[_ngcontent-serverApp-c31] {
      display: block;
  }
  @media (min-width: 62em) {
      .show[_ngcontent-serverApp-c31] .navbar-dropdown__content[_ngcontent-serverApp-c31] {
          display: none;
      }
  }
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31] {
      color: #00aec7;
  }
  @media (min-width: 62em) {
      .show[_ngcontent-serverApp-c31] .navbar-dropdown__dropbtn[_ngcontent-serverApp-c31] {
          color: #0033a0;
      }
  }
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
      border-top-color: #00aec7;
  }
  @media (min-width: 62em) {
      .show[_ngcontent-serverApp-c31] .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
          border-top-color: #0033a0;
      }
  }
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before,
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:after {
      transform: rotate(0);
  }
  .show[_ngcontent-serverApp-c31] .navbar-dropdown__arrow[_ngcontent-serverApp-c31]:before {
      right: 0;
      top: 0;
  }
  .home__nav-button {
      position: absolute;
      display: none;
      right: -1.57rem;
      right: var(--btn-nav-scroll-rigth, -1.57rem);
      z-index: 10;
      padding: 0.5rem 0;
      padding: var(--button-secondary-padding, 0.5rem) 0;
  }
  @media (min-width: 768px) {
      .home__nav-button {
          display: block;
      }
  }
  .nav-fixed {
      color:#fff;
      font-family:var(--nav-link-fixed-font-family, var(--primary-font-family-bold));
      font-size: 1.2rem;
      font-size: var(--nav-link-fixed-font-size, 1.2rem);
      z-index: 99;
      background: #0033a0;
      background: #fff,#0033a0;
      color: #ffff;
      box-shadow: 0 0.19rem 0.375rem #0000004d;
  }
  .nav-fixed__desktop-box {
      position: sticky;
      display: none;
  }
  @media (min-width: 992px) {
      .nav-fixed__desktop-box {
          display: flex;
          align-items: center;
          justify-content: center;
      }
  }
  .nav-fixed__items-container {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;
  }
  .nav-fixed__item {
      padding: 1rem 0;
      position: relative;
      cursor: pointer;
  }
  .nav-fixed__item:hover {
      font-family: 'Barlow', sans-serif;
  }
  .nav-fixed__item:hover .nav-fixed__link {
      color: var(--nav-active-color);
  }
  .nav-fixed__item:hover:after {
      width: 100%;
  }
  .nav-fixed__item:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.25rem;
      background: #ffff;
      background: var(--nav-after-active-color, var(--nav-active-color, #ffff));
      transition: width 0.3s;
  }
  .nav-fixed__link {
      display: inline-block;
      padding: 0 2rem;
      color: #ffff;
      color: var(--nav-color, #ffff);
  }
  
    
  .nav-fixed__drop-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: inherit;
      padding: 0.5rem 1rem;
      width: 100%;
      color: #ffff;
      color: var(--nav-color, #ffff);
  }
  .nav-fixed__drop-menu:hover {
      color: inherit;
  }
  .nav-fixed__drop-menu:focus {
      outline: none;
      box-shadow: none;
  }
  .nav-fixed__drop-menu:after,
  .nav-fixed__drop-menu:before {
      content: "";
      position: absolute;
      right: 0.9375rem;
      border-right: 0.6rem solid transparent;
      border-left: 0.6rem solid transparent;
  }
  .nav-fixed__drop-menu:after {
      border-top: 0.6rem solid #ffff;
      border-top: 0.6rem solid var(--nav-color, #ffff);
  }
  .nav-fixed__drop-menu:before {
      border-top: 0.6rem solid #0033a0;
      border-top: 0.6rem solid var(--nav-bg-color, var(#0033a0));
      z-index: 1;
      transform: translateY(-0.125rem);
  }
  .nav-fixed__drop-list {
      width: 100%;
      padding: 0.5rem 1rem;
      margin-top: 0;
      border-radius: 0;
      background-color: #ffff;
      background-color: var(--nav-bg-color, #ffff);
  }
  .nav-fixed__drop-link {
      display: block;
      padding: 0.5rem 0;
      cursor: pointer;
      color: #201d18;
      color: var(--nav-color, #201d18);
  }
  .active-nav .nav-fixed__link {
      color: #ffff;
      color: var(--nav-active-color, #ffff);
      font-family: var(--nav-link-fixed-font-family-hover);
  }
  .active-nav:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.25rem;
      background: #ffff;
      background: var(--nav-after-active-color, #ffff);
      transition: width 0.3s;
  }
  .sel-fixed-element {
      position: fixed !important;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      line-height: normal;
      box-shadow: 0 0.25rem 0.31rem -0.25rem #000;
      font-size: 1.2rem;
      font-size: var(--nav-link-fixed-font-size, 1.2rem);
  }
  .sel-fixed-element .nav-fixed-soat__item {
      padding: 0.75rem 0.375rem !important;
  }
  .sel-fixed-element .nav-fixed-soat__item .nav-link {
      font-size: 1.2rem;
      font-size: var(--nav-link-font-size, 1.2rem);
  }
  .section-banner-secundario {
      display: flex;
      justify-content: center;
      padding: 6rem 1rem 0;
  }
  .section-banner-secundario__container {
      max-width: 69rem;
  }
  .section-banner-secundario__image {
      max-width: 100%;
  }
  .section-four-reason-to-buy {
      padding-top: 5rem;
      margin: 0 0 7rem;
  }
  @media (min-width: 768px) {
      .section-four-reason-to-buy {
          max-width: 71.25rem;
          margin: 0 auto;
      }
  }
  .justify-content-end {
    justify-content: flex-end!important;
  }
  .section-four-reason-to-buy__container {
      max-width: 92%;
      min-height: 30rem;
      margin: auto 0 auto auto;
      background: #f5f5f5;
      background: var(--bg-color-reasons, #f5f5f5);
      transform: translateY(7.82rem);
  }
  @media (min-width: 768px) {
      .section-four-reason-to-buy__container {
          transform: translateY(0);
      }
  }
  @media (min-width: 992px) {
          .section-four-reason-to-buy__container {
          max-width: 67.4rem;
      }
  }
  .section-four-reason-to-buy__image {
      position: absolute;
      left: 0;
      top: 3.25rem;
      max-width: 82%;
      z-index: 0;
  }
  @media (min-width: 768px) {
      .section-four-reason-to-buy__image {
          left: 0;
          max-width: 44%;
          z-index: 1;
      }
  }
  @media (min-width: 992px) {
      .section-four-reason-to-buy__image {
          max-width: 100%;
      }
  }
  a {
    text-decoration: none;
    background-color: transparent;
  }
  .section-four-reason-to-buy__list p {
      margin-bottom: 0;
      word-break: break-word;
  }
  .section-four-reason-to-buy__list a {
      color: #007bff;
      color: var(--keep-in-mind-item-link-color, #007bff);
      text-decoration: none;
      -webkit-text-decoration: var(--keep-in-mind-item-link-decoration, none);
      text-decoration: var(--keep-in-mind-item-link-decoration, none);
  }
  .section-four-reason-to-buy__list a em {
      font-style: italic;
      font-style: var(--keep-in-mind-item-link-style, italic);
  }
  
  .alignment-title {
    text-align: left;
    text-align: var(--align-titles, left);
}
  @media (min-width: 768px) {
      .beneficios__item:nth-child(odd) {
          padding-right: 1rem;
      }
  }
  .beneficios__item-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      box-shadow: 0 0.19rem 0.34rem #0003;
  }
  @media (min-width: 768px) {
      .beneficios__item-box {
          align-items: center;
      }
  }
  @media (min-width: 992px) {
      .beneficios__item-box {
          flex-direction: row;
      }
  }
  .beneficios__item-title {
      font-family: 'Barlow', sans-serif;
      color: #00aec7;
      color: var(--beneficios-item-title-color, var(#00aec7));
  }
  .beneficios__item-title h3 {
      font-size: 1.2rem;
      font-size: var(--beneficios-item-title-font-size, 1.2rem);
      font-weight: bold;
  }
  .beneficios__item-description {
      text-align: left;
      color: #727272;
      color: var(--description-sections-color, #727272);
      line-height: 1.4rem;
  }
  .beneficios__item-description p {
      margin: 0;
  }
  .beneficios__item-description strong {
      font-size: 1.1rem;
      font-size: var(--description-sections-strong-font-size, 1.1rem);
  }
  link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
  .beneficios__link {
    font-family: 'Barlow', sans-serif;
    align-self: center;
    margin-top: 1rem;
    text-decoration: none;
    background-color: transparent;
    color: #204887;
  }
  .beneficios__link:-webkit-any-link {
    color: #204887;
    cursor: pointer;
    text-decoration: underline;
  }
  .beneficios__link:hover {
      color: #204887;
  }
  .beneficios__link-icon {
      font-size: 1.5rem;
      margin-right: 0.5rem;
  }
  .tarifas {
      display: flex;
      flex-direction: column;
  }
  @media (min-width: 768px) {
      .tarifas {
          flex-direction: row;
      }
  }
  .tarifas__image {
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
  }
  @media (min-width: 768px) {
      .tarifas__image {
          width: 50%;
      }
  }
  .tarifas__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-basis: 50%;
      padding: 2rem 1.5rem;
      background-color: var(--tarifas-content-bg-color);
  }
  .tarifas__title {
      color: black;
  }
  .tarifas__description {
      font-size: 1rem;
      color: var(--tarifas-description-color);
  }
  .tarifas__buttons-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 1rem;
  }
  @media (min-width: 768px) {
      .tarifas__buttons-box {
          flex-direction: row;
      }
  }
  .how-to-claim {
    padding: 2.5%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --content-summary-color: #fff;
    font-family: var(--primary-font-family)!important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    --primary: #0033a0;
    --secondary: #00aec7;
    --tertiary: #e3e829;
    --quarter: #53565A;
    --error: red;
    --nav-bar: #d9e1f1;
    --color-text-nav-bar: #0033a0;
    --color-button-primary: var(--primary);
    --bg-color-button-primary: var(--tertiary);
    --hover-color-button-primary: #fff;
    --hover-bg-color-button-primary: var(--secondary);
    --color-button-secondary: var(--primary);
    --bg-color-button-secondary: var(--tertiary);
    --hover-color-button-secondary: #fff;
    --bg-hover-color-button-secondary: var(--secondary);
    --color-button-tertiary: #fff;
    --bg-color-button-tertiary: var(--secondary);
    --hover-color-button-tertiary: var(--primary);
    --bg-hover-color-button-tertiary: var(--tertiary);
    --color-input-valid: #00aec7;
    --primary-semibold-font-family: 'Barlow', sans-serif;
    --font-family-secondary: 'Barlow', sans-serif;
    --font-family-secondary-medium: 'Barlow', sans-serif;
    --background-header: #fff;
    --color-breadcrumb: #000;
    --color-breadcrumb-sucess: #63ba2f;
    --logo: url(./assets/images/tenants/sura/logo.svg);
    --footer-color: #fff;
    --bg-footer: var(--primary);
    --border-success-color: #00aec7;
    --label-success-color: #00aec7;
    --check-success-color: #00aec7;
    --breadcrumb-selected-color: #00AEC7;
    --breadcrumb-text-color: #00AEC7;
    --color-breadcrumb-success: #0033A0;
    --breadcrumb-check-color: #ffff;
    --color-breadcrumb-step-active: #fff;
    --sura-color-close-modal: var(--bg-color-button-secondary);
    --sura-background-color-modal-button: var(--bg-color-button-secondary);
    --sura-color-modal-button: var(--color-button-secondary);
    --menu-background-color: #d9e1f1;
    --menu-color: var(--primary);
    --font-family-modal-title-bold: BarlowBold;
    --font-button-white-color: #fff;
    --font-title-color: #53565a;
    --placa-bg-color: #ccd6ec;
    --vehiculo-detail-label-color: var(--quarter);
    --descuentos-total-color: var(--primary);
    --breadcrumb-font-family: Roboto;
    --icono-alert-color: #ff9a41;
    box-sizing: border-box;
    display: flex!important;
    align-items: center!important;
    margin-bottom: 1.5rem!important;
    padding-bottom: 1.5rem!important;
    border-bottom: 1px solid var(--border-bottom-color-how-to-claim, var(--primary));
  }
  .keep-in-mind__title {
      font-family: inherit;
      font-family: var('Barlow', sans-serif, inherit);
      color: var(#00aec7);
      color: var(--keep-in-mind-title-color, var(#00aec7));
  }
  .keep-in-mind__title h3 {
      font-family: inherit;
      font-family: var(--keep-in-mind-title-font-family, inherit);
      font-size: 1.2rem;
      font-size: var(--keep-in-mind-title-font-size, 1.2rem);
      font-weight: bold;
  }
  .keep-in-mind__line {
      position: absolute;
      bottom: 0;
      top: 0.625rem;
      left: 0.625rem;
      margin: auto;
  }
  .keep-in-mind__icon {
      position: absolute;
      left: -1.5625rem;
  }
  .keep-in-mind__list {
      list-style: none;
      position: relative;
  }
  .keep-in-mind__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
      position: relative;
      border-radius: 3.125rem;
  }
  @media (min-width: 768px) {
      .keep-in-mind__item {
          flex-direction: row;
          align-items: center;
          background-color: #eff0f1;
          background-color: var(--keep-in-mind-item-bg-color, #eff0f1);
      }
  }
  .section-address {
      color: #201d18;
      color: var(--address-color, #201d18);
      margin-bottom: 3rem;
  }
  .section-address__title h4 {
      color: var(--address-color);
      color: var(--address-title-color, var(--address-color));
      font-weight: bold;
      font-size: 1rem;
      font-size: var(--address-font-size, 1rem);
      margin-bottom: 0.5rem;
      margin-bottom: var(--address-title-marging-bottom, 0.5rem);
  }
  .section-address__city-name {
      color: var(#00aec7);
      color: var(--address-title-color, var(#00aec7));
      font-size: 1rem;
      font-size: var(--address-font-size, 1rem);
  }
  .section-address__description p {
      margin: 0;
      font-size: 1rem;
      font-size: var(--address-font-size, 1rem);
  }
  .button-fixed-responsive {
      position: fixed;
      bottom: 15px;
      z-index: 1040;
      right: 0;
      left: 0;
      margin: 0 auto;
      text-align: center;
  }
  .button-fixed-responsive .button-secondary {
      box-shadow: 0 16px 16px -14px #000000bf;
  }
  .button-secondary {
    background-color: var(--bg-color-button-secondary);
    font-size: 1.375rem;
    font-size: var(--button-secondary-font-size, 1.375rem);
    color: var(--color-button-secondary);
    font-weight: 600;
    font-weight: var(--button-secondary-font-weight, 600);
    border: 0;
    border-radius: 3.125rem;
    border-radius: var(--button-secondary-border-radius, 3.125rem);
    width: 100%;
    max-width: 12rem;
    max-width: var(--button-secondary-max-width, 12rem);
    padding: 0.75rem 2.8rem;
    padding: var(--button-secondary-padding, .75rem 2.8rem);
    text-transform: capitalize;
    text-transform: var(--button-secondary-text-transform, capitalize);
    border: var(--button-secondary-border);
  }
  .button-primary .button-secondary {
    font-family: var(--button-font-family);
    transition: all .15s ease-in-out;
  }
  [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
  }
  [type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
  }

  .banner[_ngcontent-serverApp-c69] {
      background-size: cover;
      background-repeat: no-repeat;
      padding: 2rem;
  }
  @media (min-width: 992px) {
      .banner[_ngcontent-serverApp-c69] {
          padding: 0 3rem;
      }
  }
  .banner__content[_ngcontent-serverApp-c69] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
  }
  @media (min-width: 992px) {
      .banner__content[_ngcontent-serverApp-c69] {
          flex-direction: row;
      }
  }
  .banner__image-box[_ngcontent-serverApp-c69] {
      padding: 0 1rem;
  }
  @media (min-width: 768px) {
      .banner__image-box[_ngcontent-serverApp-c69] {
          margin-bottom: 2rem;
      }
  }
  @media (min-width: 992px) {
      .banner__image-box[_ngcontent-serverApp-c69] {
          margin-bottom: 0;
      }
  }
  .banner__image[_ngcontent-serverApp-c69] {
      max-width: 100%;
  }
  .cursor-pointer[_ngcontent-serverApp-c69] {
      cursor: pointer;
  }
  .modal-body[_ngcontent-serverApp-c69] {
      color: #727272;
      font-size: 1rem;
  }
  .modal-body[_ngcontent-serverApp-c69] ul[_ngcontent-serverApp-c69] {
      padding-left: 0.9rem;
  }
  .cotizador-deshabilitado[_ngcontent-serverApp-c69] {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 21.25rem;
      padding: 3rem 2rem 2rem;
      background-color: var(--white);
      border-radius: 0.625rem;
      box-shadow: 0 0.5rem 2rem #00000026;
      text-align: center;
  }
  .cotizador-deshabilitado__descripcion[_ngcontent-serverApp-c69] {
      font-size: 1.25rem;
      font-weight: bold;
  }
  
  .cotizador[_ngcontent-serverApp-c68] {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 21.25rem;
      padding: 3rem 2rem 2rem;
      background-color: var(--white);
      border-radius: 0.625rem;
      box-shadow: 0 0.5rem 2rem #00000026;
  }
  .cotizador__title[_ngcontent-serverApp-c68] {
      color:#0033a0;
      color: #0033a0;
      font-family: 'Barlow', sans-serif;
      font-family:  'Barlow', sans-serif;
      text-align: center;
      font-size: 2rem;
      font-size:  2rem;
      font-weight: normal;
      font-weight: normal;
  }
  .cotizador__title_second-line[_ngcontent-serverApp-c68] {
      display: inline-block;
      display: var(--cotizador-title-second-line-display, inline-block);
      font-family: var(--cotizador-title-second-line-font-family);
      font-size: 2rem;
      font-weight: bold;
  }

  
  .form-material[_ngcontent-serverApp-c63] {
    margin-bottom: 1.7rem;
  }
  .form-material__input[_ngcontent-serverApp-c63] {
      width: 100%;
      background: #ffff;
      border: 0.0625rem solid  #ffffff;
      outline: none;
      color: #000;
      font-size: 1rem;
      border-radius: 0.25rem;
      font-family: var(--font-family-form-material, var('Barlow', sans-serif));
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
  }
  .form-material__input[_ngcontent-serverApp-c63]:focus ~ .form-material__label[_ngcontent-serverApp-c63],
  .form-material__input.ng-not-empty[_ngcontent-serverApp-c63] ~ .form-material__label[_ngcontent-serverApp-c63] {
      transform: translateY(-1.375rem);
      font-size: 0.8125rem;
  }
  .form-material__input.ng-valid.ng-not-empty[_ngcontent-serverApp-c63] {
      border-color: var(--#00aec7) !important;
      color: var(--form-material-text-color-valid, #000);
  }
  .form-material__input.ng-valid.ng-not-empty[_ngcontent-serverApp-c63] ~ .form-material__label[_ngcontent-serverApp-c63] {
      color: var(--form-material-valid-label-color, var(--#00aec7)) !important;
  }
  .form-material__input.ng-valid.ng-not-empty[_ngcontent-serverApp-c63] ~ .form-material__arrow[_ngcontent-serverApp-c63] {
      border-top-color: var(--#00aec7);
  }
  .form-material__input.ng-valid.ng-not-empty[_ngcontent-serverApp-c63] ~ .form-material__icon-state_success[_ngcontent-serverApp-c63] {
      opacity: 1;
  }
  .form-material__input.ng-valid.ng-not-empty[_ngcontent-serverApp-c63] ~ .form-material__icon-state_error[_ngcontent-serverApp-c63] {
      opacity: 0 !important;
  }
  .form-material__input[_ngcontent-serverApp-c63]::-ms-clear {
      display: none;
  }
  .form-material__input[_ngcontent-serverApp-c63]::-webkit-outer-spin-button,
  .form-material__input[_ngcontent-serverApp-c63]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  .form-material__arrow[_ngcontent-serverApp-c63] {
      position: absolute;
      right: 0.9375rem;
      pointer-events: none;
      border-left: 0.3125rem solid transparent;
      border-right: 0.3125rem solid transparent;
      border-top: 0.375rem solid #727272;
  }
  .form-material__label[_ngcontent-serverApp-c63] {
      font-family: var(--font-family-form-label, var('Barlow', sans-serif));
      transition: all 0.15s ease-in-out;
      font-size: 1rem;
      position: absolute;
      pointer-events: none;
      color: var(--form-material-label-color, #999999);
      background: #ffff;
  }
  .form-material__icon-state[_ngcontent-serverApp-c63] {
      position: absolute;
      right: 0.9375rem;
      font-size: 1.375rem;
      pointer-events: none;
      opacity: 0;
  }
  .form-material__icon-state_success[_ngcontent-serverApp-c63] {
      color:  #00aec7;
  }
  .form-material__icon-state_error[_ngcontent-serverApp-c63] {
      color: #ff585d;
  }
  .was-validate[_ngcontent-serverApp-c63] .form-material__input[_ngcontent-serverApp-c63] {
      border-color: #e4002b;
  }
  .was-validate[_ngcontent-serverApp-c63] .form-material__label[_ngcontent-serverApp-c63] {
      color: #ff585d;
  }
  .was-validate[_ngcontent-serverApp-c63] .form-material__icon-state_error[_ngcontent-serverApp-c63] {
      opacity: 1;
  }
  .was-validate[_ngcontent-serverApp-c63] .form-material__arrow[_ngcontent-serverApp-c63] {
      border-top-color: #ff585d;
  }
  .was-validate[_ngcontent-serverApp-c63] .invalid-message[_ngcontent-serverApp-c63] {
      display: block;
      text-align: left;
  }
  .invalid-message[_ngcontent-serverApp-c63] {
      font-weight: 100 !important;
      position: absolute;
      width: 100%;
      margin-top: 0.25rem;
      min-height: 1.2rem;
      color: #ff585d;
      bottom: -1.1rem;
      font-size: 0.8rem;
      display: none;
  }
  .async-hide {
    opacity: 0 !important;
  }
  .home__nav-button{
    position:absolute;
    display:none;
    right:-1.57rem;
    right:var(--btn-nav-scroll-rigth, -1.57rem);
    z-index:10;
    padding:.5rem 0;
    padding:var(--button-secondary-padding, .5rem) 0}
    @media (min-width: 768px){
      .home__nav-button{
        display:block
      }
    }
    .nav-fixed{
      font-family:var(--primary-font-family-bold);
      font-family:var(--nav-link-fixed-font-family, var(--primary-font-family-bold));
      font-size:1.2rem;
      font-size:var(--nav-link-fixed-font-size, 1.2rem);
      z-index:99;
      background:var(--primary);
      background:var(--nav-bg-color, var(--primary));
      color:#fff;color:var(--nav-color, #fff);
      box-shadow:0 .19rem .375rem #0000004d
    }
    .nav-fixed__desktop-box{
      display:none
    }
    @media (min-width: 992px){
      .nav-fixed__desktop-box{
        display:flex;align-items:center;justify-content:center
      }
    }
        .nav-fixed__drop-link:focus,.nav-fixed__drop-link:hover{
          color:#201d18;
          color:var(--nav-color, #201d18);
          text-decoration:none
        }
        .section-banner-secundario__image{max-width:100%}
        
       
        @media (min-width: 768px){.tarifas{flex-direction:row}}
        .tarifas__image{width:100%;-o-object-fit:cover;object-fit:cover}
        @media (min-width: 768px){.tarifas__image{width:50%}}
        .tarifas__content{display:flex;flex-direction:column;justify-content:center;flex-basis:50%;padding:2rem 1.5rem;background-color:var(--tarifas-content-bg-color)}
        .tarifas__buttons-box{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-top:1rem}@media (min-width: 768px){.tarifas__buttons-box{flex-direction:row}}
        .button-fixed-responsive{position:fixed;bottom:15px;z-index:1040;right:0;left:0;margin:0 auto;text-align:center}.button-fixed-responsive 
        .alignment-title{text-align:left;text-align:var(--align-titles, left)}

  body {
    --quarter: blue;
    --footer-color: white;
    --background-header: white;
    --primary-semibold-font-family: 'FSJoeySemiBold';
    --color-text-nav-bar: #0033a0;
    --nav-bar: #cadbef;
    --primary: #0033a0;
    --color-breadcrumb-success: #0033a0;
    --color-breadcrumb: #d0d0d0;
    --secondary: #00aec7;
    --content-summary-color: #fff;
  }
    
</style>
<style>
.swal-overlay {
    background-color: rgba(255, 255, 255, 0.693);
  }
  .swal-modal {
    background-color: rgba(255, 255, 255, 0);
    /* border: 3px solid white; */
  }
  </style>
