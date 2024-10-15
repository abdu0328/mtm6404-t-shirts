const tshirts = [
    { title: 'Blue T-Shirt', image: './images/blue-t-shirt.jpg', price: 7.99, stock: 4 },
    { title: 'Bright Purple T-Shirt', image: './images/bright-purple-t-shirt.jpg', price: 5.99, stock: 1 },
    { title: 'Cobalt Blue T-Shirt', image: './images/cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5 },
    { title: 'Green T-Shirt', image: './images/green-t-shirt.jpg', price: 6.99, stock: 0 },
    { title: 'Grey T-Shirt', image: './images/grey-t-shirt.jpg', price: 4.99, stock: 2 },
    { title: 'Light Green T-Shirt', image: './images/light-green-t-shirt.jpg', price: 7.99, stock: 4 },
    { title: 'Purple T-Shirt', image: './images/purple-t-shirt.jpg', price: 7.99, stock: 0 },
    { title: 'Red T-Shirt', image: './images/red-t-shirt.jpg', price: 6.99, stock: 3 },
    { title: 'Teal T-Shirt', image: './images/teal-t-shirt.jpg', price: 7.99, stock: 2 }
  ];
  
  function App() {
    const [stockData, setStockData] = React.useState(tshirts);
  
    const handleBuy = (index, quantity) => {
      const newStockData = [...stockData];
      newStockData[index].stock -= quantity;
      setStockData(newStockData);
    };
  
    return (
      <div className="tshirt-store">
        {stockData.map((tshirt, index) => (
          <div key={index} className="tshirt">
            <img src={tshirt.image} alt={tshirt.title} className="tshirt-image" />
            <h3>{tshirt.title}</h3>
            <p>Price: ${tshirt.price.toFixed(2)}</p>
            {tshirt.stock > 0 ? (
              <div>
                <p>In Stock: {tshirt.stock}</p>
                <select
                  defaultValue={1}
                  onChange={(e) =>
                    setStockData((prev) =>
                      prev.map((item, idx) =>
                        idx === index ? { ...item, quantity: parseInt(e.target.value) } : item
                      )
                    )
                  }
                >
                  {Array.from({ length: tshirt.stock }, (_, i) => i + 1).map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(index, tshirt.quantity || 1)}>Buy</button>
              </div>
            ) : (
              <p className="out-of-stock">Out of Stock</p>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  