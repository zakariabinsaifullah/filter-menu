
const Menu = ({ items }) =>{
    return(
        <div className="items-wrapper">
            {
                items.map((item)=>{
                    return(
                        <div className="single-item" key={item.id}>
                            <div className="image">
                                <img src={item.photo} alt={item.title} />
                            </div>
                            <div className="item-info">
                                <div className="title">
                                    { item.title }
                                </div>
                                <p className="price">${item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu;