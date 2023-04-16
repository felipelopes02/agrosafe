import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function ActionAreaCard() {
    return (
        <><><><Card sx={{ maxWidth: 345, mt: 15, ml: 10 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/tomates.jpg"
                    alt="tomates" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tomate
                    </Typography>
                    <Alert severity="error">

                        Falta de nutrientes — <strong>Verifique!</strong>
                    </Alert>
                </CardContent>
            </CardActionArea>
        </Card>

            <Card sx={{ maxWidth: 345, mt: -32.8, ml: 70 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/perfeito.jpg"
                        alt="tomates" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tomate
                        </Typography>
                        <Alert severity="success">
                            Saudável — <strong>Verifique!</strong>
                        </Alert>
                    </CardContent>
                </CardActionArea>
            </Card></>

            <Card sx={{ maxWidth: 345, mt: -32.8, ml: 130 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/perfeito.jpg"
                        alt="tomates" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tomate
                        </Typography>
                        <Alert severity="success">
                            Saudável — <strong>Verifique!</strong>
                        </Alert>
                    </CardContent>
                </CardActionArea>
            </Card></>

            <Card sx={{ maxWidth: 345, mt: 15, ml: 10 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/desidratado.jpg"
                        alt="tomates" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tomate
                        </Typography>
                        <Alert severity="warning">
                            Desidratação — <strong>Verifique!</strong>
                        </Alert>
                    </CardContent>
                </CardActionArea>
            </Card></>




    );
}