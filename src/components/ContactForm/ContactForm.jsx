import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let NameInputId = nanoid();
  let NumberInputId = nanoid();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={NameInputId}>
          Name
          <Input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            id={NameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={NumberInputId}>
          Number
          <Input
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            placeholder="Number"
            id={NumberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
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


