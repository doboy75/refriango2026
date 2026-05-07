<template>
  <div class="container">
    <table class="table table-hover minhaCor text-start">
      <thead class="table-secondary">
        <tr>
          <th class="text-secondary px-4 py-3 borda-1">Produto</th>
          <th class="text-secondary px-4 py-3">Tipo</th>
          <th class="text-secondary px-4 py-3">Quantidade</th>
          <th class="text-secondary px-4 py-3">Data</th>
          <th class="text-secondary px-4 py-3 borda-2">Usuário</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movimento in movimentacoes" :key="movimento.id">
          <td class="px-4 py-3">{{ movimento.produto }}</td>
          <td class="px-4 py-3">{{ movimento.tipo }}</td>
          <td class="px-4 py-3">{{ movimento.quantidade }}</td>
          <td class="px-4 py-3">{{ movimento.data }}</td>
          <td class="px-4 py-3">{{ movimento.usuario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    sms: {
      type: String,
    },
  },
  data() {
    return {
      movimentacoes: [
        {
          id: 1,
          coluna: "Produto",
          produto: "Àgua Mineral 500ml",
          tipo: "Entrada",
          quantidade: 500,
          data: "2026-03-12",
          usuario: "Miguel vita",
        },
        {
          id: 2,
          coluna: "Tipo",
          produto: "Sumo de Laranja 1L",
          tipo: "Saída",
          quantidade: 55,
          data: "2026-03-12",
          usuario: "Maria Costa",
        },
        {
          id: 3,
          coluna: "Quantidade",
          produto: "Rerigerante Cola 2L",
          tipo: "Entrada",
          quantidade: 200,
          data: "2026-03-11",
          usuario: "Denilson Cristovão",
        },
        {
          id: 4,
          coluna: "Data",
          produto: "Energético Power 250ml",
          tipo: "Saída",
          quantidade: 35,
          data: "2026-03-11",
          usuario: "Alessandro Almeida",
        },
        {
          id: 5,
          coluna: "Usuário",
          produto: "Cerveja Cuca 330ml",
          tipo: "Entrada",
          quantidade: 1000,
          data: "2026-03-09",
          usuario: "José Cumbiumbi",
        },
      ],
    };
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
.borda-2 {
  border-top-right-radius: 7px;
}
.borda-1 {
  border-top-left-radius: 7px;
}
</style>