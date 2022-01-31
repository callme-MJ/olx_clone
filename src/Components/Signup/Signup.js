import React, { useState,useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import Logo from '../../olx-logo.png';
import { Firebasecontext } from '../../store/firebasecontext';
import './Signup.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {collection,doc, addDoc,getFirestore} from 'firebase/firestore'

export default function Signup() {
  const history = useHistory()
  const [username,setUsername] =useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone] =useState('');
  const {firebase}=useContext(Firebasecontext)
  const auth = getAuth()
  const db = getFirestore()
  const hndlsubmit= (e)=>{
    e.preventDefault()
    console.log(password);
    
    // createUserWithEmailAndPassword(auth,email,password).then((result)=>{
    //   console.log(email);
    //   result.user.updateProfile({displayName:username}).then(async()=>{
    //     const users = doc(db,'users','id')
    //     const put =await addDoc(users)
    //     const user = put.data()
    //     // firebase.firestore().collection('users').add({
    //     //   id:result.user.uid,
    //     //   username:username,
    //     //   phone:phone,
    //     // })
    //     .then(()=>{
          
    //       history.push('/login')
    //     })
    //   })
    // })

       
      
      
     
        // try {
        //   const docref = await addDoc(collection(db, 'users'),{
        //     id:docref.id,
        //     username:username,
        //     phone:phone
        //   });
        //   console.log(docref.id);
        // }
        // catch (e){
        //   console.error(e);
        // }
        // finally{}
      }
        
      
    return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={hndlsubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
