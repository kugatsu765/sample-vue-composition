<template>
      <div class="text-right p-2">
        <button class="rounded bg-blue-500 px-3 py-1" @click="$emit('finishAll')">Finish all</button>
        <button class="rounded bg-red-500 px-3 py-1 ml-2" @click="$emit('clearAll')">clear all</button>
      </div>
</template>
