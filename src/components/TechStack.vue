<script setup lang="ts">
// assets
import Django from "@/assets/images/svg/django-icon.svg"
import Graphql from "@/assets/images/svg/graphql.svg"
import Javascript from "@/assets/images/svg/javascript.svg"
import Nodejs from "@/assets/images/svg/nodejs-icon.svg"
import Postgresql from "@/assets/images/svg/postgresql.svg"
import Python from "@/assets/images/svg/python.svg"
import React from "@/assets/images/svg/react.svg"
import Typescript from "@/assets/images/svg/typescript-icon.svg"
import Vuejs from "@/assets/images/svg/vue.svg"
import Vuetifyjs from "@/assets/images/svg/vuetifyjs.svg"
import NuxtLogo from "@assets/images/svg/nuxt-icon.svg"
</script>

<template>
  <p class="mt-16">Tech Stack I've used <VIcon>mdi-arrow-down</VIcon>
  </p>
  <div class="d-flex flex-wrap mt-5 justify-center">
    <span>
      <VImg class="mx-1 my-2 mx-md-5 cursor-pointer" :src="Python" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Django" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Nodejs" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Typescript" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Javascript" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Vuejs" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Vuetifyjs" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="NuxtLogo" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="React" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Postgresql" width="30px" height="30px"></VImg>
    </span>
    <span>
      <VImg class="mx-2 my-2 mx-md-5" :src="Graphql" width="30px" height="30px"></VImg>
    </span>
  </div>
</template>
