import React from "react";
import AddContact from './AddContact';

import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import App from "./App";
import api from "../endpoints/contacts"
import axios from "axios";
import EditContact from "./EditComponent";


const mockPostAddContact = {

  id: "b60fb2da-a783-4d37-86c5-e619b3503d61",
  name: "Aditya",
  email: "test@test.com"

}

const mockGet = {
  contacts: [
    {
      id: "b60fb2da-a783-4d37-86c5-e619b3503d61",
      name: "Akshaya Gupta",
      email: "GUPTA.AKKI23@GMAIL.COM"
    },
    {
      id: "88cb5e5b-9d59-4871-b5ea-f6fdfa8c3725",
      name: "sss",
      email: "GUPTA.AKKI23@GMAIL.COM"
    },
    {
      id: "d535a4e8-bd0d-47eb-a3b6-606608980c16",
      name: "sss",
      email: "GUPTA.AKKI23@GMAIL.COM"
    }
  ]
};

afterEach(cleanup);

test("App renders correctly", () => {
  //const div = document.createElement("div");
  render(<App />);
});


test("Header and Button are available", () => {
  //const div = document.createElement("div");
  render(<App />);
  expect(screen.getByText(/Contact Manager/i)).toBeInTheDocument();
  expect(screen.getByText(/Add/i)).toBeEnabled();
});

test("Add Contact renders correctly", () => {
  //const div = document.createElement("div");
  render(<AddContact />);
  expect(screen.getByText(/Add Contact/i)).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(2);
  expect(screen.getByRole('button')).toBeEnabled();
});

test("Add Contact text validate", () => {
  //const div = document.createElement("div");
  render(<AddContact />);
  user.type(screen.getByPlaceholderText('Name'), 'My Name')
  expect(screen.getByPlaceholderText('Name')).toHaveValue('My Name')
  user.type(screen.getByPlaceholderText('Email'), 'test@test.com')
  expect(screen.getByPlaceholderText('Email')).toHaveValue('test@test.com')
});

test("All fields are mandatory", () => {
  //const div = document.createElement("div");
  const alertMock = jest.spyOn(window, 'alert');
  render(<AddContact />);
  user.click(screen.getByText('Add'));
  expect(alertMock).toHaveBeenCalledTimes(1)
});

// test("Add Contact", () => {
//   //const div = document.createElement("div");
//   //const mock = jest.spyOn(api, 'get');
//   //const mockAdd = jest.spyOn(App, 'addContactHandler')
//   //axios.post.mockResolvedValue(mockPostAddContact);
//   const add = jest.fn();
//   //mock.mockResolvedValue(mockGet);
//   //mockImplementation(() => Promise.resolve({ mockGet }));
//   //axios.post.mockImplementation(() => Promise.resolve({ mockPostAddContact }));
//   //render(<App />)
//   render(<AddContact>onSubmit={add}</AddContact>);
//   user.type(screen.getByPlaceholderText('Name'), 'My Name')
//   user.type(screen.getByPlaceholderText('Email'), 'test@test.com')
//   //fireEvent.submit(screen.getByTestId("form"));
//   user.click(screen.getByTestId('submit button'));
//   //expect(screen.getByText(/Adity/i)).toBeInTheDocument();
// });
