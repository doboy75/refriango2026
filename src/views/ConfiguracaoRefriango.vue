<template>
  <div class="container-fluid bg-dark min-vh-100 py-4">
    <div class="row g-4">
      <!-- GERAL -->
      <div class="col-lg-6">
        <div class="card bg-black border-secondary rounded-4 h-100 text-white">
          <div class="card-body p-4">
            <!-- TÍTULO -->
            <h3 class="fw-bold mb-4 d-flex align-items-center">
              <i class="bi bi-gear text-primary me-2"></i>
              Geral
            </h3>

            <!-- NOME -->
            <div class="mb-4">
              <label class="form-label fw-semibold text-light">
                Nome da Empresa
              </label>

              <input
                type="text"
                class="form-control bg-dark text-white border-secondary rounded-3 py-3"
                v-model="empresa.nome"
              />
            </div>

            <!-- EMAIL -->
            <div class="mb-4">
              <label class="form-label fw-semibold text-light">
                E-mail de Contato
              </label>

              <input
                type="email"
                class="form-control bg-dark text-white border-secondary rounded-3 py-3"
                v-model="empresa.email"
              />
            </div>

            <!-- BOTÃO -->
            <button class="btn btn-primary px-4 py-2 rounded-3 fw-semibold">
              Salvar
            </button>
          </div>
        </div>
      </div>

      <!-- NOTIFICAÇÕES -->
      <div class="col-lg-6">
        <div class="card bg-black border-secondary rounded-4 h-100 text-white">
          <div class="card-body p-4">
            <!-- TÍTULO -->
            <h3 class="fw-bold mb-4 d-flex align-items-center">
              <i class="bi bi-bell text-primary me-2"></i>
              Notificações
            </h3>

            <!-- ITEM -->
            <div
              v-for="item in notificacoes"
              :key="item.id"
              class="bg-dark border border-secondary rounded-4 p-3 mb-3 d-flex justify-content-between align-items-center"
            >
              <span class="fw-semibold">
                {{ item.nome }}
              </span>

              <div class="form-check form-switch m-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="item.ativo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SEGURANÇA -->
      <div class="col-lg-6">
        <div class="card bg-black border-secondary rounded-4 h-100 text-white">
          <div class="card-body p-4">
            <!-- TÍTULO -->
            <h3 class="fw-bold mb-4 d-flex align-items-center">
              <i class="bi bi-shield-check text-primary me-2"></i>
              Segurança
            </h3>

            <!-- ESTOQUE -->
            <div class="mb-4">
              <label class="form-label fw-semibold text-light">
                Estoque Mínimo
              </label>

              <input
                type="number"
                class="form-control bg-dark text-white border-secondary rounded-3 py-3"
                v-model="seguranca.estoqueMinimo"
              />
            </div>

            <!-- VALIDADE -->
            <div class="mb-4">
              <label class="form-label fw-semibold text-light">
                Dias para Alerta de Validade
              </label>

              <input
                type="number"
                class="form-control bg-dark text-white border-secondary rounded-3 py-3"
                v-model="seguranca.diasValidade"
              />
            </div>

            <!-- BOTÃO -->
            <button class="btn btn-primary px-4 py-2 rounded-3 fw-semibold">
              Salvar
            </button>
          </div>
        </div>
      </div>

      <!-- SISTEMA -->
      <div class="col-lg-6">
        <div class="card bg-black border-secondary rounded-4 h-100 text-white">
          <div class="card-body p-4">
            <!-- TÍTULO -->
            <h3 class="fw-bold mb-4 d-flex align-items-center">
              <i class="bi bi-server text-primary me-2"></i>
              Sistema
            </h3>

            <!-- ITEM -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary"> Versão </span>

              <strong>
                {{ sistema.versao }}
              </strong>
            </div>

            <!-- ITEM -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-secondary"> Último Backup </span>

              <strong>
                {{ sistema.backup }}
              </strong>
            </div>

            <!-- ITEM -->
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-secondary"> Status </span>

              <strong class="text-success">
                {{ sistema.status }}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfiguracoesSistema",

  data() {
    return {
      empresa: {
        nome: "Refriango",
        email: "admin@refriango.co.ao",
      },

      notificacoes: [
        {
          id: 1,
          nome: "Alerta de estoque baixo",
          ativo: true,
        },

        {
          id: 2,
          nome: "Produtos próximos da validade",
          ativo: true,
        },

        {
          id: 3,
          nome: "Novas movimentações",
          ativo: true,
        },
      ],

      seguranca: {
        estoqueMinimo: 50,
        diasValidade: 30,
      },

      sistema: {
        versao: "1.0.0",
        backup: "2026-03-13",
        status: "Operacional",
      },
    };
  },
};
</script>