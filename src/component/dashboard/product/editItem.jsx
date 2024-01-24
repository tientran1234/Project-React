import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React,{useState,useEffect} from 'react'
import { addNewFilm, updateFilm } from '../../../data/imgData';
import "../../../assets/css/style.css"


function EditItem({closeEventEdit, handleFlagChange,data}) {
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [runtime, setRuntime] = useState('');
    const [info, setInfo] = useState('');
    const [link, setLink] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [id, setId] = useState('');
  useEffect(() => {
   setName(data.title)
   setGenre(data.genre)
   setRuntime(data.runtime)
   setInfo(data.info)
   setLink(data.link)
   setId(data.id)
   setImgUrl(data.imageUrl)
  }, []);
    const filmData = {
            id: id,
            genre: genre,
            imageUrl: imgUrl,
            info: info,
            link:link,
            runtime: runtime,
            title: name,
      };
      console.log(filmData);
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
          label="ID" onChange={handleIdChange}
          defaultValue={data.id} sx={{minWidth:"100%"}}
          disabled
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="TITLE"
          defaultValue={data.title} sx={{minWidth:"100%"}}
          onChange={handleNameChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="GENRE"
          defaultValue={data.genre} sx={{minWidth:"100%"}}
          onChange={handleGenreChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="imageUrl" onChange={handleImgChange}
          defaultValue={data.imageUrl} sx={{minWidth:"100%"}}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Runtime" onChange={handleRuntimeChange}
          defaultValue={data.runtime} sx={{minWidth:"100%"}}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Info"
          defaultValue={data.info} sx={{minWidth:"100%"}} onChange={handleInfoChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Link" onChange={handleLinkChange}
          defaultValue={data.link} sx={{minWidth:"100%"}}
        />
        </Grid>
        </Grid>
        <div style={{marginTop:10}}>
        <Button variant="contained" onClick={()=>editFilm(filmData)}>Edit</Button>
        </div>
       
</div>
  )
}

export default EditItem