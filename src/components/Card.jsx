export default function Card({ language }) {

    return (
        <div className="card">
            <h3>{language.title}</h3>
            <p>{language.description}</p>
        </div>
    )
}