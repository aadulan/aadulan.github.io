import React from "react";
import { Grid, Avatar, Typography, IconButton, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useWindowSize } from './utils'


const links = [ {
    href: "https://github.com/aadulan/",
    icon: <GitHubIcon />
},
{
    href: "https://www.linkedin.com/in/aadulan/",
    icon: <LinkedInIcon />
}

]

export default function Ash() {

    var size = useWindowSize()
    var heightGreater = size.height > size.width

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ paddingRight: heightGreater ? 15 : 20 }}>
                <Avatar
                    boxShadow={3}
                    alt="ash"
                    src="slack-photo.jpg"
                    style={{ width: 150, height: 150 }}
                />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
                item
                style={{ paddingLeft: heightGreater ? 15 : 20 }}
            >
                <Grid container justify="center" item>

                    <Typography variant={heightGreater ? "h6" : "h4"} >Asmita Dulan</Typography>
                </Grid>
                <Grid container justify="center" item>
                    <Typography variant="body2" >Front-End Developer </Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {links.map((e, index) => (
                        <IconButton
                            key={index}
                            size="small"
                            href={e.href}
                        >
                            {e.icon}

                        </IconButton>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
