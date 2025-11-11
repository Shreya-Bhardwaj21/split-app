import React from "react";

export default function Friendslist({ friend,onselectfriend,selectfriend }) {
    function balance(f) {
        if (f.balance > 0) {
            return `${f.name} owes your ${f.balance}`
        }
        else if (f.balance < 0) {
            return `you owes ${f.name} ${Math.abs(f.balance)}`
        }
        else {
            return `you and ${f.name} are good`
        }
    }
    function textcolor(f) {
        if (f.balance > 0) {
            return "red"
        }
        else if (f.balance < 0) {
            return "orange"
        }
        else {
            return "green"
        }
    }

    return (
        <>
            <ul className="list-group m-4">
                {friend.map(f => (
                    <li className="list-group-item m-2 d-flex align-items-center justify-content-between" key={f.id}>
                        <div className="d-flex align-tems-center">
                            <img className="mx-3" src={f.img} width="50" height="50" style={{ borderRadius: "80%", marginRight: "60px" }} />
                            <span className="mx-4">{f.name}</span>
                        </div>
                        <div className="d-flex align-tems-center">
                           <span className="mx-5" style={{ color: textcolor(f), marginLeft: "70px" }}>{balance(f)}</span>
                            <button className="btn btn-success btn-sm mx-5" onClick={() =>
                                   selectfriend?.id === f.id
                                        ? onselectfriend("")   
                                        : onselectfriend(f)      
                                }
                                >
                                {selectfriend?.id === f.id ? "Close" : "Split"}</button>
                        </div>
                    </li>
                ))

                }
            </ul>
        </>
    )
}

