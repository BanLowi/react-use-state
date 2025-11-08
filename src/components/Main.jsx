import Navbar from "./Navbar"


export default function Main({ languages }) {



    return (
        <main>

            <div className="container">

                <Navbar
                    languages={languages}
                />


            </div>

        </main>
    )
}