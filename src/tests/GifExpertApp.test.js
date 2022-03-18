import React from 'react'
import { shallow } from 'enzyme'

import { GifExpertApp } from '../GifExpertApp'

describe('Pruebas en <GifExpertApp/>', () => {
    test('Debe ser igual al snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener la misma cantidad de categorias que se envian', () => {
        const categories = ['One Puch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})