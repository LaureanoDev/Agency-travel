import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BsPerson } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5'

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#destination">destination</a>
          </li>
          <li>
            <a href="#offer">offer</a>
          </li>
          <li>
            <a href="#tour">tour</a>
          </li>
          <li>
            <a href="#blog">log</a>
          </li>
        </ul>
      </div>
      <div className="account-info">
        <span>
            <BsPerson />
        </span>
        <span>
            My account
        </span>
      </div>
        <div className="search">
            <IoSearchOutline />
        </div>
    </Nav>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
 .brand {
    img {
        cursor: pointer;
    }
 }
 .toggle {
    display: bibe;
 }
 .links {
    ul {
        display: flex;
        gap: 3rem;
        list-style-type: none;
        li {
            a {
                text-decoration: none;
                color: black;
                cursor: pointer;
                transform: var(--default-transition);
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
 }
 .account-info {
    display: flex;
    gap: 2rem;
    .account {
        display: flex;
        gap: 0.5rem;
        cursor: pointer;
    }
    .search {
        cursor: pointer;
    }
 }
`;
