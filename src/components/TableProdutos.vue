<template>
  <table class="table table-hover text-start">
    <thead>
      <tr>
        <th
          class="px-4 py-3 color-td"
          v-for="listaTable in tabela"
          :key="listaTable.id"
        >
          {{ listaTable.tabelaNome }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="listaColuna in coluna" :key="listaColuna">
        <td class="px-4 py-3 color-td">{{ listaColuna.ref }}</td>
        <th class="px-4 py-3">{{ listaColuna.produto }}</th>
        <td class="px-4 py-3">{{ listaColuna.categoria }}</td>
        <td class="px-4 py-3 color-td">{{ listaColuna.quantidade }}</td>
        <td class="px-4 py-3">{{ listaColuna.preco }}</td>
        <td class="px-4 py-3 color-td">{{ listaColuna.validade }}</td>
        <td class="px-4 py-3">{{ listaColuna.status }}</td>
        <td class="px-4 py-3 color-td">
          <span class="d-flex align-items-center gap-3">
            <i :class="[listaColuna.correto, 'correto']"></i>
            <i :class="[listaColuna.delete, 'delete']"></i>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    tabela: {
      type: Array,
    },
    coluna: {
      type: Array,
    },
  },
};
</script>


<style scoped>
thead th {
  background-color: white;
  color: #293850;
}
tbody th,
td {
  background-color: #293850;
  color: #f1e6e6;
}
.color-td {
  color: #999;
}
.delete:hover {
  color: red;
  cursor: pointer;
}
.correto:hover {
  color: greenyellow;
  cursor: pointer;
}
</style>