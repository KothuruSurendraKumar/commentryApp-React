// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, isLike, id, date, intialClassName} = commentDetails
  const intial = name ? name[0].toUpperCase() : ''

  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLike ? 'button1 onActive' : 'button1'
  const postedTime = formatDistanceToNow(date)
  const onClickIsActive = () => {
    const {toggleIsLike} = props
    toggleIsLike(id)
  }
  const onClickDelete = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="side">
        <div className={intialClassName}>
          <p className="intial">{intial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="head">{name}</p>
            <p className="text">{postedTime} ago</p>
          </div>
          <p className="main-comment">{comment}</p>
        </div>
      </div>
      <div className="icons-container">
        <div className="button-element">
          <img src={likeImgUrl} alt="like" className="like" />
          <button
            className={likeClassName}
            type="button"
            onClick={onClickIsActive}
          >
            Like
          </button>
        </div>
        <button
          className="button1"
          type="button"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
