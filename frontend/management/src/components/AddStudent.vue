<template>
  <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl font-bold">Add Student</h1>
      <form @submit.prevent="addStudent" class="space-y-4">
          <div>
              <label for="name" class="block">Name:</label>
              <input type="text" v-model="student.name" class="input input-bordered w-full" required />
          </div>
          <div>
              <label for="email" class="block">Email:</label>
              <input type="email" v-model="student.email" class="input input-bordered w-full" required />
          </div>
          <button type="submit" class="btn btn-primary">Add Student</button>
      </form>
      <p v-if="message" class="text-green-600">{{ message }}</p>
      <p v-if="error" class="text-red-600">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
      return {
          student: {
              name: '', // Ngalan sa estudyante
              email: '', // Email sa estudyante
          },
          message: '', // Mensahe kung malampuson ang pagdugang
          error: '',   // Mensahe kung naay error
      };
  },
  methods: {
      async addStudent() {
          try {
              const response = await fetch('http://localhost:3000/api/students', {
                  method: 'POST', // HTTP method nga gigamit
                  headers: {
                      'Content-Type': 'application/json', // Nag-indicar nga JSON ang data
                  },
                  body: JSON.stringify(this.student), // Gi-convert ang student object sa JSON
              });

              if (response.ok) { // Kung successful ang response
                  const data = await response.json(); // Kuhaon ang response data
                  this.message = 'Student added successfully!'; // Success message
                  this.error = ''; // Reset error message
                  this.student.name = ''; // Clear the name field
                  this.student.email = ''; // Clear the email field
              } else {
                  const err = await response.json(); // Kuhaon ang error data
                  this.error = err.message || 'Error adding student.'; // Set error message
                  this.message = ''; // Reset success message
              }
          } catch (error) {
              this.error = 'Network error.'; // Handle network errors
              this.message = ''; // Reset success message
          }
      },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
