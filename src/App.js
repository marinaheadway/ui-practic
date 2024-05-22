

     //TABS//

// import TabInfoOne from './Tabs/TabInfoOne';
// import TabInfoTwo from './Tabs/TabInfoTwo';
// import TabInfoThree from './Tabs/TabInfoThree';
// import Tabs from './Tabs/Tabs';


// function App() {
// const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="App">
// <Tabs setActiveTab={setActiveTab} />
// {activeTab ===0 && <TabInfoOne/>}
// {activeTab ===1 && <TabInfoTwo/>}
// {activeTab ===2 && <TabInfoThree/>}
//     </div>
//   );
// }

   //Modal//

// import { useState } from 'react';
// import './App.css';
// import Modal from './Modal/Modal';
// import Content from './Modal/Content';

// function App (){

//   const [isOpen, setIsOpen]= useState(false)

//   return (<div>

// <button onClick = {()=> setIsOpen(true)}> Open Modal</button>
// {isOpen &&
// <Modal setIsOpen={setIsOpen}>
// <Content setIsOpen={setIsOpen}/>
// </Modal>
// }
// </div>
//   )

// }


 //LOADER//

// import { useEffect, useState } from "react";
// import "./App.css"
// import LoaderPage from "./Loader/LoaderPage";

// function App () {
//   const [stateLoader, setStateLoader]= useState(true);

//   useEffect (()=> {
//     const timer = setTimeout(()=> setStateLoader(false), 3000);
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div>
//       {stateLoader && <LoaderPage/>}
//     </div>
//   )
// }


//ALERT//

// import Swal from "sweetalert2";
// import "./App.css";


// function App() {
// const handleAlert =()=> {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://plus.unsplash.com/premium_photo-1683749809341-23a70a91b195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image"
//   });
// }

//   return (<button onClick={handleAlert}>ALERT</button>

//   );
// }


 //MyForm//
// import "./App.css";
// import MyForm from "./Form/MyForm";

// function App() {

//   return (
// <MyForm/>
//   )
// }

import { useTransition } from "react";
import "./App.css";

function App () {

  const { i18n, t } = useTransition();

const toggleLang = () => {
  i18n.changeLanguage (i18n.language === 'en' ? 'ru' : 'en')
}

return (

  <div>
  <h1>{t("Welcome to React")}</h1>
  <button onClick={toggleLang}>
  {i18n.language === "en" ? "RU" : "EN" }
  </button>
  </div>

)

}

export default App;
