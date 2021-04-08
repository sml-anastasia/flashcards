import './ModalAdd.css';

function ModalAdd(props) {
    return(
        <div className="modal-add">
            <input className="add-word" placeholder="add word"></input>
            <input className="add-transcr" placeholder="add transcription"></input>
            <textarea className="add-def" id="" cols="10" rows="7" placeholder="add definition"></textarea>
            <textarea className="add-example" id="" cols="10" rows="7" placeholder="add example"></textarea>
            <select className="add-category" id="">
                <option value="">choose category</option>
            </select>
            <button className="add-btn">add</button>
        </div>
    );
}
export default ModalAdd;