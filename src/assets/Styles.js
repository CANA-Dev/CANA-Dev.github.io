import styled from "styled-components";
import { Button, Col, Container, Row } from "react-bootstrap";

/**
 * This class holds and exports all the CSS Styling for the Website.
 */

export const Wrapper = styled(Container)`
  padding: 5%;
`;

export const ListWrapper = styled(Container)`
  padding-top: 10%;
`;

export const SelectorWrapper = styled(Col)`
	font-family: 'Darker Grotesque', sans-serif;
	color: #11204D;
	font-weight: 500;
	
	& h5 {
	  font-weight: 600;
	  font-family: 'Darker Grotesque', sans-serif;
	}
`;

export const ClearWrapper = styled(Row)`
  padding-bottom: 15px;
  align-content: right;
  justify-content: right;
`;

export const ImageWrapper = styled.div`
  padding-bottom: 25px;
`;

export const CardTitleWrapper = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
`;

export const StyledCard = styled.div`
	font-family: 'Darker Grotesque', sans-serif;
	text-align: center;
	vertical-align: middle;
	position: relative;
	overflow: hidden;
	background: #11204D;
	border-radius: 5px;
	margin: 0 10px 40px 10px;
	padding-bottom: 20px;
	padding-top: 30px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	
	& a {
		color: #E9A912;
		text-decoration: none;
	}
	
	& h3 {
		font-weight: 600;
		color: #E9A912;
	}
	
	&:hover {
	  -webkit-transform: translateY(-5px);
		transform: translateY(-5px);
		
		& a {
		  transition: all 0.3s ease-in-out;
			color: #f3ca17;
			text-decoration: none;
		}
	}
`;

export const StyledButton = styled(Button)`
  max-width: 15%;
	font-family: 'Darker Grotesque', sans-serif;
	background: #11204D;
	color: #E9A912;
	font-weight: 600;
	border: 0px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	
	&:hover {
	  -webkit-transform: translateY(-5px);
		transform: translateY(-5px);
	  background: #11204D;
	  color: #f3ca17;
	}
`;

export const StyledImage = styled.img`
  width: 75%;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`;
