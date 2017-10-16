import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Stars from './Stars'

describe('<Stars  />', () => {
    it('Renders stars component', () => {
        const component = renderer.create(
            <Stars stars={3} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Calls callback on click', () => {
        const onChangeSpy = jest.fn();
        const content = shallow(<Stars stars={5} onChange={onChangeSpy} />);     //вначале отрисовал с 5ю

        content.find('.star').at(2).simulate('click');            //выбираем компоненты с классом стар, симулируем клик на 3йзвезде

        expect(onChangeSpy).toHaveBeenCalledWith(3);
    });
});
