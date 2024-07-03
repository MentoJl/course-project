import { message, Image } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'

const CommentTable = ({ title = '' }) => {
  const [commentList, setCommentList] = useState([])

  const addComment = (title, comment) => {
    const newRow = {
      title: <span className={styles.commentTitle}>{title}</span>,
      comment: <span className={styles.commentText}>{comment}</span>,
    }
    setCommentList((prevCommentList) => [...prevCommentList, newRow])
  }

  useEffect(() => {
    setCommentList([])
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://database/takeAction?beat_name=${title}&action=comment`)
        response.data.forEach((data) => {
          addComment(data.login, data.value)
        })
        message.success(`Success Load`)
      } catch (err) {
        message.error(`Error to load comments: ${err}`)
      }
    }

    fetchComments()
  }, [title])

  return (
    <div className={styles.commentTableContainer}>
      <span className={styles.commentTableText}>Comments</span>
      <table className={styles.commentTable}>
        {commentList != [] 
        ?
        commentList.map((comment) => (
          <tr className={styles.commentContainer}>
            <td className={styles.commentTitleContainer}>
              <Image src='./user/avatar.png' className={styles.commentUserLogo}></Image>
              <span className={styles.commentTitle}>{comment.title}</span>
            </td>
            <td className={styles.commentTextContainer}>
              <span className={styles.commentText}>{comment.comment}</span>
            </td>
          </tr>
        ))
        : 
        <tr className={styles.notCommentHead}>
          <td className={styles.notCommentBody}>
            <span className={styles.notCommentText}>Not Comments Yet</span>
          </td>  
        </tr>}
      </table>
    </div>
  )
}

export default CommentTable
