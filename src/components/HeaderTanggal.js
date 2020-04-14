import React, { Component } from 'react';
import './HeaderTanggal.css';
import H3 from './fonts/H3';
import H4 from './fonts/H4';
import styled from 'styled-components';

const H4AbuTua = styled(H4)`
  color: var(--AbuTua);
  margin:0;
  padding:0;
  position:relative;
  top:4px;
`;

const H3AbuTua = styled(H3)`
  color: var(--AbuTua);
  margin:0;
  padding:0;
  position:relative;
  top:5px;
`;

const Circle = styled.button({
    width:'45px',
    height:'45px',
    backgroundColor: 'white',
    borderRadius:'50%',
    border:'none',
    textAlign:'center',
    cursor:'pointer'
  });


class HeaderTanggal extends Component {
    render() {
        return (
            <div class="headerTanggal">
                <Circle>
                    <H4AbuTua>SEN</H4AbuTua>
                    <H3AbuTua>10</H3AbuTua>
                </Circle>
                <Circle>
                    <H4AbuTua>SEL</H4AbuTua>
                    <H3AbuTua>11</H3AbuTua>
                </Circle>                
                <Circle>
                    <H4AbuTua>RAB</H4AbuTua>
                    <H3AbuTua>12</H3AbuTua>
                </Circle>                
                <Circle>
                    <H4AbuTua>KAM</H4AbuTua>
                    <H3AbuTua>13</H3AbuTua>
                </Circle>                
                <Circle>
                    <H4AbuTua>JUM</H4AbuTua>
                    <H3AbuTua>14</H3AbuTua>
                </Circle>                
                <Circle disabled>
                    <H4AbuTua>SAB</H4AbuTua>
                    <H3AbuTua>15</H3AbuTua>
                </Circle>                
                <Circle disabled>
                    <H4AbuTua>MIN</H4AbuTua>
                    <H3AbuTua>16</H3AbuTua>
                </Circle>
            </div>
        )
    }
}

export default HeaderTanggal
