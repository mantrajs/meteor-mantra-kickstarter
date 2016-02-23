const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Template from '../template.jsx';

describe('_template.components.template', () => {

  it('should display the name title', () => {
    const name = 'this is just a test'
    const el = shallow(<Template name={name} />);
    expect(el.find('h2').text()).to.be.match(/this is just a test/);
  });

});
