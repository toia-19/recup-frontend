<script setup lang="ts">

// importar themeStore
import { useThemeStore } from '@/stores/useThemeStore';

// importar taskStore
import { useTaskStore } from '@/stores/useTaskStore';

// importar modelo de tarea
import { reactive } from 'vue'

// iconos
import { XMarkIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'  
import { CheckCircleIcon as SolidCircleIcon } from '@heroicons/vue/24/solid'
import type { Task } from '@/models/TaskModel';

// definir variable para almacenar useThemeStore
const storeTheme = useThemeStore();

// definir variable reactiva pasando objeto themeStore
const theme = reactive(storeTheme);


// definir variable para almacenar useTaskStore
const storeTask = useTaskStore();

// definir variable reactiva pasando objeto tasksStore
const task = reactive(storeTask);

// una vez importado el modelo Task reemplazar any con el mismo
const newTask: Task = {
  id:  0,
  tarea:  '',
  status: false
}

const reactiveTask = reactive(newTask)

// funcion para marcar tarea status
// deberia llamar
function makeItComplete(){
  reactiveTask.status = !reactiveTask.status
}

// funcion para guardar tarea, debera pasar variable reactiveTask al metodo
// en TaskStore
function saveTask() {
  task.addTask(reactiveTask)
}

</script>

<template>
  <div class="wrapper relative group border-black">
    <div class="absolute top-3 sm:top-4 left-5">
      <div class="relative">
        <input v-if="task.status"
          type="ckeckbox"
          class="form-checkbox border rounded-full focus:ouline-none h-6 w-6 cursor-pointer transition ease-linear"
        />
        <!-- usar directiva v-if para mostrar si es tarea completa -->
        <!-- agregar directiva @click para llamar al metodo para completar tarea -->
        <SolidCircleIcon @click="saveTask()" class="h-100 w-100 absolute left-0 top-0 text-green-500"/>
      </div>
    </div>

    <!-- input -->
    <form v-bind:class="theme.isDark" @submit.prevent>

      <!-- input: usar v-bind para definir si es modo oscuro -->
      <!-- usar v-model para pasar los datos de la nueva tarea -->
      <input
        v-model="task.tarea"
        type="text"
        placeholder="Escribe una nueva tarea"
        class="sm:text-base overflow-ellipsis w-full focus:outline-none py-4 sm:py-4.5 pr-8 pl-14 sm:pl-16 cursor-pointer transition ease-linear"
      />

      <!-- div: usar v-bind para definir si es modo oscuro -->
      <div v-bind:class="theme.isDark" class="btns absolute right-0 top-0 py-2 sm:py-2.5 px-2 w-20 h-14 flex justify-around cursor-default transition ease-linear" >
        <button  class="p-1 cursor-pointer">
          <!-- usar @click para usar metodo de guardar tareas -->
          <PlusCircleIcon class="w-6 h-6 hover:text-green-600"/>
        </button @click="task.addTask(task)" class="p-1 cursor-pointer">
        <button >
          <XMarkIcon class="w-6 h-6 hover:text-red-500 "/>
        </button> 
      </div>
    </form>
  </div>
</template>

<style scoped>
  input[type="text"] {
    border-radius: 5px;
  }
  .btns {
    background: rgb(190, 190, 190);
    border-radius: 0 5px 5px 0;
  }

  .btns  button:nth-child(1) {
    border-right: 1px solid #434343;
  }

  input.dark {
    background: #434343;
  }

  .btns.dark {
    background: rgb(101, 101, 101);
  }
</style>