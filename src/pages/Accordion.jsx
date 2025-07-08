import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const Accordion = () => {
  const [prescription, setPrescription] = useState(null);
  const [value, setValue] = "this is value"
const getPrescription = ()=>{
  axios.get('http://localhost:3500/prescription')
  .then(res=>{
    console.log("res", res.data)
    let medicines = res.data.medications.map(item=>{
      return `${item.name} ${item.dosage} ${item.frequency} for ${item.duration}</br>`
    })
    let data = `
    <b>Doctor : </b> ${res.data.doctor.name}</br> 
    <b>Medicine : </b> </br>${medicines}
    `
    setPrescription(data)
  })
  .catch(err=>{
    console.log(err)
  })
}
useEffect(()=>{
  getPrescription()
},[])
  return (
    <div className="container text-secondary">
      <div className="bg-white p-3">
        {
          prescription &&
          //  <ReactQuill theme="snow" value={prescription} onChange={setPrescription} />
          " "
        }
       
      </div>
    </div>
  );
};
export default Accordion;