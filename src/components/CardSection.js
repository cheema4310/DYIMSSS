import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
  },
  media: {
    height: 140,
    border: "thin double #48a5ad",
  },
});

function CardSection(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title.toLowerCase()}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {props.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {props.msg}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardSection;
