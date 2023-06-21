import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Stack,TextField} from '@mui/material';
import {MyAppDatabase} from '../models/user'
import {useState} from 'react';
import {Link} from 'react-router-dom'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type info = {
  name: string,
  email: string
}

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<info>({
    name:'',
    email:''
  })
  const handleOpen:()=> void = () => setOpen(true);
  const handleClose: ()=> void = () => setOpen(false);
  const db = new MyAppDatabase();
  console.log(db.users)
 const name = document.getElementById('name') as HTMLInputElement;
 const email = document.getElementById('email') as HTMLInputElement;

 function handleChange(e:any):void {
     console.log(e.target. value)
     setValue({...value,[e.target.name]: e.target.value})
 }
 const handleSubmit: (e:any) => void = () => {
     db.users.add({name: value.name, email: value.email})
     console.log(db.users.get(6))
 }
 
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Sign UP
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Stack direction='column'>
              <TextField id="name" name='name' label="name" variant="standard" onChange={handleChange} value={value.name}/>
              <TextField id="email" name='email' label="email" variant="standard" onChange={handleChange} value={value.email} />
              </Stack>
            </Typography>
            <Button type="submit" variant="outlined" color="success" onClick={handleSubmit}>Register</Button>
            <Typography>Already have an account <Link to="/login">Log in</Link></Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
