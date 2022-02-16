const AddButton = ( {onClick, content, btnBgColor} ) => {
  return (
    <button onClick={onClick} className="btn btn-add" style={{backgroundColor: btnBgColor, color: "#fff"}}>
      {content}
    </button>
  )
  
      
};

export default AddButton;
