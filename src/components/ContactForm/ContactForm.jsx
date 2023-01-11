import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  NameInputId = nanoid();
  NumberInputId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.NameInputId}>
          Name
          <Input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="Name"
            id={this.NameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.NumberInputId}>
          Number
          <Input
            value={this.state.number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            placeholder="Number"
            id={this.NumberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
















// import React from 'react';
//  import propTypes from 'prop-types';
// import styled from 'styled-components';
// import { Label, Button } from './ContactForm.styled';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// const Input = styled(Field)`
// display: flex;
// padding: 10px;
// align-items: center;
// margin-left: 10px;
// border-radius: 8px;
// `;

// const FormContainer = styled(Form)`
// margin:7px;
// border: 1px solid black;
// border-radius: 8px;
// width:500px;
// `;

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required(),
// });

// const initialValue = {
//   name: '',
//   number: '',
// };


// export const ContactForm = () => {
   
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);

//     resetForm();
//   };
  
//   return (
//     <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
//       <FormContainer autoComplete="off">
//         <Label htmlFor={this.NameInputId}>
//           Name
//           <Input
//             type="text"
//             name="name"   
//             placeholder="Name"
//             id={this.NameInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <ErrorMessage component="div" name="name" />
//         </Label>

//         <Label htmlFor={this.NumberInputId}>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             placeholder="Number"
//             id={this.NameInputId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <ErrorMessage component="div" name="number" />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </FormContainer>
//     </Formik>
//   );
// };


