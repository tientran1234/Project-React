import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
import { addNewFilm } from '../../../data/imgData';
import "../../../assets/css/style.css"

function AddItem({ closeEvent, handleFlagChange ,data}) {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [runtime, setRuntime] = useState('');
  const [info, setInfo] = useState('');
  const [link, setLink] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [id, setId] = useState('');
  const [nameError, setNameError] = useState(null);
  const [genreError, setGenreError] = useState(null);
  const [runtimeError, setRuntimeError] = useState(null);
  const [infoError, setInfoError] = useState(null);
  const [linkError, setLinkError] = useState(null);
  const [imgUrlError, setImgUrlError] = useState(null);
  const [idError, setIdError] = useState(null);
console.log(data);
  const filmData = {    
    id: id,
    title: name,
    genre: genre,
    runtime: runtime,
    info: info,
    link: link,
    imgUrl: imgUrl,
  };

  const addFilm = () => {
    // Reset all previous error messages
    setNameError(null);
    setGenreError(null);
    setRuntimeError(null);
    setInfoError(null);
    setLinkError(null);
    setImgUrlError(null);
    setIdError(null);

    let hasError = false;

    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!genre) {
      setGenreError("Genre is required");
      hasError = true;
    }
    if (!runtime) {
      setRuntimeError("Runtime is required");
      hasError = true;
    }
    if (!info) {
      setInfoError("Info is required");
      hasError = true;
    }
    if (!link) {
      setLinkError("Link is required");
      hasError = true;
    }
    if (!imgUrl) {
      setImgUrlError("Image URL is required");
      hasError = true;
    }
    if (!id) {
      setIdError("ID is required");
      hasError = true;
    }

    if (hasError) {
        // Báo lỗi nếu có trường nào đó trống
        Swal.fire("Error", "Please fill in all the required fields.", "error");
      } else {
        // Check if the ID from the form matches any ID in the data array
        const idExists = data.some(item => item.id === id);
        
        if (idExists) {
          setIdError("ID already exists");
          hasError = true;
        }
    
        if (hasError) {
          // Display an error message if the ID already exists in the data array
          Swal.fire("Error", "ID already exists.", "error");
        } else {
          Swal.fire({
            title: "Are you sure?",
            text: "You are about to add a new film!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes, add it!",
          }).then((result) => {
            if (result.value) {
              addNewFilm(filmData)
                .then(() => {
                  handleFlagChange();
                  Swal.fire("Added!", "Your film has been added.", "success");
                })
                .catch((error) => {
                  console.error("Error adding a film:", error);
                  Swal.fire("Error", "An error occurred while adding the film.", "error");
                });
            }
          });
        }
      }
  };

  return (
    <div>
      <h1>Add new film</h1>
      <Box sx={{ m: 2 }}></Box>
      <Typography variant='h5' align='center'></Typography>
      <IconButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="outlined-required"
            label="ID"  sx={{minWidth:"100%"}}
            onChange={(e) => {
              setId(e.target.value);
              setIdError(null);
            }}
            error={idError ? true : false}
            helperText={idError}
          />
        
        </Grid>
        <Grid item xs={6} >
        <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="TITLE"
            onChange={(e) => {
              setName(e.target.value);
              setNameError(null);
            }}
            error={nameError ? true : false}
            helperText={nameError}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="GENRE"
            onChange={(e) => {
              setGenre(e.target.value);
              setGenreError(null);
            }}
            error={genreError ? true : false}
            helperText={genreError}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="imageUrl"
            onChange={(e) => {
              setImgUrl(e.target.value);
              setImgUrlError(null);
            }}
            error={imgUrlError ? true : false}
            helperText={imgUrlError}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="Runtime"
            onChange={(e) => {
              setRuntime(e.target.value);
              setRuntimeError(null);
            }}
            error={runtimeError ? true : false}
            helperText={runtimeError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="Info"
            onChange={(e) => {
              setInfo(e.target.value);
              setInfoError(null);
            }}
            error={infoError ? true : false}
            helperText={infoError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="Link"
            onChange={(e) => {
              setLink(e.target.value);
              setLinkError(null);
            }}
            error={linkError ? true : false}
            helperText={linkError}
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: 10 }}>
        <Button variant="contained" onClick={addFilm}>Add New</Button>
      </div>
    </div>
  )
}

export default AddItem;
