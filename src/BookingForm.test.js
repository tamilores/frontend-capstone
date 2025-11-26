import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import * as MainModule from './Main';
import userEvent from '@testing-library/user-event';


test('date input has required and min attributes', () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={['17:00']}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min');
});

test('guests input has required, min, max, and step attributes', () => {
  render(
    <BookingForm
      date="2025-11-26"
      setDate={() => {}}
      time="17:00"
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={['17:00']}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('step', '1');
});

test('occasion select is required', () => {
  render(
    <BookingForm
      date="2025-11-26"
      setDate={() => {}}
      time="17:00"
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={['17:00']}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

function setupForm(props = {}) {
  const defaultProps = {
    date: '',
    setDate: () => {},
    time: '',
    setTime: () => {},
    guests: 1,
    setGuests: () => {},
    occasion: '',
    setOccasion: () => {},
    availableTimes: ['17:00'],
    dispatch: () => {},
    submitForm: () => {},
  };
  return render(<BookingForm {...defaultProps} {...props} />);
}

test('submit button is disabled when form is invalid', () => {
  setupForm();
  const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitBtn).toBeDisabled();
});

test('submit button is enabled when form is valid', () => {
  setupForm({ date: '2025-11-26', time: '17:00', guests: 2, occasion: 'Birthday' });
  const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitBtn).toBeEnabled();
});

test('submit button is disabled if guests is less than 1', () => {
  setupForm({ date: '2025-11-26', time: '17:00', guests: 0, occasion: 'Birthday' });
  const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitBtn).toBeDisabled();
});

test('submit button is disabled if guests is more than 10', () => {
  setupForm({ date: '2025-11-26', time: '17:00', guests: 11, occasion: 'Birthday' });
  const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitBtn).toBeDisabled();
});

test('renders the Choose date label', () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={['17:00']}
      handleSubmit={() => {}}
      dispatch={() => {}}
    />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  jest.spyOn(MainModule, 'fetchAPI').mockImplementation(() => mockTimes);
  const result = MainModule.initializeTimes();
  expect(result).toEqual(mockTimes);
  MainModule.fetchAPI.mockRestore();
});

test('updateTimes returns the same value as provided in state', () => {
  const state = ['17:00', '18:00', '19:00'];
  const action = { type: 'other' };
  expect(MainModule.updateTimes(state, action)).toBe(state);
});

test('updateTimes returns the correct times on update action', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  jest.spyOn(MainModule, 'fetchAPI').mockImplementation(() => mockTimes);
  const state = [];
  const action = { type: 'update', date: '2023-01-01' };
  expect(MainModule.updateTimes(state, action)).toEqual(mockTimes);
  MainModule.fetchAPI.mockRestore();
});