import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import ItemCard from './ItemCard'

const experience = [{
    image: 'logo.png',
    title: 'Solve X',
    text: 'An Equation Solving Application designed for Secondary School Teachers and their Pupils'
},
{
    image: 'FEED.png',
    title: 'FE.ED - System Design Project',
    text: 'Created the front-end of the web application using React.js to control a smart automatic pet feeder'
},
]

export default function ProjectSection(props){
    return(
        <Grid item
        style={{ padding: 20}}
        >
            <Typography align="center" variant="h4" style={{ textDecoration:"underline"}}>
                Projects
            </Typography>
            {experience.map((e, index) => (
                <ItemCard
                key={index}
                image={e.image}
                title={e.title}
                text={e.text}
                />
            ))}   
        </Grid>
    )

}