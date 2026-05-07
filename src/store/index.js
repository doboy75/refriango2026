import { createStore } from "vuex";

export default createStore({
  state: {
    painel: [
      {
        id: 1,
        nome: "Total de produtos",
        quantidade: 8,
        icon: "bi bi-box-seam",
        descricao: "+12% em relação ao més anterior",
      },
      {
        id: 2,
        nome: "Estoque baixo",
        quantidade: 3,
        icon: " bi bi-exclamation-triangle",
        descricao: "Produtos abaixo do minimo",
      },
      {
        id: 3,
        nome: "Movimentações de hoje",
        quantidade: 6,
        icon: "bi bi-arrow-down-up",
        descricao: "+8% em relação ao més anterior",
      },
      {
        id: 3,
        nome: "Valor em Estoque",
        quantidade: "2.400.000,00",
        icon: "bi bi-graph-up-arrow",
        descricao: "+5% em relação ao més anterior",
      },
    ],
    movimentacoes: [
      {
        id: 1,
        produto: "Àgua Mineral 500ml",
        tipo: "Entrada",
        quantidade: 500,
        data: "2026-03-12",
        usuario: "Miguel vita",
      },
      {
        id: 2,
        produto: "Sumo de Laranja 1L",
        tipo: "Saída",
        quantidade: 55,
        data: "2026-03-12",
        usuario: "Maria Costa",
      },
      {
        id: 3,
        produto: "Rerigerante Cola 2L",
        tipo: "Entrada",
        quantidade: 200,
        data: "2026-03-11",
        usuario: "Denilson Cristovão",
      },
      {
        id: 4,
        produto: "Energético Power 250ml",
        tipo: "Saída",
        quantidade: 35,
        data: "2026-03-11",
        usuario: "Alessandro Almeida",
      },
      {
        id: 5,
        produto: "Cerveja Cuca 330ml",
        tipo: "entrada",
        quantidade: 1000,
        data: "2026-03-09",
        usuario: "José Cumbiumbi",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
