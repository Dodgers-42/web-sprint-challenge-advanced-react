import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});


test("form shows success message on submit with form details", async () => {
// // Arrange
const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);
  
// Act
const firstName = getByTestId(/first/i);
//console.log(firstName.textContent);
const lastName = getByTestId(/last/i);
//console.log(lastName.textContent);
const address = getByTestId(/address/i);
//console.log(address.textContent);
const city = getByTestId(/city/i);
//console.log(city.textContent);
const state = getByTestId(/state/i);
//console.log(state.textContent);
const zipCode = getByTestId(/zipCode/i);
//console.log(zipCode.textContent);

// describe("submit", () => {
//     describe("shows sucessful message", () => {
//         it('calls the onSummit function', async () => {
            
//             const {getByLabelText} = render(<CheckoutForm onSubmit={mockOnSubmit}/>)

            await act(async () => {
                fireEvent.change(firstName), {target: {value: "Kevin" }}
            })
            await act(async () => {
                fireEvent.change(lastName), {target: {value: "Bing" }}
            })
            await act(async () => {
                fireEvent.change(address), {target: {value: "123 That Place" }}
            })
            await act(async () => {
                fireEvent.change(city), {target: {value: "Over There City" }}
            })
            await act(async () => {
                fireEvent.change(state), {target: {value: "successMessage" }}
            })
            await act(async () => {
                fireEvent.change(zipCode), {target: {value: "successMessage" }}
            })
            await act(async () => {
                fireEvent.click(getByText("Checkout"))
            })   
        
    



});

//test("renders a message", () => {
 //  const {getByText, getByLableText} = render(<CheckoutForm />);
 
 // getByText('')
 // getByLableText('')

//})

//test("renders a successful message", () => {
 //  const {getByText, getByLableText} = render(<CheckOutForm />);

 // const input = getByLableText('');
 // fireEvent.change(input, { target: { value: "message"}});
 // fireEvent.click(getByText("submit"));

 // getByText("Update-Message");
 // getByText('correct-submit');

 //});