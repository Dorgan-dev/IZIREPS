import { useParams } from "react-router-dom";
import products from "../data/product.json";

export default function ProductDetail() {
    const { id } = useParams();

    const product = products[Number(id)];

    if (!product) {
        return <div>Produk tidak ditemukan</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <img
                src={product.image}
                alt={product.title}
                className="mt-4 rounded-lg"
            />

            <p className="mt-4">
                Kategori: {product.category}
            </p>

            <p>
                Rental: {product.brand}
            </p>

            <p className="font-bold text-blue-600">
                Rp {product.price.toLocaleString("id-ID")}
            </p>
        </div>
    );
}