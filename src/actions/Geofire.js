// import firebase from 'firebase';
import axios from 'axios';
import { firebaseDb } from '../firebase';
// import store from '../store';

const usersRef = firebaseDb.ref('users');

export function geofioreSearchResults(searchPackage) {
  // console.log('searchPackage:', searchPackage);
  const locQuery = searchPackage.location;

  return dispatch => {
    axios.get(`/api/places/location?address=${locQuery}`)
      .then((res) => {
        const location = res.data;
        return location;
      })
      .then((location) => {
        const keyWord = searchPackage.trip;
        const { lat, lng } = location;

        console.log('location:', location)
        const leftLat = lat - 1;
        const rightLat = lat + 1;
        const topLng = lng - 1;
        const bottomLng = lng + 1;

        usersRef.on('value', (snap) => {
          const usersObj = snap.val();
          for (const user of Object.keys(usersObj)) {
            const { saved } = usersObj[user];
            for (const tripInfo of Object.keys(saved)) {
              const { description, locEnd, locStart, tags, title } = saved[tripInfo];
              // console.log('description:', description);
              // console.log('title:', title);
              // console.log('saved[tripInfo]:', saved[tripInfo]);
              const endGeometry = locEnd.geometry;
              const endLocation = endGeometry.location;
              const startGeometry = locStart.geometry;
              const startLocation = startGeometry.location;
              if ((((endLocation.lat <= rightLat) && (endLocation.lat >= leftLat)
              && (endLocation.lng <= bottomLng) && (endLocation.lng >= topLng))
              || ((startLocation.lat <= rightLat) && (startLocation.lat >= leftLat)
              && (startLocation.lng <= bottomLng) && (startLocation.lng >= topLng)))
              && (tags.includes(keyWord))) {
                console.log('saved[tripInfo]:', saved[tripInfo]);
              }
            }
          }
        });


      })
      .catch(console.error)
  }



  // const geoQuery = geoFire.query({
  //   center: [40.6425372, -111.8885726],
  //   radius: 75,
  // });


  //


  // ================================>

  // usersRef.on('value', (snap) => {
  //   const usersObj = snap.val();
  //   for (const user of Object.keys(usersObj)) {
  //     const { saved } = usersObj[user];
  //     for (const tripInfo of Object.keys(saved)) {
  //       const { description, locEnd, locStart, tags, title } = saved[tripInfo];
  //       // console.log('tags:', tags);
  //       // console.log('description:', description);
  //       // console.log('title:', title);
  //       // console.log('saved[tripInfo]:', saved[tripInfo]);
  //       const endGeometry = locEnd.geometry;
  //       const endLocation = endGeometry.location;  // Object {lat: 40.6425372, lng: -111.8885726}
  //       const startGeometry = locStart.geometry;
  //       const startLocation = startGeometry.location;  // Object {lat: 37.7915361, lng: -122.4040583}
  //
  //
  //       if ((endLocation.lat >= ) && (tags == 'ramen') ) {
  //         console.log('saved[tripInfo]:', saved[tripInfo]);
  //       }
  //     }
  //   }
  // });
    // ----------------------->

}
