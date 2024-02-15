<script lang="ts" setup>
  import Dialog from 'primevue/dialog';

  import { useTienda } from "~/store/tienda";
  const storeTienda:any = useTienda()

</script>

<template>
  <div align="center">
    <Dialog v-model:visible="storeTienda.modalSoatVigente" modal :style="{ width: '30rem' }" :closable="false" header="">
      <div class="text-center" align="center">
        <div class="p-2">
          <div class="danger"><Icon name="ci:circle-warning" size="5rem" /></div>
          <div class="p-1 title" >
            <h1>Lo sentimos</h1>
          </div>
        </div>
      </div>
      <div class="contenido">
        <div class="text text-center">
          En este momento tienes el SOAT vigente. Recuerda que puedes comprarlo hasta 30 dias antes de su vencimiento.
        </div> 
        <div align="center">
          <div class="btn btn-4 btnModal ps-5 pe-5 mt-3" id="btnModalCerrar" @click="storeTienda.setModalSoatVigente(false)"><strong>Aceptar</strong></div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.danger{
  color: #ff585d
}
.contenido{
  margin-left:3%;
  margin-right:3%;
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
  line-height: 1;
  color: #ff585d;
}
.text {
  font-family: 'Barlow', sans-serif;
  font-size: 1.3rem;
  font-weight: 180;
  line-height: 1;
}

</style>
