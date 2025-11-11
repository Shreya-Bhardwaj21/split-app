import React, { useState } from "react";


export default function Addfriend({addfriend, closeform}) {
  let defaultimg ="https://cdn-icons-png.flaticon.com/512/149/149071.png";
  let [name, setName] = useState("")

  function handlesubmit(e){
    e.preventDefault();
    if (!name.trim()) return;
    let newfriend={
      id: Date.now(),
      name,
      balance: 0,
      img: defaultimg
    }
    addfriend(newfriend);
    closeform();
  }
  
  return (
    <>
      <section className="container-fluid">
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                     <form onSubmit={handlesubmit}>
                        <input type="text"placeholder="add friends name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                        <button  className="btn btn-info text-white my-2 mx-5" type="submit">Add Friend</button>
                     </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

