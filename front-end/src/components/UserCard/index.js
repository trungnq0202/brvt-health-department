import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 Sample usage
 {
	 users.map(user => (
		 <Grid item key= {user.id} xs={12} md={6} lg={4}>
		 	<BasicCard user/>
		 </Grid>
	 ))
 }
 */

export default function UserCard(user) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Patient Name: { user.name }
        </Typography>

        <Typography variant="body2">
          Age: { user.age }
        </Typography>

		<Typography variant="body2">
          Phone Number: { user.phoneNumber } 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Detail</Button>
		<Button variant="contained" size="small">Contact</Button>
      </CardActions>
    </Card>
  );
}
