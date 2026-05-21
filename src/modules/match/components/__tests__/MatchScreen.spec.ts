import type { Dog } from '@/types/dog';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MatchScreen from '../MatchScreen.vue';

const mockDog: Dog = {
  id: '1',
  name: 'Rex',
  breed: 'Labrador',
  age: 3,
  imageUrl: 'https://example.com/rex.jpg',
  shelter: { name: 'Abrigo Central', address: 'Rua A, 123', phone: '(11) 9000-0000' },
};

describe('matchScreen', () => {
  it('exibe foto, nome e raça do cachorro curtido', () => {
    const wrapper = mount(MatchScreen, { props: { dog: mockDog } });

    expect(wrapper.find('img').attributes('src')).toBe(mockDog.imageUrl);
    expect(wrapper.text()).toContain(mockDog.name);
    expect(wrapper.text()).toContain(mockDog.breed);
  });

  it('exibe mensagem de parabéns/match', () => {
    const wrapper = mount(MatchScreen, { props: { dog: mockDog } });

    expect(wrapper.text().toLowerCase()).toContain('match');
  });

  it('emite close ao clicar em Continuar', async () => {
    const wrapper = mount(MatchScreen, { props: { dog: mockDog } });

    await wrapper.find('[data-testid="btn-continue"]').trigger('click');

    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('emite view-liked ao clicar em Ver curtidos', async () => {
    const wrapper = mount(MatchScreen, { props: { dog: mockDog } });

    await wrapper.find('[data-testid="btn-view-liked"]').trigger('click');

    expect(wrapper.emitted('viewLiked')).toBeTruthy();
  });
});
