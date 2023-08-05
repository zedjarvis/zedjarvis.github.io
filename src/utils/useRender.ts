import { getCurrentInstance as _getCurrentInstance } from "vue";

import type { VNode } from "vue";


// This function is copied from vuetify
export function getCurrentInstance( name: string, message?: string) {
  const vm = _getCurrentInstance()

  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${message || 'must be called from inside a setup function'}`)
  }

  return vm
}

export function useRender (render: () => VNode): void {
  const vm = getCurrentInstance('useRender') as any
  vm.render = render
}
