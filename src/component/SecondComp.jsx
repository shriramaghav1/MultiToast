import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const SecondComp = ({count,setCount}) => {
  // const [count, setCount] = useState(0);
  const [toast, setToast] = useState([]);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState(7000);
  const [customToast, setCustomToast] = useState("");

  const removeToastNow = (count) => {
    console.log("CLicked ", count);
    setToast((toast) => toast.filter((c) => c.count !== count));
    console.log(toast);
  };
  const removeToast = (count) => {
    setTimeout(() => {
      setToast((toast) => toast.filter((c) => c.count !== count));
    }, time);
  };
  const toastInvoke = (count) => {
    if (toast.length == 3) return;
    setCount(count + 1);

    setToast((old) => [...old, customToast ? {count:count,text:customToast} :{count:count} ]);
    removeToast(count);
    setCustomToast("");
  };

  return (
    <div className="h-[100%] relative z-0">
     <div className="btnContent p-5 mt-4 flex justify-start gap-8 ">
        <div className="leftp-5 mt-4 flex justify-start gap-8 items-start flex-col ml-9">
           <label htmlFor="" className=" text-gray-600">
             Enter custom toast text
             <br />
             <input
               type="text"
               className="p-1 border border-1 border-gray-500 rounded-[4px] text-md w-[18rem] my-1 "
               placeholder="Enter here"
               value={customToast}
               onChange={(e) => setCustomToast(e.target.value)}
             />
           </label>
           <button
             onClick={() => {
               toastInvoke(count);
             }}
             className="p-2 rounded-lg cursor-pointer bg-[#959ff8] border-[0.1rem_solid_transparent] text-sm px-8 py-2 text-white"
           >
             Show Toast Message
           </button>
         </div>
         <div className="right">
           <div
             onClick={() => setModal(!modal)}
             className="symboll w-fit p-2 rounded-md cursor-pointer  bg-gray-200"
           >
             <IoMdSettings fontSize={"1.2rem"} />
           </div>
         </div>
       </div>

      <div className="w-[100%] flex justify-center items-center absolute bottom-0 mb-1  flex-col">
        {toast
          .slice()
          .reverse()
          .map((item,index) => (
            <div className="toast rounded-sm bg-[#9ae09a]  text-left p-1.5 px-2 w-[11rem] flex justify-between items-center mb-2">
              <span>{item.text ? item.text :"Textest: "}{item.count}</span>
              <span>
                <IoCloseSharp  onClick={() => {
                    removeToastNow(item.count);
                  }} />
              </span>
            </div>
          ))}
      </div>
      {modal && (
        <div className="modal z-20 top-0 bottom-0 left-0 right-0 bg-[#7f7f7f75]  absolute  flex justify-center items-center">
          <div className="form flex justify-center items-center flex-col gap-8 bg-white p-0.5 border w-[26rem] rounded-md">
            <div className="cross w-[100%] flex justify-end items-center">
              {" "}
              <IoCloseSharp  fontSize={"1.2rem"} onClick={()=>{setModal(!modal)}}/>
            </div>
           <label htmlFor="" className="text-md font-semibold">
            SetTimeOut: 
           <input type="number"  className="p-1 border border-1 rounded-md mx-2" onChange={(e)=>setTime(e.target.value)} />
           </label>
            <button onClick={()=>setModal(!modal)} className="bg-green-300 p-2 m-2 rounded-md px-8 hover:opacity-85 duration-100">Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondComp;

