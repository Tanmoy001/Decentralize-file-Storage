import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;
    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
       console.log(str);
       console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank" rel="noreferrer">
            <img
              key={i}
              src={item}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <div className="display">
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address for access files"
        className="address"
      ></input>
      <div className="getfile_content">
        <h3>Check your all files</h3>
      </div>
      <div className="get_data">
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
      </div>
    </div>
  );
};
export default Display;