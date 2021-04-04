import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveNote, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const { events } = useSelector(state => state.calendar)

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }
    const onSelectSlot = (e) => {
        dispatch(eventClearActiveNote());
    }
    
    return (
        <div className="calendar-screen">
            <Navbar />


            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                selectable={true}
                onSelectSlot={onSelectSlot}
            />
            <AddNewFab />
            <CalendarModal />
            <DeleteEventFab />
        </div>
    )
}
