import transactions from "../data/transactions.json";

export default function TransactionTable() {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 mt-8">
      
      <h2 className="text-white text-2xl font-bold mb-6">
        Transaksi Terbaru
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="text-slate-400 border-b border-white/10">
              <th className="pb-4">Customer</th>
              <th className="pb-4">Service</th>
              <th className="pb-4">Harga</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-white/5"
              >
                <td className="py-5 text-white">
                  {item.customer}
                </td>

                <td className="text-slate-300">
                  {item.service}
                </td>

                <td className="text-cyan-400 font-semibold">
                  {item.price}
                </td>

                <td>
                  <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}