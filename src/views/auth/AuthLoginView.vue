<template>
  <form class="app-auth-login" @submit.prevent="handleLogin">
    <div class="app-auth-login-title">Login</div>
    <div class="app-auth-login-inputs">
      <AppInput
        type="email"
        name="email"
        placeholder="email@email.com"
        label="Email:"
        :required="true"
      ></AppInput>
      <AppInput
        type="password"
        name="password"
        placeholder="******"
        label="Senha:"
        :required="true"
      ></AppInput>
    </div>
    <AppButton size="md" color="primary" type="submit">Entrar</AppButton>
    <router-link to="/auth/register" class="app-auth-login-link">
      Não possui uma conta? Clique aqui para se registrar
    </router-link>
  </form>
</template>

<script lang="ts" setup>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import { convertEventToForm } from "@/utils/form";
import { http } from "@/utils/http";

const handleLogin = async (event: any) => {
  const form = convertEventToForm(event);
  try {
    const response = await http.post("login", form);
    const { data } = response;
    alert("Você se autenticou com sucesso.");
    localStorage.setItem("token", data.token);
    window.location.reload();
  } catch (error: any) {
    let errorMessage = "Ocorreu um erro interno, tente novamente mais tarde.";
    if (error.response?.data?.message === "Incorrect password/email") {
      errorMessage = "Senha/e-mail incorreto.";
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
