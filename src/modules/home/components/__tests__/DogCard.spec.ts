import type { Dog } from '@/types/dog';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DogCard from '@/shared/components/DogCard/DogCard.vue';

const mockDog: Dog = {
  id: '1',
  name: 'Rex',
  breed: 'Labrador',
  age: 3,
  imageUrl: 'https://example.com/rex.jpg',
  shelter: { name: 'Abrigo Central', address: 'Rua A, 123', phone: '(11) 9000-0000' },
};

describe('dogCard', () => {
  it('exibe foto, nome, raça e idade do cachorro', () => {
    const wrapper = mount(DogCard, { props: { dog: mockDog } });

    expect(wrapper.find('img').attributes('src')).toBe(mockDog.imageUrl);
    expect(wrapper.text()).toContain(mockDog.name);
    expect(wrapper.text()).toContain(mockDog.breed);
    expect(wrapper.text()).toContain(String(mockDog.age));
  });

  it('emite swipe-right quando arrasto ultrapassa 80px para a direita', async () => {
    const wrapper = mount(DogCard, { props: { dog: mockDog } });
    const card = wrapper.find('[data-testid="dog-card"]');

    await card.trigger('pointerdown', { clientX: 0, clientY: 0 });
    await card.trigger('pointermove', { clientX: 90, clientY: 0 });
    await card.trigger('pointerup', { clientX: 90, clientY: 0 });

    expect(wrapper.emitted('swipeRight')).toBeTruthy();
    expect(wrapper.emitted('swipeRight')![0]).toEqual([mockDog.id]);
  });

  it('emite swipe-left quando arrasto ultrapassa 80px para a esquerda', async () => {
    const wrapper = mount(DogCard, { props: { dog: mockDog } });
    const card = wrapper.find('[data-testid="dog-card"]');

    await card.trigger('pointerdown', { clientX: 0, clientY: 0 });
    await card.trigger('pointermove', { clientX: -90, clientY: 0 });
    await card.trigger('pointerup', { clientX: -90, clientY: 0 });

    expect(wrapper.emitted('swipeLeft')).toBeTruthy();
    expect(wrapper.emitted('swipeLeft')![0]).toEqual([mockDog.id]);
  });

  it('não emite evento quando arrasto é menor que 80px', async () => {
    const wrapper = mount(DogCard, { props: { dog: mockDog } });
    const card = wrapper.find('[data-testid="dog-card"]');

    await card.trigger('pointerdown', { clientX: 0, clientY: 0 });
    await card.trigger('pointermove', { clientX: 50, clientY: 0 });
    await card.trigger('pointerup', { clientX: 50, clientY: 0 });

    expect(wrapper.emitted('swipeRight')).toBeFalsy();
    expect(wrapper.emitted('swipeLeft')).toBeFalsy();
  });
});
