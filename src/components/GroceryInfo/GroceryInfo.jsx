export default function GroceryInfo ({Img, Grocery, Quantity, price, Brand, CartBtn, onSelect}) {
    return (
        <>
        <div id="Groceries">
            <div id="grocery-info-1" style={{border: "2px solid #000", 
                width: "400px", margin: "10px", padding: "10px"}} 
                   onClick = {onSelect}>

                <div className="info">
                    <img src= {Img} width={290} height={240}/>
                    <p>{Grocery}</p>
                    <p>Quantity: {Quantity}</p>
                    <p>Price: {price}</p>
                    <p>Brand: {Brand}</p>
                    <button>{CartBtn}</button>
                </div>            
            </div>               

        </div> 
        </>
    )
}