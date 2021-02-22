import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(vendor) {
  const classes = useStyles();
  const history = useHistory();
  // console.log(vendor);

  const handleClickMore = () => {
    history.push(`/vendors/${vendor.vendor._id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={vendor.vendor.vendorData.attribute.content}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {vendor.vendor.vendorData.description.header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {vendor.vendor.vendorData.description.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
            Share
          </Button> */}
        <Button size="small" color="primary" onClick={handleClickMore}>
          More...
        </Button>
      </CardActions>
    </Card>
  );
}
