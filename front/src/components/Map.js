/* global kakao */
import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

const listData = [
  {
    lat: 37.50069211992729,
    lng: 127.03716132510228
  },
  {
    lat: 37.500097114938185,
    lng: 127.03659551364804
  }
]

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map')
    const mapOption = {
      center: new window.kakao.maps.LatLng(
        37.50069211992729,
        127.03716132510228
      ),
      level: 3
    }
    const map = new window.kakao.maps.Map(mapContainer, mapOption)

    // marker 등록 하기 (단일)
    // const marker = new window.kakao.maps.Marker({
    //   map,
    //   position: new window.kakao.maps.LatLng(
    //     37.50069211992729,
    //     127.03716132510228
    //   )
    // })

    // marker 등록하기 (다중)
    for (let i = 0; i < listData.length; i++) {
      const data = listData[i]
      const marker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(data.lat, data.lng)
      })
    }
  }, [])

  return (
    <Container id="map" style={{ width: '100%', height: '500px' }}></Container>
  )
}

export default Map
