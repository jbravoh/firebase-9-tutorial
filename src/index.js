import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2fuxLwmEibu0SAK5olnnCNqrAP-4_VdA",
    authDomain: "fir-9-project-89570.firebaseapp.com",
    projectId: "fir-9-project-89570",
    storageBucket: "fir-9-project-89570.appspot.com",
    messagingSenderId: "134763722083",
    appId: "1:134763722083:web:1ed6d4112585149b398f56"
};

// initialize firebase app
initializeApp(firebaseConfig)

// initialize services
const db = getFirestore()

// collection ref
const collectionRef = collection(db, 'books')

// get collection data - getDocs() returns a promise

getDocs(collectionRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach(doc => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    }).catch(error => {
        console.log(error)
    })