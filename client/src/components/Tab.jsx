

function Tab({tabs,onClick,activeTab}){
    return (
      <div className="flex justify-around">
       {
        tabs.map((tab)=>(
            <button key={tab} className={`bg-transparent rounded-none px-1 pb-3  text-xl cursor-pointer ${tab===activeTab?"text-blue-500 border-b-1 border-blue-500":"text-gray-500"}`} onClick={()=>onClick(tab)}>{tab}</button>
            
        ))
       }
  </div>
    )
}
export default  Tab
