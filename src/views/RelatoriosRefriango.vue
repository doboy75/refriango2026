<template>
  <div class="container-fluide vh-100">
    <div class="container">
      <div class="text-start p-4">
        <h4>Relatório</h4>
        <small class="text-secondary"
          >Relatório completo de todos os produtos em estoque</small
        >
      </div>
      <div class="p-4 row g-4">
        <div
          v-for="relatorio in relatorioRefriango"
          :key="relatorio.id"
          class="col-md-6"
        >
          <CardRelatorio>
            <template v-slot:icone>
              <i class="bi bi-box-seam"></i>
            </template>

            <template v-slot:titulo>
              <h2 class="text-white fw-bold mb-1">{{ relatorio.nome }}</h2>
            </template>

            <template v-slot:descricao>
              <p class="text-secondary mb-2">
                {{ relatorio.descricao }}
              </p>
            </template>

            <template v-slot:quantidade>
              <h1 class="text-white fw-bold">
                {{ relatorio.quantidade }}
                <span class="fs-4 text-secondary"> {{ relatorio.tipo }}</span>
              </h1>
            </template>

            <template v-slot:botoes>
              <button class="btn btn-outline-light btn-custom">
                <i class="bi bi-download me-2"></i>
              </button>

              <button class="btn btn-outline-light btn-custom">
                <i class="bi bi-download me-2"></i>
              </button>
            </template>
          </CardRelatorio>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardRelatorio from "@/components/CardRelatorio.vue";

export default {
  components: { CardRelatorio },
  data() {
    return {
      relatorioRefriango: [
        {
          id: 1,
          nome: "Estoque atual",
          descricao: "Relatorio completo de todos os produtos em estoque",
          quantidade: 8,
          tipo: "produto",
        },
        {
          id: 2,
          nome: "Movimentão",
          descricao: "Historico de todas as entradas e Saídas",
          quantidade: 5,
          tipo: "Registrados",
        },
        {
          id: 3,
          nome: "Estoque baixo",
          descricao: "Produtos abaixo do estoque minimo",
          quantidade: 3,
          tipo: "alerta",
        },
        {
          id: 4,
          nome: "Próximos da Validade",
          descricao: "Produtos com validade nos proximos 60 dias",
          quantidade: 2,
          tipo: "produtos",
        },
      ],
    };
  },
};
</script>

