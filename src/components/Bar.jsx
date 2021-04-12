import '../assets/styles/Bar.css';

function Bar(props) {
    return(
        <div className="aside-bar">
            <span className="aside-bar__link">main page</span>
            <span className="aside-bar__link">vocabulary</span>
            <span className="aside-bar__link">train mode</span>
            <span className="aside-bar__link">topics</span>
        </div>
    );
}
export default Bar;