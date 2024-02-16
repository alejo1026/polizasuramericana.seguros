<script setup lang="ts"></script>
<template>
    <div>
        <footer class="footer-container">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="d-none d-md-flex align-items-center">
                        <div class="m-0 mr-2 footer-terms" style="font-size:0.875rem">Contamos con el certificado de seguridad</div> 
                        <i class="logo"></i>
                    </div> 
                    <div class="xx">
                        <p class="m-md-0 pr-0 pr-md-2">Medios de pago:</p> 
                        <i class="medio-de-pago__logo"></i>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-start flex-column flex-md-row">
                    <div class="text-center footer-terms" style="font-size: 0.8125rem;">© 2024 SURA. Todos los derechos reservados
                        <span class="d-none d-md-inline-block">|</span><br>
                    </div>
                    <div class="text-center footer-terms" style="font-size: 0.8125rem;">
                        <a href="/terminos-condiciones" class="link-terms ml-1 d-block d-md-inline-block" target="_self">Políticas de uso y seguridad</a> 
                        <span class="d-none d-md-inline-block">|</span> 
                        <a href="/politicas-privacidad" class="link-terms d-md-inline-block" target="_self">Política de privacidad y ley de datos personales</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>  
.xx{
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
    color: white;
    box-sizing: border-box;
    display: flex!important;
    flex-direction: row!important;
    align-items: center!important;
    text-align: left!important;
}
    .mr-2 {
        margin-right: 0.5rem!important;
    }
    .mx-2 {
        margin-right: 0.5rem!important;
    }

    .m-0 {
        margin: 0!important;
    }  
    .d-block {
        display: block!important;
    }
    .ml-1 {
        margin-left: 0.25rem!important;
    }
    .logo{
        --url-logo-footer: url(https://www.suraenlinea.com/soat/assets/images/logo-secure.png);
        width:64px;
        height:43px;
        display:inline-block;
        background:var(--url-logo-footer) no-repeat;
    }
    .footer-terms{
        font-family: 'Barlow' sans-serif;
    }
    .link-terms{
        color:#fff
    }
    .link-terms:hover{
        color:#fff
    }
    .text-center {
        text-align: center!important;
    }

    .footer-terms {
        font-family: 'Barlow' sans-serif;
    }
    .footer-container{
        background:rgb(83 86 90);
        color:white;
        padding:2rem 0px
    }
    @media(min-width: 960px){}
    @media(min-width: 960px){}
    hr{
        border-color:white
    }
    .medio-de-pago__logo{
        --url-logo-medio-pago-footer: url(https://www.suraenlinea.com/soat/assets/images/medios-de-pago.png);
        display:inline-block;
        background:var(--url-logo-medio-pago-footer) no-repeat;
        width:332px;height:28px
    }

    .pr-0 {
        padding-right: 0!important;
    }
    @media (min-width: 768px){
        .d-none {
            display: none!important;
        }
        .container {
            max-width: 720px;
        }
        .d-md-flex {
            display: flex!important;
        }
        .align-items-md-center {
            -ms-flex-align: center!important;
            align-items: center!important;
        }
        .flex-md-row {
            -ms-flex-direction: row!important;
            flex-direction: row!important;
        }
        .d-md-inline-block {
            display: inline-block!important;
        }
        .pr-md-2 {
            padding-right: 0.5rem!important;
        }
        .px-md-2 {
            padding-right: 0.5rem!important;
        }

        .m-md-0 {
            margin: 0!important;
            
        }
    }
    @media (min-width: 576px){
        .container {
            max-width: 540px;
            
        }
        .pr-md-2 {
            padding-bottom: 2.5rem!important;
        }
    }
    .text-left {
        text-align: left!important;
    }
    
    .flex-column {
        -ms-flex-direction: column!important;
        flex-direction: column!important;
    }
    .container {
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
    color: white;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 90%;
    }
    .justify-content-between {
        -ms-flex-pack: justify!important;
        justify-content: space-between!important;
    }
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0,0,0,.1);
        box-sizing: content-box;
        height: 0;
        overflow: visible;
        border-color: white;
    }
    .justify-content-start {
        -ms-flex-pack: start!important;
        justify-content: flex-start!important;
    }
    .d-flex {
        display: -ms-flexbox!important;
        display: flex!important;
    }
    .align-items-center {
        -ms-flex-align: center!important;
        align-items: center!important;
    }

    
    .d-none {
        display: block;
    }
</style>