<script setup lang="ts">
    import { useTienda } from "~/store/tienda";
    const storeTienda:any = useTienda()
</script>
<template>
    <div class="idBody">
        <header class="header">
                <div class="container">
                    <nav class="navbar  flex-column">
                        <a class="" href="https://www.suraenlinea.com">
                            <div class="navbar-component__logo" ></div>
                        </a>  
                        <div class="breadcrumbs pe-5" v-if="!storeTienda.parteDos">
                            <ul class="nav steps">
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex steps__item_active pe-3">
                                        <span class="steps__step mr-md-1">1</span>
                                        <button type="button" class="steps__btn d-md-inline-block">Cotización</button>
                                    </div>
                                </li>
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex pe-3">
                                        <span class="steps__step">2</span>
                                        <button type="button" class="steps__btn d-none d-md-block">Datos</button>
                                    </div>
                                </li>
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex">
                                        <span class="steps__step mr-md-1">3</span>
                                        <button type="button" class="steps__btn d-none d-md-block">Pago</button>
                                    </div>
                                </li>
                            </ul>
                        </div>  
                        <div class="breadcrumbs pe-5" v-if="storeTienda.parteDos">
                            <ul class="nav steps">
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex steps__item pe-3" style="color:#0033a0">
                                        <span class="steps__stepdos mr-md-1"><Icon name="material-symbols:fitbit-check-small"/></span>
                                        <button type="button" class="steps__btn d-md-inline-block" style="color:#0033a0; font-weight: 600; font-family: sans-serif;">Cotización</button>
                                    </div>
                                </li>
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex steps__item_active pe-3">
                                        <span class="steps__step mr-md-1">2</span>
                                        <button type="button" class="steps__btn d-none d-md-block">Datos</button>
                                    </div>
                                </li>
                                <li class="mr-1 mr-md-4 steps__item">
                                    <div class="d-flex">
                                        <span class="steps__step mr-md-1">3</span>
                                        <button type="button" class="steps__btn d-none d-md-block">Pago</button>
                                    </div>
                                </li>
                            </ul>
                        </div>                  
                    </nav>
                </div>
        </header>      
        <div class="" v-if="!storeTienda.parteDos">
            <button type="button" class="hamburger d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span class="hamburger-box ng-star-inserted">
                <span class="hamburger-inner"></span></span>
            </button>

            <div class="bg-navbar-products">
                <button type="button" class="hamburger hamburger--squeeze d-lg-none p-0 is-active">
                    <span class="hamburger-box">
                    <span class="hamburger-inner"></span></span>
                </button>
                <div class="navbar navbar-expand-lg justify-content-between flex-lg-row flex-colum" style="background-color: #d9e1f1;">
                    <div class="container-fluid d-flex justify-content-center">
                        <div class="navbar-nav">
                            <a class=" w-100 navbar-products__link nav-link active ps-5 pe-5" style="color:white; background-color: rgb(0 51 160);" href="/"> SEGUROS </a>
                            <a class=" w-100 navbar-products__link nav-link ps-5 pe-5" style="color:#0033a0" href="/" target="_self"> Inicio </a>
                            <li class="nav-item dropdown dropdown-toggle">
                                <a class="nav-link w-100 navbar-products__link ps-5 pe-5"  style="color:#0033a0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Seguro para personas<span _ngcontent-serverapp-c31="" class="navbar-dropdown__arrow"></span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div  class="container px-0 px-lg-3 py-4 d-flex">
                                        <div  class="col col-lg-{gridColsNum}">
                                            <div >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                    <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/4bcec00b-32e0-4b39-a16a-eeb42b7c21dd_sel-seguro-autos.svg"> Autos </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                    <li >
                                                        <a  class="navbar-list__item" href="/movilidad/sura/seguro-de-carro" target="_self">
                                                            <span  class="navbar-list__item_span">Seguro de Autos</span>
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a  class="navbar-list__item" href="https://www.segurossura.com.co/paginas/movilidad/autos/centros-de-servicio/inicio.aspx" target="_blank">
                                                        <span  class="navbar-list__item_span">Centro de Servicios</span>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                    <img  class="mr-2 navbar-product__icon" src="https://suraenlinea-v2.cdn.prismic.io/suraenlinea-v2/7f4f4742-3b98-46ac-8151-2037c5101a95_sel-soat.svg"> SOAT </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                    <li >
                                                        <a  class="navbar-list__item" href="/soat/sura/seguro-obligatorio" target="_self">
                                                        <span  class="navbar-list__item_span">Cotiza tu SOAT</span>
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a  class="navbar-list__item" href="/soat/sura/consulta-tu-soat" target="_self">
                                                        <span  class="navbar-list__item_span">Consulta tu SOAT</span>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="col col-lg-{gridColsNum}">
                                            <div >
                                            <div  class="col mb-4 navbar-product">
                                                <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/097ecf29-6f59-4859-a965-9f324776b8f4_sel-seguro-motos.svg"> Motos 
                                                </h3>
                                                <ul  class="pl-3 navbar-list">
                                                <li >
                                                    <a  class="navbar-list__item" href="/motos/plan-motos" target="_self">
                                                    <span  class="navbar-list__item_span">Seguro de Motos</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a  class="navbar-list__item" href="https://www.segurossura.com.co/paginas/movilidad/motos/centros-de-servicio/motos.aspx" target="_self">
                                                    <span  class="navbar-list__item_span">Centro de Servicios</span>
                                                    </a>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                    <img  class="mr-2 navbar-product__icon" src="https://images.prismic.io/suraenlinea-v2/34363ce7-1493-4bbc-a588-8fa80b875692_Icono_Patineta.jpg?auto=compress"> Seguro de Patineta  
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                        <li >
                                                            <a  class="navbar-list__item" href="https://www.segurossura.com.co/paginas/movilidad/bicicleta/inicio.aspx" target="_blank">
                                                            <span  class="navbar-list__item_span">Seguro de Patineta </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div  >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                    <img  class="mr-2 navbar-product__icon" src="https://suraenlinea-v2.cdn.prismic.io/suraenlinea-v2/a5574116-5b71-44ff-805a-b6b73184d60b_sel-seguro-bicis.svg"> Seguro de Bicicleta 
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                    <li >
                                                        <a  class="navbar-list__item" href="https://www.segurossura.com.co/paginas/movilidad/bicicleta/inicio.aspx" target="_blank">
                                                        <span  class="navbar-list__item_span">Seguro de Bicicleta</span>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="col col-lg-{gridColsNum}">
                                            <div  >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                        <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/b3ba7564-edf1-4d91-b3ef-2efa1eaf8d2c_seguro-hogar.svg"> Hogar 
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                        <li >
                                                            <a  class="navbar-list__item" href="/arrendamiento-digital/sura" target="_self">
                                                            <span  class="navbar-list__item_span">Seguro de Arrendamiento</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                        <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/3a5ed55e-f1f1-4311-8d38-daf43b03a647_sel-plan-elige.svg"> Plan Elige 
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                        <li >
                                                            <a  class="navbar-list__item" href="/plan-elige" target="_self">
                                                                <span  class="navbar-list__item_span">Configura tu Seguro Personalizado</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                        <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/ddad5f70-08fd-4a72-8c20-7d17e55ff489_sel-heart.svg"> Salud 
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                        <li >
                                                            <a  class="navbar-list__item" href="/sura/saludevoluciona" target="_self">
                                                                <span  class="navbar-list__item_span">Cotiza tu Seguro de Salud</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="col col-lg-{gridColsNum}">
                                            <div >
                                                <div  class="col mb-4 navbar-product">
                                                    <h3  class="mb-0 d-flex align-items-center navbar-product__title">
                                                        <img  class="mr-2 navbar-product__icon" src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/cb9a35de-90e9-46f5-9432-fde7fffed273_sel-seguro-digital.svg"> Estilo de vida 
                                                    </h3>
                                                    <ul  class="pl-3 navbar-list">
                                                        <li >
                                                            <a  class="navbar-list__item" href="/viajes/sura" target="_self">
                                                                <span  class="navbar-list__item_span">Seguro de Viaje</span>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a  class="navbar-list__item" href="/v2/sura/proteccion-digital-personas" target="_self">
                                                                <span  class="navbar-list__item_span">Protección Digital Personas</span>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a  class="navbar-list__item" href="/sura/muevete-libre" target="_self">
                                                                <span  class="navbar-list__item_span">Muévete Libre</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li class="nav-item dropdown dropdown-toggle">
                                <a class="nav-link w-100 navbar-products__link ps-5 pe-5"  style="color:#0033a0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reclamaciones
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div  class="container px-0 d-flex">
                                        <div  class="container px-0 px-lg-3 py-4 d-flex flex-column flex-lg-row">
                                            <div  class="col col-lg-{gridColsNum}">
                                                <div  _nghost-serverapp-c30="">
                                                    <div  class="col mb-4 navbar-product">
                                                        <ul  class="pl-3 navbar-list">
                                                            <li >
                                                                <a  class="navbar-list__item" href="/vehiculos/reclamaciones" target="_self">
                                                                    <span  class="navbar-list__item_span">Para Seguro de Autos</span>
                                                                </a>
                                                            </li>
                                                            <li >
                                                                <a  class="navbar-list__item" href="/motos/reclamaciones" target="_self">
                                                                <span  class="navbar-list__item_span">Para Seguro de Motos</span>
                                                                </a>
                                                            </li>
                                                            <li >
                                                                <a  class="navbar-list__item" href="/bicicletas/reclamaciones" target="_self">
                                                                    <span  class="navbar-list__item_span">Para Seguro de Bicicletas</span>
                                                                </a>
                                                            </li>
                                                            <li >
                                                                <a  class="navbar-list__item" href="/soat/reclamaciones" target="_self">
                                                                    <span  class="navbar-list__item_span">Para SOAT</span>
                                                                </a>
                                                            </li>
                                                            <li >
                                                                <a  class="navbar-list__item" href="https://www.segurossura.com.co/arrendamiento-digital/paginas/arrendamiento.aspx#/formularioReclamacion" target="_self">
                                                                    <span  class="navbar-list__item_span">Para Seguro de Arrendamiento Digital</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <div class="d-flex align-items-center ">
                                <img  class="icon " src="https://prismic-io.s3.amazonaws.com/suraenlinea-v2/595de481-e670-48df-9c14-af07984b1edf_question.svg">
                                <a class=" w-100 navbar-products__link pe-5" href="/sura/preguntas-frecuentes" target="_self">
                                     Ayuda 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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
        --url-logo-footer: url('assets/images/logo-secure.png');
        --url-logo-medio-pago-footer: url('assets/images/medios-de-pago.png');
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
    .bar {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }
    .pr-0 .px-0 {
        padding-right: 0!important;
    }
    .p-0 {
        padding: 0!important;
    }

    .m-0 {
        margin: 0!important;
    }

    .flex-column {
        flex-direction: column!important;
    }
    .icon {
        height: 1.4rem;
        width: 1.4rem;
    }

    .pr-1 .px-1 {
        padding-right: 0.25rem!important;
    }
    .d-flex {
        display: flex!important;
    }
    [type=button]:not(:disabled) [type=reset]:not(:disabled) [type=submit]:not(:disabled) button:not(:disabled) {
        cursor: pointer;
    }

    button select {
        text-transform: none;
    }
    button input optgroup select textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
}
    .hamburger-inner:before {
        width: 2rem;
        height: 0.188rem;
        background-color: var(--primary);
        border-radius: 0.25rem;
        position: absolute;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }
    .hamburger-inner:after {
        width: 2rem;
        height: 0.188rem;
        background-color: var(--primary);
        border-radius: 0.25rem;
        position: absolute;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }

    @media (min-width: 992px){
        .pb-lg-3 .py-lg-3 {
            padding-bottom: 1rem!important;
        }
        .align-self-lg-end {
            /* -ms-flex-item-align: end!important; */
            align-self: flex-end!important;
        }
        .flex-column {
            flex-direction: row!important;
        }
        .d-lg-none {
            display: none!important;
        }
        .container .container-lg .container-md .container-sm {
            max-width: 960px;
        }
        .px-lg-3 {
            padding-left: 1rem!important;
            padding-right: 1rem!important;
        }
        .mt-lg-0 .my-lg-0 {
            margin-top: 0!important;
        }
        .flex-lg-row {
            flex-direction: row!important;
        }
    }
    .px-0 {
        padding-left: 0!important;
    }
    .justify-content-between {
        justify-content: space-between!important;
    }
    .mb-4 .my-4 {
        margin-bottom: 1.5rem!important;
    }

    .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .navbar{
        padding: 0 !important;
    }
    .navbar-list{
        list-style-type: disc;
        color: var(--primary);
    }

    .pl-3 .px-3 {
        padding-left: 1rem!important;
    }
    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
    }
    .navbar-list__item_span {
        position: relative;
        left: 0;
        transition: all .1s ease-in-out;
    }
    .navbar-list__item {
        font-family:  "Barlow", sans-serif;
        color: #727272;
        text-decoration: none;
    }
    .position-relative {
        position: relative!important;
    }
    
    button:not(:disabled) {
        cursor: pointer;
    }

    .navbar-products__link .navbar-dropdown__dropbtn {
        font-family: var(--primary-semibold-font-family);
        color: var(--menu-color, var(--primary));
        cursor: pointer;
        transition: color .3s;
        text-align: left;
    }
    .navbar-dropdown__dropbtn{
        font-size: 1.05rem;
        border: none;
        outline: none;
        background-color: inherit;
        margin: 0;
}
    .dropdown-menu.show {
        display: block;
    } 
    .dropdown-toggle:after {
        display: none;
    }
    .dropdown-menu.show {
        display: block;
    }
    .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=top] {
        right: auto;
        bottom: auto;
    }

    .w-100 {
        width: 100%!important;
    }
    .bg-navbar-products {
        background-color: #fff;
        opacity: .97;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1000;
        transform: translateY(-100%);
        transition: transform .5s ease-in-out;
        height: 100vh;
    }
    .hamburger--squeeze {
        position: absolute;
        top: 1.438rem;
        left: 0.938rem;
        z-index: 1060;
    }
    @media (min-width: 62em) {
        .hamburger--squeeze {
            position: static;
        }
    }
    .hamburger {
        padding: 0.938rem;
        display: inline-block;
        cursor: pointer;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
        outline: none;
        position: absolute;
        top: 0.938rem;
        left: 0.938rem;
    }
    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner:before,
    .hamburger.is-active .hamburger-inner:after {
        background-color: #0033a0;
    }
    .hamburger-box {
        width: 2.125rem;
        height: 1.5rem;
        display: inline-block;
        position: relative;
    }
    .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -0.125rem;
        width: 2rem;
        height: 0.188rem;
        background-color: var(--primary);
        border-radius: 0.25rem;
        position: absolute;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }
    
    .hamburger-inner
    .hamburger-inner:before 
    .hamburger-inner:after {
        width: 2rem;
        height: 0.188rem;
        background-color: #0033a0;
        border-radius: 0.25rem;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }
    .hamburger-inner:before,
    .hamburger-inner:after {
        content: "";
        display: block;
    }
    .hamburger-inner:before {
        top: -0.625rem;
    }
    .hamburger-inner:after {
        bottom: -0.625rem;
    }
    .hamburger--squeeze .hamburger-inner {
        transition-duration: 75ms;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .hamburger--squeeze .hamburger-inner:after {
        transition: bottom 75ms 0.12s ease, transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .hamburger--squeeze .hamburger-inner {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .hamburger--squeeze .hamburger-inner:before {
        top: 0;
        opacity: 0;
        transition: top 75ms ease, opacity 75ms 0.12s ease;
    }
    .hamburger--squeeze .hamburger-inner:after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 75ms ease, transform 75ms 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    } 
    .navbar-dropdown__content {
        display: none;
        position: relative;
        background-color: #fff;
        width: 100%;
        left: 0;
        z-index: 1;
    }
    .bg-navbar-products {
        background-color: #c3d5e0;
        opacity: 0.97;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1000;
        transform: translateY(-100%);
        transition: transform 0.5s ease-in-out;
        height: 100vh;
    }
    .bg-navbar-products__open {
        transform: translateY(0);
        overflow-y: scroll;
    }
    .flex-fill {
        flex: 1 1 auto!important;
    }
    .steps__item{
        font-family: sans-serif;
        font-weight: bold;
    }
    .steps__item_active .steps__step{background-color:var(--breadcrumb-selected-color);color:var(--color-breadcrumb-step-active)}
    .steps__item_active .steps__btn{color:var(--breadcrumb-text-color-active, var(--breadcrumb-text-color));letter-spacing:1.3px ;font-weight:600;display:inline-block}
    .steps__step{
        display:inline-block;
        height:22px;
        width:22px;
        background-color:#dfdfdf;
        border-radius:50%;
        font-size:1rem;
        color:var(--breadcrumb-text-color);
        text-align:center
    }
    .steps__stepdos{
        display:inline-block;
        height:22px;
        width:22px;
        background-color:#0033a0;
        border-radius:50%;
        font-size:1rem;
        text-align:center;
        color:white;
    }
    .steps__step_success{background-color:var(--color-breadcrumb-success) !important}
    .steps__step_success .icomoon-sel-success-input{font-size:1.8rem;font-weight:bold}
    .steps__btn{ letter-spacing:1.3px ;display:none;font-size:0.8rem;background:transparent;border:0;cursor:pointer;outline:none;color:var(--color-breadcrumb)}
    
    .steps__btn_success{color:var(--color-breadcrumb-success) !important}
    .check-color{
        color:var(--breadcrumb-check-color)
    }
    .header {
        background: var(--background-header);
        position: relative;
        z-index: 0;
    }
    .breadcrumbs {
        font-family: var(--breadcrumb-font-family);
        font-size: 1rem;
        font-size: var(--breadcrumb-font-size, 1rem);
        font-weight: "normal";
        font-weight: var(--breadcrumb-font-weight, "normal");   
    }
    .navbar-component__logo {
        height: 63px;
        width: 300px;
        margin: 0;
        background: url(https://www.suraenlinea.com/soat/assets/images/tenants/sura/logo.svg);
        background-repeat: no-repeat;
        background-size: 300px;
        background-position: center left;
    }
    @media (min-width: 768px) {
        .steps__btn{
            display:inline-block
        }
        .navbar-component__logo {
            height: 63px;
            background-size: contain;
            width: 300px;
            margin: 0;
        }
    }
    .container {
        width: auto;
        padding-right: 15px;
        padding-left: 15px; 
        margin: 0 69px;
    }
    .navbar-products__link {
        font-family: 'Barlow' sans-serif;
        float: left;
        font-size: 1.05rem;
        color: #ffff;
        text-decoration: none;
    }
    .navbar-products__active {
        background-color: #0033a0;
    }
    .navbar-products__active .navbar-products__link {
        color: #ffff;
    }
    .navbar-products__active .navbar-products__link:hover {
        color: #fff !important;
    }
    @media (min-width: 62em) {
        .navbar-products__link .navbar-dropdown__dropbtn {
            text-align: center;
        }
        .bg-navbar-products {
            background-color:  #ffffff;
            min-height: 2.563rem;
            opacity: 1;
            position: relative;
            height: auto;
            transform: translateY(0);
        }
        .show .navbar-dropdown__content {
            display: none;
        }
        .show .navbar-dropdown__dropbtn {
            color: #0033a0;
        }
        .show .navbar-dropdown__arrow:after {
            border-top-color: #0033a0;
        }
        .navbar-dropdown:hover .navbar-dropdown__content .navbar-dropdown:focus .navbar-dropdown__content {
            display: block;
        }
        .navbar-dropdown__dropbtn_active ~ .navbar-dropdown__content {
            display: none;
        }
        .navbar-dropdown__arrow {
            display: inline-block;
        }
        .navbar-dropdown__arrow:before .navbar-dropdown__arrow:after {
            right: -1.563rem !important;
            transform: rotate(0);
        }
        .navbar-dropdown__arrow:before {
            border-top: 0.4em solid #d9e1f1;
            top: 0;
        }
        
        .navbar-products__link .navbar-dropdown__dropbtn {
            text-align: center;
        }
        .navbar-products__link:hover .navbar-dropdown__dropbtn:hover {
            color: #00aec7 !important;
        }
        .navbar-products__link:hover .navbar-dropdown__arrow:after,
        .navbar-dropdown__dropbtn:hover .navbar-dropdown__arrow:after {
            border-top-color: #00aec7;
        }
        .container {
            max-width: 960px;
            height: 63px;
        }
    }
    .navbar-dropdown__dropbtn {
        font-size: 1.05rem;
        border: none;
        outline: none;
        background-color: inherit;
        margin: 0;
    }
    .navbar-dropdown__dropbtn_active ~ .navbar-dropdown__content {
        display: block;
    }
    .navbar-dropdown__arrow {
        position: relative;
        display: block;
    }
    .navbar-products__link  .navbar-dropdown__dropbtn {
        font-family: 'Barlow', sans-serif;
        color: #0033a0;
        cursor: pointer;
        transition: color 0.3s;
        text-align: left;
    }
    .navbar-products__link:hover .navbar-dropdown__dropbtn:hover {
        text-decoration: none;
    }
 
</style>