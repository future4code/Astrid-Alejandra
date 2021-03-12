import axios from "axios";
import { BASE_URL, token } from "../constants/requestsData";

export const getTrips = () => {
  axios
    .get(`${BASE_URL}/trips`)
    .then((response) => {
      console.log("getTripsthen", response.data);
    })
    .catch((error) => {
      console.log("getTripserror", error.message);
    });
};

export const getTripDetail = (tripId) => {
  axios
    .get(`${BASE_URL}/trip/${tripId}`, { headers: { auth: token } })
    .then((response) => {
      console.log("getTripDetailsthen", response.data);
    })
    .catch((error) => {
      console.log("getTripDetailserror", error.message);
    });
};

export const createTrip = (body) => {
  axios
    .post(`${BASE_URL}/trips`, body, { headers: { auth: token } })
    .then((response) => {
      console.log("createTripthen", response.data);
    })
    .catch((error) => {
      console.log("createTriperror", error.message);
    });
};

export const applyToTrip = (body, tripId) => {
  axios
    .post(`${BASE_URL}/trips/${tripId}/apply`, body, {
      headers: { auth: token },
    })
    .then((response) => {
      console.log("applyToTripthen", response.data);
    })
    .catch((error) => {
      console.log("applyToTriperror", error.message);
    });
};

export const decideCandidate = (tripId, candidateId, body) => {
  axios
    .put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: { auth: token },
    })
    .then((response) => {
      console.log("decideCandidatethen", response.data);
    })
    .catch((error) => {
      console.log("decideCandidateerror", error.message);
    });
};
