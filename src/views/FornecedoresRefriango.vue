<template>
  <div class="container-fluided vh-100">
    <div class="container d-flex justify-content-between pt-4 px-4 text-start">
      <div>
        <h4>Fornecedores</h4>
      </div>
      <BaseButtom>
        <i class="bi bi-plus me-2 fs-5"></i>
        <span>Novo Fornecedor</span>
      </BaseButtom>
    </div>

    <div class="container text-start px-4 pb-2">
      <small class="text-secondary"
        ><span class="text-secondary me-2">Procurando fornecedores de: </span
        >Angola/Luanda/Samba</small
      >
      <div class="pt-3">
        <input
          type="text"
          class="form-control-sm border-primary py-1 ps-4 rounded-2"
          placeholder="Pesquisar Fornecedor... "
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtom from "@/components/BaseButtom.vue";

export default {
  components: { BaseButtom },
  data() {
    return {
      pesquisa: "",
    };
  },
};
</script>