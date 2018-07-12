import React from 'react'
import ReactDom from 'react-dom'
import Remarkable from 'remarkable';
import PropTypes from 'prop-types';

class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Enter the text' };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
      const md = new Remarkable();
      return { __html: md.render(this.state.value) };
    }
    
    getInpValue() {
        this.state.inpValue = document.getElementById('input').value;
        this.props.getInpData(this.state.inpValue);
    }
    
    inputChange(prop) {
    this.setState({inpvalue: prop.target.value.toLowerCase()});
    }

    render() {
      return (
        <div className="MarkdownEditor">
            <input id="input" type="text" 
              placeholder="Search"
              onChange={ this.inputChange }/>
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <div className="texareasearch">
          <p>Input</p>
          <textarea className="textarea"
              onChange={this.handleChange}
              defaultValue={this.state.value}
          />
          </div>
          <div className="output_content">
            <div
                  className="content"
                  dangerouslySetInnerHTML={this.getRawMarkup()}
            />
          </div>
        </div>  
      );
    }
  }
  
  ReactDOM.render(<MarkdownEditor />);