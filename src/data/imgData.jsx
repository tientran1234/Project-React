import axios from "axios";
 export const getTickets= async()=>{
    try {
      const response = await axios.get(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket`);
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
  