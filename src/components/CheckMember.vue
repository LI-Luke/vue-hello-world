<template>
  <div>
      <label>Username</label>
      <input type="text" v-model="username" >
      <br>
      <span v-if="error">{{ error }}</span>
      <span v-else-if="loggedUser">{{ loggedUser }}</span>
      <br>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';

const API = 'https://localhost:5001';

export default {
  name: 'checkMember',
  data() {
    return {
      username: '',
      password: '',
      loggedUser: '',
      error: '',
    };
  },
  watch: {
    username() {
      this.debouncedSubmit();
    },
  },
  created() {
    // debounce(function,sec)，用來表示該方法多久執行一次。
    this.debouncedSubmit = _.debounce(this.submit, 2000);
  },
  methods: {
    submit() {
      if (_.isEmpty(this.username)) {
        return;
      }
      // this.loading = true;
      console.log(new Date());
      const endpoint = `${API}/api/login`;

      const body = () => ({
        username: this.username,
      });

      const response = (res) => {
        // this.loading = false;

        if (res.data.success) {
          this.loggedUser = res.data.username;
        } else {
          this.error = 'not found member';
        }
      };

      const error = (e) => {
        console.log(e);
        // this.loading = false;
        // this.error = 'Incorrect username/password';
        if (e.response) {
          this.error = `${e.response.status}   ERROE`;
        } else {
          // this.error = 'ERROE';
          this.loggedUser = `welcome : <strong>${this.username}</strong> `;
        }
      };
      axios.get(endpoint, body()).then(response).catch(error);
    },
  },
};
</script>

