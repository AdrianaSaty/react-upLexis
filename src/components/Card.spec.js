import { getByText, render} from '@testing-library/react';
import Card from './Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function FontAwesomeIcon(props) {
    return <i classname="fa">props</i>
  }

test('Card renders correctly', () => {
    render (
        <Card
        key='20220404'
        icon='globe'
        title='Profissional'
        description='Lorem ipsum'
        price='R$10.00'
        />
    )

})