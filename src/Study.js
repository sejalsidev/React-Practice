function Study(props) {
    // console.log(props.data.item);

  return (
    <div className="list">
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.contactNo}</span>
    </div>
  )
}

export default Study