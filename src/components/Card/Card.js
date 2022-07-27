import './Card.css'

const Card = ({ fname, lname, email, image }) => {
    return (
            <div className="card">
                <img className="card-img" src={image} alt="user" />
                    <div className="card-body">
                        <h5 className="card-title">{fname+" "+lname}</h5>
                        <p className="email">{email}</p>
                        
                    </div>
            </div>
        )
}

export default Card;