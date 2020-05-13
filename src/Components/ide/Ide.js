import React, { useState, useEffect } from "react";
import "./ide.css";
import { Form, Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import {connect} from "react-redux"
import { ProgressBar } from "react-bootstrap";
//import {useDispatch} from "react-redux"
import submission from "../../actions/user_actions";
const languages = [
  { key: 1, value: "C" },
  { key: 2, value: "CPP" },
  { key: 3, value: "CPP11" },
  { key: 4, value: "CPP14" },
  { key: 5, value: "CLOJURE" },
  { key: 6, value: "CSHARP" },
  { key: 7, value: "GO" },
  { key: 8, value: "HASKELL" },
  { key: 9, value: "JAVA" },
  { key: 10, value: "JAVA8" },
  { key: 11, value: "JAVASCRIPT_NODE" },
  { key: 12, value: "OBJECTIVEC" },
  { key: 13, value: "PASCAL" },
  { key: 14, value: "PERL" },
  { key: 15, value: "PHP" },
  { key: 16, value: "PYTHON" },
  { key: 17, value: "PYTHON3" },
  { key: 18, value: "R" },
  { key: 19, value: "RUBY" },
  { key: 20, value: "RUST" },
  { key: 21, value: "SCALA" },
  { key: 22, value: "SWIFT" },
  { key: 23, value: "SWIFT_4_1" },
];

function Ide(props) {
  // const dispatch=useDispatch();
  const [Code, setCode] = useState("");
  const [inputval, setinputval] = useState("");
  const [output, setoutput] = useState("");
  const [Lang, setLang] = useState("C");
  const [progressbar, setprogressbar] = useState(0);
  const handlebar = (event) => {
    setCode(event.currentTarget.value);
    //console.log(Code);
  };

  const handlebar2 = (event) => {
    setinputval(event.currentTarget.value);
  };

  const onLanguageSelectChange = (event) => {
    setLang(event.currentTarget.value);
    //  console.log("curr target ", event.currentTarget.value,event.target.value,Lang);
  };
  const buttonsubmit = () => {
    var t = 0;

    var vala = setInterval(() => {
      t = t + 1;
      if (t === 100) {
        setprogressbar(0);
        clearInterval(vala);
        return;
      }
      console.log(t);

      setprogressbar(t);
    }, 2);


    var bodyFormData = new FormData();
    bodyFormData.set(
      "client_secret",
      "478b5aca591b44e6c9ff918b465c160df935bbd3"
    );
    bodyFormData.set("source", Code);
    bodyFormData.set("lang", Lang);
    bodyFormData.set("input", inputval);
    bodyFormData.set("time_limit", "5");
    bodyFormData.set("memory_limit", "262144");
    Axios({
      method: "POST",
      url: "/v3/code/run/",
      data: bodyFormData,
      header: { "Content-Type": `multipart/form-data` },
    })
      .then((response) => {
        if (response.data.compile_status === "OK") {
          setoutput(response.data.run_status.output);
          setprogressbar(0);
          const da = {
            data: Code,
            lang: Lang,
            Status: response.data.compile_status,
            Output: response.data.run_status.output,
          };
          props.onsubmission(da);
         console.log("in if")
          Axios.post("https://codeblood-ac5c2.firebaseio.com/order.json", da)
            .then((response) => {
              console.log("successfully stored");
              
            })
            .catch((error) => {
              console.log("not stored in resonse");
            });
          //dispatch(submission(da));
        } else {
          console.log("in else")
          Axios({
            method: "POST",
            url: "/v3/code/compile/",
            data: bodyFormData,
            header: { "Content-Type": `multipart/form-data` },
          })
            .then((response) => {
              setoutput(response.data.compile_status);
              setprogressbar(0);
              
              const da = {
                data: Code,
                lang: Lang,
                Status: response.data.compile_status,
                Output: response.data.run_status.output,
              };
              props.onsubmission(da);
              Axios.post("https://codeblood-ac5c2.firebaseio.com/order.json", da)
                .then((response) => {
                  console.log("successfully stored");
                })
                .catch((error) => {
                  console.log("not stored in resonse");
                });
      
       


            })
            .catch((error) => {
              setoutput(error);
              setprogressbar(0);
            });
        }
        console.log("succewss ", response);
      })
      .catch((error) => {
        setoutput(error + "\n Check your code again");
        console.log(error);
        setprogressbar(0);
      });

    //Axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    //console.log(Axios.defaults.headers);

    //     Axios({
    //       url:"https://api.hackerearth.com/v3/code/run",
    //       method:"post",
    //       data:data,
    //       header:{
    //         'Content-Type': 'multipart/form-data',
    //         "Access-Control-Allow-Origin":"http://localhost:3000"
    //       }
    //     }).then(response=>{
    //       setoutput(response);
    //       console.log(response);
    //     }).catch(error=>{
    //       setoutput(error);
    // console.log(error);
    //     })

    // Axios.post("https://api.hackerearth.com/v3/code/run/", data)
    //   .then((response) => {
    //     setoutput(response.data);
    //     console.log(response, response.data, response.data.message);
    //   })
    //   .catch((error) => {
    //     setoutput(error);
    //     console.log(error);
    //   });
    //
  };
  return (
    <div className="ide_min_div">
      <h2 className="main_headi">Welcome to the best ide</h2>
      <div className="additional">
        <div className="row">
          <div className="col-6 p1">
            <h1>Paste your Code here</h1>
            <Form.Control
              as="textarea"
              rows="15"
              value={Code}
              onChange={handlebar}
            />
            <h2>Input</h2>
            <Form.Control
              as="textarea"
              rows="3"
              value={inputval}
              onChange={handlebar2}
            />
          </div>

          <div className="col-6 p2">
            <label for="cars">Select the Language:</label>

            <select onChange={onLanguageSelectChange}>
              {languages.map((item) => (
                <option key={item.key} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>

            <div></div>
            <button className="btn btn-primary" onClick={buttonsubmit}>
              Submit
            </button>
            <br />
            <br />
            {progressbar !== 0 ? (
              <div className="prograss_class">
                <ProgressBar
                  animated
                  now={progressbar}
                  label={`${progressbar}%`}
                  sronly
                />
              </div>
            ) : (
              <div className="prograss_class"></div>
            )}
            <div className="right-lower">
              <h3>Output</h3>
              <Form.Control as="textarea" value={output} disabled rows="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




const mapdispatchtoprops  =dispatch=>{
return {
  onsubmission:(data)=>dispatch({type:"submission",payload:data})
}
}

export default connect(null,mapdispatchtoprops)(Ide);
