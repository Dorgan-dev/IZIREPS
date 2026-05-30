import { useState } from "react";
import PageHeader from "../components/PageHeader";
import products from "../data/product.json";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Products() {
    const breadcrumb = ["Dashboard", "Rental PS"];

    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");
    const [error] = useState(null);

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div>
            <PageHeader
                title="Daftar Rental PS"
                breadcrumb={breadcrumb}
            />

            {errorInfo}

            {/* Search */}
            <div className="flex gap-3 mb-4">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Cari paket rental..."
                    className="flex-1 p-3 bg-white rounded-2xl shadow-lg"
                />

                <button
                    onClick={() => setQuery(searchText)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
                <thead>
                    <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Nama Paket</th>
                        <th className="px-4 py-3">Kategori</th>
                        <th className="px-4 py-3">Tarif</th>
                        <th className="px-4 py-3">Rental</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4">
                                    {index + 1}
                                </td>

                               <td className="px-6 py-4 font-semibold">
    <Link
        to={`/products/${index}`}
        className="text-blue-600 hover:underline"
    >
        {item.title}
    </Link>
</td>

                                <td className="px-6 py-4">
                                    {item.category}
                                </td>

                                <td className="px-6 py-4">
                                    Rp {item.price.toLocaleString("id-ID")}
                                </td>

                                <td className="px-6 py-4">
                                    {item.brand}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                className="text-center py-4 text-gray-500"
                            >
                                Paket rental tidak ditemukan
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}