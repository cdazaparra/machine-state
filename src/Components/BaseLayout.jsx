import React from 'react'
import { useMachine } from '@xstate/react';
import bookinMachine from '../Machines/bookingMachine'

const BaseLayout = () => {
        const [state, send] = useMachine(bookinMachine)
        console.log('nuestra maquina:', state);
        console.log('matches:', state.matches('initial'));
        console.log('can:', state.matches('finish'));
        return (
                <div>Hola</div>
        );
}

export default BaseLayout;