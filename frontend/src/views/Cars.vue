<template>
  <div class="glass-container">
    <h1>Список автомобилей</h1>
    <table>
      <thead>
      <tr>
        <th>Марка</th>
        <th>Модель</th>
        <th>Цена</th>
        <th>Магазин</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="car in cars" :key="car.id">
        <td>{{ car.brand }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.price }}</td>
        <td>{{ car.store }}</td>
        <td>{{ car.phone }}</td>
      </tr>
      </tbody>
    </table>
    <h2>Добавить авто</h2>
    <form @submit.prevent="addCar">
      <div>
        <label for="brand">Марка:</label>
        <input type="text" id="brand" v-model="newCar.brand" required>
      </div>
      <div>
        <label for="model">Модель:</label>
        <input type="text" id="model" v-model="newCar.model" required>
      </div>
      <div>
        <label for="price">Цена:</label>
        <input type="number" id="price" v-model="newCar.price" required>
      </div>
      <div>
        <label for="store">Магазин:</label>
        <select v-model="newCar.store_id" required>
          <option v-for="store in stores" :key="store.id" :value="store.id">{{ store.name }}</option>
        </select>
      </div>
      <button type="submit">Добавить авто</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: [],
      stores: [],
      newCar: {
        brand: '',
        model: '',
        price: '',
        store_id: '',
      },
    };
  },
  methods: {
    async fetchCars() {
      const response = await axios.get('/api/cars');
      this.cars = response.data;
    },
    async fetchStores() {
      const response = await axios.get('/api/stores');
      this.stores = response.data;
    },
    async addCar() {
      try {
        const response = await axios.post('/api/cars', this.newCar);
        console.log(response.data.message);
        this.fetchCars();
        this.newCar = { brand: '', model: '', price: '', store_id: '' };
      } catch (error) {
        console.error('Failed to add car', error);
      }
    },
  },
  created() {
    this.fetchCars();
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

form input, form select {
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
