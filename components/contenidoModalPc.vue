<script lang="ts" setup>
  import Dialog from 'primevue/dialog';

  import { useTienda } from "~/store/tienda";
  const storeTienda:any = useTienda()

</script>

<template>
  <div align="center">
    <Dialog v-model:visible="storeTienda.botonModalInicio" modal :style="{ width: '30rem' }" class="mt-5" :closable="false" position="top"  header="Edit Profile">
      <template #header>
        <div class="inline-flex align-items-center justify-content-center gap-2">
          <div class="row">
            <div class="col-11 pe-2 pt-4">
              <div class="p-1 title" align="center">
                <strong>Antes de comprar tu SOAT, es importante que sepas:</strong>
              </div>
            </div>
            <div class="col-1 ps-3" id="x">
              <div align="center">
                <h4 class="text-primary" @click="storeTienda.setBotonModalInicio(false)"><strong>X</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="contenido">
        <div class="text">
          <strong>
            <div class="row">
              <div class="col-1 ps-3" align="right"><li></li></div>
              <div class="col-11 pe-2">
                <div class="" align="center">
                  Por este medio se expide el SOAT para los vehículos matriculados en Colombia.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1 ps-3" align="right"><li></li></div>
              <div class="col-11 pe-2">
                <div class="" align="center">
                  Los únicos medios de pago habilitados y autorizados son PSE y botón Bancolombia desde Suraenlinea.com. Si alguien te contacta por WhatsApp para pagar o realizar otro proceso, no caigas.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1 ps-3" align="right"><li></li></div>
              <div class="col-11 pe-2">
                <div class="" align="center">
                  Quien compre el seguro debe ser el propietario del vehículo (durante el proceso se valida la identidad).
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1 ps-3" align="right"><li></li></div>
              <div class="col-11 pe-3">
                <div class="" align="center">
                  Luego de que hayas comprado la póliza, espera 24 horas y <a class="link" href="https://www.runt.com.co/consultaCiudadana/#/consultaVehiculo" target="_blank"><strong>verifica aquí</strong></a> que esta haya quedado cargada en el RUNT.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1 ps-3" align="right"><li></li></div>
              <div class="col-11 pe-2">
                <div class="" align="center">
                  Si no puedes comprar de forma digital, programa una cita en el punto físico más cercano. Conócelos y 
                  <a class="link" href="https://seguros.comunicaciones.sura.com/puntos-fisicos-compra-soat" target="_blank">
                    <strong>agenda aquí.</strong>
                  </a>
                </div>
              </div>
            </div> 
          </strong>
        </div> 
        <div align="center">
          <div class="btn btn-4 btnModal ps-5 pe-5 mt-5" id="btnModalCerrar" @click="storeTienda.setBotonModalInicio(false)"><h4><strong>ENTENDIDO</strong></h4></div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.contenido{
  margin-lef:3%;
  margin-right:3%;
}
#x{
  margin-top:-3%;
  /* margin-left: -3%; */
}
.btnModal{
  border-radius: 25px;
  color: #0033a0;
}
#btnModalCerrar {
  background-color: #f6ed3f;
}
.title {
  font-family: 'Barlow', sans-serif;
  font-size: 1.4rem;
  font-weight: 380;
  line-height: 1.4;
  margin-top:-6%;
}
.text {
  font-family: 'Barlow', sans-serif;
  font-size: 1.3rem;
  font-weight: 180;
  line-height: 1.4;
}

</style>
