import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey:'AIzaSyBJwf34LeWHDvoyuI_EVntjINAt03AwyP4', //process.env.React_app_api_key,  // process.env.React_app_api_key,
    authDomain:'npm-4721f.firebaseapp.com', //process.env.React_app_auth_domain,
    projectId:'npm-4721f', //process.env.React_app_project_id ,
    storageBucket:'npm-4721f.appspot.com', //process.env.React_app_storage_bucket,
    messagingSenderId:'563255740346',//process.env.act_app_messaging_sender_id ,
    appId:'1:563255740346:web:6dab13136ef487694bff83' //process.env.React_app_app_id,
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth , db }
// React_app_api_key = AIzaSyBJwf34LeWHDvoyuI_EVntjINAt03AwyP4
// React_app_auth_domain = npm-4721f.firebaseapp.com
// React_app_project_id = npm-4721f
// React_app_storage_bucket =  npm-4721f.appspot.com
// React_app_messaging_sender_id = 563255740346
// React_app_app_id = 1:563255740346:web:6dab13136ef487694bff83



