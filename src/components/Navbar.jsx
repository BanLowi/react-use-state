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
                            className={`${btnId == language.id ? "current" : ""}`}
                        >{language.title}</button>
                    ))
                }
            </nav >

            {
                languages.map(language => {

                    return language.id === btnId ? (<Card key={language.id} language={language} />) : ""
                })
            }

        </div>
    )
}