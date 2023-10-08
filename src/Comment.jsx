const formatDate = (date) => {
  return new Date(date).toTimeString()
}

function Avatar(props) {
  return <img src={props.author.avatarUrl} alt={props.author.name} />
}

function UserInfo(props) {
  return (
    <div className='userInfo'>
      <Avatar />
    </div>
  )
}

function Comment(props) {
  return (
    <div className='comment'>
      <UserInfo />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment
