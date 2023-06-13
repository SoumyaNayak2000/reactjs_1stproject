import React from "react";

const carData = [
  {
    name: "BMW",
    model: "2021",
  },
  {
    name: "Audi",
    model: "2021",
  },
  {
    name: "mercedes",
    model: "2021",
  },
  {
    name: "mahindra",
    model: "2022",
  },
  {
    name: "suzuki",
    model: "2020",
  },
];

const Home = () => {
  //   const carInfo = carData.map((data) => (
  //     <tr>
  //       <td>{data.name}</td>
  //       <td>{data.model}</td>
  //     </tr>
  //   ));

  //   const models=carData.filter(data=>
  //     data.model === '2021'
  //   )

  //   const carInfo = models.map((carModel) => (
  //     <tr>
  //       <td>{carModel.name}</td>
  //       <td>{carModel.model}</td>
  //     </tr>
  //   ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {/* {carInfo} */}
          {
          carData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.model}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
