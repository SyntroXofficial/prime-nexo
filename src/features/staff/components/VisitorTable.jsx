import React from 'react';

export default function VisitorTable({ visitors }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="pb-4 text-gray-400">IP Address</th>
            <th className="pb-4 text-gray-400">Source</th>
            <th className="pb-4 text-gray-400">Browser</th>
            <th className="pb-4 text-gray-400">OS</th>
            <th className="pb-4 text-gray-400">Visit Time</th>
            <th className="pb-4 text-gray-400">Verified</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={index} className="border-b border-white/5">
              <td className="py-4 text-white">{visitor.ip}</td>
              <td className="py-4 text-white">{visitor.source}</td>
              <td className="py-4 text-white">{visitor.browser}</td>
              <td className="py-4 text-white">{visitor.os}</td>
              <td className="py-4 text-white">{new Date(visitor.timestamp).toLocaleString()}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  visitor.verified
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {visitor.verified ? 'Yes' : 'No'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}