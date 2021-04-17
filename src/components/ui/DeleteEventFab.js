import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { eventStartDeleting } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    const { activeEvent } = useSelector(state => state.calendar);
    const [mostrarComponente, setMostrarComponente] = useState(false);
    const handleDeleteEvent = () => {
        dispatch(eventStartDeleting())
    }
    useEffect(() => {
        if (activeEvent) {
            setMostrarComponente(true);
        } else {
            setMostrarComponente(false);
        }
    }, [activeEvent])

    return (
        <>
            { mostrarComponente && <button className="btn btn-danger fab-danger" onClick={handleDeleteEvent}>
                <i className="fas fa-trash"></i>
                <span> Borrar Evento</span>
            </button>}
        </>
    )
}
