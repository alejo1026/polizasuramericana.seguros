<script lang="ts" setup>
  import { io } from "socket.io-client";
  import { useTienda } from "~/store/tienda";
  const footer = 'footer'

  const storeTienda:any = useTienda()
  const sockt = ref()
  const socket = io('http://192.168.80.28:4001/visitantesSoatSura');
  onMounted(() => {
    // console.log(storeTienda.infoParteDos)
    if (storeTienda.parteDos) {
      socket.on("connect", async() => {
        console.log('Ahora estamos conectados al servidor de sockets: '+socket.id)
        sockt.value = socket.id
        const data = {
          newSocket: sockt.value,
          oldSocket: storeTienda.socket
        }
        storeTienda.setSocket(sockt.value)
        socket.emit('updateSocketVisitante', data)
      });
      socket.on("cargarInfo", (data:any) => {
        console.log('Ahora llego el socket cargarInfo')
        console.log(data)
      }); 
      
        
    }else{
      return navigateTo('/')
    }
  })
</script>

<template>
  <div v-if="storeTienda.parteDos">
    <Partedossura/>
    <NuxtLayout :name="footer"/>
  </div>
</template>

<style scoped></style>
