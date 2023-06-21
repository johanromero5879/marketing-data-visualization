<template>
    <div class="px-8 py-6 flex flex-col justify-center rounded-sm shadow-sm bg-zinc-800 text-zinc-200">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>