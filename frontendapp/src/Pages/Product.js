import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");

    const [mrp, setMrp] = useState("");
    const [price, setPrice] = useState("");
    const [tax, setTax] = useState("");
    const [total, setTotal] = useState("");

    const API = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

    const loadProducts = () => {
        axios
            .get(`${API}/api/product`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);

        if (!productId) {
            setMrp("");
            setPrice("");
            setTax("");
            setTotal("");
            return;
        }

        const product = products.find((p) => p.Product_id == productId);

        if (product) {
            setMrp(product.MRP);
            setPrice(product.Price);
            setTax(product.Tax);

            const totalprice = (Number(product.Price) + Number(product.Tax)).toFixed(2);
            setTotal(totalprice);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="container p-4">

     <h3 className="mb-3">Product Details</h3>
            <div className="d-flex align-items-start gap-4">
                <div>
                    <h6>Select Product</h6>
                    <select
                        className="form-select form-select-sm"
                        style={{ width: "180px" }}   
                        value={selectedProduct}
                        onChange={(e) => handleProductSelect(e.target.value)}
                    >
                        <option value="">-- Product --</option>
                        {products.map((p) => (
                            <option key={p.Product_id} value={p.Product_id}>
                                {p.Product_name}
                            </option>
                        ))}
                    </select>
                </div>
                

                {selectedProduct && (
                    <div className="d-flex gap-3 flex-wrap">

                        <div className="border rounded p-2" style={{ width: "180px", fontSize: "14px" }}>
                            <strong>MRP</strong>
                            <div>₹{mrp}</div>
                        </div>

                        <div className="border rounded p-2" style={{ width: "180px", fontSize: "14px" }}>
                            <label>Price</label>
                            <div>₹{price}</div>
                        </div>

                        <div className="border rounded p-2" style={{ width: "180px", fontSize: "14px" }}>
                            <label>Tax</label>
                            <div>₹{tax}</div>
                        </div>

                        <div className="border rounded p-2" style={{ width: "180px", fontSize: "14px" }}>
                            <strong className="text-success">Total</strong>
                            <div>₹{total}</div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Product;
