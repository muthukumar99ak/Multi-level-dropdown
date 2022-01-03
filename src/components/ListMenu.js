import SubMenu from "./SubMenu";

function ListMenu(props) {
    return (
        <li className={props.value.submenu.length > 0 ? 'hasSubmenu' : null}>
            {props.value.label}
            {props.value.submenu.length > 0 ? (
                <ul>
                    {props.value.submenu.map((item, index) => {
                        return <SubMenu
                            key={index}
                            subValue={item}
                        />
                    })}
                </ul>
            )
                :
                null}
        </li>
    )
}

export default ListMenu;