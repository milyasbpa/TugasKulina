import React, { Component } from 'react';
import './Header.css';
import H2 from './fonts/H2';
import H3 from './fonts/H3';
import H4 from './fonts/H4';
import styled from 'styled-components';


const H2Abu = styled(H2)`
  color: var(--Abu);
  margin-top:25px;
  margin-bottom:10px;
  padding-left:20px;
`;
const H2AbuTua = styled(H2)`
  color: var(--AbuTua);
  &::after{
      content:' v';
      color: var(--Pink);
  }
`;
const H3AbuTua = styled(H3)`
  color: var(--AbuTua);
`;

const H4Abu = styled(H4)`
  color: var(--Abu);
`;

export class Header extends Component {
    state ={
        on:false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div class="headerModal">
                <div class="backButton"><i class="material-icons md-light md-inactive">keyboard_backspace</i></div>
                <button class="modalButton" onClick={this.toggle}>
                    <H3AbuTua>Alamat Pengiriman</H3AbuTua>
                    <H2AbuTua>Tokopedia Tower</H2AbuTua>
                </button>
                {this.state.on && (
                <div class="location">
                    <H2Abu>Cek makanan yang tersedia di lokasi kamu!</H2Abu>
                    <div class="place">
                        <i class="material-icons md-light md-inactive search">place</i>
                        <input type="text"></input>
                    </div>

                    <div class="daftarTempat">
                        <i class="material-icons md-light md-inactive iconDaftar">place</i>
                        <div class="tulisanTempat">
                            <H3AbuTua>Kulina</H3AbuTua>
                            <H4Abu>Jalan Tukodong</H4Abu>
                        </div>
                    </div>

                    <div class="daftarTempat">
                        <i class="material-icons md-light md-inactive iconDaftar">place</i>
                        <div class="tulisanTempat">
                            <H3AbuTua>Kulina</H3AbuTua>
                            <H4Abu>Jalan Tukodong</H4Abu>
                        </div>
                    </div>

                    <div class="daftarTempat">
                        <i class="material-icons md-light md-inactive iconDaftar">place</i>
                        <div class="tulisanTempat">
                            <H3AbuTua>Kulina</H3AbuTua>
                            <H4Abu>Jalan Tukodong</H4Abu>
                        </div>
                    </div>

                    <div class="daftarTempat">
                        <i class="material-icons md-light md-inactive iconDaftar">place</i>
                        <div class="tulisanTempat">
                            <H3AbuTua>Kulina</H3AbuTua>
                            <H4Abu>Jalan Tukodong</H4Abu>
                        </div>
                    </div>

                </div>
                
                )}
                <div class="noModalButton"></div>
            </div>
        )
    }
}

export default Header
