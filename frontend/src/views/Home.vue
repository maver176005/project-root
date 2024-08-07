<template>
  <div class="glass-container">
    <h1>Список автомобилей</h1>
    <table class="glassmorphism">
      <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index" :style="{ width: column.width + 'px' }">
          <div @mousedown="startResize(index, $event)">
            {{ column.name }}
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(car, index) in cars" :key="index">
        <td>{{ car.brand }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.price }}</td>
        <td>{{ car.store }}</td>
        <td>{{ car.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'Home',
  setup() {
    const columns = reactive([
      { name: 'Марка авто', width: 150 },
      { name: 'Модель авто', width: 150 },
      { name: 'Стоимость', width: 100 },
      { name: 'Магазин', width: 150 },
      { name: 'Номер телефона магазина', width: 200 },
    ]);

    const cars = ref([]);

    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cars');
        cars.value = response.data;
      } catch (error) {
        console.error('Не удалось получить данные об автомобилях', error);
      }
    };

    let resizingColumnIndex = null;
    let startX = 0;
    let startWidth = 0;

    const startResize = (index, event) => {
      resizingColumnIndex = index;
      startX = event.pageX;
      startWidth = columns[index].width;
      document.addEventListener('mousemove', resizeColumn);
      document.addEventListener('mouseup', stopResize);
    };

    const resizeColumn = (event) => {
      if (resizingColumnIndex !== null) {
        const newWidth = startWidth + (event.pageX - startX);
        columns[resizingColumnIndex].width = newWidth > 50 ? newWidth : 50; // Минимальная ширина 50px
      }
    };

    const stopResize = () => {
      document.removeEventListener('mousemove', resizeColumn);
      document.removeEventListener('mouseup', stopResize);
      resizingColumnIndex = null;
    };

    onMounted(() => {
      fetchCars();
      document.addEventListener('mouseup', stopResize);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('mouseup', stopResize);
    });

    return {
      columns,
      cars,
      startResize,
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
