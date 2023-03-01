import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        columns={9}
        style={{ textAlign: "left", marginTop: 100 }}
      >
        <Grid item xs={6}>
          <Card
            sx={{
              minWidth: 275,
              marginLeft: 10,
              maxHeight: 350,
              overflow: "auto",
              backgroundColor: "#084C61",
              borderRadius: 3
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Qui ex cillum nostrud deserunt ullamco esse mollit.
              </Typography>
              <Typography variant="h5" component="div">
                Proident dolore dolor quis do.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                Esse anim occaecat ad ea nostrud eu ea voluptate anim non irure
                magna officia velit. Exercitation id consequat mollit nostrud
                fugiat Lorem amet Lorem esse minim officia sit. In id cillum
                proident eiusmod non. Incididunt eiusmod reprehenderit
                consectetur non irure cillum amet duis tempor voluptate dolor
                sunt non excepteur. Nisi exercitation Lorem sit veniam occaecat
                ullamco nostrud est. Tempor ex mollit nostrud sunt tempor aliqua
                consequat commodo sit. In veniam voluptate consectetur in magna
                eu ut ad in aliqua. Velit adipisicing reprehenderit minim sunt
                nulla in commodo ad. Nostrud aliqua mollit ipsum incididunt
                tempor veniam ea culpa labore irure reprehenderit duis nostrud.
                Occaecat ullamco proident pariatur officia eiusmod. Eiusmod
                irure Lorem est duis voluptate in. Aliquip consequat excepteur
                nulla sit sit consequat reprehenderit velit adipisicing tempor.
                Est amet in laboris eiusmod. Enim non qui est irure mollit
                eiusmod amet do. Aliqua commodo quis voluptate labore officia
                tempor nisi mollit ea cupidatat qui aute et. Cupidatat sunt
                minim amet anim elit adipisicing nulla excepteur dolore et
                laboris irure proident. Ad eu adipisicing eu deserunt ut ex.
                Reprehenderit veniam non adipisicing deserunt. Ad aute id
                ullamco do veniam id laboris ipsum id veniam qui commodo amet.
                Est pariatur ullamco eiusmod enim ullamco tempor in mollit sunt
                enim aliqua ex.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              minWidth: 275,
              marginRight: 10,
              maxHeight: 350,
              overflow: "auto",
              backgroundColor: "#084C61",
              borderRadius: 3
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                1Occaecat officia officia aliqua do commodo non nisi ad ipsum
                ipsum.
              </Typography>
              <Typography variant="h5" component="div">
                Tempor nostrud ipsum in exercitation amet officia exercitation
                occaecat Lorem.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                Sint proident quis amet qui sunt sunt laboris sunt labore
                laboris velit. Deserunt laboris officia officia excepteur duis.
                Fugiat Lorem cillum nostrud veniam eiusmod magna ut quis in
                nulla enim voluptate amet. Eu sunt tempor ex ex ea reprehenderit
                nisi velit aute elit. Occaecat consectetur magna dolore anim
                labore laboris eiusmod esse eu. Voluptate incididunt enim anim
                elit exercitation laboris. Id nostrud et nulla enim pariatur
                veniam reprehenderit. Adipisicing fugiat non enim incididunt
                fugiat Lorem culpa deserunt sit. Enim fugiat deserunt occaecat
                duis excepteur dolore commodo ullamco Lorem reprehenderit tempor
                exercitation officia. Excepteur consequat amet pariatur officia
                anim aliquip officia nostrud duis velit fugiat consequat ea
                nisi. Laboris officia ad officia adipisicing aliquip. Nisi
                consequat qui magna ullamco consequat. Minim adipisicing
                exercitation nostrud dolor proident cillum aliquip. Nostrud
                ullamco eu reprehenderit consequat veniam velit consectetur
                laborum qui elit ullamco minim. Irure cupidatat qui proident
                velit velit ea enim occaecat Lorem. Sint fugiat aliqua non sunt
                irure laboris sit excepteur sit. Exercitation ut proident
                occaecat aute magna reprehenderit ut et deserunt do. Sit dolor
                anim proident velit aliqua sit laboris veniam nostrud dolor. Est
                quis anim ex aliquip adipisicing. Cillum in proident nisi ea
                laborum eiusmod. Occaecat quis aliqua minim qui. Cupidatat in in
                in deserunt minim est ad. Ipsum do excepteur tempor occaecat
                aliqua ex officia sint ea eiusmod adipisicing duis ullamco
                eiusmod.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
