//import { useEffect } from "react";

const DueCalc = ( {todo} ) => {
  const d = new Date()
  var today = `${d.getDate()}-${(d.getMonth())+1}-${d.getFullYear()}`
  const d2 = todo.due


  //to remove seperators
  var str_d2 = d2.split("-")
  var str_today = today.split("-")

  //to format equally - in "day, month, year" format
  var date_d2 = new Date(str_d2[0], str_d2[1], str_d2[2])
  var date_today = new Date(str_today[2], str_today[1], str_today[0])

  //now dates can be subtracted
  var date_diff = (date_d2 - date_today)/(1000*3600*24)

  // useEffect(() => {
  //   day_difference = 

  // }, [days, hours, minutes])

  return (
      <span>{date_diff < 0 ? "DUE!!!" : `Due in ${date_diff} days`}</span>
  )
  
};

export default DueCalc;
