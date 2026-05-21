import type { Dog } from '@/types/dog';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useMatchStore } from '@/core/match/store';
import LikedList from '../LikedList.vue';

function makeDog(id: string, name: string): Dog {
  return {
    id,
    name,
    breed: 'Labrador',
    age: 2,
    imageUrl: `https://example.com/${id}.jpg`,
    shelter: { name: 'Abrigo Central', address: 'Rua A, 123', phone: '(11) 90000-0000' },
  };
}

function mountWithPinia() {
  const pinia = createPinia();
  setActivePinia(pinia);
  const wrapper = mount(LikedList, { global: { plugins: [pinia] } });
  const store = useMatchStore();
  return { wrapper, store };
}

describe('likedList', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('exibe mensagem de estado vazio quando a lista está vazia', () => {
    const { wrapper } = mountWithPinia();

    expect(wrapper.find('[data-testid="empty-state"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="liked-list"]').exists()).toBe(false);
  });

  it('exibe todos os cachorros curtidos com foto, nome e raça', async () => {
    const { wrapper, store } = mountWithPinia();

    store.likeDog(makeDog('1', 'Rex'));
    store.likeDog(makeDog('2', 'Mel'));
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="liked-list"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-testid="liked-item"]')).toHaveLength(2);
    expect(wrapper.text()).toContain('Rex');
    expect(wrapper.text()).toContain('Mel');
    expect(wrapper.text()).toContain('Labrador');
    expect(wrapper.findAll('img')).toHaveLength(2);
  });

  it('link do WhatsApp aponta para o número formatado do abrigo', async () => {
    const { wrapper, store } = mountWithPinia();

    store.likeDog(makeDog('1', 'Rex'));
    await wrapper.vm.$nextTick();

    const link = wrapper.find('[data-testid="whatsapp-link"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('https://wa.me/5511900000000');
    expect(link.attributes('target')).toBe('_blank');
  });

  it('atualiza a lista reativamente ao curtir um novo cachorro', async () => {
    const { wrapper, store } = mountWithPinia();

    store.likeDog(makeDog('1', 'Rex'));
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('[data-testid="liked-item"]')).toHaveLength(1);

    store.likeDog(makeDog('2', 'Mel'));
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('[data-testid="liked-item"]')).toHaveLength(2);
  });
});
