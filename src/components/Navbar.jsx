import { useState } from "react"
import Card from "./Card"

export default function Navbar({ languages }) {

    const [btnId, setBtnId] = useState(null)

    const selectedCard = languages.find((language) => {
        return language.id === setBtnId
    })


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
                            onClick={() => setBtnId(language.id)}
                            className={`${btnId == language.id ? "current" : ""}`}
                        >{language.title}</button>
                    ))
                }
            </nav >

            {selectedCard && (
                <Card
                    title={languages.title}
                    description={languages.description}
                />
            )}

        </div>
    )
}