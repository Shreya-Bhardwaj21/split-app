import React, { useState, useEffect } from "react";
import Friendslist from "./Friendslist";
import Splitform from "./Splitform";
import { friends } from "../data/friendsdata";
import Addfriend from "./Addfriend";

export default function Dashbord() {
    let [friend, setFriend] = useState(() => {
        let saved = localStorage.getItem("friends");
        return saved ? JSON.parse(saved) : friends;
    });
    let [selectfriend, setSelectfriend] = useState("");
    let [showaddfriend, setShowaddfriend] = useState(false);

    useEffect(() => {
        localStorage.setItem("friends", JSON.stringify(friend));
    }, [friend]);
    function handleselect(f) {
        if (!f) {
            setSelectfriend("");
            return;
        }

        if (selectfriend?.id === f.id) {
            setSelectfriend("");
        } else {
            setSelectfriend(f);
        }
    }
    function handleupdatebalance(id, newbalance) {
        setFriend(prev => prev.map(f =>
            f.id == id ? { ...f, balance: f.balance + newbalance } : f
        )
        )
        setSelectfriend("");
    }
    function handleaddfriend(newfriend) {
        setFriend(prev => [...prev, newfriend]);
    }

    return (
        <>
            <section className="container-fluid">
                <h1 style={{ color: "green", textAlign: "center" }}>Eat, Split & Have Fun😊</h1>
            </section>
            <section className="container-fluid">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-6">
                            <Friendslist friend={friend} onselectfriend={handleselect} selectfriend={selectfriend} />
                        </div>
                        <div className="col-md-6">
                            {selectfriend && (
                                <Splitform selectfriend={selectfriend} updatebalance={handleupdatebalance} />)}
                        </div>
                    </div>
                </div>
            </section>
            {showaddfriend && (
                <Addfriend addfriend={handleaddfriend} closeform={() => setShowaddfriend(false)} />)}

            <button className="btn btn-warning text-white mx-5 my-2" onClick={() => setShowaddfriend(true)}>Add Friend</button>

        </>
    )
}