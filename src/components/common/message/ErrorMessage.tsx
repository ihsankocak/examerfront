import React from 'react'
import { Message } from 'semantic-ui-react'
export interface Props{
    title:string,
    body:string,
    visible:boolean
}
const ErrorMessage = ({visible,title,body}:Props) => (
  <Message error visible={visible} >
    <Message.Header>{title}</Message.Header> 
    <p>{body}</p>
  </Message>
);

export default ErrorMessage;