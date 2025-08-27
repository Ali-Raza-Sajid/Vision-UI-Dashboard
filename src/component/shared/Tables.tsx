import React from "react";

interface TableProps {
  titles: string[];
  data: React.ReactNode[][];
}

const Tables: React.FC<TableProps> = ({ titles, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {/* First header cell spans 2 */}
            <th
              colSpan={2}
              className="text-left font-medium md:text-[.65vw] text-[8px] md:py-[.4vw] py-1 text-secondary"
            >
              {titles[0]}
            </th>
            {titles.slice(1).map((title, index) => (
              <th
                key={index}
                className="text-left font-medium md:text-[.65vw] text-[8px] md:py-[.4vw] py-1 text-secondary"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-secondary">
              {/* First cell also spans 2 */}
              <td
                colSpan={2}
                className="md:py-[1vw] py-2 font-medium md:text-[1vw] text-xs"
              >
                {row[0]}
              </td>
              {row.slice(1).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="md:text-[1vw] text-xs md:font-medium py-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
