export default function Card({ language }) {

    return (
        <div className="card p-2">
            <h5>{language.title}</h5>
            <p>{language.description}</p>
        </div>
    )
}