import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from '@/layouts/components/header/Header.vue';
import MobileMenu from '@/layouts/components/header/MobileMenu.vue';

// Mock matchMedia before mounting component
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
  })),
});

// Mock useMediaQuery from @vueuse/core
vi.mock('@vueuse/core', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual as object,
    useMediaQuery: vi.fn(() => true), // Force mobile view
  };
});

describe('header Component', () => {
  it('should open mobile menu when hamburger icon is clicked', async () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: true, // Stub RouterLink to avoid router errors
        },
      },
    });

    // 1. Check initial state: MobileMenu should NOT exist
    expect(wrapper.findComponent(MobileMenu).exists()).toBe(false);

    // 2. Find the hamburger button (container of Bars3Icon)
    const hamburgerBtn = wrapper.find('.bg-secondary-red');
    expect(hamburgerBtn.exists()).toBe(true);

    // 3. Trigger click
    await hamburgerBtn.trigger('click');

    // 4. Assert: MobileMenu SHOULD exist now
    expect(wrapper.findComponent(MobileMenu).exists()).toBe(true);
  });

  it('should close mobile menu when close event is emitted', async () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });

    // Open the menu first
    await wrapper.find('.bg-secondary-red').trigger('click');
    expect(wrapper.findComponent(MobileMenu).exists()).toBe(true);

    // Find the MobileMenu component
    const mobileMenu = wrapper.findComponent(MobileMenu);

    // Emit the 'close-menu' event directly from the child component
    await mobileMenu.vm.$emit('closeMenu');

    // Assert: MobileMenu should be gone
    expect(wrapper.findComponent(MobileMenu).exists()).toBe(false);
  });
});
