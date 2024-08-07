<template>
  <div class="glass-container">
    <h1>Stores</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Название магазина</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="store in stores" :key="store.id">
        <td>{{ store.id }}</td>
        <td>{{ store.name }}</td>
        <td>{{ store.phone }}</td>
      </tr>
      </tbody>
    </table>
    <h2>Add a New Store</h2>
    <form @submit.prevent="addStore">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newStore.name" required>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="newStore.phone" required>
      </div>
      <button type="submit">Add Store</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stores: [],
      newStore: {
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    async fetchStores() {
      const response = await axios.get('/api/stores');
      this.stores = response.data;
    },
    async addStore() {
      try {
        const response = await axios.post('/api/stores', this.newStore);
        console.log(response.data.message);
        this.fetchStores();
        this.newStore = { name: '', phone: '' };
      } catch (error) {
        console.error('Failed to add store', error);
      }
    },
  },
  created() {
    this.fetchStores();
  },
};
</script>

<style scoped>
.glass-container {
  margin: 10px;
  background: rgba(210, 217, 217, 0.6);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgb(100, 96, 96);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 2%;
}

th, td {
  border: 1px solid rgba(0, 0, 0, 0.43);
  padding: 8px;
  text-align: left;
}

th div {
  cursor: col-resize;
  display: inline-block;
  width: 100%;
}

form {
  margin-top: 20px;
}

form div {
  margin-bottom: 10px;
}

form label {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

form input {
  padding: 5px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f77;
}
</style>
