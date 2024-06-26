import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import axios from "axios";
import { message } from "antd";

const CommentTable = ({ title = 'Beef' }) => {
  const [commentList, setCommentList] = useState([]);

  const addComment = (title, comment) => {
    const newRow = {
      title: <span className={styles.commentTitle}>{title}</span>,
      comment: <span className={styles.commentText}>{comment}</span>,
    };
    setCommentList((prevCommentList) => [...prevCommentList, newRow]);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://database/takeAction?beat_name=${title}&action=comment`);
        response.data.forEach((data) => {
          addComment(data.login, data.value);
        });
        message.success(`Success Load`)
      } catch (err) {
        message.error(`Error to load comments: ${err}`);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.commentTableContainer}>
      <table className={styles.commentTable}>
        {commentList.map((comment) => (
        <tr className={styles.commentContainer}>
          <td className={styles.commentTitleContainer}>
            <span className={styles.commentTitle}>{comment.title}</span>
          </td>
          <td className={styles.commentTextContainer}>
            <span className={styles.commentText}>{comment.comment}</span>
          </td>
        </tr>
        ))}
      </table>
    </div>
  );
};

export default CommentTable;