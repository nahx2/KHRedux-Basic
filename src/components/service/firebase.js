import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FS_APIKEY,
  authDomain: process.env.REACT_APP_FS_AUTHDomain,
  projectId: process.env.REACT_APP_FS_PROJECTID,
  storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FS_APPID,
  measurementId: process.env.REACT_APP_FS_MEASUREMENTID,
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
export default firebaseapp
