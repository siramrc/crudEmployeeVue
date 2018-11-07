import firebase from 'firebase';
import 'firebase/firestore'
import firebaseconfig from './firebaseconfig'
const firebaseApp = firebase.initializeApp (firebaseconfig)

const api= firebaseApp.firestore()
api.settings({timestampsInSnapshots: true})

export default api
