import React from 'react'
import { Alert } from 'react-bootstrap';


export default function MyAlert(props) {
  return (
    <Alert variant={props.variant} onClose={props.onClose} dismissible>
      {props.message}
    </Alert>
  )
}
