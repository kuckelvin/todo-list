const AddButton = ( {onClick, content, btnBgColor} ) => {
  return (
    <button onClick={onClick} className="btn btn-add" style={{backgroundColor: btnBgColor}}>
      {content}
    </button>
  )
  
      
};

export default AddButton;
