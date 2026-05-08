<template>
  <div class="container-fluided">
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
          class="form-control-sm border-primary py-3 ps-5 rounded-2"
          placeholder="Pesquisar Fornecedor... "
        />
      </div>
    </div>

    <div class="container p-4">
      <div class="row g-3">
        <div
          v-for="fornecedore in produtosFornecidos"
          :key="fornecedore.id"
          class="col-md-4"
        >
          <FornecedoresRefriango>
            <template v-slot:titulo>
              {{ fornecedore.nome }}
            </template>

            <template v-slot:subtitulo>
              <p class="text-secondary mb-0">{{ fornecedore.produto }}</p>
            </template>

            <template v-slot:acoes>
              <button class="btn btn-sm btn-outline-success">
                <i class="bi bi-pencil"></i>
              </button>

              <button class="btn btn-sm btn-outline-danger">
                <i class="bi bi-trash"></i>
              </button>
            </template>

            <template v-slot:telefone> {{ fornecedore.tell }} </template>

            <template v-slot:email>{{ fornecedore.inf }} </template>

            <template v-slot:localizacao>
              {{ fornecedore.provincia }}
            </template>

            <template v-slot:rodape>
              <p class="text-secondary mb-0">{{ fornecedore.data }}</p>
            </template>
          </FornecedoresRefriango>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtom from "@/components/BaseButtom.vue";
import FornecedoresRefriango from "@/components/FornecedoresRefriango.vue";

export default {
  components: { BaseButtom, FornecedoresRefriango },
  data() {
    return {
      pesquisa: "",

      produtosFornecidos: [
        {
          id: 1,
          nome: "Pura",
          produto: "3 produtos",
          tell: "+244 923 456 789",
          inf: "vendas@frutasangola.com",
          provincia: "Luanda",
          data: "10/02/2026",
        },
        {
          id: 2,
          nome: "AuraDiamante",
          produto: "4 produtos",
          tell: "+244 923 456 789",
          inf: "Aura@Diamante.com",
          provincia: "bennguela",
          data: "18/04/2026",
        },
        {
          id: 3,
          nome: "GirassolCentro",
          produto: "1 produtos",
          tell: "+244 923 456 789",
          inf: "Girassol@Centro.com",
          provincia: "Luanda",
          data: "4/12/2026",
        },
        {
          id: 4,
          nome: "CumbiProdutos",
          produto: "12 produtos",
          tell: "+244 923 456 789",
          inf: "Cumbi@Produtos.com",
          provincia: "Luanda",
          data: "1/01/2026",
        },
      ],
    };
  },
};
</script>