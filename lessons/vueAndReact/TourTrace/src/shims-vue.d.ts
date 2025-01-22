declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{
        name: string
    }>>, {}, {}>
    export default component
}

