import React from 'react';
import testRenderer from 'react-test-renderer';

import BreedSelect from '../';


/**
 * Given a Component function and an optional props object,
 * return a react-test-renderer renderer instance and the rendered component instance
 *
 * Check out https://reactjs.org/docs/test-renderer.html for the official documentation.
 */
function renderComponent(Component, props = {}) {
  const tree = <Component { ...props } />;
  const renderer = testRenderer.create(tree);

  return {
    renderer,
    componentInstance: renderer.getInstance()
  };
}


describe('BreedSelect', () => {
  const pureBreeds = [{
    id: 1,
    live: true,
    mixed: false,
    name: 'Pure Breed 1'
  }, {
    id: 2,
    live: true,
    mixed: false,
    name: 'Pure Breed 2'
  }, {
    id: 3,
    live: true,
    mixed: false,
    name: 'Pure Breed 3'
  }];

  const mixedBreeds = [{
    id: 4,
    live: true,
    mixed: true,
    name: 'Mixed Breed 1'
  }, {
    id: 5,
    live: true,
    mixed: true,
    name: 'Mixed Breed 2'
  }, {
    id: 6,
    live: true,
    mixed: true,
    name: 'Mixed Breed 3'
  }];

  const DEFAULT_PROPS = {
    availableBreeds: [...pureBreeds, ...mixedBreeds]
  };

  /*
   * EXAMPLE TEST CASE 1: testing initialization
   * This test case just renders an instance of BreedSelect with DEFAULT_PROPS
   * and verifies that the initial state is populated properly
   */
  it('initializes state', () => {
    const { componentInstance } = renderComponent(BreedSelect, DEFAULT_PROPS);

    expect(componentInstance.state).toMatchObject({
      textInput: '',
      visibleBreeds: [...pureBreeds, ...mixedBreeds]
    });
  });

  /*
   * EXAMPLE TEST CASE 2: testing component instance method
   * This test case creates a BreedSelect instances with DEFAULT_PROPS
   * and verifies that its instance method bestMatchBreeds() returns the expected value
   */
  describe('#bestMatchBreeds', () => {
    it('returns breeds whose names include the given text', () => {
      const { componentInstance } = renderComponent(BreedSelect, DEFAULT_PROPS);

      expect(componentInstance.bestMatchBreeds('Mixed')).toEqual(mixedBreeds);
    });
  });

  /**
   * EXAMPLE TEST CASE 3: testing descendants
   * This test case renders an instance of BreedSelect with DEFAULT_PROPS
   * and verifies that there are the expected number of breeds rendered (identified by 'breed' classname)
   */
  it('renders all breeds', () => {
    const { renderer } = renderComponent(BreedSelect, DEFAULT_PROPS);

    const options = renderer.root.findAllByProps({ className: 'breed'});
    expect(options.length).toEqual(6);
  });

  /**
   * ASSIGNMENT TEST CASE 1: testing pure-breed and mixed descendants
   * This test case renders an instance of BreedSelect with DEFAULT_PROPS
   * and verifies that there are:
   *   1) the expected number of pure breeds rendered (identified by 'breed--pure' classname)
   *   2) the expected number of mixed breeds rendered (identified by 'breed--mixed' classname)
   */
  it('renders pure and mixed breeds separately', () => {
    const { renderer } = renderComponent(BreedSelect, DEFAULT_PROPS);

    const pureOptions = renderer.root.findAllByProps({ className: 'breed--pure'});
    const mixedOptions = renderer.root.findAllByProps({ className: 'breed--mixed'});
    expect(pureOptions.length).toEqual(3);
    expect(mixedOptions.length).toEqual(3);
  });

  /**
   * ASSIGNMENT TEST CASE 2 (BONUS): testing pure-breed, mixed, and non-live descendants
   * This test case renders an instance of BreedSelect with DEFAULT_PROPS
   * and verifies that there are:
   *   1) the expected number of pure breeds rendered (identified by 'breed--pure' classname)
   *   2) the expected number of mixed breeds rendered (identified by 'breed--mixed' classname)
   *   3) the expected number of non-live breeds rendered (identified by 'breed--non-live' classname)
   *
   * NOTE: Remember to check against duplicates!
   */
  it.skip('renders pure, mixed, and non-live breeds separately', () => {});
});
