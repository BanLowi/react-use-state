import { useState } from "react"
import Card from "./Card"

export default function Navbar({ languages }) {

    const [btnId, setBtnId] = useState(0)

    function handleClick(id) {
        if (btnId === id) {
            setBtnId(0)
        } else {
            setBtnId(id)
        }
    }

    return (
        <div>

            <nav className="navbar navbar-expand">

                {/*             {
                btnId
            } */}



                {
                    languages.map(language => (
                        <button
                            key={language.id}
                            onClick={() => handleClick(language.id)}
                            className={`${btnId == language.id ? "current" : ""} btn btn-primary m-1`}
                        >{language.title}</button>
                    ))
                }
            </nav >


            {btnId === 0 ? (
                <p>Seleziona un linguaggio!</p>
            ) : (


                languages.map(language => {

                    return btnId === language.id ? (<Card key={language.id} language={language} />) : ""
                })

            )}


        </div>
    )
}