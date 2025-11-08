export default function Card({ languages }) {

    return (
        <div className="card">
            <h3>{languages.title}</h3>
            <p>{languages.description}</p>
        </div>
    )
}