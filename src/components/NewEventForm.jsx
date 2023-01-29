import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  const title = useRef();
  const date = useRef();
  const location = useRef();

  const resetForm = () => {
    title.current.value = '';
    date.current.value = '';
    location.current.value = 'manchester';
  };

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date, location);

    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
      id: Math.floor(Math.random() * 10000),
    };

    console.log(event);

    addEvent(event);
    resetForm();
  };

  return (
    <form action='' className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input type='text' ref={title} />
      </label>

      <label>
        <span>Event Date</span>
        <input type='date' ref={date} />
      </label>

      <label>
        <span>Event location </span>
        <select ref={location}>
          <option value='manchester'>Manchester</option>
          <option value='london'>London</option>
          <option value='cardiff'>Cardiff</option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}
