<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  name: 'MapComponent',
  mounted() {
    // Fix Leaflet icon path
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    // Coordenadas de Blumenau
    const blumenau = [-26.9187, -49.0658]
    
    // Inicializa o mapa
    const map = L.map(this.$refs.map).setView(blumenau, 13)
    
    // Adiciona layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)
    
    // Adiciona marcador
    L.marker(blumenau).addTo(map)
  }
}
</script>

<style scoped>
.map-container {
}
#map {
  height: 400px;
  width: 100%;
  border-radius: 8px;
}
</style>