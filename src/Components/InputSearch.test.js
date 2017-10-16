import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import InputSearch from './InputSearch'

describe('<InputSearch  />', () => {
    it('Renders input search component', () => {
        const component = renderer.create(
            <InputSearch />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Calls filter callback on click', () => {
        const onFilterSpy = jest.fn();
        const content = shallow(<InputSearch onFilter={onFilterSpy}/>);
        content.find('.submit').simulate('click');

        expect(onFilterSpy).toHaveBeenCalled();
    });
});
