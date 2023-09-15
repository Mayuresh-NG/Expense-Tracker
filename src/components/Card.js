import './Card.css';

function Card(props) {
    const calasses = 'card '+props.className;
    return <div className={calasses}>{props.children}</div>
}

export default Card;