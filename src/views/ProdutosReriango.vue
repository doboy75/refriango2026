<template>
  <div class="container-fluided">
    <div class="container d-flex justify-content-between pt-4 px-4 text-start">
      <div>
        <h4>Produtos</h4>
      </div>
      <BaseButtom>
        <i class="bi bi-plus me-2 fs-5"></i>
        <span>Novo Produto</span>
      </BaseButtom>
    </div>

    <div class="container text-start px-4 pb-2">
      <small class="text-secondary"
        ><span class="text-secondary me-2">{{ produtoRegistado }}</span
        >Produtos Cadastrado</small
      >
      <div class="pt-3">
        <input
          type="text"
          placeholder="Pesquisa de produto"
          v-model="pesquisa"
          class="form-control-lg pesquisa-icon-relative"
        />
      </div>
    </div>
    <div class="container p-4">
      <TableProdutos :tabela="tabelaLista" :coluna="produto" />
    </div>
  </div>
</template>
<script>
import BaseButtom from "@/components/BaseButtom.vue";
import TableProdutos from "@/components/TableProdutos.vue";

export default {
  components: {
    TableProdutos,
    BaseButtom,
  },
  data() {
    return {
      pesquisa: "",

      produtoRegistado: 8,

      tabelaLista: [
        { id: 1, tabelaNome: "Codego" },
        { id: 2, tabelaNome: "Produto" },
        { id: 3, tabelaNome: "Categoria" },
        { id: 4, tabelaNome: "Quantidade" },
        { id: 5, tabelaNome: "Preço" },
        { id: 6, tabelaNome: "Validade" },
        { id: 7, tabelaNome: "Status" },
        { id: 8, tabelaNome: "Ações" },
      ],
      produto: [
        {
          id: 1,
          ref: 233,
          produto: "Àgua Mineral 500ml",
          categoria: "Èxodo",
          quantidade: 1500,
          validade: "2026-08-15",
          status: "normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 250,
        },
        {
          id: 2,
          ref: 233,
          produto: "Sumo de Laranja 1L",
          categoria: "Sumõs",
          quantidade: 45,
          validade: "2026-04-20",
          status: "Baixo",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 350,
        },
        {
          id: 3,
          ref: 333,
          produto: "Refrigerante Cola 2L ",
          categoria: "Refrigerante",
          quantidade: 800,
          validade: "2026-12-01",
          status: "normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 500,
        },
        {
          id: 4,
          ref: 633,
          produto: "Cerveja Cuca",
          categoria: "Cervejas",
          quantidade: 1500,
          validade: "2026-08-23",
          status: "Normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 425,
        },
        {
          id: 5,
          ref: 733,
          produto: "Sumo de Manga",
          categoria: "Sumõs",
          quantidade: 110,
          validade: "2026-03-3",
          status: "Baixo",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 125,
        },
        {
          id: 6,
          ref: 2006,
          produto: "Energetico Power 250ml",
          categoria: "Energeticos",
          quantidade: 1500,
          validade: "2026-08-23",
          status: "Normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 500,
        },
        {
          id: 7,
          ref: 533,
          produto: "Sumo de Ananas",
          categoria: "Sumõs",
          quantidade: 100,
          validade: "2026-02-04",
          status: "Normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 150,
        },
        {
          id: 8,
          ref: 243,
          produto: "Nocal 250ml",
          categoria: "Cervejas",
          quantidade: 1200,
          validade: "2026-08-23",
          status: "Normal",
          correto: "bi bi-pencil-square",
          delete: "bi bi-trash3",
          preco: 425,
        },
      ],
    };
  },
};
</script>
<style scopeded>
</style>