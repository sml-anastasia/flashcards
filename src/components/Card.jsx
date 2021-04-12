import '../assets/styles/Card.css';

function Card(props) {
    return(
        <div className="card">
            <div className="card-word">apple</div>
            <div className="card-transcr">[ˈap(ə)l]</div>
            <div className="card-def">a round, edible fruit having a red, green, or yellow skin, or the tree on which it grows</div>
            <div className="card-category">food</div>
            <div className="card-example">He took a bite out of the apple.</div>
        </div>
    );
}
export default Card;