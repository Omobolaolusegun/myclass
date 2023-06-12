import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import State from './Component/State';
// import Details from './Component/Details'
import reportWebVitals from './reportWebVitals';
// import {BrokenLink} from '/component/404'
// import Bndout from './Component/Bndout'
import ComponentInteraction from './ComponentInteraction';
import Cbt from './Component/Cbt';
// import Edit from '/Routes/Edit'
import HandlingInput from './Component/HandlingInput';
// import Navbar from './Component/Navbar'
// import Fetch from './Component/Fetch';
// import NewPost from './Component/NewPost';
import MainRouter from './Routes/MainRouter';
import {Provider} from 'react-redux'
// import DisplayPost from './Component/DisplayPost';
// import CustomHook from './Component/CustomHook';
// import Details from './Component/Details';
import store from './Component/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <MainRouter/>
    {/* <Fetch/> */}
    {/* <NewPost/> */}
    {/* <Edit/> */}
    </Provider>
    <ComponentInteraction/>
    {/* <State /> */}
    {/* <Details /> */}
    <HandlingInput/>

    {/* <Navbar/> */}

    
    {/* <CustomHook/> */}
    {/* <Details/> */}
    <Cbt/>
    {/* <Bndout/> */}
    {/* <NewPost/> */}
    {/* <DisplayPost/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
