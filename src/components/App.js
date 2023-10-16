
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const male = ['Shirts', 'Facial-grooming kits', 'Hair styling', 'Jeans', 'Shoes']
  const female = ['Tops', 'Skirts', 'Makeup items', 'Jewellery', 'Sandals']
  const [data, setData] = useState(male)
  function changeData(e) {
    if (e === "male") {
      setData(male)
    }
    else {
      setData(female)
    }
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <select onChange={(e)=>changeData(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <ul >
      {
        data && data.map((item) => (
          <li>{item }</li>
        ))
        }
      </ul>
    </div>
  )
}

export default App
