import axios from 'axios';

const BASE_URL = '/api/media';

export const getAllMedia   = () => axios.get(BASE_URL);
export const getImages    = () => axios.get(`${BASE_URL}/images`);
export const getVideos    = () => axios.get(`${BASE_URL}/videos`);
export const uploadMedia  = (formData) =>
  axios.post(`${BASE_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
export const deleteMedia  = (id) => axios.delete(`${BASE_URL}/${id}`);