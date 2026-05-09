<template>
  <div class="container-fluid">
    <div class="container py-4 vh-100">
      <div class="card tabela-card">
        <div class="card-body p-0">
          <table class="table table-dark table-hover align-middle mb-0">
            <!-- CABEÇALHO -->
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Nível de Acesso</th>
                <th>Status</th>
                <th>Último Acesso</th>
              </tr>
            </thead>

            <!-- CORPO -->
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <!-- USUÁRIO -->
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <!-- ÍCONE -->
                    <div class="avatar">
                      <i class="bi bi-person"></i>
                    </div>

                    <!-- NOME E EMAIL -->
                    <div>
                      <h6 class="mb-0 fw-bold">
                        {{ usuario.nome }}
                      </h6>

                      <small class="text-secondary">
                        {{ usuario.email }}
                      </small>
                    </div>
                  </div>
                </td>

                <!-- NÍVEL -->
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-shield"></i>

                    <span>
                      {{ usuario.nivel }}
                    </span>
                  </div>
                </td>

                <!-- STATUS -->
                <td>
                  <span
                    class="badge rounded-pill px-3 py-2"
                    :class="
                      usuario.status === 'Ativo'
                        ? 'bg-success-subtle text-success'
                        : 'bg-secondary-subtle text-secondary'
                    "
                  >
                    {{ usuario.status }}
                  </span>
                </td>

                <!-- DATA -->
                <td class="text-secondary">
                  {{ usuario.ultimoAcesso }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabelaUsuarios",

  data() {
    return {
      usuarios: [
        {
          id: 1,
          nome: "João Silva",
          email: "joao@refriango.co.ao",
          nivel: "Administrador",
          status: "Ativo",
          ultimoAcesso: "2026-03-13",
        },

        {
          id: 2,
          nome: "Maria Costa",
          email: "maria@refriango.co.ao",
          nivel: "Funcionário",
          status: "Inativo",
          ultimoAcesso: "2026-03-12",
        },

        {
          id: 3,
          nome: "Ana Ferreira",
          email: "ana@refriango.co.ao",
          nivel: "Funcionário",
          status: "Ativo",
          ultimoAcesso: "2026-03-11",
        },

        {
          id: 4,
          nome: "Pedro Santos",
          email: "pedro@refriango.co.ao",
          nivel: "Funcionário",
          status: "Inativo",
          ultimoAcesso: "2026-02-28",
        },
        {
          id: 5,
          nome: "José cumbiumbi",
          email: "Cumbi@refriango.co.ao",
          nivel: "Funcionário",
          status: "Inativo",
          ultimoAcesso: "2026-03-24",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .container {
  max-width: 1400px;
} */

/* CARD */
.tabela-card {
  background: #071226;
  border: 1px solid #12213f;
  border-radius: 20px;
  overflow: hidden;
}

/* TABELA */

.table thead {
  border-bottom: 1px solid #1b2c52;
}

.table thead th {
  background: transparent;
  color: #8ea2c9;
  font-weight: 600;
  padding: 22px;
  border: none;
}

.table tbody td {
  padding: 22px;
  border-color: #12213f;
  color: white;
  background: transparent;
}

/* AVATAR */
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0d1f3d;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #3b82f6;
  font-size: 20px;
}

/* HOVER */
.table-hover tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
</style>e>