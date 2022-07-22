import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

export default function Body(props) {
  // const [file, setFile] = useState();
  const fromData = new FormData();
  const addFile = async function () {
    const file = await Swal.fire({
      title: "Select file",
      input: "file",
      inputAttributes: {
        accept: "*",
      },
    });
    let data = new FormData();
    data.append("image", file);

    let res = await axios.post("http://localhost:3001/upload", {
      data: data,
    });
    console.log(res);
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr id="table_head_row">
            <th scope="col" id="name">
              name
            </th>
            <th scope="col" id="size">
              size
            </th>
            <th scope="col" id="time">
              last modified
            </th>
            <th>
              <p onClick={addFile}>+ (add file)</p>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          {/* {props.fileList.map((file, i) => {
            return (
              <tr key={i}>
                <td>file</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
