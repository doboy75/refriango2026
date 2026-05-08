<!-- <template>
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

      <table class="table table-dark table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Estoque Atual</th>
            <th>Estoque Mínimo</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="produto in produtos" :key="produto.id">
            <td>{{ produto.nome }}</td>
            <td>{{ produto.estoqueAtual }}</td>
            <td>{{ produto.estoqueMinimo }}</td>

            <td>
              <span class="badge" :class="statusClass(calcularStatus(produto))">
                {{ calcularStatus(produto) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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
 -->

  <template>
  <div class="container-fluid">
    <div class="row pb-4">
      <div
        v-for="relatorio in relatorioRefriango"
        :key="relatorio.id"
        class="col-md-6 my-3"
      >
        <CardRelatorio>
          <template v-slot:icone>
            <i class="bi bi-box-seam"></i>
          </template>

          <template v-slot:titulo>
            <h4 class="text-white fw-bold mb-1">{{ relatorio.nome }}</h4>
          </template>

          <template v-slot:descricao>
            <small class="text-secondary mb-2">
              {{ relatorio.descricao }}
            </small>
          </template>

          <template v-slot:quantidade>
            <h3 class="text-white fw-bold">
              {{ relatorio.quantidade }}
              <small class="fs-4 text-secondary"> {{ relatorio.tipo }}</small>
            </h3>
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

    <table class="table table-hover align-middle mb-0 text-start">
      <thead>
        <tr>
          <th class="px-4 py-3">Produto</th>
          <th class="px-4 py-3">Estoque Atual</th>
          <th class="px-4 py-3">Estoque Mínimo</th>
          <th class="px-4 py-3">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td class="px-4 py-3">{{ produto.nome }}</td>
          <td class="px-4 py-3">{{ produto.estoqueAtual }}</td>
          <td class="px-4 py-3">{{ produto.estoqueMinimo }}</td>

          <td>
            <span class="badge" :class="statusClass(calcularStatus(produto))">
              {{ calcularStatus(produto) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import CardRelatorio from "@/components/CardRelatorio.vue";
export default {
  components: { CardRelatorio },
  name: "TabelaEstoque,",

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
      produtos: [
        {
          id: 1,
          nome: "Sumo de Laranja 1L",
          estoqueAtual: 88,
          estoqueMinimo: 100,
        },
        {
          id: 2,
          nome: "Água Mineral 1,5L",
          estoqueAtual: 66,
          estoqueMinimo: 100,
        },
        {
          id: 3,
          nome: "Energético Power 250ml",
          estoqueAtual: 15,
          estoqueMinimo: 66,
        },
        {
          id: 4,
          nome: "Refrigerante Cola 2L",
          estoqueAtual: 120,
          estoqueMinimo: 100,
        },
        { id: 5, nome: "Chá Gelado", estoqueAtual: 180, estoqueMinimo: 100 },
      ],
    };
  },

  computed: {
    totalCriticos() {
      return this.produtos.filter((p) => this.calcularStatus(p) === "Crítico")
        .length;
    },

    totalBaixos() {
      return this.produtos.filter((p) => this.calcularStatus(p) === "Baixo")
        .length;
    },

    totalNormais() {
      return this.produtos.filter((p) => this.calcularStatus(p) === "Normal")
        .length;
    },

    totalAltos() {
      return this.produtos.filter((p) => this.calcularStatus(p) === "Alto")
        .length;
    },
  },

  methods: {
    calcularStatus(produto) {
      const percentual = (produto.estoqueAtual / produto.estoqueMinimo) * 100;

      if (percentual < 50) return "Crítico";
      if (percentual < 100) return "Baixo";
      if (percentual > 150) return "Alto";

      return "Normal";
    },

    statusClass(status) {
      return {
        "bg-danger": status === "Crítico",
        "bg-warning text-dark": status === "Baixo",
        "bg-success": status === "Normal",
        "bg-primary": status === "Alto",
      };
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
</style>



