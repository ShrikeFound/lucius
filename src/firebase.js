import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
const firebaseConfig = require("./firebaseConfig.json")

const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()

export default app