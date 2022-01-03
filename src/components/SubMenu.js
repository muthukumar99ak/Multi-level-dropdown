import ListMenu from "./ListMenu";

function Submenu(props) {
    return (
        <li className={props.subValue.submenu.length > 0 ? 'hasSubmenu' : null}>
            {props.subValue.label}
            {props.subValue.submenu.length > 0 ? (
                <ul>
                    {props.subValue.submenu.map((item, index) => {
                        return <ListMenu
                            key={index}
                            value={item}
                        />
                    })}
                </ul>
            )
                :
                null}
        </li>
    )
}

export default Submenu;