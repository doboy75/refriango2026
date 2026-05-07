<template>
  <div class="card text-start bg-color py-3 px-4 corBorda">
    <div class="d-flex justify-content-between">
      <span class="h6 text-white">
        <slot v-if="$slots.titulo" name="titulo"></slot>
      </span>
      <span>
        <slot name="icon"></slot>
      </span>
    </div>

    <h3 class="p text-white">
      <slot v-if="$slots.numero" name="numero"></slot>
    </h3>
    <span class="color"
      ><slot v-if="$slots.descricao" name="descricao"></slot
    ></span>
  </div>
</template>
<style scoped>
.bg-color {
  background-color: #1e293b;
}
.corBorda {
  border: 2px solid #23275b;
}
.color {
  color: rgb(15, 185, 15);
}
.card:hover {
  background-color: #1f2b3e;
}
</style>

 