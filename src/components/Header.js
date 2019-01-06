import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Layer  from '../img/Layer2.png'
import {FormControl} from 'react-bootstrap';
import CarouselPage from './CarouselPage';
class Header extends Component {
    render(){
        return(
            <header>
            <div className="for">
            <div className="tex">
            <h4>Blog <b>tamplate</b></h4>
            </div>
            <div className="but">
            <button><img src={Layer}/></button>
            </div>
            </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/roster'>Roster</Link></li>
                    </ul>
      </nav>
                <div className="container">
                <CarouselPage />
                  </div>
            </header>
        );
    }
}

export default Header;

//  class FormExample extends React.Component {
//   constructor(props, context) { *npm install mdbreact
//      super(props, context);

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       value: ''
//     };
//   }

//   getValidationState() {
//     const length = this.state.value.length;
//     if (length > 10) return 'success';
//     else if (length > 5) return 'warning';
//     else if (length > 0) return 'error';
//     return null;
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   render() {
//     return (
//       <form>
//         <FormGroup
//           controlId="formBasicText"
//           validationState={this.getValidationState()}
//         >
//           <ControlLabel>Working example with validation</ControlLabel>
//           <FormControl
//             type="text"
//             value={this.state.value}
//             placeholder="Enter text"
//             onChange={this.handleChange}
//           />
//           <FormControl.Feedback />
//           <HelpBlock>Validation is based on string length.</HelpBlock>
//         </FormGroup>
//       </form>
//     );
//   }
// }

// render(<FormExample />);
