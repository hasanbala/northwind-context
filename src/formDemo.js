// import React, { Component } from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import alertify from "alertifyjs";

// class FormDemo extends Component {
//   state = {
//     email: "",
//     password: "",
//     description: "",
//     city: "",
//   };

//   onChangeHandler = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     this.setState({
//       //   email: e.target.value,
//       [name]: value,
//     });
//   };

//   onSubmitHandler = (e) => {
//     e.preventDefault();
//     alertify.success(this.state.email + " added to system");
//     alertify.success(this.state.password + " added to system");
//     alertify.success(this.state.description + " added to system");
//     alertify.success(this.state.city + " added to system");
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.onSubmitHandler}>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="enter a email"
//               onChange={this.onChangeHandler}
//             ></Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="password">password</Label>
//             <Input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="enter a password"
//               onChange={this.onChangeHandler}
//             ></Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">description</Label>
//             <Input
//               type="description"
//               name="description"
//               id="description"
//               placeholder="enter a description"
//               onChange={this.onChangeHandler}
//             ></Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">city</Label>
//             <Input
//               type="select"
//               name="city"
//               id="city"
//               onChange={this.onChangeHandler}
//             >
//               <option>Artvin</option>
//               <option>Balıkesir</option>
//               <option> Çanakkale</option>
//               <option>Osmaniye</option>
//               <option>Uşak</option>
//             </Input>
//           </FormGroup>
//           <Button type="submit">save</Button>
//         </Form>
//       </div>
//     );
//   }
// }
// export default FormDemo;
