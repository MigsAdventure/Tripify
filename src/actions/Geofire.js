import Firebase from 'firebase';
import axios from 'axios';
import GeoFire from 'geofire';
import { firebaseDb } from '../firebase';
// import store from '../store';

const usersRef = firebaseDb.ref('users');
const geoFire = new GeoFire(usersRef);

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
        const { lat, lng } = location;

        const geoQuery = geoFire.query({
          center: [40.6425372, -111.8885726],
          radius: 75,
        });
        // var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location, distance) {
        console.log('geoQuery.on:', geoQuery.on)
        geoQuery.on("key_entered", function(key, location, distance) {
          console.log(key + " entered query at " + location + " (" + distance + " km from center)");
        });
        // geo.getPointsNearLoc([37.771393, -122.447104], 5,
        //             function(array) {
        //                 for (var i = 0; i < array.length; i++)
        //                     console.log("A found point = ", array[i]);
        //             });


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
