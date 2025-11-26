import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import * as MainModule from './Main';

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
