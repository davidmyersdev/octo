import { shallowMount } from '@vue/test-utils'
import App from '@/components/MarkdownEditor.vue'

test('App should work', () => {
  const wrapper = shallowMount(App)
  expect(wrapper.text()).toMatch('')
})
