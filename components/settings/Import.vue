<template>
    <section>
        <h3 class="text-3xl">Import Documents</h3>
        <hr class="mt-2 mb-4">
        <div class="mb-4">
            <label>Try import</label>
        </div>
        <div class="mb-4">
            <router-link :to="{ path: '/docs/import' }" class="button button-size-medium button-color-gray">Import Documents</router-link>
        </div>
    </section>
</template>
