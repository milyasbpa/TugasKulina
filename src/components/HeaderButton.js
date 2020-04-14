import React, { Component } from 'react';
import './HeaderButton.css';
import styled from 'styled-components';

const ButtonH = styled.button`
  background-color: white;
  color:var(--Abu);
  padding: 0.25em 1em;
  border: 1px solid var(--Abu);
  border-radius: 3px;
  cursor:pointer;
  width:165px;
  height:40px;
`;

class HeaderButton extends Component {
    render() {
        return (
            <div class="headerButton">
                <ButtonH>Lunch</ButtonH>
                <ButtonH>Dinner</ButtonH>
                {/* <H3Abu>Lunch</H3Abu>
                <H3Abu>Dinner</H3Abu> */}
            </div>
        )
    }
}

export default HeaderButton
