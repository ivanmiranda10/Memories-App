import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { ThumbUpAlt, Delete, MoreHoriz } from "@mui/icons-material";
import moment from "moment";
import { deletePost, likePost } from "../../../redux/actions";
// import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  //   const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card /* className={classes.card} */>
      <CardMedia
        // className={classes.media}
        component="img"
        height="150"
        image={post.selectedFile}
        title={post.title}
      />
      <div /* className={classes.overlay} */>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div /* className={classes.overlay2} */>
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div /* className={classes.details} */>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `# ${tag}`)}
        </Typography>
      </div>
      <Typography
        //   className={classes.title}
        variant="h5"
        gutterBottom
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions /* className={classes.CardActions} */>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
