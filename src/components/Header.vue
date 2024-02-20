<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/movies">Movies</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style>
  header {
    background-color: #ff3300;
    padding: 10px;
    color: #fff;
  }
  </style>