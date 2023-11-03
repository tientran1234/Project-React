import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React,{useState,useEffect} from 'react'


function EditItem({closeEventEdit, handleFlagChange,profile}) {
    const [flag, setFlag] = useState(false);
    const [ name, setName] = useState('');
    const [ avatar, setAvatar] = useState('');
    const [ age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [id, setId] = useState('');
  
  useEffect(() => {
   setName(profile.name)
   setAvatar(profile.avatar)
   setAge(profile.age)
   setAddress(profile.address)
   setCreatedAt(profile.createdAt)
   setId(profile.id)
  }, []);
    const profileData = {
      id: profile.id,
      name: profile.name,
     avatar: profile.avatar,
      age: profile.age,
      address:profile.address,
      createdAt:profile.createdAt,
      };
      const editFilm = (film) => {
       
        Swal.fire({
          title: "Are you sure?",
          text: "You are about to edit a film!",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "blue",
          cancelButtonColor: "red",
          confirmButtonText: "Yes, add it!",
        }).then((result) => {
          if (result.value) {
            updateFilm(film.id,film)
              .then(() => {
                handleFlagChange();
                Swal.fire("Added!", "Your film has been edit.", "success");
              })
              .catch((error) => {
                console.error("Error adding a film:", error);
                Swal.fire("Error", "An error occurred while adding the film.", "error");
              });
          }
        });
      };
      
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    const handleIdChange = (event) => {
        setId(event.target.value);
      };
      const handleImgChange = (event) => {
        setImgUrl(event.target.value);
      };
      const handleLinkChange = (event) => {
        setLink(event.target.value);
      };
    
  
    const handleGenreChange = (event) => {
      setGenre(event.target.value);
    };
  
    const handleRuntimeChange = (event) => {
      setRuntime(event.target.value);
    };
  
    const handleInfoChange = (event) => {
      setInfo(event.target.value);
    };
  return (
   
    <div>
         <h1>Edit new film</h1>
        <Box sx={{m:2}}>
        </Box>
        <Typography variant='h5' align='center'>
        </Typography>
        <IconButton style={{position:"absolute",top:0,right:0}}
        onClick={closeEventEdit}
        >
            <CloseIcon/>
        </IconButton>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          required
          onlyy
          id="outlined-required"
          label="Id" onChange={handleIdChange}
          defaultValue={profile.id} sx={{minWidth:"100%"}}
          disabled
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue={profile.name} sx={{minWidth:"100%"}}
          onChange={handleNameChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Age"
          defaultValue={profile.age} sx={{minWidth:"100%"}}
          onChange={handleGenreChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="address" onChange={handleImgChange}
          defaultValue={profile.address} sx={{minWidth:"100%"}}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="createdAt" onChange={handleRuntimeChange}
          defaultValue={profile.createdAt} sx={{minWidth:"100%"}}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Avatar" onChange={handleRuntimeChange}
          defaultValue={profile.avatar} sx={{minWidth:"100%"}}
        />
        </Grid>
        
        </Grid>
        <div style={{marginTop:10}}>
        <Button variant="contained" onClick={()=>editFilm(profileData)}>Edit</Button>
        </div>
       
</div>
  )
}

export default EditItem