<template>
  <form class="app-auth-login" @submit.prevent="handleRegister">
    <div class="app-auth-login-title">Registro</div>
    <div class="app-auth-login-inputs">
      <app-input
        type="text"
        name="name"
        placeholder="John Doe"
        label="Nome:"
        :required="true"
      ></app-input>
      <app-input
        type="email"
        name="email"
        placeholder="email@email.com"
        label="Email:"
        :required="true"
      ></app-input>
      <app-input
        type="password"
        name="password"
        placeholder="******"
        label="Senha:"
        :required="true"
      ></app-input>
    </div>
    <app-button size="md" color="primary" type="submit">Registrar</app-button>
    <router-link to="/auth/login" class="app-auth-login-link">
      Já possui uma conta? Clique aqui para entrar
    </router-link>
  </form>
</template>

<script lang="ts" setup>
import { http } from "@/utils/http";
import { convertEventToForm } from "@/utils/form";
import router from "@/router";

const handleRegister = async (event: any) => {
  const form = convertEventToForm(event);
  try {
    await http.post("register", form);
    alert(
      "Você se registrou com sucesso.\nVocê será redirecionado para a página de login."
    );
    router.push("/auth/login");
  } catch (error: any) {
    let errorMessage = "Ocorreu um erro interno, tente novamente mais tarde.";
    if (error.response?.data?.message === "User already exists") {
      errorMessage = "Este usuário já existe.";
    }
    alert(errorMessage);
  }
};
</script>

<style scoped lang="scss">
.app-auth-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  &-title {
    font-size: 36px;
    font-weight: 500;
  }

  &-inputs {
    width: 55%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  &-link {
    font-weight: 600;
    font-size: 14px;
    color: var(--secondary);

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
