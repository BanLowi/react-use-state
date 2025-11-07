import { useState } from "react"

export default function Navbar({ languages }) {

    const [btnId, setBtnID] = useState(-1)



    return (
        <nav className="navbar navbar-expand">

            {/*             {
                btnId
            } */}



            {
                languages.map(language => (
                    <button key={language.id} onClick={() => setBtnID(language.id)} className={`${btnId == language.id ? "current" : ""}`}>{language.title}</button>
                ))
            }
        </nav>
    )
}