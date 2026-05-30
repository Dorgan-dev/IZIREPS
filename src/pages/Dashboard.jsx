// src/pages/Dashboard.jsx

import PageHeader from "../components/PageHeader";

import {
  FaGamepad,
  FaMoneyBillWave,
  FaUsers,
  FaClock,
} from "react-icons/fa";

import bookings from "../data/bookings.json";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <PageHeader />

      <div className="p-6">

        {/* TOP CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Total Booking */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Total Booking
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  128
                </h2>

                <p className="text-green-500 text-sm mt-2">
                  +12% minggu ini
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaGamepad />
              </div>

            </div>
          </div>

          {/* Pendapatan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Pendapatan Hari Ini
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  Rp 2.4jt
                </h2>

                <p className="text-green-500 text-sm mt-2">
                  +8% dari kemarin
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                <FaMoneyBillWave />
              </div>

            </div>
          </div>

          {/* Customer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Customer Aktif
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  54
                </h2>

                <p className="text-blue-500 text-sm mt-2">
                  12 customer online
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">
                <FaUsers />
              </div>

            </div>
          </div>

          {/* Jam Bermain */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Jam Bermain
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  76 Jam
                </h2>

                <p className="text-orange-500 text-sm mt-2">
                  +5 jam hari ini
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl">
                <FaClock />
              </div>

            </div>
          </div>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

          {/* TABLE */}
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Booking Playstation
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Data booking terbaru customer
                </p>
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-xl text-sm">
                Lihat Semua
              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="text-left border-b text-gray-400 text-sm">
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Room</th>
                    <th className="pb-4">Durasi</th>
                    <th className="pb-4">Harga</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>

                  {bookings.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b last:border-none"
                    >

                      <td className="py-5 font-medium text-gray-700">
                        {item.customer}
                      </td>

                      <td className="py-5 text-gray-500">
                        {item.ps}
                      </td>

                      <td className="py-5 text-gray-500">
                        {item.duration}
                      </td>

                      <td className="py-5 font-semibold text-gray-700">
                        Rp {item.price.toLocaleString("id-ID")}
                      </td>

                      <td className="py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Finished"
                              ? "bg-green-100 text-green-600"
                              : item.status === "Playing"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {item.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* AKTIVITAS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Aktivitas
            </h2>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

                <div>
                  <h3 className="font-semibold text-gray-700">
                    Booking Baru
                  </h3>

                  <p className="text-sm text-gray-400">
                    Rafif booking PS5 VIP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

                <div>
                  <h3 className="font-semibold text-gray-700">
                    Pembayaran Masuk
                  </h3>

                  <p className="text-sm text-gray-400">
                    Pedro membayar Rp 45.000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>

                <div>
                  <h3 className="font-semibold text-gray-700">
                    Waktu Hampir Habis
                  </h3>

                  <p className="text-sm text-gray-400">
                    Room VIP tersisa 10 menit
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}