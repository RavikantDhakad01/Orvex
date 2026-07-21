import Button from "./Button.jsx"

function Tab({tabs,onClick,activeTab}){
    return (
      <div className="flex justify-around">
       {
        tabs.map((tab)=>(
            <Button key={tab} text={tab} className={`bg-transparent rounded-none  text-xl cursor-pointer ${tab===activeTab?"text-blue-500 border-b border-blue-500":"text-gray-500"}`} onClick={onClick}/>
        ))
       }
  </div>
    )
}
export default  Tab
