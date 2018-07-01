import { mount } from 'enzyme';
import * as React from 'react';
import { getDisplayName } from 'recompose';
import enhance, { EnhancedListProps } from './list.hoc';

describe('<List.Hoc />', () => {
  const Base = () => <div />;

  it('should verify the hoc name', () => {
    const EnhancedComponent = enhance(Base);
    expect(getDisplayName(EnhancedComponent)).toEqual('List.Hoc');
  });

  it('renderType should be grid', () => {
    const EnhancedComponent = enhance(Base);
    const wrapper = mount(<EnhancedComponent renderType="grid" />);
    const props = wrapper.find<EnhancedListProps>(Base).props();

    expect(props.renderType).toEqual('grid');
  });

  it('should change renderType', () => {
    const EnhancedComponent = enhance(Base);
    const wrapper = mount(<EnhancedComponent renderType="grid" />);
    const { setRenderType } = wrapper.find<EnhancedListProps>(Base).props();

    setRenderType('list');
    wrapper.update();

    const { renderType } = wrapper.find<EnhancedListProps>(Base).props();
    expect(renderType).toEqual('list');
  });
});