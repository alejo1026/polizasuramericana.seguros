<script lang="ts" setup>
  import Dialog from 'primevue/dialog';

  import { useTienda } from "~/store/tienda";
  const storeTienda:any = useTienda()
</script>

<template>
  <div align="center">
    <Dialog v-model:visible="storeTienda.botonModalInicio" modal :style="{ width: '40rem' }" class="mt-5" :closable="false" position="top"  header="Edit Profile">
      <template #header>
          <div class="row">
            <div class="col-11 pe-2">
              <div class="p-1 title" align="center">
                <h3><strong>Antes de comprar tu SOAT, es importante que sepas:</strong></h3>
              </div>
            </div>
            <div class="col-1 ps-3" id="x">
              <div align="center">
                <h4 class="text-primary" @click="storeTienda.setBotonModalInicio(false)"><Icon name="ion:close-round"/></h4>
              </div>
            </div>
          </div>
      </template>
      <div class="text">
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
          <div class="col-11 pe-2">
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
      </div> 
      <div align="center">
        <div class="btn btn-4 btnModal ps-5 pe-5 mt-5" id="btnModalCerrar"  @click="storeTienda.setBotonModalInicio(false)"><h4><strong>ENTENDIDO</strong></h4></div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.btnModal{
  border-radius: 25px;
  color: #0033a0;
}
#btnModalCerrar {
  background-color: #f6ed3f;
}
#x{
  margin-top:-5%;
  /* margin-left: -3%; */
}

.title {
  font-family: 'Barlow', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  margin-top:-6%;

}
.text {
  font-family: 'Barlow', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
}

</style>
