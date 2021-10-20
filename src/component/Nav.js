// // import React from "react";
// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   NavItem,
// //   NavLink,
// //   UncontrolledDropdown,
// //   DropdownToggle,
// //   DropdownMenu,
// //   DropdownItem,
// //   NavbarText,
// // } from "reactstrap";
// // // import { useState } from "react";
// // // import logo from "../../public/images/logo.png";
// // const Nav = () => setIsOpen(!isOpen);
// // return (
// //   <>
// //     {/* <div className="navbar">
// //         <div className="logo">
// //           <img src="/images/foodzone-logo.jfif" alt="logo" />
// //         </div>

// //         <div className="navbar-text">
// //           <ul>
// //             <li>
// //               <a href="">home</a>
// //             </li>
// //             <li>
// //               <a href="">menu</a>
// //             </li>
// //             <li>
// //               <a href="">about</a>
// //             </li>
// //             <li>
// //               <a href="">shop</a>
// //             </li>
// //             <li>
// //               <a href="">news</a>
// //             </li>
// //             <li>
// //               <a href="">contact</a>
// //             </li>
// //           </ul>
// //         </div>
// //       </div> */}
// //     <Navbar color="light" light expand="md">
// //       <NavbarBrand href="/">reactstrap</NavbarBrand>
// //       <NavbarToggler onClick={toggle} />
// //       <Collapse isOpen={isOpen} navbar>
// //         <Nav className="mr-auto" navbar>
// //           <NavItem>
// //             <NavLink href="/components/">Components</NavLink>
// //           </NavItem>
// //           <NavItem>
// //             <NavLink href="https://github.com/reactstrap/reactstrap">
// //               GitHub
// //             </NavLink>
// //           </NavItem>
// //           <UncontrolledDropdown nav inNavbar>
// //             <DropdownToggle nav caret>
// //               Options
// //             </DropdownToggle>
// //             <DropdownMenu right>
// //               <DropdownItem>Option 1</DropdownItem>
// //               <DropdownItem>Option 2</DropdownItem>
// //               <DropdownItem divider />
// //               <DropdownItem>Reset</DropdownItem>
// //             </DropdownMenu>
// //           </UncontrolledDropdown>
// //         </Nav>
// //         <NavbarText>Simple Text</NavbarText>
// //       </Collapse>
// //     </Navbar>
// //   </>
// // );

// // export default Nav;

// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// const Navb = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Navb;
