import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import ItemCard from './ItemCard'

const education = [{
    image: 'uoe.png',
    title: 'The University of Edinburgh',
    text: 'BSc with Honours Computer Science and Mathematics'
},
{
    image: 'cha.png',
    title: 'Chadwell Heath Acadmey',
    text: 'A Levels in Mathematics, Economics and Further Mathematics & 9 GCSEs including English and Mathematics'
},
]

export default function EducationSection(props){
    return(
        <Grid item
        // style={{ backgroundColor: '#cfd8dc', padding: 20}}
        >
            <Typography align="center" variant="h4" style={{ textDecoration:"underline"}}>
                Education
            </Typography>
            {education.map((e, index) => (
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