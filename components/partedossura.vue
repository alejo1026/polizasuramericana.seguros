<script lang="ts" setup>
    import swal from 'sweetalert'
    import { useTienda } from "~/store/tienda";
    const storeTienda:any = useTienda()

    const fechaInicio = ref()
    const checkFi = ref(false)
    const closeFi = ref(false)
    const textFi = ref()
    const styleTextFi = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoFi = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const tipoId = ref()
    const checktipoId = ref(false)
    const closetipoId = ref(false)
    const texttipoId = ref()
    const styleTexttipoId = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordotipoId = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const numeroIdent = ref()
    const checkNi = ref(false)
    const closeNi = ref(false)
    const textNi = ref()
    const styleTextNi = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoNi = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const fechaExpDoc = ref()
    const checkFe = ref(false)
    const closeFe = ref(false)
    const textFe = ref()
    const styleTextFe = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoFe = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const nombres = ref()
    const checkNom = ref(false)
    const closeNom = ref(false)
    const textNom = ref()
    const styleTextNom = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoNom = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const apellidos = ref()
    const checkAp = ref(false)
    const closeAp = ref(false)
    const textAp = ref()
    const styleTextAp = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoAp = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })
    
    const paisNac = ref()
    const checkPn = ref(false)
    const closePn = ref(false)
    const textPn = ref()
    const styleTextPn = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoPn = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const ciudadCirculacion = ref()
    const checkCirc = ref(false)
    const closeCirc = ref(false)
    const textCirc = ref()
    const styleTextCirc = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoCirc = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const direccionResidencia = ref()
    const checkDirR = ref(false)
    const closeDirR = ref(false)
    const textDirR = ref()
    const styleTextDirR = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoDirR = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const celular = ref()
    const checkCel = ref(false)
    const closeCel = ref(false)
    const textCel = ref()
    const styleTextCel = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoCel = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })

    const correo = ref()
    const tooltip = ref(false)
    const tooltipdos = ref(false)
    const checkCorreo = ref(false)
    const closeCorreo = ref(false)
    const textCorreo = ref()
    const styleTextCorreo = reactive({
        color: '0.0625rem solid #00aec7'
    })
    const bordoCorreo = reactive({
        border: '0.0625rem solid #d2d2d2',
        borderRadius:'5px',
    })
    
    // watch(correo,(val) => {
    //     console.log(val.length)
    //     console.log(isNaN(val[val.length-1]))
    //     if(val.length==6){
    //     textCorreo.value = 'La placa digitada es inválida'
    //     bordoCorreo.border = '0.0625rem solid #dc3545'
    //     styleTextCorreo.color = '#dc3545'
    //     if( isNaN(val[0]) && isNaN(val[1]) && isNaN(val[2]) && !isNaN(val[3]) && !isNaN(val[4])){
    //         textCorreo.value = ''
    //         bordoCorreo.border = '0.0625rem solid #00aec7'
    //         checkCorreo.value = true
    //         closeCorreo.value = false
    //         styleTextCorreo.color = '#00aec7'
    //     }
    //     }else{      
    //     closeCorreo.value = true
    //     checkCorreo.value = false
    //     bordoCorreo.border = '0.0625rem solid #dc3545'
    //     styleTextCorreo.color = 'red'
    //     textCorreo.value = 'La placa digitada es inválida'
    //     if(val.length == 5){
    //         textCorreo.value = 'No cumple con el mínimo de caracteres'
    //     }
    //     }
    //     if(val.length==0){
    //     textCorreo.value = ''
    //     closeCorreo.value = false
    //     styleTextCorreo.color = '#d2d2d2'
    //     bordoCorreo.border = '0.0625rem solid #d2d2d2'
    //     }
    // })
    const cambiarTooltip = () => {
        console.log(' se pide al pasar el maus')
        tooltip.value=true
    }
    const terminos = ref()
    const data = ref()
    const dataLlena = ref(false)
    onMounted(async()=>{
        data.value = await  storeTienda.infoParteDos.info.split('\n')
        dataLlena.value = true
    })
    const navegarAMercadoPago = async () => {
        //validamos que todos los campos esten llenos y que el check este aprovado
        // if(
        //     !fechaInicio.value ||
        //     !tipoId.value ||
        //     !numeroIdent.value ||
        //     !fechaExpDoc.value ||
        //     !nombres.value ||
        //     !apellidos.value ||
        //     !paisNac.value ||
        //     !ciudadCirculacion.value ||
        //     !direccionResidencia.value ||
        //     !celular.value ||
        //     !correo.value 
        // ){
        //     return swal({
        //         icon: 'error',
        //         title: 'Todos los campos',
        //         text: 'Son obligatorios',
        //         buttons:{cancel:false, confirm:false},  
        //         timer:1500
        //     })
        // }
        // if(
        //     !terminos.value
        // ){
        //     return swal({
        //         icon: 'error',
        //         title: 'Se deben aceptar',
        //         text: 'Los terminos y condiciones',
        //         buttons:{cancel:false, confirm:false},  
        //         timer:1500
        //     })
        // }
        await navigateTo('https://mpago.li/127nuVd', {  
            open: {
                target: '_blank',
            }
        })
    }
</script>
<template>
    <Navbar class=""/>
    <div class="bg-navbar-products"></div>
    <div class=" pt-3" v-if="dataLlena">        
    <!-- <div class=" pt-3" >         -->
        <div class="row ps-5 pe-5">
            <div class="col-8">
                <div class="pt-1">
                    <div class="d-flex justify-content-center justify-content-md-between text-white w-100 mb-3 vehiculo-summary">
                        <div class="col-auto vehiculo-summary__item pl-4 mr-4 my-auto vehiculo-summary__item_active">
                            <h4 class="vehiculo-summary__title"> PLACA 
                                <Icon name="ri:information-2-line" type="button" class="text-white mb-1" @mouseleave="tooltipdos=false" @mouseover="tooltipdos=true"/>
                                <div class="info">                                    
                                    <span class="tooltip__textdos" v-if="tooltipdos">Verifica que tu placa esté correcta</span>
                                </div>
                            </h4>
                            <span class="vehiculo-summary__value">{{data[0]}}</span>
                        </div>
                        <div class="col-auto vehiculo-summary__item d-none d-md-block my-auto">
                            <h4 class="vehiculo-summary__title ng-star-inserted" style="">MARCA</h4>
                            <span class="vehiculo-summary__value ng-star-inserted" style="">{{ data[2] }}</span>
                        </div>
                        <div class="col-auto vehiculo-summary__item d-none d-md-block my-auto">
                            <h4 class="vehiculo-summary__title ng-star-inserted" style="">LÍNEA</h4>
                            <span class="vehiculo-summary__value ng-star-inserted" style="">{{ data[4] }}</span>
                        </div>
                        <div class="col-auto vehiculo-summary__item d-none d-md-block my-auto mr-5">
                            <h4 class="vehiculo-summary__title ng-star-inserted" style=""> MODELO </h4>
                            <span class="vehiculo-summary__value ng-star-inserted" style="">{{ data[6] }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="">
                            <form class="vehiculo-form ng-untouched ng-pristine ng-valid" @submit.prevent>
                                <h3 class="vehiculo-form__title mb-4 pb-3">Datos del vehículo</h3>
                                <div id="app-vehiculo-detail">
                                    <div class="py-3 px-4 mb-4 vehicle-information">
                                        <label class="px-2 font-weight-bold vehicle-information__label">Información del vehículo</label>
                                        <ul class="list-group vehicle-information__list-group">
                                            <li class="d-block d-md-none ng-star-inserted" style="">
                                                <strong>Marca: </strong>
                                                <span id="vehiculo-detail-marca">{{ data[2] }}</span>
                                            </li>
                                            <li class="d-block d-md-none ng-star-inserted" style="">
                                                <strong>Linea: </strong>
                                                <span id="vehiculo-detail-linea">{{ data[4] }}</span>
                                            </li>
                                            <li class="d-block d-md-none ng-star-inserted" style="">
                                                <strong>Modelo: </strong>
                                                <span id="vehiculo-detail-model">{{ data[6] }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Tipo servicio: </strong>
                                                <span id="vehiculo-detail-servicio">{{ data[9].split(':')[1] }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Clase: </strong>
                                                <span id="vehiculo-detail-clase">{{ data[10].split(':')[1]  }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Cilindraje: </strong>
                                                <span id="vehiculo-detail-cilindraje">{{ data[11].split(':')[1]  }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Número motor: </strong>
                                                <span id="vehiculo-detail-motor">{{ data[12].split(':')[1]  }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Pasajeros: </strong>
                                                <span id="vehiculo-detail-pasajeros">{{ data[13].split(':')[1]  }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>Tipo combustible: </strong>
                                                <span id="vehiculo-detail-combustible">{{ data[14].split(':')[1]  }}</span>
                                            </li>
                                            <li class="ng-star-inserted" style="">
                                                <strong>VIN: </strong>
                                                <span id="vehiculo-detail-vin">{{ data[15].split(':')[1]  }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-6">                        
                        <div class="tomador-form">
                            <h3 class="tomador-form__title d-flex justify-content-between mb-4 pb-3"> Datos del tomador                                 
                                <div class="info">                                    
                                    <Icon name="ri:information-2-line" type="button" class="text-primary" @mouseleave="tooltip=false" @mouseover="tooltip=true"/>
                                    <span class="tooltip__text" v-if="tooltip">Por favor verifica fecha de inicio de vigencia y toda tu información personal. ¡Ten presente que después de expedido tu SOAT, no podrás hacer ningún cambio!</span>
                                </div>
                            </h3>
                            <div id="tomador-fecha-vigencia" label="Fecha inicio de vigencia del SOAT" >
                                <div  class="mb-3 position-relative">
                                    <div  class="d-flex align-items-center form-material position-relative" :style="bordoFi">
                                        <input  type="date" class="py-2 px-3 form-control form-material__input ng-not-empty input-not-empty ng-untouched ng-pristine ng-valid" id="tomador-fecha-vigencia" placeholder="DD-MM-AAAA" v-model="fechaInicio">
                                        <label  class="mx-2 px-2 mb-0 form-material__label">Fecha inicio de vigencia del SOAT</label>
                                        <i  class="fal fa-calendar-alt position-absolute icon-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-tipo-identificacion" label="Tipo de identificación">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordotipoId">
                                        <select class="py-2 px-3 w-100 form-material__input ng-untouched ng-pristine ng-invalid" id="tomador-tipo-identificacion" v-moder="tipoId">
                                            <option value="">Tipo de identificación</option>
                                            <option value="CC" class="ng-star-inserted"> Cédula de ciudadanía </option>
                                            <option value="CE" class="ng-star-inserted"> Cédula de extranjería </option>
                                            <option value="NIT" class="ng-star-inserted"> NIT </option>
                                        </select>
                                        <label class="mx-2 px-2 mb-0 form-material__label">Tipo de identificación</label>
                                        <i class="form-material__arrow"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-numero-identificacion" label="Número de identificación" texttransform="uppercase">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoNi">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input" type="number" id="tomador-numero-identificacion" maxlength="10" style="text-transform: uppercase;" v-model="numeroIdent">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted" style="">Número de identificación</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div label="Fecha de expedición del documento" id="tomador-fecha-expedicion-documento" class="ng-star-inserted" style="">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoFe">
                                        <input type="date" class="py-2 px-3 form-control form-material__input ng-not-empty input-not-empty ng-untouched ng-pristine ng-valid" id="tomador-fecha-expedicion-documento" placeholder="DD-MM-AAAA" v-model="fechaExpDoc">
                                        <label class="mx-2 px-2 mb-0 form-material__label">Fecha de expedición del documento</label>
                                        <i class="fal fa-calendar-alt position-absolute icon-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-nombres" label="Nombres" maxlength="40" minlength="3" texttransform="capitalize" class="ng-star-inserted" style="">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoNom">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" v-model="nombres" type="text" id="tomador-nombres" minlength="3" maxlength="40" style="text-transform: capitalize;">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted">Nombres</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-apellidos" label="Apellidos" maxlength="40" minlength="3" texttransform="capitalize" class="ng-star-inserted" style="">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoAp">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" v-model="apellidos" type="text" id="tomador-apellidos" minlength="3" maxlength="40" style="text-transform: capitalize;">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted">Apellidos</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-pais-de-nacimiento" keytoshow="nombre">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoPn">
                                        <input autocapitalize="off" autocorrect="off" role="combobox" aria-multiline="false" v-model="paisNac" type="text" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" id="tomador-pais-de-nacimiento" autocomplete="off" aria-autocomplete="list" aria-expanded="false">
                                        <label class="mx-2 px-2 mb-0 form-material__label">País de nacimiento</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-ciudad" label="Ciudad de circulación" keytoshow="descripcion">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :class="bordoCirc">
                                        <input autocapitalize="off" autocorrect="off" role="combobox" aria-multiline="false" type="text" v-model="ciudadCirculacion" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" id="tomador-ciudad" autocomplete="off" aria-autocomplete="list" aria-expanded="false">
                                        <label class="mx-2 px-2 mb-0 form-material__label">Ciudad de circulación</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-direccion" label="Dirección de residencia">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoDirR">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" type="text" id="tomador-direccion" v-model="direccionResidencia">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted" style="">Dirección de residencia</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="tomador-celular" label="Celular" inputtype="number" numbermaxlength="10">
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoCel">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input ng-untouched ng-pristine ng-invalid" v-model="celular" type="number" id="tomador-celular">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted" style="">Celular</label>
                                        <i class="fal fa-check form-material__icon-state form-material__icon-state_success" aria-hidden="true"></i>
                                        <i class="fal fa-times form-material__icon-state form-material__icon-state_error" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="correo" label="Ingresa tu placa" class="w-100" >
                                <div class="mb-3 position-relative">
                                    <div class="d-flex align-items-center form-material position-relative" :style="bordoCorreo">
                                        <input autocomplete="off" class="py-2 px-3 form-material__input"  type="email" id="correo" v-model="correo">
                                        <label class="mx-2 px-2 mb-0 form-material__label ng-star-inserted" :style="styleTextCorreo" >Correro electronico</label>
                                        <Icon name="material-symbols:fitbit-check-small" class="check" size="2.5rem" v-if="checkCorreo"/>
                                        <Icon name="material-symbols:close-small" size="2.5rem" class="close" v-if="closeCorreo"/>
                                    </div>
                                    <div class="text-center text-danger" > {{ textCorreo }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="tarifa">
                    <div  class="tarifa__descuentos d-none d-md-block p-3">
                        <div>
                            <div class="descuentos">
                                <div class="descuentos__total-price d-flex justify-content-between">
                                    <p class="font-weight-bold mb-0 p">VALOR A PAGAR</p>
                                    <p class="font-weight-bold mb-0 ng-star-inserted p" style="">{{ data[data.length-1] }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tarifa__vehiculo-electrico-detail d-none d-md-block">
                        <!-- <app-vehiculo-electrico-detail  _nghost-serverapp-c86="">

                        </app-vehiculo-electrico-detail> -->
                    </div>
                    <div  class="tarifa__terminos-condiciones custom-control custom-checkbox mb-md-0">
                        <input  type="checkbox"  style="margin-left: 0;" class="position-absolute top-0 start-0 mt-2" v-model="terminos">
                        <p  class="tarifa__terminos-condiciones-link" style="margin-top: 0;">
                            <p style="margin-top: 0; color: #727272; font-size: 1rem; text-decoration: underline !important; cursor: pointer;">
                                Autorizo a&nbsp;SURAMERICANA S. A., en calidad de responsable, el tratamiento de mis datos personales, 
                                incluso los biométricos y de salud que son sensibles, con la finalidad de vincularme como cliente. 
                                Asimismo, el envío de información, ofertas comerciales y publicitarias, la transferencia o transmisión 
                                a terceros en Colombia o exterior y las demás finalidades de la política de privacidad disponible en . 
                                Sé que en ella se encuentran el listado de terceros con quienes se comparte información y mis derechos a 
                                conocer, actualizar, rectificar, revocar o suprimir mis datos y a solicitar prueba de la autorización. 
                                También tengo conocimiento acerca de que, por los canales de contacto establecidos en el sitio web antes 
                                mencionado o por el correo electrónico , puedo ejercer mis derechos.
                            </p>
                        </p>
                    </div>
                    <div  class="d-flex justify-content-center mb-5 mt-3">
                        <button  id="id-boton-comprar" type="submit" class="button-secondary d-none d-md-block mb-5" @click="navegarAMercadoPago()" > Comprar </button>
                    </div>
                    <div>
                        <div  class="justify-content-center align-items-center d-md-none fixed-price ">
                            <div  class="fixed-price__body d-flex flex-column justify-content-center align-items-center h-100 w-100" style="">
                                <button  type="submit" id="id-boton-comprar-fixed" class="fixed-price__button d-block d-md-none" @click="navegarAMercadoPago()" ><b >Comprar por</b> {{ data[data.length-1] }} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @media (min-width: 62em){
        .bg-navbar-products {
            background-color: var(--menu-background-color, #d9e1f1);
            min-height: 2.563rem;
            opacity: 1;
            position: relative;
            height: auto;
            transform: translateY(0);
        }
    }
    .fa-info-circle:before {
        content: "\f05a";
    }
    .far .fas {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
    }
    .tomador-form__icon {
        font-size: 1.5rem;
    }
    .tooltip__textdos {
        content: "";
        width: 10rem;
        background-color: #eff0f1;
        color: #201d18;
        text-align: center;
        border-radius: 0.375rem;
        padding: 0.5rem;
        position: absolute;
        bottom: auto;
        left: auto;
        top: 1%;
        right: auto;
        margin-left: -5.3rem;
        line-height: 1rem;
        z-index: 2000;
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }
    .tooltip__textdos:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 87%;
        margin-left: -0.3125rem;
        border-width: 0.3125rem;
        border-style: solid;
        border-color: #eff0f1 transparent transparent transparent;
    }
    .tooltip__text {
        content: "";
        width: 15rem;
        background-color: #eff0f1;
        color: #201d18;
        text-align: center;
        border-radius: 0.375rem;
        padding: 0.5rem;
        position: absolute;
        bottom: auto;
        left: auto;
        top: 5%;
        margin-left: -13rem;
        line-height: 1rem;
        z-index: 2000;
        font-size: .875rem;
        font-style: normal;
        font-weight: 400;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }
    .tooltip__text:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 87%;
        margin-left: -0.3125rem;
        border-width: 0.3125rem;
        border-style: solid;
        border-color: #eff0f1 transparent transparent transparent;
    }
    
    .tooltip {
        position: absolute;
        z-index: 1070;
        display: block;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        font-style: normal;
        line-height: 1.5;
        text-align: left;
        text-align: start;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-break: normal;
        white-space: normal;
        word-spacing: normal;
        line-break: auto;
        font-size: .875rem;
        word-wrap: break-word;
        opacity: 0;
    }
    .tomador-form__title {
        font-family: 'Barlow' sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        border-bottom: 0.125rem solid #eff0f1;
        color:  rgb(0 51 160);
    }
    .vehicle-information__list-group {
        color: #727272;
        list-style: none;
        font-size: .875rem;
    }
    strong {
        font-weight: bolder;
    }
    .vehiculo-form__title {
        font-family: 'Barlow' sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        border-bottom: 0.125rem solid #eff0f1;
        color:  rgb(0 51 160);
    }
    .vehicle-information__label {
        font-family: sans-serif;
        font-weight: bolder;
        /* font-family: var(--vehiculo-information-label-font-family, var(--primary-font-family-bold)); */
        position: absolute;
        left: 8px;
        top: -13px;
        color: #53565a;
        font-size: 14px;
        background: #fff;
    }
    .vehicle-information {
        border: 1px solid #bebebe;
        border-radius: 4px;
        position: relative;
    }
    .col-md .col-lg-8 .col-12 {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
    h3 {
        font-size: 1.75rem;
    }
    h4 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    .h4 h4 {
        font-size: 1.5rem;
    }
    .vehiculo-summary__title {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        font-family: sans-serif;
    }
    .col-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
        
    }
    .vehiculo-summary {
        background-color: #fff;
        font-family: 'Barlow' sans-serif;
    }
    .vehiculo-summary__item_active {
        color: inherit;
        background-color: rgb(0 174 199) !important;
        border-left: 1.8rem solid rgb(0 174 199) !important;
    }
    .vehiculo-summary__item {
        color: inherit;
        background-color: rgb(0 51 160);
        padding: 0.5rem 1.875rem;
    }
    .mb-auto .my-auto {
        margin-bottom: auto!important;
    }

    .mt-auto .my-auto {
        margin-top: auto!important;
    }
    .pl-4 .px-4 {
        padding-left: 1.5rem!important;
    }
    .mr-4 .mx-4 {
        margin-right: 1.5rem!important;
    }

    .text-white {
        color: #fff!important;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .descuentos__total-price {
        font-family: 'Barlow' sans-serif;
        font-family: 'Barlow' sans-serif;
        font-size: 1.2em;
    }
    .justify-content-between {
        justify-content: space-between!important;
    }
    .mx-auto {
        margin-left: auto!important;
        margin-right: auto!important;
    }
    .min-height-vh {
        min-height: calc(100vh - 195px);
    }
    .vehiculo-summary__value {
        font-size: 16px;
        font-size: var(--vehiculo-summary-subtitle-font-size, 16px);
        font-family: sans-serif;
        line-height: 1.2rem;
        font-weight: 700;
    }
    /* .vehiculo-summary__item_active:after {
        content: "";
        position: absolute;
        border-top: 0.5rem solid #fff;
        border-left: 0.375rem solid transparent;
        border-right: 0.375rem solid transparent;
        width: 0;
        bottom: auto;
        top: 7.4%;
        left: 19.7%;
        right: auto;
        margin: auto;
    } */
    @media (max-width: 992px){
        .col-4 {
            align-items: center;
            width: 100%;
            padding-left:5%;
            padding-right:5%
        }
        .col-6 {
            align-items: center;
            width: 100%;
            padding-left:5%;
            padding-right:5%
        }
        .col-8 {
            width: 100%;
            align-items: center
        }
    }
    @media (min-width: 992px){
        
        .container .container-lg .container-md .container-sm {
            max-width: 960px;
        }
        .col-lg-8 {
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-lg-4 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
    @media (min-width: 768px){
        
        .vehiculo-summary__item_active:after {
            border-left: 1.8rem solid #00aec7;
            border-left: 1.8rem solid var(--vehiculo-summary-active-bg-color, #00aec7);
            border-top: 2rem solid transparent;
            border-bottom: 1.8rem solid transparent;
        }
        .justify-content-md-between {
            justify-content: space-between!important;
        }
        .vehiculo-summary {
            background-color:  #0033a0;
            background-color: var(--vehiculo-summary-bg-color,  #0033a0);
        }
        .col-md {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
        }
        .container .container-md .container-sm {
            max-width: 720px;
        }
        .mb-md-5 .my-md-5 {
            margin-bottom: 3rem!important;
        }
    }
    @media (min-width: 576px){
        .col-sm-10 {
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
        .container .container-sm {
        max-width: 540px;
    }
    }
    .p {
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
        color: var(--descuentos-total-color, var(--secondary));
        line-height: 2em;
        font-family: sans-serif;
        font-size: 16.896px;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 0!important;
        font-weight: 700!important;
    }
    .tarifa__terminos-condiciones {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }
    .custom-control {
        position: relative;
        z-index: 1;
        min-height: 1.5rem;
        padding-left: 1.5rem;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        print-color-adjust: exact;
    }
    .tarifa__descuentos {
        background-color: #eff0f1;
        background-color: var(--descuentos-box-bg-color, #eff0f1);
        border-radius: 0.44rem;
        font-size: .8rem;
        box-shadow: none;
        box-shadow: var(--descuentos-box-box-shadow, none);
    }
    b strong {
        font-weight: bolder;
    }
    .pt-3 .py-3 {
        padding-top: 1rem!important;
    }
    .fixed-price__button {
        background-color: #00aec7;
        background-color: var(--purchase-detail-bg-color, #00aec7);
        font-size: 1.3rem;
        /* font-family: 'Barlow' sans-serif; */
        color: #fff;
        font-weight: 400;
        border: 0;
        border-radius: 3.125rem;
        width: 100%;
        max-width: 18rem;
        padding: 0.2rem 1rem;
        text-transform: none;
        text-transform: initial;
        border: 0.0625rem solid transparent;
    }
    @media (min-width: 768px){
        .mb-md-0, .my-md-0 {
            margin-bottom: 0!important;
        }
        .d-md-none {
            display: none!important;
        }
        
        .tarifa {
            position: sticky;
            top: 1.25rem;
        }
        .mb-md-5 .my-md-5 {
            margin-bottom: 3rem!important;
        }
    }
    input[type=checkbox], input[type=radio] {
        box-sizing: border-box;
        padding: 0;
    }
    input {
        overflow: visible;
    }
    .custom-control-label {
        position: relative;
        margin-bottom: 0;
        vertical-align: top;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    .custom-checkbox .custom-control-label:before {
        border-radius: 0.25rem;
    }

    .custom-control-label:before .custom-file-label, .custom-select {
        transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .custom-control-label:after .custom-control-label:before {
        position: absolute;
        top: 0.25rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
    }
    .custom-control-label:after {
        background: 50%/50% 50% no-repeat;
    }
    .tarifa__terminos-condiciones-link {
        color: #727272;
        font-size: 1rem;
        text-decoration: underline !important;
        cursor: pointer;
    }
    .mb-0 {
        margin-bottom: 0!important;
    }
    p {
        margin-top: 0 !important;
        font-family: sans-serif;
    }

    .custom-control-label:after, .custom-control-label:before {
        position: absolute;
        top: 0.25rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
    }
    .custom-control-label:before {
        pointer-events: none;
        background-color: #fff;
        border: 1px solid #adb5bd;
    }
    .custom-control-input {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 1rem;
        height: 1.25rem;
        opacity: 0;
    }
    .fixed-price {
        height: 5.3rem;
        position: fixed;
        bottom: 0;
        background: #53565A;
        width: 100%;
        z-index: 1010;
        left: 0;
        right: 0;
        transition: height linear .3s;
    }
    .fixed-price__body {
        background-color: #0033a0;
        background-color: var(--purchase-detail-bg-color, rgb(0 174 199));
        color: #fff;
    }
    .align-items-center {
        align-items: center!important;
    }

    .flex-column {
        flex-direction: column!important;
    }
    

    .w-100 {
        width: 100%!important;
    }
/* .uno { */

/* } */
    #id-boton-comprar {
        -webkit-appearance: button;
    }
    #id-boton-comprar:hover {
        -webkit-appearance: button;
        background-color: #00aec7;
        color: #fff;
    }
    .button-secondary {
        font-family: 'Barlow' sans-serif;
        transition: all .15s ease-in-out;
        background-color:  #e3e829;
        font-size: 1.375rem;
        color: #0033a0;
        font-weight: 600;
        border: 0;
        border-radius: 3.125rem;
        width: 100%;
        max-width: 12rem;
        padding: 0.75rem 2.8rem;
        text-transform: capitalize;
        border: var(--button-secondary-border);
    }
    
    .align-items-center {
        align-items: center!important;
    }
    .position-relative {
        position: relative!important;
    }
    .form__title {
        font-family: sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        border-bottom: 0.125rem solid #eff0f1;
        color: #0033a0 !important;
    }
    .form-material {
        margin-bottom: 1.7rem;
    }
    .form-material__input {
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
    .form-material__input:focus ~ .form-material__label,
    .form-material__input.ng-not-empty ~ .form-material__label {
        transform: translateY(-1.375rem);
        font-size: 0.8125rem;
    }
    .form-material__input.ng-valid.ng-not-empty {
        border-color: var(--#00aec7) !important;
        color: var(--form-material-text-color-valid, #000);
    }
    .form-material__input.ng-valid.ng-not-empty ~ .form-material__label {
        color: var(--form-material-valid-label-color, var(--#00aec7)) !important;
    }
    .form-material__input.ng-valid.ng-not-empty ~ .form-material__arrow {
        border-top-color: var(--#00aec7);
    }
    .form-material__input.ng-valid.ng-not-empty ~ .form-material__icon-state_success {
        opacity: 1;
    }
    .form-material__input.ng-valid.ng-not-empty ~ .form-material__icon-state_error {
        opacity: 0 !important;
    }
    .form-material__input::-ms-clear {
        display: none;
    }
    .form-material__input::-webkit-outer-spin-button,
    .form-material__input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .form-material__arrow {
        position: absolute;
        right: 0.9375rem;
        pointer-events: none;
        border-left: 0.3125rem solid transparent;
        border-right: 0.3125rem solid transparent;
        border-top: 0.375rem solid #727272;
    }
    .form-material__label {
        font-family: var(--font-family-form-label, var('Barlow', sans-serif));
        transition: all 0.15s ease-in-out;
        font-size: 1rem;
        position: absolute;
        pointer-events: none;
        color: var(--form-material-label-color, #999999);
        background: #ffff;
    }
    .form-material__icon-state {
        position: absolute;
        right: 0.9375rem;
        font-size: 1.375rem;
        pointer-events: none;
        opacity: 0;
    }
    .form-material__icon-state_success {
        color:  #00aec7;
    }
    .form-material__icon-state_error {
        color: #ff585d;
    }
</style>