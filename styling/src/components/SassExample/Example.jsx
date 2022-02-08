import React from 'react';
import './Example.scss';

export default function Example() {
  return (
    <>
    <p>Example</p>
    <p className="font">Example</p>

    <nav>
      <ul>
        <li>123</li>
        <li>
          <a>456</a>
        </li>
      </ul>
    </nav>

    <ul>
        <li>123</li>
        <li>
          <a>456</a>
        </li>
    </ul>

      <p className="base">Hello</p>
      <p className="inverse">Hello</p>

      <p className="info">Info</p>
      <p className="alert">alert</p>
      <p className="success">success</p>

      <p className="message">message</p>
      <p className="success2">success2</p>
      <p className="error">error</p>
      <p className="warning">warning</p>
    </>
  );
}
