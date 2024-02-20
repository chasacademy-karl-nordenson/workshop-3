<template>
    <div>
      <h1>Rullar</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="`movies/${movie.id}`">{{ movie.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MoviesList",
    data() {
      return {
        movies: [],
      };
    },
    methods: {
      async fetchMovies() {
        try {
          const response = await axios.get("http://localhost:3000/movies");
          this.movies = response.data;
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      },
    },
    created() {
      this.fetchMovies();
    },
  };
  </script>