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
display:flex;
padding-left:20px;
`
export const LoginFormField = styled.input`
  padding: 0.5em;
  margin: 25px;
  color:  "palevioletred" ;
  background: papayawhip;
  
`;

export const LoginFormLabel=styled.h2 `
color:black;
`
export const LoginButton = styled.button`
  padding: 10px;
  margin: 25px;
  float: left;
`;

export const TextContent=styled.span `
color:black;
float:left;
margin:25px;
`