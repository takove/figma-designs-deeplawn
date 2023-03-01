import React from "react";

export default function TableBody(props: any) {
    const table = props.table
  return (
      <tbody>
        {table.map((table:any) => (
            <tr className="bg-white border-b  ">            
            <td className="px-6 py-4">{table.address}</td>
            <td className="px-6 py-4">{table.ownersName}</td>
            <td className="px-6 py-4">{table.date}</td>
            <td className="px-6 py-4">{table.amountPaid}</td>
            <td className="px-6 py-4">{table.type}</td>
            <td className="px-6 py-4 text-left">
              <a href="/" className="font-medium text-blue-600  hover:underline">
                View
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    
  );
}
