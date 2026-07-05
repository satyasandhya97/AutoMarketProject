import React from 'react';

export default function DetailSpecs({ listing }) {
  if (!listing.fullSpecs) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 animate-fade-in">
      <h3 className="text-lg font-bold text-primary-dark mb-4 pb-2 border-b border-gray-100">Specifications</h3>
      {Object.entries(listing.fullSpecs).map(([sectionTitle, specsArray]) => (
        <div key={sectionTitle} className="mb-6 last:mb-2">
          <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{sectionTitle}</h4>
          <table className="w-full border-collapse">
            <tbody>
              {specsArray.map((spec, i) => (
                <tr key={i} className="border-b border-gray-55 last:border-b-0 odd:bg-gray-50/30">
                  <td className="w-[40%] p-2.5 text-xs font-semibold text-gray-500">{spec.name}</td>
                  <td className="p-2.5 text-xs font-bold text-gray-800">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
