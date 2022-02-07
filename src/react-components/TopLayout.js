import AddButton from "./AddButton.js"

const TopLayout = ( {formShow, text, btnBgColor} ) => {
  const d = new Date()
  
  //to grab the specific month
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const m = d.getMonth()
  const month = months[m]


  //to catch the specific week
  const w = d.getDay()
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const weekDay = weekDays[w]

    
  let today = `${d.getDate()}th of ${month}, ${d.getFullYear()}.`

    
  return (
    
    <div className="toplayout">
      <p className="today">
          Today's date is {weekDay}, {today} 
      </p>
      <AddButton content={text} onClick={formShow} className="additem" btnBgColor={btnBgColor}/>
    </div>
  )
};

export default TopLayout;
