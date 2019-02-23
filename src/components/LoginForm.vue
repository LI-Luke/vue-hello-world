<template>
  <div>
    <h1 v-if="loggedUser">Welcome {{ loggedUser }}</h1>
    <form v-else  @submit.prevent="onSubmit" >
      <label>Username</label>
      <input type="text" v-model="username" :disabled="loading">
      <br>
      <label>Password</label>
      <input type="password" v-model="password" :disabled="loading">
      <br>
      <button type="submit" :disabled="loading">Submit</button>
      <br>
      <span v-if="error">{{ error }}</span>
      <br>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

const API = 'https://localhost:5001';

export default {
  name: 'loginForm',
  data() {
    return {
      username: '',
      password: '',
      loggedUser: '',
      error: '',
      disabled: false,
      loading: false,
    };
  },
  watch: {
    username() {
      this.error = '';
    },
    password() {
      this.error = '';
    },
  },
  methods: {
    onSubmit() {
      this.loading = true;

      const endpoint = `${API}/api/login`;

      const body = () => ({
        username: this.username,
        password: this.password,
      });

      const response = (res) => {
        this.loading = false;

        if (res.data.success) {
          this.loggedUser = res.data.username;
        } else {
          this.error = 'Incorrect username/password';
        }
      };

      const error = (e) => {
        console.log(e);
        this.loading = false;
        // this.error = 'Incorrect username/password';
        if (e.response) {
          this.error = `${e.response.status}   ERROE`;
        } else {
          this.error = 'ERROE';
        }
      };

      axios.post(endpoint, body()).then(response).catch(error);
    },
  },
};
</script>

