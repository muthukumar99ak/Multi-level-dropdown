function Option(props) {
    let depth = 1

    const topOption = (list, depth, mainIndex) => {
        return (
            <>
                {list.length > 0 ? list.map((item, index) => (
                    <option key={index} data-index={mainIndex} data-depth={depth}>{item.label}</option>
                )) : null}
                {list.map(item => {
                    if (item.submenu.length > 0) { depth++ }
                    return (

                        item.submenu.length > 0 ? topOption(item.submenu, depth, mainIndex) : null
                    )
                })}
            </>
        )
    }

    return (
        props.value.map((item, index) => {
            depth = 1;
            return <optgroup label={item.label} key={index}>
                <option data-index={index} data-depth={0}>{item.label}</option>
                {topOption(item.submenu, depth, index)}
            </optgroup>
        })

    )
}

export default Option;