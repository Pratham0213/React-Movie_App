import axios from "axios"

export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWNjZDRjMmI3NWE3ZDUwYzA0ZGY3ZjllZmQ2NTM0YiIsInN1YiI6IjY2NDM2MDgwYjFmM2EzMTUzYTk2MTk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mkfD8ifzogqSAsgdKqSrcBMcXq-b__ZYkeZ4OhOheYs'
    }
})