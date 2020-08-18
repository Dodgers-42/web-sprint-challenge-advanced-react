import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});


test("form shows success message on submit with form details", () => {
// // Arrange
const { getByText } = render(<CheckoutForm />);
  
// Act
const firstName = getByTestId(/first/i);
console.log(firstName.textContent);

// Assert
// expect(firstName.textContent).toEqual("Correct Amount letters");

// // Act
const lastName = getByTestId(/last/i);
console.log(lastName.textContent);

// // Act
const address = getByTestId(/address/i);
console.log(address.textContent);
  
// // Act
const city = getByTestId(/city/i);
console.log(city.textContent);
  
// // Act
const state = getByTestId(/state/i);
console.log(state.textContent);

// // Act
const zipCode = getByTestId(/zipCode/i);
console.log(zipCode.textContent);



});

describe("submit", () => {
    describe("shows sucessful message", () => {
        it('calls the onSummit function', async () => {
            const mockOnSubmit = jest.fn()
            const {getByText, getByRole} = render(<CheckoutForm onSubmit={mockOnSubmit}/>)

            await act(async () => {
                fireEvent.change(getByText("message"), {target: {value: "message" }})
            })
            await act(async () => {
                fireEvent.click(getByRole("button"))
            })

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })
})