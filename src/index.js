import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    onSnapshot,
    // getDocs,
    addDoc,
    deleteDoc,
    doc
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
// getDocs(collectionRef)
//     .then((snapshot) => {
//         let books = []
//         snapshot.docs.forEach(doc => {
//             books.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(books)
//     }).catch(error => {
//         console.log(error)
//     })

// real-time collecion data 
onSnapshot(collectionRef, (snapshot) => {
    let books = []
    snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})


// adding documents 
const addBookForm = document.querySelector('.add')

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(collectionRef, {
        // grab the html "name" input value
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    }).then(() => addBookForm.reset()
    ).catch(error => console.log(error))
})


// deleting documents
const deleteBookForm = document.querySelector('.delete')

deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // database, collection, id value the user has entered
    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef).then(() => deleteBookForm.reset())
})