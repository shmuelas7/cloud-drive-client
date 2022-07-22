import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [path, setPath] = useState("root");
  const [fileList, setFileList] = useState([]);

  const getData = async () => {
    const data = await axios.get(`http://localhost:3001/root`);
    console.log(data.data);
    setFileList(data);
  };
  useEffect(() => {
    getData();
  }, [path]);
  return (
    <>
      <Header path={path} />
      <Body setPath={setPath} fileList={fileList} />
      <Footer />
    </>
  );
}

export default App;
