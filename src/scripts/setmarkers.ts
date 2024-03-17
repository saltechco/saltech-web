// @ts-nocheck
import { Marker, Popup } from '@neshan-maps-platform/mapbox-gl'

export default function setMarkers(map) {
  new Marker({ color: '#326fd1' })
    .setPopup(new Popup({ offset: 25 }).setHTML('<h3 style="color: dimgray">ما اینجا هستیم!</h3>'))
    .setLngLat([54.3247, 31.9082])
    .addTo(map)
    .togglePopup()
}
