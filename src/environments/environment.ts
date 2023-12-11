// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '',
  firebaseConfig : {
    apiKey: "AIzaSyBBLYPYdqtY0aWO_NAJzW3hax08VNgijj4",
    databaseURL: "https://blog-book.firebaseio.com",
    authDomain: "blog-book-66837.firebaseapp.com",
    projectId: "blog-book-66837",
    storageBucket: "blog-book-66837.appspot.com",
    messagingSenderId: "483584713195",
    appId: "1:483584713195:web:4bca5f20216404cce239ae",
    measurementId: "G-BEEF7DW6SG"

    // our firebase's credentials
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
