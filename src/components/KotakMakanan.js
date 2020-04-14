import React, { Component } from 'react';
import './KotakMakanan.css';
import kulina from '../img/kulina.jpeg';
import H3 from './fonts/H3';
import H4 from './fonts/H4';
import styled from 'styled-components';

const H3AbuTua = styled(H3)`
  color: var(--Abu);
  margin:12px 12px;
`;

const H3Abu = styled(H3)`
  color: var(--Abu);
  margin:0px 0px;
  padding-left:10px;
`;
const H4Abu = styled(H4)`
  color: var(--Abu);
  margin:0px 0px;
  padding-left:10px;
`;

const H4Putih = styled(H4)`
  color: White;
  padding-left:10px;
`;


const Button = styled.button`
  background-color: #f9423a;
  color:white;
  margin-right: 30px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border:none;
  cursor:pointer;
  width:75px;
`;

export class KotakMakanan extends Component {

  state ={
        addToCart:false
    }

    toggler = () => {
        this.setState({
          addToCart: !this.state.addToCart
        })
    }
    render() {
        return (
            <div class="kotakMakanan">
                <H3AbuTua>Kamis, 13 Maret 2019</H3AbuTua>
                <div class="box">
                    <img src={kulina} alt=""/>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <H3Abu>Roasted Chicken With Scrambled Egg</H3Abu>
                    <H4Abu>By Kulina-Uptownk Lunch</H4Abu>
                    <div class="flex-container">
                    <H3Abu>Rp 35.000</H3Abu>
                    <Button onClick={this.toggler}>Add +</Button>
                    {this.state.addToCart && (
                      <div class="Cart">
                        <div class="rincian">
                          <H4Putih>1 item | Rp 35.000</H4Putih>
                          <H4Putih>Termasuk Ongkos Kirim</H4Putih>
                        </div>
                        <i class="material-icons md-light md-inactive shoppingCart">shopping_cart</i>
                        <i class="material-icons md-light md-inactive shoppingCart">keyboard_arrow_right</i>
                      </div>
                    )}
                    </div>
                </div>
                <div class="box">
                <img src={kulina} alt=""/>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <H3Abu>Roasted Chicken With Scrambled Egg</H3Abu>
                    <H4Abu>By Kulina-Uptownk Lunch</H4Abu>
                    <div class="flex-container">
                    <H3Abu>Rp 35.000</H3Abu>
                    <Button>Add +</Button>
                    </div>
                </div>
                <div class="box">
                <img src={kulina} alt=""/>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <H3Abu>Roasted Chicken With Scrambled Egg</H3Abu>
                    <H4Abu>By Kulina-Uptownk Lunch</H4Abu>
                    <div class="flex-container">
                    <H3Abu>Rp 35.000</H3Abu>
                    <Button>Add +</Button>
                    </div>
                </div>
                <div class="box">
                <img src={kulina} alt=""/>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <i class="material-icons md-light md-inactive">star</i>
                    <H3Abu>Roasted Chicken With Scrambled Egg</H3Abu>
                    <H4Abu>By Kulina-Uptownk Lunch</H4Abu>
                    <div class="flex-container">
                    <H3Abu>Rp 35.000</H3Abu>
                    <Button>Add +</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default KotakMakanan
