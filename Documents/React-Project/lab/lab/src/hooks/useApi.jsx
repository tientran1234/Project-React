import axios from "axios";
 export const getTickets= async()=>{
    try {
      const response = await axios.get(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/new`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const deleteTicket=async(ticketId)=> {
    console.log(ticketId);
    try {
      const response = await axios.delete(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket/${ticketId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const addNewFilm = async (filmData) => {
    try {
      const response = await axios.post('https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket', filmData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const updateFilm = async (filmId, updatedFilmData) => {
    try {
      const response = await axios.put(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket/${filmId}`, updatedFilmData);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
//   const formik = useFormik({
//     initialValues: {
//         avatar: "",
//         name: "",
//         age: 0,
//         address: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//         try {
//             const data = { ...values, createdAt: new Date().toISOString() };
//             await createStaff(data);
//             formik.resetForm();
//             setOpen(true);
//         } catch (error) {
//             console.log(error);
//         }
//     },
// });