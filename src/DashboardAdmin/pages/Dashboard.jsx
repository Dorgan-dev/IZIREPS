import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div>
      <PageHeader />

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Customers */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-gray-500">Customers</h2>
            <p className="text-3xl font-bold mt-2">3,782</p>
            <span className="text-green-500 text-sm">+11.01%</span>
          </div>

          {/* Orders */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-gray-500">Orders</h2>
            <p className="text-3xl font-bold mt-2">5,359</p>
            <span className="text-red-500 text-sm">-9.05%</span>
          </div>

          {/* Monthly Target */}
          <div className="bg-white p-6 rounded-2xl shadow-sm lg:row-span-2 flex flex-col items-center justify-center">
            <h2 className="text-gray-500 mb-4">Monthly Target</h2>

            <div className="w-40 h-40 rounded-full border-[10px] border-blue-500 flex items-center justify-center">
              <span className="text-2xl font-bold">75%</span>
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              You earn $3287 today, keep it up!
            </p>
          </div>

          {/* Monthly Sales */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-4">Monthly Sales</h2>

            <div className="grid grid-cols-12 gap-2 h-40 items-end">
              {[40, 80, 60, 90, 70, 60, 85, 50, 65, 95, 80, 55].map((h, i) => (
                <div
                  key={i}
                  className="bg-blue-500 rounded"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Statistics</h2>

              <div className="flex gap-2 text-sm">
                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
                  Monthly
                </button>
                <button className="px-3 py-1 bg-gray-100 rounded">
                  Quarterly
                </button>
                <button className="px-3 py-1 bg-gray-100 rounded">
                  Annually
                </button>
              </div>
            </div>

            <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-end px-4">
              <div className="w-full h-1 bg-blue-500 rounded"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}