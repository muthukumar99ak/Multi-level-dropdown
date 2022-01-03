import { useRef, useState } from "react";
import Option from "./Option";

function Form(props) {
    const [cateName, setCateName] = useState('')
    const [parentCateSel, setParentCateSel] = useState('defValue')
    const [parentCateOpt] = useState(props.list)
    const [indexDepth, setIndexDepth] = useState({
        index: '',
        depth: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        if (parentCateSel == 'defValue') {
            return alert('Please select category')
        }
        let isThere = props.cateList.find(item => {
            return item.toLowerCase() === cateName.toLowerCase()

        })
        if (!isThere) {
            props.addData(cateName, parentCateSel, indexDepth)
            setParentCateSel('defValue');
            setCateName('')
        } else {
            return alert("Please choose different name")
        }

    }

    const handleSelect = (event) => {
        let index = parseInt(event.target[event.target.selectedIndex].getAttribute('data-index'))
        let depth = parseInt(event.target[event.target.selectedIndex].getAttribute('data-depth'))
        setParentCateSel(event.target.value)
        setIndexDepth({
            index: index,
            depth: depth
        })
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <h2>Add New Category</h2>
                <div>
                    <label className="form-label">Category Name</label>
                    <input className="form-control" value={cateName} onChange={(e) => setCateName(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label">Parent Category</label>
                    <select className="form-control" value={parentCateSel} onChange={handleSelect} required  >
                        <option disabled value='defValue'>Select Category</option>
                        <Option
                            value={parentCateOpt}
                            dept={1}
                        />
                    </select>
                </div>
                <div>
                    <button className="btn-save" type="submit">Add Category</button>
                </div>
            </form>
        </div>
    )
}

export default Form;