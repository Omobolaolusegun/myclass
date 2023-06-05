// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Navbar";
// import Home from "./Component/Home";
// import Icon from "./Component/Icon";
// import Bndout from "./Component/Bndout"
import "./style.css";
// import styles from "./style.module.css";
// import Cbt from "./Component/Cbt";
// import State from "./Component/State";
// import Details from "./ComponentDetails"

const App = () => {
  const myName = "Esther Olusegun";
  const user = {
    name: "Esther",
    school: "SQI",
    dept: "Software Engineering",
  };

  // const numbers = [0,1,2,3,4,5,6,7,8]
  // const name = ['Easther','Queen','Olusegun','Omobola']

  // const users = [
  //   { name: "Queen", school: "Sqi" },
  //   { name: "Samuel", school: "Fuoye" },
  //   { name: "Adesewa", school: "Lautech" },
  // ];
  return (
    <>
    hello
    {/* <Cbt/> */}
    {/* <State/> */}
    {/* <Details/> */}
    {/* <Bndout/> */}
      <Navbar/>
      {/* <Home/> */}
      {/* <Icon/> */}
      {/* <availableQuestion/> */}

      {/* <h3 className="heading">I am Esther</h3>
        <h3 className="{style.subtitle}">Software Engineering</h3>
        <h3 className="{style.subtitle}" style={{backgroundColor:'blue'}} >Software Engineering</h3>
        <h1>Hello {myName}</h1>
        <div>My name is {user.name},I attend {user.school} college of ict,Am {user.dept}department</div> */}
      {/* {
          numbers.filter((each, l)=> l <=6).map(each => (<span key={"Felix"}  className="`p-2 shadow rounded m-2 ${if(l==2 ? bg-red : bg-dark)}`">{each}</span>))

        
        } */}
      {
           users.map((each, i)=>(
            <span key={i} className="p-2 m-2 shadow rounded">{each.name} <small>{each.school}</small></span>
           )
          
          
        )
        }
    
    </>
  );
};

export default App;
