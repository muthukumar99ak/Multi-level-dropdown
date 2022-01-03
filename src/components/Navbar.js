import ListMenu from "./ListMenu";

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                {props.list.map((item, index) => (
                    <ListMenu
                        key={index}
                        value={item}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Navbar;