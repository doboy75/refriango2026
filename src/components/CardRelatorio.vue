<template>
  <div class="card relatorio-card border-0 shadow-sm h-100">
    <div class="card-body p-4">
      <div class="d-flex align-items-start gap-3 mb-4">
        <div class="icone-box">
          <slot name="icone"></slot>
        </div>

        <div class="text-start ms-3">
          <h3 class="text-white fw-bold mb-1"><slot name="titulo"> </slot></h3>

          <div><slot name="descricao"></slot></div>

          <div><slot name="quantidade"></slot></div>
        </div>
      </div>

      <div class="d-flex gap-3">
        <slot name="botoes"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardRelatorio",
};
</script>

<style scoped>
.relatorio-card {
  background: #061226;
  border: 1px solid #0d2a52 !important;
  border-radius: 20px;
  min-height: 230px;
}

.icone-box {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #0b1d3a;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #2f8cff;
  font-size: 28px;
}

.btn-custom {
  border-radius: 14px;
  padding: 10px 20px;
}
</style>