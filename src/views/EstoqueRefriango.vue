<template>
  <div class="container-fluided vh-100">
    <div class="container d-flex justify-content-between pt-4 px-4 text-start">
      <div>
        <h4>Cabeçalho de Estoque</h4>
      </div>
      <BaseButtom>
        <i class="bi bi-plus me-2 fs-5"></i>
        <span>Novo Produto</span>
      </BaseButtom>
    </div>

    <div class="container text-start p-4">
      <small class="text-secondary"
        >Cadastrar Saídas e Entradas de Produtos</small
      >

      <div class="d-flex py-5">
        <div class="d-flex gap-3">
          <input
            type="text"
            class="form-control bg-dark text-light border-secondary py-2 px-3 p"
            placeholder="Pesquisar nivilamento..."
            v-model="pesquisaMovimentacao"
          />
          <buttom
            @click="mudarTabela('todos')"
            class="btn btn-secondary text-white"
            :class="
              filtroAtual === 'todos' ? 'btn-primary' : 'btn-outline-primary'
            "
            >todos</buttom
          >
          <buttom
            @click="mudarTabela('entrada')"
            class="btn btn-secondary text-white"
            :class="
              filtroAtual === 'entrada' ? 'btn-success' : 'btn-outline-success'
            "
            >Entrada</buttom
          >
          <buttom
            @click="mudarTabela('saida')"
            class="btn btn-secondary text-white"
            :class="
              filtroAtual === 'saida' ? 'btn-danger' : 'btn-outline-danger'
            "
            >Saída</buttom
          >
        </div>
        <div class="caixa-exemplo"></div>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th class="px-4 py-3 color-td">Produto</th>
            <th class="px-4 py-3 color-td">Tipo</th>
            <th class="px-4 py-3 color-td">Quantidade</th>
            <th class="px-4 py-3 color-td">Data</th>
            <th class="px-4 py-3 color-td">Usuário</th>
            <th class="px-4 py-3 color-td">Observações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dadosFiltrados" :key="item.id">
            <td class="px-4 py-3 color-td">{{ item.produto }}</td>
            <td class="px-4 py-3 color-td">
              <span
                class="badge"
                :class="item.tipo === 'entrada' ? 'bg-success' : 'bg-danger'"
                >{{ item.tipo }}</span
              >
            </td>
            <td class="px-4 py-3 color-td">{{ item.quantidade }}</td>
            <td class="px-4 py-3 color-td">{{ item.data }}</td>
            <td class="px-4 py-3 color-td">{{ item.usuario }}</td>
            <td class="px-4 py-3 color-td">{{ item.obs }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BaseButtom from "@/components/BaseButtom.vue";

export default {
  components: {
    BaseButtom,
  },
  data() {
    return {
      pesquisaMovimentacao: "",
      filtroAtual: "todos",

      movimentacoes: [
        {
          id: 1,
          produto: "Água Mineral 500ml",
          tipo: "entrada",
          quantidade: 500,
          data: "2026-03-12",
          usuario: "João Silva",
          obs: "Reposição semanal",
        },
        {
          id: 2,
          produto: "Sumo de Laranja 1L",
          tipo: "saida",
          quantidade: 55,
          data: "2026-03-12",
          usuario: "Maria Costa",
          obs: "Pedido nº 1234",
        },
        {
          id: 3,
          produto: "Refrigerante Cola 2L",
          tipo: "entrada",
          quantidade: 200,
          data: "2026-03-11",
          usuario: "João Silva",
          obs: "Entrega fornecedor",
        },
        {
          id: 4,
          produto: "Energetico Power 250ml",
          tipo: "saida",
          quantidade: 35,
          data: "2026-06-2",
          usuario: "José Luis",
          obs: "Entrega fornecedor",
        },
        {
          id: 5,
          produto: "Cerveja Premium 250ml",
          tipo: "entrada",
          quantidade: 70,
          data: "2026-12-10",
          usuario: "Pedro Miguel",
          obs: "Entrega fornecedor",
        },
        {
          id: 6,
          produto: "Sumo Laranja",
          tipo: "entrada",
          quantidade: 230,
          data: "2026-08-30",
          usuario: "Merim Sousa",
          obs: "Entrega fornecedor",
        },
      ],
    };
  },
  computed: {
    dadosFiltrados() {
      if (this.filtroAtual === "todos") {
        return this.movimentacoes;
      }
      if (this.filtroAtual === "entrada") {
        return this.movimentacoes.filter((m) => m.tipo === "entrada");
      }
      if (this.filtroAtual === "saida") {
        return this.movimentacoes.filter((m) => m.tipo === "saida");
      }
      return [];
    },
  },
  methods: {
    mudarTabela(tipo) {
      this.filtroAtual = tipo;
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
input::placeholder {
  color: #999;
}
</style>