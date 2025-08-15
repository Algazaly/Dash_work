import React from 'react'

const Order = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left">Order Number</th>
              <th className="py-3 px-4 border-b text-left">Customer Name</th>
              <th className="py-3 px-4 border-b text-left">Product Quantity</th>
              <th className="py-3 px-4 border-b text-left">Amount</th>
              <th className="py-3 px-4 border-b text-left">Created At</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>

  )
}

export default Order
