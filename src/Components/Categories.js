
const Categories = ({ categories, filterItems }) => {
    // console.log(props);
    return(
        <div className="cat-btn">
            {
                categories.map((category, index) => {
                    return(
                        <button key={index} onClick={()=> filterItems(category)}>{ category }</button>
                    )
                })
            }
        </div>
    )
}

export default Categories;