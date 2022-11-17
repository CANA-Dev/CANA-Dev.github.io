import styled from "styled-components";
import { Button, Col, Container, Row } from "react-bootstrap";

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