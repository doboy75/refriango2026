<template>
  <div class="bg-color text-white">
    <div>
      <div class="d-flex">
        <div class="sidebar bg-sidbar fechar corBorda">
          <div class="d-flex align-items-center ps-5 pt-3">
            <span>Refriango</span>
          </div>

          <ul class="nav flex-column mt-4 h6 p-3">
            <li class="nav-item mb-2" v-for="item in menu" :key="item.id">
              <router-link
                :to="item.path"
                :class="{ active: setName === item.name }"
                @click.prevent="setActive(item.name)"
                class="nav-link text-white d-flex align-items-center gap-3 mb-2 py-2 px-5 rounded-4"
              >
                <i :class="item.icon" class="text-white"></i>
                <div v-if="fechar">{{ item.name }}</div></router-link
              >
            </li>
            <!-- <router-link to="/dashboard">ok</router-link>
            <router-link to="/produros">ok</router-link> -->
          </ul>
          {{ texto }}
        </div>

        <!--segundo componente-->
        <div class="flex-grow-1">
          <div
            class="topbar d-flex align-items-center justify-content-between corBorder-b pb-2 px-5"
          >
            <!--botao menu-->
            <div class="d-flex align-items-center">
              <button
                @click="ocultar"
                class="btn text-white border border-0 fs-4"
              >
                <i class="bi bi-list"></i>
              </button>
              <!--search-->
              <!-- <div class="pesquisa-box ms-3">
                <input
                  class="ps-5 form-control pesquisa-input"
                  type="text"
                  placeholder="pesquisa..."
                  v-model="pesquisa"
                />
                <span class="pesquisa-icon img-fluid" @click="buscar"
                  ><i class="bi bi-search"></i
                ></span>
              </div> -->
            </div>
            <!--Notificação-->
            <div>
              <i class="bi bi-bell fs-5 position-relative">
                <span
                  class="badge text-bg-danger position-absolute top-0 start-100 translate-middle rounded-pill ponto"
                  >&nbsp;
                </span></i
              >
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // texto: "teste de apresentação",
      fechar: true,
      setName: "Painel",

      logo: "logotipo da refriango ",
      pesquisa: "",
      menu: [
        { id: 1, name: "Painel", icon: " bi-grid", path: "/Painel" },
        { id: 2, name: "Produtos", icon: "bi-box-seam", path: "/produtos" },
        {
          id: 3,
          name: "Estoque",
          icon: "bi-arrow-left-right",
          path: "/estoque",
        },
        {
          id: 4,
          name: "Fornecedores",
          icon: "bi-truck",
          path: "/fornecedores",
        },
        {
          id: 5,
          name: "Relatórios",
          icon: "bi-file-earmark-bar-graph",
          path: "/relatorios",
        },
        { id: 6, name: "Usuários", icon: "bi-people", path: "/suarios" },
        {
          id: 7,
          name: "Configurações",
          icon: "bi-gear",
          path: "/configuracao",
        },
        {
          id: 8,
          name: "administrador",
          icon: "bi-person",
          path: "/administrador",
        },
      ],
    };
  },

  methods: {
    buscar() {
      console.log("pesquisar:", this.pesquisa);
    },
    setActive(name) {
      this.setName = name;
      console.log(this.setName);
    },
    ocultar() {
      this.fechar = !this.fechar;
    },
  },
};
</script>

<style scoped>
.pesquisa-box {
  position: relative;
}
.pesquisa-input {
  border-radius: 25px;
  padding-right: 40px;
}
.pesquisa-icon {
  position: absolute;
  top: 55%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: gray;
  font-size: 18px;
}
.bg-color {
  /* background: #1c1a4a; */
  background-color: #192332;
}

.color {
  color: #575ecf;
}
.ponto {
  font-size: xx-small;
}
.nav-link {
  color: #cbd5e1;
  border-radius: 10px;
}
.nav-link:hover {
  color: #575ecf !important;

  background: #182131;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-link.active {
  color: white !important;
  background-color: rgb(186, 57, 57);
}
.corBorda {
  border-inline-end: 2px solid #23275b;
}
.corBorder-b {
  border-bottom: 2px solid #23275b;
}
.bg-sidbar {
  background-color: #1e293b;
}
</style>
