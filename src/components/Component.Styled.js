import styled from "styled-components";

export const HeaderDiv=styled.div `
border:solid red 15px;
`

export const FooterDiv=styled.div `
border:solid black 15px;
position:absolute;
left:0;
bottom:0;
right:0;
`
export const LoginFormHeading=styled.h1 `
color:black;
`
export const LoginFormLayout=styled.div `
display:grid;
padding:20px;
width:40%;
`
export const LoginFormField = styled.input`
  padding: 0.5em;
  margin: 25px;
  color:  "palevioletred" ;
  background: papayawhip;
  
`;

export const LoginFormLabel=styled.span `
color:black;
text-align:left;
`
export const LoginButton = styled.button`
  padding: 10px;
  float: left;
  margin-left:20px;
`;

export const ErrorContent=styled.div `
color:red;
float:left;
font-size:20px;
`