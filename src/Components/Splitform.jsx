import React, { useState } from "react";

export default function Splitform({selectfriend, updatebalance}) {
    let [total, setTotal] = useState("");
    let [yourexpance, setYourxpance] = useState("");
    let [whopay, setWhopay] = useState("you");

    let youramount = Number(yourexpance);
    let totalamount = Number(total);
    let friendexpense = totalamount && youramount >= 0 ? totalamount - youramount : "";

    function handlesubmit(e){
        e.preventDefault();
        let newbalance =0;
        if(whopay=="you"){
            newbalance = friendexpense - youramount; 
        }
        if(whopay=="friend"){
            newbalance = youramount -friendexpense;
        }
        updatebalance(selectfriend.id,newbalance);
       
    }

    return (
        <>
            <section className="container-fluid">
                <div className="col-9">
                    <div className="row">
                        <div className="card">
                            <div className="card-header">
                                <h2 style={{color:"green"}}>Split with {selectfriend.name}</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handlesubmit}>
                                    <input type="text" placeholder="Total Expance" className="form-control mb-2" value={total} onChange={(e)=>setTotal(e.target.value)} />
                                    <input type="text" placeholder="your Expance"className="form-control mb-2" value={yourexpance} onChange={(e)=>setYourxpance(e.target.value)}/>
                                    <input type="text" placeholder="your friend Expance" value={friendexpense} readOnly className="form-control mb-2" />
                                    <select className="form-select mb-2" value={whopay} onChange={(e)=>setWhopay(e.target.value)}>
                                        <option >Open this select menu</option>
                                        <option value="you">you</option>
                                        <option value="friend">{selectfriend.name}</option>
                                    </select>
                                    <button className="btn btn-success btn-sm" type="submit">Split Bill</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

