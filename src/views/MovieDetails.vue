<template>
    <div>
      <h1>Deets</h1>
      <p>Title: {{ movie.title }}</p>
      <p>Description: {{ movie.description }}</p>

    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MovieDetails",
    data() {
      return {
        movie: {},
      };
    },
    methods: {
      async fetchMovieDetails() {
        const movieId = this.$route.params.id;
        try {
          const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
          this.movie = response.data;
        } catch (error) {
          console.error(`Error fetching movie with ID ${movieId}:`, error);
        }
      },
    },
    created() {
      this.fetchMovieDetails();
    },
    watch: {
      $route: "fetchMovieDetails",
    },
  };
  </script>