<template>
  <div class="container-fluid">
    <div class="container text-start p-4">
      <h4 class="text-white">Painel</h4>
      <small class="text-gray">Visão geral do seu Inventário</small>
    </div>
    <div class="container mb-4">
      <div class="row gap-2 p-4">
        <VisaoGeral
          v-for="dadosPainel in $store.state.painel"
          :key="dadosPainel.id"
          class="col"
        >
          <template #titulo>
            <small>{{ dadosPainel.nome }}</small>
          </template>
          <template #numero>
            <h1>{{ dadosPainel.quantidade }}</h1></template
          >
          <template #icon>
            <i :class="dadosPainel.icon" class="text-primary fs-3"></i>
          </template>

          <template #descricao
            ><small>{{ dadosPainel.descricao }}</small>
          </template>
        </VisaoGeral>
      </div>
      <div class="container">
        <div class="row gap-3">
          <div class="col-md-7 cardMain flex-grow-1 bg-danger rounded-3">
            Componente do gráfico
          </div>
          <div class="col-md-4 bg-color rounded-3 p-3">
            <h5 class="mb-3">
              <i class="bi bi-exclamation-triangle text-warning"></i> Alerta de
              Estoque
            </h5>
            <ul class="nav flex-column gap-2">
              <li
                v-for="estouqe in alertaEstoque"
                :key="estouqe.id"
                class="bg-li text-start p-2 rounded-3"
              >
                <div class="d-flex align-item-center justify-content-between">
                  <h6>{{ estouqe.produto }}</h6>
                  <span
                    v-if="estouqe.unidade >= 45"
                    :class="{ unidadeMaior: unidade }"
                    >{{ estouqe.unidade }}

                    <span>uni</span>
                  </span>
                  <span v-else :class="{ unidadeMenor: unidade }"
                    >{{ estouqe.unidade }}

                    <span>uni</span>
                  </span>
                </div>
                <small class="text-secondary fw-bold"
                  >Minimo:{{ estouqe.minimo }}</small
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <TableRefriango></TableRefriango>
  </div>
</template>
<script>
import TableRefriango from "@/components/TableRefriango.vue";
import VisaoGeral from "@/components/VisaoGeral.vue";

export default {
  components: { VisaoGeral, TableRefriango },
  data() {
    return {
      unidade: true,
      alertaEstoque: [
        { id: 1, produto: " sumo de Laranja 1L", unidade: 45, minimo: 100 },
        { id: 2, produto: "Àgua Mineral 1,5L", unidade: 30, minimo: 30 },
        { id: 3, produto: "Energético Power 250ml", unidade: 15, minimo: 50 },
      ],
    };
  },
};
</script>

<style scoped>
.bg-color {
  background-color: #212e41;
}
.bg-li {
  background-color: #293850;
}
.unidadeMenor {
  color: red;
  background-color: rgb(255, 0, 0, 0.2);
  padding: 2px 15px;
  border-radius: 9px;
}
.unidadeMaior {
  color: orange;
  background-color: rgb(255, 165, 0, 0.2);
  padding: 2px 15px;
  border-radius: 9px;
}
</style>



