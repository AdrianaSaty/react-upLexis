import { render } from '@testing-library/react';
import { getByText } from '@testing-library/dom';
import CardSmall from './CardSmall';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function FontAwesomeIcon(props) {
    return <i classname="fa">props</i>
}


describe('CardSmall component', () => {

    it('renders correctly', () => {
        render(

            <CardSmall
                key='20220404'
                icon='globe'
                title='Profissional'
                active={true}
            />
        )
    })


})