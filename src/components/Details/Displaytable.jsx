import React from "react";

function Displaytable() {
  const localStoradata = localStorage.getItem("formData");
  const data = JSON.parse(localStoradata);
  console.log(data);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 && (
            <tr>
              <td colSpan="3">No data found</td>
            </tr>
          )}

          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Displaytable;
