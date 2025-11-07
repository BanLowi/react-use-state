export default function Navbar({ languages }) {

    return (
        <nav className="navbar navbar-expand">

            {
                languages.map(language => (
                    <button key={language.id}>{language.title}</button>
                ))
            }


        </nav>
    )
}